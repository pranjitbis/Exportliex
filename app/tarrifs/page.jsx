"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  LazyMotion,
  domAnimation,
} from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FiDollarSign,
  FiGlobe,
  FiTruck,
  FiCalendar,
  FiRefreshCw,
  FiArrowRight,
  FiChevronDown,
  FiCheckCircle,
  FiInfo,
  FiFileText,
  FiPercent,
  FiPackage,
  FiFlag,
  FiDatabase,
  FiBarChart2,
  FiShield,
  FiClock,
  FiLayers,
  FiTarget,
  FiTrendingUp,
  FiTrendingDown,
  FiFilter,
  FiSearch,
  FiDownload,
  FiGrid,
  FiActivity,
  FiMap,
  FiChevronRight,
  FiUsers,
  FiTrendingUp as FiTrendingUpIcon,
  FiBox,
  FiAlertCircle,
  FiLoader,
} from "react-icons/fi";
import {
  MdCalculate,
  MdOutlineDescription,
  MdOutlinePayment,
  MdAnalytics,
  MdPublic,
  MdShowChart,
  MdStackedLineChart,
} from "react-icons/md";
import { GiCargoShip, GiAirplaneDeparture } from "react-icons/gi";
import ReactCountryFlag from "react-country-flag";
import Nav from "@/app/Home/component/Nav/page";
import Footer from "@/app/Home/component/Footer/page";

// Import US bilateral tariffs data
import usBilateralTariffs from "@/lib/usBilateralTariffs.json";
// Import HS codes data from your JSON file
import hsCodesData from "@/lib/full_hs_itc_codes.json";
import styles from "./TariffCalculator.module.css";

// Country data with ISO codes and currencies
const countries = [
  { code: "CN", name: "China", iso: "CHN", region: "Asia", currency: "CNY" },
  { code: "IN", name: "India", iso: "IND", region: "Asia", currency: "INR" },
  {
    code: "US",
    name: "United States",
    iso: "USA",
    region: "North America",
    currency: "USD",
  },
  {
    code: "DE",
    name: "Germany",
    iso: "DEU",
    region: "Europe",
    currency: "EUR",
  },
  { code: "JP", name: "Japan", iso: "JPN", region: "Asia", currency: "JPY" },
  {
    code: "KR",
    name: "South Korea",
    iso: "KOR",
    region: "Asia",
    currency: "KRW",
  },
  {
    code: "GB",
    name: "United Kingdom",
    iso: "GBR",
    region: "Europe",
    currency: "GBP",
  },
  { code: "FR", name: "France", iso: "FRA", region: "Europe", currency: "EUR" },
  {
    code: "BR",
    name: "Brazil",
    iso: "BRA",
    region: "South America",
    currency: "BRL",
  },
  {
    code: "MX",
    name: "Mexico",
    iso: "MEX",
    region: "North America",
    currency: "MXN",
  },
  {
    code: "CA",
    name: "Canada",
    iso: "CAN",
    region: "North America",
    currency: "CAD",
  },
  {
    code: "AU",
    name: "Australia",
    iso: "AUS",
    region: "Oceania",
    currency: "AUD",
  },
  { code: "RU", name: "Russia", iso: "RUS", region: "Europe", currency: "RUB" },
  { code: "IT", name: "Italy", iso: "ITA", region: "Europe", currency: "EUR" },
  { code: "ES", name: "Spain", iso: "ESP", region: "Europe", currency: "EUR" },
  {
    code: "NL",
    name: "Netherlands",
    iso: "NLD",
    region: "Europe",
    currency: "EUR",
  },
];

// Process HS codes data from JSON
const processedHsCodesData = hsCodesData.map((item) => ({
  code: item.itc_hs_code,
  description: item.description,
  category: item.category || "",
}));

// Transport modes
const transportModes = [
  {
    value: "Ocean",
    label: "Ocean Freight",
    icon: <GiCargoShip />,
    desc: "Economical shipping",
  },
  {
    value: "Air",
    label: "Air Cargo",
    icon: <GiAirplaneDeparture />,
    desc: "Express delivery",
  },
  {
    value: "Land",
    label: "Land Transport",
    icon: <FiTruck />,
    desc: "Road/Rail shipping",
  },
];

export default function TariffCalculator() {
  const [form, setForm] = useState({
    hsCode: "950300",
    productDescription: "",
    productValue: "1000",
    productQuantity: "1",
    quantityUnit: "CIF",
    shippingCost: "0",
    insuranceCost: "0",
    originCountry: "CN",
    destinationCountry: "US",
    transportMode: "Ocean",
    entryDate: "",
    loadingDate: "",
  });

  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSection, setActiveSection] = useState("calculator");
  const [productSuggestions, setProductSuggestions] = useState([]);
  const [hsCodeValid, setHsCodeValid] = useState(true);
  const [apiError, setApiError] = useState(null);

  // Global tariff data states
  const [globalTariffData, setGlobalTariffData] = useState([]);
  const [isLoadingGlobalData, setIsLoadingGlobalData] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [sortBy, setSortBy] = useState("rate");
  const [sortOrder, setSortOrder] = useState("desc");

  // US Bilateral tariffs states
  const [usTariffSearch, setUsTariffSearch] = useState("");
  const [usTariffSort, setUsTariffSort] = useState("rate");
  const [usTariffOrder, setUsTariffOrder] = useState("desc");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });

    // Set today's date as default
    const today = new Date().toISOString().split("T")[0];
    setForm((prev) => ({
      ...prev,
      entryDate: today,
      loadingDate: today,
    }));

    // Set initial product description based on HS code
    const initialHsCode = "950300";
    const hsCodeItem = processedHsCodesData.find(
      (item) => item.code === initialHsCode,
    );
    if (hsCodeItem) {
      setForm((prev) => ({
        ...prev,
        hsCode: initialHsCode,
        productDescription: hsCodeItem.description,
      }));
    } else {
      // If exact match not found, find closest match
      const closestMatch = processedHsCodesData.find((item) =>
        item.code.startsWith(initialHsCode.slice(0, 4)),
      );
      if (closestMatch) {
        setForm((prev) => ({
          ...prev,
          hsCode: initialHsCode,
          productDescription: closestMatch.description,
        }));
      }
    }

    // Load global tariff data on mount
    fetchGlobalTariffData();
  }, []);

  const fetchGlobalTariffData = async () => {
    setIsLoadingGlobalData(true);
    try {
      const promises = countries.map(async (country) => {
        try {
          const res = await fetch(
            `https://api.worldbank.org/v2/country/${country.iso}/indicator/TM.TAX.MRCH.WM.AR.ZS?format=json`,
            { next: { revalidate: 86400 } },
          );
          const data = await res.json();

          if (data && Array.isArray(data) && data.length > 1) {
            const tariffArray = data[1];
            const validEntries = tariffArray
              .filter((entry) => entry.value !== null)
              .sort((a, b) => parseInt(b.date) - parseInt(a.date));

            if (validEntries.length > 0) {
              const latest = validEntries[0];

              // Calculate trend
              const historical = validEntries
                .sort((a, b) => parseInt(a.date) - parseInt(b.date))
                .slice(-5)
                .map((entry) => entry.value);

              const trend =
                historical.length >= 2
                  ? historical[historical.length - 1] > historical[0]
                    ? "increasing"
                    : historical[historical.length - 1] < historical[0]
                      ? "decreasing"
                      : "stable"
                  : "stable";

              return {
                code: country.code,
                name: country.name,
                iso: country.iso,
                region: country.region,
                rate: latest.value,
                year: latest.date,
                trend,
                historical: validEntries.slice(-10),
                dataSource: "World Bank API",
              };
            }
          }
        } catch (error) {
          console.error(`Error fetching data for ${country.code}:`, error);
        }
        return null;
      });

      const results = await Promise.all(promises);
      const validResults = results.filter((item) => item !== null);
      setGlobalTariffData(validResults);
    } catch (error) {
      console.error("Error loading global tariff data:", error);
    } finally {
      setIsLoadingGlobalData(false);
    }
  };

  const getCountryName = (code) => {
    const country = countries.find((c) => c.code === code);
    return country ? country.name : code;
  };

  const getCurrencyByCountry = (countryCode) => {
    const country = countries.find((c) => c.code === countryCode);
    return country ? country.currency : "USD";
  };

  const validateHsCode = (hsCode) => {
    if (!hsCode) return false;
    // Check if HS code exists in database
    const isValid = processedHsCodesData.some(
      (item) =>
        item.code === hsCode ||
        item.code.startsWith(hsCode.slice(0, 4)) ||
        item.code.startsWith(hsCode.slice(0, 6)),
    );
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = { ...form, [name]: value };

    // Update product description when HS code changes
    if (name === "hsCode") {
      // Validate HS code
      const isValid = validateHsCode(value);
      setHsCodeValid(isValid);

      // Find exact or partial match
      let matchedItem = null;

      // First try exact match
      matchedItem = processedHsCodesData.find((item) => item.code === value);

      // If no exact match, try 6-digit match
      if (!matchedItem && value.length >= 6) {
        matchedItem = processedHsCodesData.find((item) =>
          item.code.startsWith(value.slice(0, 6)),
        );
      }

      // If no 6-digit match, try 4-digit match
      if (!matchedItem && value.length >= 4) {
        matchedItem = processedHsCodesData.find((item) =>
          item.code.startsWith(value.slice(0, 4)),
        );
      }

      if (matchedItem) {
        updatedForm.productDescription = matchedItem.description;
      } else {
        updatedForm.productDescription = "";
      }

      // Show suggestions for partial matches
      if (value.length >= 2) {
        const suggestions = processedHsCodesData
          .filter(
            (item) =>
              item.code.includes(value) ||
              item.description.toLowerCase().includes(value.toLowerCase()),
          )
          .slice(0, 5);
        setProductSuggestions(suggestions);
      } else {
        setProductSuggestions([]);
      }
    }

    setForm(updatedForm);
    setApiError(null); // Clear any previous errors when user makes changes
  };

  const selectProductSuggestion = (suggestion) => {
    setForm({
      ...form,
      hsCode: suggestion.code,
      productDescription: suggestion.description,
    });
    setProductSuggestions([]);
    setHsCodeValid(true);
  };

  const resetForm = () => {
    setForm({
      hsCode: "",
      productDescription: "",
      productValue: "",
      productQuantity: "",
      quantityUnit: "CIF",
      shippingCost: "0",
      insuranceCost: "0",
      originCountry: "CN",
      destinationCountry: "US",
      transportMode: "Ocean",
      entryDate: new Date().toISOString().split("T")[0],
      loadingDate: new Date().toISOString().split("T")[0],
    });
    setResult(null);
    setProductSuggestions([]);
    setHsCodeValid(true);
    setApiError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setApiError(null);

    try {
      // Validate HS code
      if (!validateHsCode(form.hsCode)) {
        setApiError("Please enter a valid HS code");
        setIsLoading(false);
        return;
      }

      // Validate numeric inputs
      const productValue = parseFloat(form.productValue);
      const productQuantity = parseFloat(form.productQuantity);
      const shippingCost = parseFloat(form.shippingCost || 0);
      const insuranceCost = parseFloat(form.insuranceCost || 0);

      if (isNaN(productValue) || productValue <= 0) {
        setApiError("Product value must be a positive number");
        setIsLoading(false);
        return;
      }

      if (isNaN(productQuantity) || productQuantity <= 0) {
        setApiError("Product quantity must be a positive number");
        setIsLoading(false);
        return;
      }

      if (isNaN(shippingCost) || shippingCost < 0) {
        setApiError("Shipping cost must be a positive number or zero");
        setIsLoading(false);
        return;
      }

      if (isNaN(insuranceCost) || insuranceCost < 0) {
        setApiError("Insurance cost must be a positive number or zero");
        setIsLoading(false);
        return;
      }

      // Prepare form data for API - EXACTLY matching the API expected format
      const formData = {
        hsCode: form.hsCode,
        productDescription: form.productDescription,
        productValue: form.productValue,
        productQuantity: form.productQuantity,
        quantityUnit: form.quantityUnit,
        shippingCost: form.shippingCost || "0",
        insuranceCost: form.insuranceCost || "0",
        originCountry: form.originCountry,
        destinationCountry: form.destinationCountry,
        transportMode: form.transportMode,
        entryDate: form.entryDate,
        loadingDate: form.loadingDate,
      };

      console.log("Sending API request with data:", formData);

      // Call the API
      const response = await fetch("/api/tariff", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `API error: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);

      if (data.success) {
        setResult(data);
        document
          .getElementById("results-section")
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        throw new Error(data.error || "Failed to calculate tariff");
      }
    } catch (error) {
      console.error("Calculation error:", error);
      setApiError(
        error.message ||
          "An error occurred while calculating. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Filter and sort global tariff data
  const filteredGlobalData = globalTariffData
    .filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.code.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRegion =
        selectedRegion === "all" || item.region === selectedRegion;
      return matchesSearch && matchesRegion;
    })
    .sort((a, b) => {
      let comparison = 0;
      if (sortBy === "rate") {
        comparison = a.rate - b.rate;
      } else if (sortBy === "name") {
        comparison = a.name.localeCompare(b.name);
      } else if (sortBy === "region") {
        comparison = a.region.localeCompare(b.region);
      }
      return sortOrder === "desc" ? -comparison : comparison;
    });

  // Filter and sort US bilateral tariffs
  const filteredUsTariffs = usBilateralTariffs
    .filter((item) =>
      item.country.toLowerCase().includes(usTariffSearch.toLowerCase()),
    )
    .sort((a, b) => {
      if (usTariffSort === "rate") {
        return usTariffOrder === "desc" ? b.rate - a.rate : a.rate - b.rate;
      } else {
        return usTariffOrder === "desc"
          ? b.country.localeCompare(a.country)
          : a.country.localeCompare(b.country);
      }
    });

  // Calculate global statistics
  const globalStats = {
    averageRate:
      globalTariffData.length > 0
        ? (
            globalTariffData.reduce((sum, item) => sum + item.rate, 0) /
            globalTariffData.length
          ).toFixed(2)
        : "0.00",
    highestRate:
      globalTariffData.length > 0
        ? Math.max(...globalTariffData.map((item) => item.rate)).toFixed(2)
        : "0.00",
    lowestRate:
      globalTariffData.length > 0
        ? Math.min(...globalTariffData.map((item) => item.rate)).toFixed(2)
        : "0.00",
    totalCountries: globalTariffData.length,
  };

  // Calculate US bilateral statistics
  const usStats = {
    averageRate: (
      usBilateralTariffs.reduce((sum, item) => sum + item.rate, 0) /
      usBilateralTariffs.length
    ).toFixed(2),
    highestRate: Math.max(...usBilateralTariffs.map((item) => item.rate)),
    lowestRate: Math.min(...usBilateralTariffs.map((item) => item.rate)),
    totalCountries: usBilateralTariffs.length,
  };

  const getRateColor = (rate) => {
    rate = Number(rate);

    if (isNaN(rate)) return "#64748b";

    if (rate < 5) return "#16a34a";
    if (rate < 10) return "#f59e0b";
    if (rate < 15) return "#f97316";
    if (rate < 20) return "#ef4444";
    if (rate < 30) return "#dc2626";
    return "#7f1d1d";
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case "increasing":
        return "#dc2626";
      case "decreasing":
        return "#059669";
      default:
        return "#64748b";
    }
  };

  // Format HS code for display
  const formatHSCode = (hsCode) => {
    if (!hsCode) return "";
    // Ensure it's a string
    const code = String(hsCode);
    // Format as XX.XX.XX.XX if 8+ digits
    if (code.length >= 8) {
      return `${code.slice(0, 2)}.${code.slice(2, 4)}.${code.slice(4, 6)}.${code.slice(6, 8)}`;
    }
    // Format as XX.XX.XX if 6 digits
    if (code.length >= 6) {
      return `${code.slice(0, 2)}.${code.slice(2, 4)}.${code.slice(4, 6)}`;
    }
    // Format as XX.XX if 4 digits
    if (code.length >= 4) {
      return `${code.slice(0, 2)}.${code.slice(2, 4)}`;
    }
    return code;
  };

  // Calculate CIF locally for display
  const calculateLocalCIF = () => {
    const productValue = parseFloat(form.productValue) || 0;
    const shippingCost = parseFloat(form.shippingCost) || 0;
    const insuranceCost = parseFloat(form.insuranceCost) || 0;
    return (productValue + shippingCost + insuranceCost).toFixed(2);
  };

  // Get the data for display from result
  const getDisplayData = () => {
    if (!result) return null;

    // Use the structured display data from API if available
    if (result.display) {
      return result.display;
    }

    // Fallback to basic display
    return {
      dutySection: {
        title: "Duty & Tax Charges",
        items: [
          {
            label: "Duty",
            amount: `${result.dutyAmount} USD`,
            rate: `Rate of ${result.tariffRate} %`,
          },
          {
            label: "VAT",
            amount: `${result.vatAmount} USD`,
            rate: `Rate of ${result.vatRate} %`,
          },
          {
            label: "Total",
            amount: `${result.totalDutyTax} USD`,
            rate: null,
          },
        ],
      },
      landedCostSection: {
        title: "Your Total Landed Cost Calculation",
        items: [
          {
            label: "Value of Goods",
            amount: `${result.productValue} ${result.originCurrency}`,
          },
          {
            label: "Duty",
            amount: `${result.dutyAmount} USD`,
          },
          {
            label: "VAT",
            amount: `${result.vatAmount} USD`,
          },
          {
            label: "Shipping",
            amount: `${result.shippingCost} ${result.originCurrency}`,
          },
          {
            label: "Insurance",
            amount: `${result.insuranceCost} ${result.originCurrency}`,
          },
          {
            label: "Total",
            amount: `${result.totalLandedCost} USD`,
          },
        ],
      },
    };
  };

  return (
    <>
    <Nav />
      <LazyMotion features={domAnimation}>
        <div className={styles.container}>
          {/* Hero Header */}
          <motion.div
            className={styles.hero}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.heroContent}>
              <motion.div
                className={styles.heroBadge}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <FiShield />
                <span>Enterprise Intelligence Platform</span>
              </motion.div>
              <h1 className={styles.heroTitle}>
                Global{" "}
                <span className={styles.highlight}>Tariff Intelligence</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Real-time customs duty calculator powered by World Bank API data
                with advanced analytics and global trade insights
              </p>

              {/* Feature Badges */}
              <div className={styles.featureBadges}>
                <div className={styles.featureBadge}>
                  <FiDatabase />
                  <span>Live API Data</span>
                </div>
                <div className={styles.featureBadge}>
                  <MdPublic />
                  <span>16+ Countries</span>
                </div>
                <div className={styles.featureBadge}>
                  <MdAnalytics />
                  <span>Advanced Analytics</span>
                </div>
                <div className={styles.featureBadge}>
                  <FiClock />
                  <span>Real-time Updates</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section Navigation */}
          <motion.div
            className={styles.sectionNavigation}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.sectionContainer}>
              <button
                className={`${styles.sectionButton} ${activeSection === "calculator" ? styles.activeSection : ""}`}
                onClick={() => setActiveSection("calculator")}
              >
                <MdCalculate />
                <span>Duty Calculator</span>
              </button>
              <button
                className={`${styles.sectionButton} ${activeSection === "global" ? styles.activeSection : ""}`}
                onClick={() => setActiveSection("global")}
              >
                <FiGlobe />
                <span>Global Rates</span>
              </button>
              <button
                className={`${styles.sectionButton} ${activeSection === "usTariffs" ? styles.activeSection : ""}`}
                onClick={() => setActiveSection("usTariffs")}
              >
                <FiFlag />
                <span>US Bilateral Tariffs</span>
              </button>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className={styles.mainContent}>
            <AnimatePresence mode="wait">
              {/* Calculator Section */}
              {activeSection === "calculator" && (
                <motion.div
                  className={styles.sectionContent}
                  key="calculator"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.calculatorGrid}>
                    {/* Left Panel - Input Form */}
                    <motion.div
                      className={styles.inputPanel}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className={styles.panelHeader}>
                        <div className={styles.panelTitle}>
                          <MdOutlineDescription />
                          <div>
                            <h2>Import Details</h2>
                            <p className={styles.panelSubtitle}>
                              Enter shipment specifications for duty calculation
                            </p>
                          </div>
                        </div>
                        <motion.button
                          className={styles.resetButton}
                          onClick={resetForm}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FiRefreshCw />
                          <span>Reset</span>
                        </motion.button>
                      </div>

                      <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGrid}>
                          {/* Importing from */}
                          <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>
                              <div className={styles.labelIcon}>
                                <FiGlobe />
                              </div>
                              <div className={styles.labelContent}>
                                <span>Importing from:</span>
                              </div>
                            </label>
                            <div className={styles.countrySelectRow}>
                              <div className={styles.selectWrapper}>
                                <select
                                  name="originCountry"
                                  value={form.originCountry}
                                  className={styles.selectField}
                                  onChange={handleChange}
                                >
                                  {countries.map((country) => (
                                    <option
                                      key={country.code}
                                      value={country.code}
                                    >
                                      {country.name}
                                    </option>
                                  ))}
                                </select>
                                <div className={styles.selectFlag}>
                                  <ReactCountryFlag
                                    countryCode={form.originCountry}
                                    svg
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      borderRadius: "2px",
                                    }}
                                  />
                                </div>
                                <FiChevronDown className={styles.selectArrow} />
                              </div>
                              <div className={styles.currencyDisplay}>
                                Currency:{" "}
                                <strong>
                                  {getCurrencyByCountry(form.originCountry)}
                                </strong>
                              </div>
                            </div>
                          </div>

                          {/* Product description with HS code */}
                          <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>
                              <div className={styles.labelIcon}>
                                <FiPackage />
                              </div>
                              <div className={styles.labelContent}>
                                <span>Product description:</span>
                                <small>Enter HS code (e.g., 950300)</small>
                              </div>
                            </label>
                            <div className={styles.productInputContainer}>
                              <div className={styles.productInput}>
                                <input
                                  name="hsCode"
                                  value={form.hsCode}
                                  className={`${styles.hsCodeInput} ${
                                    !hsCodeValid ? styles.inputError : ""
                                  }`}
                                  onChange={handleChange}
                                  placeholder="e.g., 950300"
                                  required
                                  pattern="[0-9]{4,10}"
                                  title="Enter 4-10 digit HS code"
                                />
                              </div>
                              {!hsCodeValid && form.hsCode.length > 0 && (
                                <div className={styles.errorMessage}>
                                  <FiAlertCircle />
                                  <span>Enter a valid HS code</span>
                                </div>
                              )}
                              {productSuggestions.length > 0 && (
                                <div className={styles.suggestionsDropdown}>
                                  {productSuggestions.map((suggestion) => (
                                    <div
                                      key={suggestion.code}
                                      className={styles.suggestionItem}
                                      onClick={() =>
                                        selectProductSuggestion(suggestion)
                                      }
                                    >
                                      <span className={styles.suggestionCode}>
                                        {suggestion.code}
                                      </span>
                                      <span className={styles.suggestionDesc}>
                                        {suggestion.description}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                              {form.productDescription && hsCodeValid && (
                                <div className={styles.productDescription}>
                                  <FiCheckCircle
                                    className={styles.successIconSmall}
                                  />
                                  <span>{form.productDescription}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Product value */}
                          <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>
                              <div className={styles.labelIcon}>
                                <FiDollarSign />
                              </div>
                              <div className={styles.labelContent}>
                                <span>Product value:</span>
                                <div className={styles.currencyNote}>
                                  *In currency of origin (
                                  {getCurrencyByCountry(form.originCountry)})
                                </div>
                              </div>
                            </label>
                            <div className={styles.currencyInputGroup}>
                              <div className={styles.currencyInput}>
                                <span className={styles.currencySymbol}>
                                  {getCurrencyByCountry(form.originCountry)}
                                </span>
                                <input
                                  name="productValue"
                                  type="number"
                                  value={form.productValue}
                                  className={styles.inputField}
                                  onChange={handleChange}
                                  placeholder="0.00"
                                  min="0"
                                  step="0.01"
                                  required
                                />
                              </div>
                            </div>
                          </div>

                          {/* Product Quantity */}
                          <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>
                              <div className={styles.labelIcon}>
                                <FiBox />
                              </div>
                              <div className={styles.labelContent}>
                                <span>Product Quantity :</span>
                              </div>
                            </label>
                            <div className={styles.quantityInputGroup}>
                              <div className={styles.quantityInput}>
                                <input
                                  name="productQuantity"
                                  type="number"
                                  value={form.productQuantity}
                                  className={styles.inputField}
                                  onChange={handleChange}
                                  placeholder="1"
                                  min="0"
                                  step="1"
                                  required
                                />
                                <select
                                  name="quantityUnit"
                                  value={form.quantityUnit}
                                  onChange={handleChange}
                                  className={styles.unitSelect}
                                >
                                  <option value="CIF">CIF</option>
                                  <option value="units">Units</option>
                                  <option value="kg">kg</option>
                                  <option value="liters">Liters</option>
                                  <option value="meters">Meters</option>
                                  <option value="square-meters">
                                    Square Meters
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>

                          {/* Shipping cost */}
                          <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>
                              <div className={styles.labelIcon}>
                                <FiTruck />
                              </div>
                              <div className={styles.labelContent}>
                                <span>Shipping cost:</span>
                              </div>
                            </label>
                            <div className={styles.currencyInputGroup}>
                              <div className={styles.currencyInput}>
                                <input
                                  name="shippingCost"
                                  type="number"
                                  value={form.shippingCost}
                                  className={styles.inputField}
                                  onChange={handleChange}
                                  placeholder="0.00"
                                  min="0"
                                  step="0.01"
                                />
                              </div>
                              <div className={styles.currencyNote}>
                                *In currency of origin
                              </div>
                            </div>
                          </div>

                          {/* Insurance cost */}
                          <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>
                              <div className={styles.labelIcon}>
                                <FiShield />
                              </div>
                              <div className={styles.labelContent}>
                                <span>Insurance cost:</span>
                              </div>
                            </label>
                            <div className={styles.currencyInputGroup}>
                              <div className={styles.currencyInput}>
                                <span className={styles.currencySymbol}>
                                  {getCurrencyByCountry(form.originCountry)}
                                </span>
                                <input
                                  name="insuranceCost"
                                  type="number"
                                  value={form.insuranceCost}
                                  className={styles.inputField}
                                  onChange={handleChange}
                                  placeholder="0.00"
                                  min="0"
                                  step="0.01"
                                />
                              </div>
                              <div className={styles.currencyNote}>
                                *In currency of origin
                              </div>
                            </div>
                          </div>

                          {/* Destination Country */}
                          <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>
                              <div className={styles.labelIcon}>
                                <FiFlag />
                              </div>
                              <div className={styles.labelContent}>
                                <span>Destination:</span>
                                <small>Importing to</small>
                              </div>
                            </label>
                            <div className={styles.selectWrapper}>
                              <select
                                name="destinationCountry"
                                value={form.destinationCountry}
                                className={styles.selectField}
                                onChange={handleChange}
                              >
                                {countries.map((country) => (
                                  <option
                                    key={country.code}
                                    value={country.code}
                                  >
                                    {country.name}
                                  </option>
                                ))}
                              </select>
                              <div className={styles.selectFlag}>
                                <ReactCountryFlag
                                  countryCode={form.destinationCountry}
                                  svg
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "2px",
                                  }}
                                />
                              </div>
                              <FiChevronDown className={styles.selectArrow} />
                            </div>
                          </div>

                          {/* Transport Mode */}
                          <div className={styles.inputGroup}>
                            <label className={styles.inputLabel}>
                              <div className={styles.labelIcon}>
                                <FiTruck />
                              </div>
                              <div className={styles.labelContent}>
                                <span>Transport Mode</span>
                                <small>Select shipping method</small>
                              </div>
                            </label>
                            <div className={styles.transportOptions}>
                              {transportModes.map((option) => (
                                <button
                                  key={option.value}
                                  type="button"
                                  className={`${styles.transportOption} ${form.transportMode === option.value ? styles.activeTransport : ""}`}
                                  onClick={() =>
                                    setForm({
                                      ...form,
                                      transportMode: option.value,
                                    })
                                  }
                                >
                                  <div className={styles.transportIcon}>
                                    {option.icon}
                                  </div>
                                  <div className={styles.transportContent}>
                                    <span className={styles.transportLabel}>
                                      {option.label}
                                    </span>
                                    <span className={styles.transportDesc}>
                                      {option.desc}
                                    </span>
                                  </div>
                                  {form.transportMode === option.value && (
                                    <div className={styles.transportCheck}>
                                      <FiCheckCircle />
                                    </div>
                                  )}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Dates */}
                          <div className={styles.dateGroup}>
                            <div className={styles.inputGroup}>
                              <label className={styles.inputLabel}>
                                <div className={styles.labelIcon}>
                                  <FiCalendar />
                                </div>
                                <div className={styles.labelContent}>
                                  <span>Entry Date</span>
                                  <small>Customs clearance</small>
                                </div>
                              </label>
                              <input
                                type="date"
                                name="entryDate"
                                value={form.entryDate}
                                className={styles.inputField}
                                onChange={handleChange}
                                required
                              />
                            </div>

                            <div className={styles.inputGroup}>
                              <label className={styles.inputLabel}>
                                <div className={styles.labelIcon}>
                                  <FiCalendar />
                                </div>
                                <div className={styles.labelContent}>
                                  <span>Loading Date</span>
                                  <small>Shipment departure</small>
                                </div>
                              </label>
                              <input
                                type="date"
                                name="loadingDate"
                                value={form.loadingDate}
                                className={styles.inputField}
                                onChange={handleChange}
                                required
                              />
                            </div>
                          </div>
                        </div>

                        {/* API Error Message */}
                        {apiError && (
                          <div className={styles.apiError}>
                            <FiAlertCircle />
                            <span>{apiError}</span>
                          </div>
                        )}

                        <motion.button
                          className={styles.calculateButton}
                          type="submit"
                          disabled={isLoading || !hsCodeValid}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {isLoading ? (
                            <>
                              <div className={styles.buttonSpinner}></div>
                              <span>Calculating...</span>
                            </>
                          ) : (
                            <>
                              <span>Calculate import duty & taxes</span>
                              <FiArrowRight className={styles.buttonIcon} />
                            </>
                          )}
                        </motion.button>
                      </form>
                    </motion.div>

                    {/* Right Panel - Results */}
                    <motion.div
                      className={styles.resultsPanel}
                      id="results-section"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <div className={styles.panelHeader}>
                        <div className={styles.panelTitle}>
                          <MdOutlinePayment />
                          <div>
                            <h2>Duty & Tax Results</h2>
                            <p className={styles.panelSubtitle}>
                              Comprehensive breakdown like the reference image
                            </p>
                          </div>
                        </div>
                        {result && (
                          <div className={styles.resultCountry}>
                            <ReactCountryFlag
                              countryCode={result.originCountry}
                              svg
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "2px",
                              }}
                            />
                            <span>to</span>
                            <ReactCountryFlag
                              countryCode={result.destinationCountry}
                              svg
                              style={{
                                width: "20px",
                                height: "20px",
                                borderRadius: "2px",
                              }}
                            />
                          </div>
                        )}
                      </div>

                      <AnimatePresence mode="wait">
                        {!result ? (
                          <motion.div
                            className={styles.emptyState}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <div className={styles.emptyIcon}>
                              <FiPercent />
                            </div>
                            <h3>Ready for Calculation</h3>
                            <p>
                              Enter shipment details to generate comprehensive
                              duty analysis like the reference image
                            </p>
                            <div className={styles.emptyTips}>
                              <div className={styles.tip}>
                                <FiTarget />
                                <span>Real-time World Bank tariff data</span>
                              </div>
                              <div className={styles.tip}>
                                <FiLayers />
                                <span>Detailed calculation breakdown</span>
                              </div>
                              <div className={styles.tip}>
                                <FiDatabase />
                                <span>Live exchange rates from API</span>
                              </div>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div
                            className={styles.resultsContent}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                          >
                            {/* Header showing countries */}
                            <div className={styles.resultHeader}>
                              <div className={styles.routeInfo}>
                                <div className={styles.countryFlag}>
                                  <ReactCountryFlag
                                    countryCode={result.originCountry}
                                    svg
                                    style={{
                                      width: "32px",
                                      height: "32px",
                                      borderRadius: "4px",
                                    }}
                                  />
                                  <span>
                                    {getCountryName(result.originCountry)}
                                  </span>
                                </div>
                                <FiArrowRight className={styles.routeArrow} />
                                <div className={styles.countryFlag}>
                                  <ReactCountryFlag
                                    countryCode={result.destinationCountry}
                                    svg
                                    style={{
                                      width: "32px",
                                      height: "32px",
                                      borderRadius: "4px",
                                    }}
                                  />
                                  <span>
                                    {getCountryName(result.destinationCountry)}
                                  </span>
                                </div>
                              </div>
                              <div className={styles.resultMeta}>
                                <span className={styles.hsCodeDisplay}>
                                  HS: {formatHSCode(result.hsCode)}
                                </span>
                                <span className={styles.calcDate}>
                                  {result.calculationDate}
                                </span>
                              </div>
                            </div>

                            {/* Duty & Tax Charges Section */}
                            <div className={styles.dutyTaxSection}>
                              <h3 className={styles.sectionTitle}>
                                <FiPercent />
                                Duty & Tax Charges
                              </h3>
                              {getDisplayData()?.dutySection.items.map(
                                (item, index) => (
                                  <div key={index} className={styles.chargeRow}>
                                    <span className={styles.chargeLabel}>
                                      {item.label}:
                                    </span>
                                    <span className={styles.chargeValue}>
                                      {item.amount}
                                      {item.rate && (
                                        <span className={styles.rateNote}>
                                          {item.rate}
                                        </span>
                                      )}
                                    </span>
                                  </div>
                                ),
                              )}
                            </div>

                            {/* Total Landed Cost Calculation */}
                            <div className={styles.landedCostSection}>
                              <h3 className={styles.sectionTitle}>
                                <FiDollarSign />
                                Your Total Landed Cost Calculation
                              </h3>
                              {getDisplayData()?.landedCostSection.items.map(
                                (item, index) => (
                                  <div key={index} className={styles.costRow}>
                                    <span className={styles.costLabel}>
                                      {item.label}:
                                    </span>
                                    <span className={styles.costValue}>
                                      {item.amount}
                                    </span>
                                  </div>
                                ),
                              )}
                            </div>

                            {/* Exchange Rate */}
                            <div className={styles.exchangeRate}>
                              <FiInfo className={styles.exchangeIcon} />
                              <span className={styles.exchangeText}>
                                This was calculated using an exchange rate:{" "}
                                <strong>
                                  {result.originCurrency}:USD{" "}
                                  {result.exchangeRate || "N/A"}
                                </strong>
                              </span>
                            </div>

                            {/* Action Buttons */}
                            <div className={styles.actionButtons}>
                              <button
                                className={styles.actionButtonSecondary}
                                onClick={() => {
                                  const exportData = {
                                    timestamp: new Date().toISOString(),
                                    calculationDate: result.calculationDate,
                                    hsCode: result.hsCode,
                                    productDescription:
                                      result.productDescription,
                                    originCountry: result.originCountry,
                                    destinationCountry:
                                      result.destinationCountry,
                                    productValue: result.productValue,
                                    productQuantity: result.productQuantity,
                                    cifValue: result.cifValue,
                                    dutyAmount: result.dutyAmount,
                                    vatAmount: result.vatAmount,
                                    totalDutyTax: result.totalDutyTax,
                                    totalLandedCost: result.totalLandedCost,
                                    exchangeRate: result.exchangeRate,
                                    tariffRate: result.tariffRate,
                                    vatRate: result.vatRate,
                                    dataSource: result.dataSource,
                                  };
                                  const blob = new Blob(
                                    [JSON.stringify(exportData, null, 2)],
                                    { type: "application/json" },
                                  );
                                  const url = URL.createObjectURL(blob);
                                  const a = document.createElement("a");
                                  a.href = url;
                                  a.download = `tariff-calculation-${new Date().toISOString().split("T")[0]}.json`;
                                  document.body.appendChild(a);
                                  a.click();
                                  document.body.removeChild(a);
                                  URL.revokeObjectURL(url);
                                }}
                              >
                                <FiFileText />
                                Export Report
                              </button>
                              <button
                                className={styles.actionButtonPrimary}
                                onClick={() => {
                                  alert("Analysis saved successfully!");
                                }}
                              >
                                Save Analysis
                              </button>
                            </div>

                            {/* Disclaimer */}
                            <div className={styles.disclaimer}>
                              <FiInfo className={styles.disclaimerIcon} />
                              <p>
                                <strong>Disclaimer:</strong> Calculations
                                utilize real-time World Bank tariff data and
                                exchange rates. Final duties may vary based on
                                specific product classification, trade
                                agreements, and regulatory updates.
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Global Tariff Rates Section */}
              {activeSection === "global" && (
                <motion.div
                  className={styles.globalDashboard}
                  key="global"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className={styles.globalHeader}>
                    <div className={styles.headerContent}>
                      <h2>Global Tariff Intelligence</h2>
                      <p>
                        Real-time tariff rates from World Bank API across 16+
                        countries
                      </p>
                    </div>
                    <div className={styles.headerActions}>
                      <div className={styles.dataFreshness}>
                        <FiClock />
                        <span>Live Data</span>
                      </div>
                      <button
                        className={styles.refreshButton}
                        onClick={fetchGlobalTariffData}
                        disabled={isLoadingGlobalData}
                      >
                        <FiRefreshCw
                          className={isLoadingGlobalData ? styles.spinning : ""}
                        />
                        <span>Refresh</span>
                      </button>
                    </div>
                  </div>

                  {/* Global Insights */}
                  <div className={styles.globalInsights}>
                    <div className={styles.insightCard}>
                      <div className={styles.insightIcon}>
                        <FiGlobe />
                      </div>
                      <div className={styles.insightContent}>
                        <h3>Global Average</h3>
                        <div
                          className={styles.insightValue}
                          style={{
                            color: getRateColor(globalStats.averageRate),
                          }}
                        >
                          {globalStats.averageRate}%
                        </div>
                        <p>Across {globalStats.totalCountries} countries</p>
                      </div>
                    </div>
                    <div className={styles.insightCard}>
                      <div className={styles.insightIcon}>
                        <FiTrendingUp />
                      </div>
                      <div className={styles.insightContent}>
                        <h3>Highest Rate</h3>
                        <div
                          className={styles.insightValue}
                          style={{ color: "#dc2626" }}
                        >
                          {globalStats.highestRate}%
                        </div>
                        <p>Peak tariff among countries</p>
                      </div>
                    </div>
                    <div className={styles.insightCard}>
                      <div className={styles.insightIcon}>
                        <FiTrendingDown />
                      </div>
                      <div className={styles.insightContent}>
                        <h3>Lowest Rate</h3>
                        <div
                          className={styles.insightValue}
                          style={{ color: "#059669" }}
                        >
                          {globalStats.lowestRate}%
                        </div>
                        <p>Minimum tariff among countries</p>
                      </div>
                    </div>
                    <div className={styles.insightCard}>
                      <div className={styles.insightIcon}>
                        <FiDatabase />
                      </div>
                      <div className={styles.insightContent}>
                        <h3>Data Coverage</h3>
                        <div className={styles.insightValue}>
                          {globalStats.totalCountries}/{countries.length}
                        </div>
                        <p>Countries with live data</p>
                      </div>
                    </div>
                  </div>

                  {/* Search and Filters */}
                  <div className={styles.searchFilters}>
                    <div className={styles.searchBox}>
                      <FiSearch className={styles.searchIcon} />
                      <input
                        type="text"
                        placeholder="Search countries..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                      />
                    </div>
                    <div className={styles.filterButtons}>
                      <div className={styles.filterGroup}>
                        <span className={styles.filterLabel}>
                          <FiFilter />
                          Region:
                        </span>
                        <div className={styles.filterOptions}>
                          <button
                            className={`${styles.filterOption} ${selectedRegion === "all" ? styles.activeFilter : ""}`}
                            onClick={() => setSelectedRegion("all")}
                          >
                            All
                          </button>
                          {[
                            "Asia",
                            "Europe",
                            "North America",
                            "South America",
                            "Oceania",
                          ].map((region) => (
                            <button
                              key={region}
                              className={`${styles.filterOption} ${selectedRegion === region ? styles.activeFilter : ""}`}
                              onClick={() => setSelectedRegion(region)}
                            >
                              {region}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className={styles.sortGroup}>
                        <span className={styles.sortLabel}>Sort by:</span>
                        <select
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className={styles.sortSelect}
                        >
                          <option value="rate">Tariff Rate</option>
                          <option value="name">Country Name</option>
                          <option value="region">Region</option>
                        </select>
                        <button
                          className={styles.sortOrder}
                          onClick={() =>
                            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                          }
                        >
                          {sortOrder === "asc" ? "↑" : "↓"}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Loading State */}
                  {isLoadingGlobalData ? (
                    <div className={styles.loadingContainer}>
                      <div className={styles.loadingSpinner}></div>
                      <p>Loading real-time tariff data...</p>
                    </div>
                  ) : (
                    <>
                      {/* Countries Grid */}
                      <div className={styles.countriesGrid}>
                        {filteredGlobalData.length > 0 ? (
                          filteredGlobalData.map((country) => (
                            <motion.div
                              key={country.code}
                              className={styles.countryCard}
                              whileHover={{ y: -4 }}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                            >
                              <div className={styles.cardHeader}>
                                <div className={styles.countryFlag}>
                                  <ReactCountryFlag
                                    countryCode={country.code}
                                    svg
                                    style={{
                                      width: "32px",
                                      height: "32px",
                                      borderRadius: "4px",
                                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                    }}
                                  />
                                </div>
                                <div className={styles.countryInfo}>
                                  <h3>{country.name}</h3>
                                  <div className={styles.countryMeta}>
                                    <span className={styles.countryCode}>
                                      {country.code}
                                    </span>
                                    <span className={styles.countryRegion}>
                                      {country.region}
                                    </span>
                                  </div>
                                </div>
                                <button
                                  className={styles.useCountryBtn}
                                  onClick={() => {
                                    setForm((prev) => ({
                                      ...prev,
                                      originCountry: country.code,
                                    }));
                                    setActiveSection("calculator");
                                  }}
                                >
                                  <MdCalculate />
                                </button>
                              </div>

                              <div className={styles.cardBody}>
                                <div className={styles.tariffRate}>
                                  <div
                                    className={styles.rateValue}
                                    style={{
                                      color: getRateColor(country.rate),
                                    }}
                                  >
                                    {country.rate}%
                                  </div>
                                  <div className={styles.rateBar}>
                                    <div
                                      className={styles.rateProgress}
                                      style={{
                                        width: `${Math.min(country.rate * 5, 100)}%`,
                                        backgroundColor: getRateColor(
                                          country.rate,
                                        ),
                                      }}
                                    ></div>
                                  </div>
                                </div>

                                <div className={styles.cardDetails}>
                                  <div className={styles.detailItem}>
                                    <span className={styles.detailLabel}>
                                      Year
                                    </span>
                                    <span className={styles.detailValue}>
                                      {country.year}
                                    </span>
                                  </div>
                                  <div className={styles.detailItem}>
                                    <span className={styles.detailLabel}>
                                      Trend
                                    </span>
                                    <span
                                      className={styles.detailValue}
                                      style={{
                                        color: getTrendColor(country.trend),
                                      }}
                                    >
                                      {country.trend === "increasing" ? (
                                        <>
                                          <FiTrendingUpIcon /> Rising
                                        </>
                                      ) : country.trend === "decreasing" ? (
                                        <>
                                          <FiTrendingDown /> Falling
                                        </>
                                      ) : (
                                        <>Stable</>
                                      )}
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className={styles.cardFooter}>
                                <span className={styles.dataSource}>
                                  <FiDatabase />
                                  World Bank API
                                </span>
                              </div>
                            </motion.div>
                          ))
                        ) : (
                          <div className={styles.noResults}>
                            <FiSearch className={styles.noResultsIcon} />
                            <h3>No countries found</h3>
                            <p>Try adjusting your search or filters</p>
                          </div>
                        )}
                      </div>

                      {/* Data Summary */}
                      <div className={styles.dataSummary}>
                        <div className={styles.summaryInfo}>
                          <FiInfo />
                          <span>
                            Displaying {filteredGlobalData.length} of{" "}
                            {globalTariffData.length} countries
                          </span>
                        </div>
                        <button
                          className={styles.exportButton}
                          onClick={() => {
                            const csvContent = [
                              [
                                "Country",
                                "Code",
                                "Region",
                                "Tariff Rate (%)",
                                "Year",
                                "Trend",
                                "Data Source",
                              ],
                              ...filteredGlobalData.map((country) => [
                                country.name,
                                country.code,
                                country.region,
                                country.rate,
                                country.year,
                                country.trend,
                                country.dataSource,
                              ]),
                            ]
                              .map((row) => row.join(","))
                              .join("\n");

                            const blob = new Blob([csvContent], {
                              type: "text/csv",
                            });
                            const url = URL.createObjectURL(blob);
                            const a = document.createElement("a");
                            a.href = url;
                            a.download = `global-tariff-rates-${new Date().toISOString().split("T")[0]}.csv`;
                            document.body.appendChild(a);
                            a.click();
                            document.body.removeChild(a);
                            URL.revokeObjectURL(url);
                          }}
                        >
                          <FiDownload />
                          Export Data
                        </button>
                      </div>
                    </>
                  )}
                </motion.div>
              )}

              {/* US Bilateral Tariffs Section */}
              {activeSection === "usTariffs" && (
                <motion.div
                  className={styles.usTariffsDashboard}
                  key="usTariffs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Header */}
                  <div className={styles.usHeader}>
                    <div className={styles.headerContent}>
                      <h2>US Bilateral Tariffs</h2>
                      <p>
                        Comprehensive bilateral tariff rates between the United
                        States and trading partners
                      </p>
                    </div>
                    <div className={styles.usStats}>
                      <div className={styles.usStatItem}>
                        <span>Average Rate</span>
                        <strong>{usStats.averageRate}%</strong>
                      </div>
                      <div className={styles.usStatItem}>
                        <span>Countries</span>
                        <strong>{usStats.totalCountries}</strong>
                      </div>
                      <div className={styles.usStatItem}>
                        <span>Highest</span>
                        <strong style={{ color: "#dc2626" }}>
                          {usStats.highestRate}%
                        </strong>
                      </div>
                      <div className={styles.usStatItem}>
                        <span>Lowest</span>
                        <strong style={{ color: "#059669" }}>
                          {usStats.lowestRate}%
                        </strong>
                      </div>
                    </div>
                  </div>

                  {/* Search and Filter */}
                  <div className={styles.usControls}>
                    <div className={styles.usSearchBox}>
                      <FiSearch className={styles.searchIcon} />
                      <input
                        type="text"
                        placeholder="Search countries..."
                        value={usTariffSearch}
                        onChange={(e) => setUsTariffSearch(e.target.value)}
                        className={styles.usSearchInput}
                      />
                    </div>
                    <div className={styles.usSortControls}>
                      <span className={styles.sortLabel}>Sort by:</span>
                      <select
                        value={usTariffSort}
                        onChange={(e) => setUsTariffSort(e.target.value)}
                        className={styles.usSortSelect}
                      >
                        <option value="rate">Tariff Rate</option>
                        <option value="name">Country Name</option>
                      </select>
                      <button
                        className={styles.usSortOrder}
                        onClick={() =>
                          setUsTariffOrder(
                            usTariffOrder === "asc" ? "desc" : "asc",
                          )
                        }
                      >
                        {usTariffOrder === "asc" ? "↑" : "↓"}
                      </button>
                    </div>
                  </div>

                  {/* Tariffs Table */}
                  <div className={styles.usTariffsTable}>
                    <table className={styles.tariffsTable}>
                      <thead>
                        <tr>
                          <th>Country</th>
                          <th>Tariff Rate</th>
                          <th>Comparison</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredUsTariffs.map((tariff) => (
                          <tr key={tariff.country} className={styles.tariffRow}>
                            <td>
                              <div className={styles.tariffCountry}>
                                <ReactCountryFlag
                                  countryCode={tariff.flagCode}
                                  svg
                                  style={{
                                    width: "28px",
                                    height: "28px",
                                    borderRadius: "4px",
                                    marginRight: "12px",
                                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                                  }}
                                />
                                <div className={styles.countryName}>
                                  {tariff.country}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div
                                className={styles.tariffRate}
                                style={{ color: getRateColor(tariff.rate) }}
                              >
                                {tariff.rate}%
                              </div>
                            </td>
                            <td>
                              <div className={styles.tariffComparison}>
                                <div className={styles.comparisonBar}>
                                  <div
                                    className={styles.comparisonFill}
                                    style={{
                                      width: `${tariff.rate}%`,
                                      backgroundColor: getRateColor(
                                        tariff.rate,
                                      ),
                                    }}
                                  ></div>
                                </div>
                                <div className={styles.comparisonLabel}>
                                  {tariff.rate > 30
                                    ? "Very High"
                                    : tariff.rate > 20
                                      ? "High"
                                      : tariff.rate > 10
                                        ? "Moderate"
                                        : "Low"}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className={styles.tariffStatus}>
                                <span
                                  className={`${styles.statusBadge} ${
                                    tariff.rate > 30
                                      ? styles.statusCritical
                                      : tariff.rate > 20
                                        ? styles.statusHigh
                                        : tariff.rate > 10
                                          ? styles.statusModerate
                                          : styles.statusLow
                                  }`}
                                >
                                  {tariff.rate > 30
                                    ? "Critical"
                                    : tariff.rate > 20
                                      ? "High"
                                      : tariff.rate > 10
                                        ? "Moderate"
                                        : "Low"}
                                </span>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Legend */}
                  <div className={styles.usLegend}>
                    <div className={styles.legendTitle}>Rate Scale:</div>
                    <div className={styles.legendItems}>
                      <div className={styles.legendItem}>
                        <div
                          className={styles.legendColor}
                          style={{ backgroundColor: "#059669" }}
                        ></div>
                        <span>Low (0-10%)</span>
                      </div>
                      <div className={styles.legendItem}>
                        <div
                          className={styles.legendColor}
                          style={{ backgroundColor: "#d97706" }}
                        ></div>
                        <span>Moderate (10-20%)</span>
                      </div>
                      <div className={styles.legendItem}>
                        <div
                          className={styles.legendColor}
                          style={{ backgroundColor: "#dc2626" }}
                        ></div>
                        <span>High (20-30%)</span>
                      </div>
                      <div className={styles.legendItem}>
                        <div
                          className={styles.legendColor}
                          style={{ backgroundColor: "#7f1d1d" }}
                        ></div>
                        <span>Very High (30%+)</span>
                      </div>
                    </div>
                  </div>

                  {/* Export Section */}
                  <div className={styles.usExport}>
                    <div className={styles.exportInfo}>
                      <FiInfo />
                      <span>
                        Showing {filteredUsTariffs.length} of{" "}
                        {usBilateralTariffs.length} countries
                      </span>
                    </div>
                    <button
                      className={styles.exportButton}
                      onClick={() => {
                        const csvContent = [
                          ["Country", "Tariff Rate (%)", "Status"],
                          ...filteredUsTariffs.map((tariff) => [
                            tariff.country,
                            tariff.rate,
                            tariff.rate > 30
                              ? "Critical"
                              : tariff.rate > 20
                                ? "High"
                                : tariff.rate > 10
                                  ? "Moderate"
                                  : "Low",
                          ]),
                        ]
                          .map((row) => row.join(","))
                          .join("\n");

                        const blob = new Blob([csvContent], {
                          type: "text/csv",
                        });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = `us-bilateral-tariffs-${new Date().toISOString().split("T")[0]}.csv`;
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        URL.revokeObjectURL(url);
                      }}
                    >
                      <FiDownload />
                      Export Data
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </LazyMotion>
      <Footer />
    </>
  );
}
