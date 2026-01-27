import hsData from "@/lib/full_hs_itc_codes.json";

// Country mapping for World Bank API
const countryISOMapping = {
  CN: "CHN", // China
  IN: "IND", // India
  US: "USA", // United States
  DE: "DEU", // Germany
  JP: "JPN", // Japan
  KR: "KOR", // South Korea
  GB: "GBR", // United Kingdom
  FR: "FRA", // France
  BR: "BRA", // Brazil
  MX: "MEX", // Mexico
  CA: "CAN", // Canada
  AU: "AUS", // Australia
  RU: "RUS", // Russia
  IT: "ITA", // Italy
  ES: "ESP", // Spain
  NL: "NLD", // Netherlands
};

// Get latest non-null tariff data
const getLatestTariffRate = (data) => {
  if (!data || !Array.isArray(data) || data.length < 2) return null;

  const tariffData = data[1];
  if (!Array.isArray(tariffData)) return null;

  // Filter out null values and sort by date (newest first)
  const validEntries = tariffData
    .filter((entry) => entry.value !== null)
    .sort((a, b) => parseInt(b.date) - parseInt(a.date));

  return validEntries.length > 0 ? validEntries[0] : null;
};

// Calculate transport surcharge
const calculateTransportSurcharge = (transportMode, baseRate) => {
  const surcharges = {
    Ocean: 0.02, // 2% additional for ocean freight
    Air: 0.05, // 5% additional for air freight
  };

  const surchargeRate = surcharges[transportMode] || 0;
  return {
    surchargeRate: surchargeRate * 100,
    totalRate: baseRate + baseRate * surchargeRate,
  };
};

export async function POST(req) {
  try {
    const {
      hsCode,
      shipmentValue,
      country,
      transportMode = "Ocean",
      entryDate,
      loadingDate,
    } = await req.json();

    // Validate inputs
    if (!hsCode || !shipmentValue) {
      return Response.json(
        {
          success: false,
          error: "HS Code and Shipment Value are required",
        },
        { status: 400 },
      );
    }

    // Format HS code
    const formattedHSCode = hsCode.padEnd(6, "0").slice(0, 6);

    // Find product in database
    const item = hsData.find((h) =>
      h.itc_hs_code.startsWith(formattedHSCode.slice(0, 4)),
    );

    const product = item ? `${item.description}` : "Unclassified Product";

    // Get ISO code for World Bank API
    const isoCode = countryISOMapping[country] || "IND";

    // Fetch tariff data from World Bank API
    const apiUrl = `https://api.worldbank.org/v2/country/${isoCode}/indicator/TM.TAX.MRCH.WM.AR.ZS?format=json`;

    const res = await fetch(apiUrl, {
      headers: {
        "User-Agent": "TariffCalculator/1.0",
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`World Bank API error: ${res.status}`);
    }

    const data = await res.json();

    // Get latest tariff rate
    const latestEntry = getLatestTariffRate(data);

    if (!latestEntry) {
      // Fallback to average rates if no data available
      const fallbackRates = {
        CN: 7.5,
        IN: 5.0,
        US: 3.5,
        DE: 4.2,
        JP: 4.8,
        KR: 6.2,
        GB: 3.9,
        FR: 4.5,
        BR: 11.5,
        MX: 7.5,
        CA: 4.1,
        AU: 5.0,
        RU: 8.2,
        IT: 4.8,
        ES: 4.1,
        NL: 3.8,
      };

      const baseRate = fallbackRates[country] || 5.0;
      const { surchargeRate, totalRate } = calculateTransportSurcharge(
        transportMode,
        baseRate,
      );

      const dutyAmount = (parseFloat(shipmentValue) * totalRate) / 100;
      const additionalCosts = dutyAmount * (surchargeRate / 100);

      return Response.json({
        success: true,
        product,
        hsCode: formattedHSCode,
        shipmentValue: parseFloat(shipmentValue).toFixed(2),
        tariffRate: totalRate.toFixed(2),
        baseRate: baseRate.toFixed(2),
        surchargeRate: surchargeRate.toFixed(2),
        dutyAmount: dutyAmount.toFixed(2),
        additionalCosts: additionalCosts.toFixed(2),
        totalCost: dutyAmount.toFixed(2),
        yearUsed: "2023", // Fallback year
        transportMode,
        entryDate,
        loadingDate,
        country,
        calculationDate: new Date().toISOString().split("T")[0],
        currency: "USD",
        dataSource: "Fallback Estimates",
        warning: "Using estimated rates - no real-time data available",
      });
    }

    // Use real data from World Bank
    const baseRate = parseFloat(latestEntry.value);
    const { surchargeRate, totalRate } = calculateTransportSurcharge(
      transportMode,
      baseRate,
    );

    const dutyAmount = (parseFloat(shipmentValue) * totalRate) / 100;
    const additionalCosts = dutyAmount * (surchargeRate / 100);

    // Get historical data for chart
    const tariffData = data[1];
    const historicalData = tariffData
      .filter((entry) => entry.value !== null)
      .map((entry) => ({
        year: entry.date,
        rate: entry.value,
        country: entry.country.value,
      }))
      .sort((a, b) => parseInt(a.year) - parseInt(b.year));

    return Response.json({
      success: true,
      product,
      hsCode: formattedHSCode,
      shipmentValue: parseFloat(shipmentValue).toFixed(2),
      tariffRate: totalRate.toFixed(2),
      baseRate: baseRate.toFixed(2),
      surchargeRate: surchargeRate.toFixed(2),
      dutyAmount: dutyAmount.toFixed(2),
      additionalCosts: additionalCosts.toFixed(2),
      totalCost: dutyAmount.toFixed(2),
      yearUsed: latestEntry.date,
      transportMode,
      entryDate,
      loadingDate,
      country,
      calculationDate: new Date().toISOString().split("T")[0],
      currency: "USD",
      dataSource: "World Bank API",
      historicalData: historicalData.slice(-10), // Last 10 years
      countryName: latestEntry.country.value,
      indicator: latestEntry.indicator.value,
    });
  } catch (err) {
    console.error("Tariff API Error:", err);

    return Response.json(
      {
        success: false,
        error: err.message,
        fallbackRate: 5.0,
      },
      { status: 500 },
    );
  }
}
