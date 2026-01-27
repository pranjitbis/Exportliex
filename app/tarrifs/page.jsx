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

// Import US bilateral tariffs data
import usBilateralTariffs from "@/lib/usBilateralTariffs.json";
import styles from "./TariffCalculator.module.css";

// Country data with ISO codes
const countries = [
  { code: "CN", name: "China", iso: "CHN", region: "Asia" },
  { code: "IN", name: "India", iso: "IND", region: "Asia" },
  { code: "US", name: "United States", iso: "USA", region: "North America" },
  { code: "DE", name: "Germany", iso: "DEU", region: "Europe" },
  { code: "JP", name: "Japan", iso: "JPN", region: "Asia" },
  { code: "KR", name: "South Korea", iso: "KOR", region: "Asia" },
  { code: "GB", name: "United Kingdom", iso: "GBR", region: "Europe" },
  { code: "FR", name: "France", iso: "FRA", region: "Europe" },
  { code: "BR", name: "Brazil", iso: "BRA", region: "South America" },
  { code: "MX", name: "Mexico", iso: "MEX", region: "North America" },
  { code: "CA", name: "Canada", iso: "CAN", region: "North America" },
  { code: "AU", name: "Australia", iso: "AUS", region: "Oceania" },
  { code: "RU", name: "Russia", iso: "RUS", region: "Europe" },
  { code: "IT", name: "Italy", iso: "ITA", region: "Europe" },
  { code: "ES", name: "Spain", iso: "ESP", region: "Europe" },
  { code: "NL", name: "Netherlands", iso: "NLD", region: "Europe" },
];

export default function TariffCalculator() {
  const [form, setForm] = useState({
    hsCode: "",
    shipmentValue: "",
    country: "CN",
    transportMode: "Ocean",
    entryDate: "",
    loadingDate: "",
  });

  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSection, setActiveSection] = useState("calculator");

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm({
      hsCode: "",
      shipmentValue: "",
      country: "CN",
      transportMode: "Ocean",
      entryDate: new Date().toISOString().split("T")[0],
      loadingDate: new Date().toISOString().split("T")[0],
    });
    setResult(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/tariff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setResult(data);
        // Scroll to results
        document
          .getElementById("results-section")
          ?.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("Calculation failed:", data.error);
      }
    } catch (error) {
      console.error("Error:", error);
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

  // Get color based on tariff rate
  const getRateColor = (rate) => {
    if (!rate) return "#64748b";
    if (rate < 5) return "#059669";
    if (rate < 10) return "#d97706";
    if (rate < 15) return "#dc2626";
    if (rate < 20) return "#b91c1c";
    if (rate < 30) return "#991b1b";
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

  return (
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
                        {/* HS Code */}
                        <div className={styles.inputGroup}>
                          <label className={styles.inputLabel}>
                            <div className={styles.labelIcon}>
                              <FiPackage />
                            </div>
                            <div className={styles.labelContent}>
                              <span>HS Classification</span>
                              <small>Enter 6-10 digit code</small>
                            </div>
                          </label>
                          <div className={styles.inputWrapper}>
                            <input
                              name="hsCode"
                              value={form.hsCode}
                              className={styles.inputField}
                              onChange={handleChange}
                              placeholder="e.g., 847130"
                              required
                              pattern="[0-9]{6,10}"
                              title="Enter 6-10 digit HS code"
                            />
                          </div>
                        </div>

                        {/* Shipment Value */}
                        <div className={styles.inputGroup}>
                          <label className={styles.inputLabel}>
                            <div className={styles.labelIcon}>
                              <FiDollarSign />
                            </div>
                            <div className={styles.labelContent}>
                              <span>Shipment Value</span>
                              <small>Total declared value</small>
                            </div>
                          </label>
                          <div className={styles.currencyInput}>
                            <span className={styles.currencySymbol}>USD</span>
                            <input
                              name="shipmentValue"
                              type="number"
                              value={form.shipmentValue}
                              className={styles.inputField}
                              onChange={handleChange}
                              placeholder="0.00"
                              min="0"
                              step="0.01"
                              required
                            />
                          </div>
                        </div>

                        {/* Country of Origin */}
                        <div className={styles.inputGroup}>
                          <label className={styles.inputLabel}>
                            <div className={styles.labelIcon}>
                              <FiGlobe />
                            </div>
                            <div className={styles.labelContent}>
                              <span>Country of Origin</span>
                              <small>Select import source</small>
                            </div>
                          </label>
                          <div className={styles.selectWrapper}>
                            <select
                              name="country"
                              value={form.country}
                              className={styles.selectField}
                              onChange={handleChange}
                            >
                              {countries.map((country) => (
                                <option key={country.code} value={country.code}>
                                  {country.name}
                                </option>
                              ))}
                            </select>
                            <div className={styles.selectFlag}>
                              <ReactCountryFlag
                                countryCode={form.country}
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
                            {[
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
                            ].map((option) => (
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

                      <motion.button
                        className={styles.calculateButton}
                        type="submit"
                        disabled={isLoading}
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
                            <span>Calculate Import Duties</span>
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
                          <h2>Duty Analysis</h2>
                          <p className={styles.panelSubtitle}>
                            Comprehensive breakdown
                          </p>
                        </div>
                      </div>
                      {result && (
                        <div className={styles.resultCountry}>
                          <ReactCountryFlag
                            countryCode={result.country}
                            svg
                            style={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "2px",
                            }}
                          />
                          <span>{result.country}</span>
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
                            duty analysis
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
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          className={styles.resultsContent}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                        >
                          {/* Summary Cards */}
                          <div className={styles.summaryCards}>
                            <div className={styles.summaryCard}>
                              <div className={styles.cardHeader}>
                                <span className={styles.cardLabel}>
                                  Tariff Rate
                                </span>
                                <FiInfo className={styles.infoIcon} />
                              </div>
                              <div
                                className={styles.cardValue}
                                style={{
                                  color: getRateColor(result.tariffRate),
                                }}
                              >
                                {result.tariffRate}%
                              </div>
                              <div className={styles.cardSubtext}>
                                Base: {result.baseRate}%
                                {result.surchargeRate > 0 &&
                                  ` + ${result.surchargeRate}% surcharge`}
                              </div>
                            </div>

                            <div className={styles.summaryCard}>
                              <div className={styles.cardHeader}>
                                <span className={styles.cardLabel}>
                                  Duty Amount
                                </span>
                                <FiDollarSign className={styles.infoIcon} />
                              </div>
                              <div className={styles.cardValue}>
                                ${result.dutyAmount}
                              </div>
                              <div className={styles.cardSubtext}>
                                Total shipment value
                              </div>
                            </div>
                          </div>

                          {/* Country Info */}
                          <div className={styles.countrySection}>
                            <div className={styles.countryHeader}>
                              <div className={styles.countryFlag}>
                                <ReactCountryFlag
                                  countryCode={result.country}
                                  svg
                                  style={{
                                    width: "48px",
                                    height: "48px",
                                    borderRadius: "4px",
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                  }}
                                />
                              </div>
                              <div className={styles.countryInfo}>
                                <h3>
                                  {result.countryName ||
                                    getCountryName(result.country)}
                                </h3>
                                <div className={styles.countryMeta}>
                                  <span className={styles.countryCode}>
                                    {result.country}
                                  </span>
                                  <span className={styles.dataSource}>
                                    <FiDatabase />
                                    {result.dataSource || "World Bank API"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Breakdown Grid */}
                          <div className={styles.breakdownSection}>
                            <h4 className={styles.breakdownTitle}>
                              <FiLayers />
                              Calculation Breakdown
                            </h4>
                            <div className={styles.breakdownGrid}>
                              {[
                                {
                                  label: "Product",
                                  value: result.product,
                                  icon: <FiPackage />,
                                },
                                {
                                  label: "HS Code",
                                  value: result.hsCode,
                                  icon: <FiFlag />,
                                },
                                {
                                  label: "Shipment Value",
                                  value: `$${parseFloat(result.shipmentValue).toLocaleString()}`,
                                  icon: <FiDollarSign />,
                                },
                                {
                                  label: "Transport",
                                  value: result.transportMode,
                                  icon: <FiTruck />,
                                },
                                {
                                  label: "Entry Date",
                                  value: result.entryDate,
                                  icon: <FiCalendar />,
                                },
                                {
                                  label: "Loading Date",
                                  value: result.loadingDate,
                                  icon: <FiCalendar />,
                                },
                              ].map((item, index) => (
                                <div
                                  key={index}
                                  className={styles.breakdownItem}
                                >
                                  <div className={styles.breakdownIcon}>
                                    {item.icon}
                                  </div>
                                  <div className={styles.breakdownContent}>
                                    <span className={styles.breakdownLabel}>
                                      {item.label}
                                    </span>
                                    <span className={styles.breakdownValue}>
                                      {item.value}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className={styles.actionButtons}>
                            <button
                              className={styles.actionButtonSecondary}
                              onClick={() => {
                                const exportData = {
                                  timestamp: new Date().toISOString(),
                                  ...result,
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
                              <strong>Disclaimer:</strong> Calculations utilize
                              real-time World Bank tariff data. Final duties may
                              vary based on specific product classification,
                              trade agreements, and regulatory updates.
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
                className={styles.sectionContent}
                key="global"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.globalDashboard}>
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
                                      country: country.code,
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
                </div>
              </motion.div>
            )}

            {/* US Bilateral Tariffs Section */}
            {activeSection === "usTariffs" && (
              <motion.div
                className={styles.sectionContent}
                key="usTariffs"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.usTariffsDashboard}>
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
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </LazyMotion>
  );
}
