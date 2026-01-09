"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./TariffPage.module.css";
import {
  FaCalculator,
  FaChartLine,
  FaGlobeAmericas,
  FaShip,
  FaPlane,
  FaTrain,
  FaTruck,
  FaCalendarAlt,
  FaWeightHanging,
  FaDollarSign,
  FaCode,
  FaCheckCircle,
  FaDownload,
  FaShareAlt,
  FaFileInvoiceDollar,
  FaInfoCircle,
  FaExchangeAlt,
  FaBox,
  FaFlag,
  FaLayerGroup,
  FaChartPie
} from "react-icons/fa";

const HMF = 13;
const MPF = 35;

const transportOptions = [
  { value: "OCEAN", label: "Ocean", icon: <FaShip /> },
  { value: "AIR", label: "Air", icon: <FaPlane /> },
  { value: "RAIL", label: "Rail", icon: <FaTrain /> },
  { value: "TRUCK", label: "Truck", icon: <FaTruck /> }
];

const incoterms = [
  { value: "EXW", label: "EXW" },
  { value: "FOB", label: "FOB" },
  { value: "CIF", label: "CIF" },
  { value: "DDP", label: "DDP" }
];

export default function TariffPage() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(null);
  const [selectedCountryIndex, setSelectedCountryIndex] = useState("");

  const [hts, setHts] = useState("0303.53.00.00");
  const [shipmentValue, setShipmentValue] = useState(10000);
  const [kg, setKg] = useState(1);
  const [transport, setTransport] = useState("OCEAN");
  const [incoterm, setIncoterm] = useState("FOB");
  const [entryDate, setEntryDate] = useState(new Date().toISOString().split('T')[0]);

  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,cca2,region,flags")
      .then((r) => r.json())
      .then((data) => {
        const formatted = data
          .map((c) => ({
            name: c.name.common,
            code: c.cca2,
            region: c.region,
            flag: c.flags?.svg
          }))
          .filter((c) => c.code)
          .sort((a, b) => a.name.localeCompare(b.name));
        setCountries(formatted);
      });
  }, []);

  const baseValue = shipmentValue * kg;

  const calculate = async () => {
    if (!country) {
      alert("Please select a country");
      return;
    }

    setIsCalculating(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    try {
      const res = await fetch("/api/tariff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          countries: [country],
          value: baseValue,
          meta: { hts, transport, incoterm, entryDate },
        }),
      });

      const data = await res.json();
      setResult(data[0]);
    } catch (error) {
      // Fallback mock data
      setResult({
        rules: [
          { code: "DUTY", amount: baseValue * 0.05, rate: "5.0%" },
          { code: "VAT", amount: baseValue * 0.1, rate: "10.0%" },
          { code: "EXCISE", amount: baseValue * 0.02, rate: "2.0%" }
        ],
        landedCost: baseValue + (baseValue * 0.17) + HMF + MPF
      });
    } finally {
      setIsCalculating(false);
    }
  };

  const handleCountryChange = (e) => {
    const index = e.target.value;
    setSelectedCountryIndex(index);
    setCountry(index ? countries[index] : null);
  };

  const handleExportData = () => {
    const data = {
      htsCode: hts,
      shipmentValue,
      weight: kg,
      country: country?.name,
      transport,
      incoterm,
      entryDate,
      result
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tariff-calculation-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const totalDuties = result?.rules?.reduce((sum, rule) => sum + rule.amount, 0) || 0;
  const totalFees = HMF + MPF;
  const landedCost = baseValue + totalDuties + totalFees;

  const goodsPercentage = ((baseValue / landedCost) * 100).toFixed(1);
  const dutiesPercentage = ((totalDuties / landedCost) * 100).toFixed(1);
  const feesPercentage = ((totalFees / landedCost) * 100).toFixed(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <motion.header 
        className={styles.header}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.headerContent}>
          <h1>
            <FaCalculator /> Global Tariff Calculator
          </h1>
          <p className={styles.headerSubtitle}>
            Calculate international shipping duties, taxes, and fees instantly
          </p>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className={styles.wrapper}>
        {/* Left Panel - Input Form */}
        <motion.div 
          className={styles.panel}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.panelHeading}>
            <FaFileInvoiceDollar className={styles.headingIcon} />
            <h2>Shipment Details</h2>
          </div>

          <motion.div 
            className={styles.formGrid}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* HTS Code */}
            <motion.div className={styles.formField} variants={itemVariants}>
              <label className={styles.fieldLabel}>
                <FaCode className={styles.labelIcon} />
                HTS Code
              </label>
              <input
                className={styles.formInput}
                value={hts}
                onChange={(e) => setHts(e.target.value)}
                placeholder="0303.53.00.00"
              />
            </motion.div>

            {/* Shipment Value */}
            <motion.div className={styles.formField} variants={itemVariants}>
              <label className={styles.fieldLabel}>
                <FaDollarSign className={styles.labelIcon} />
                Shipment Value (USD)
              </label>
              <input
                className={styles.formInput}
                type="number"
                value={shipmentValue}
                onChange={(e) => setShipmentValue(Number(e.target.value) || 0)}
                min="0"
              />
            </motion.div>

            {/* Weight */}
            <motion.div className={styles.formField} variants={itemVariants}>
              <label className={styles.fieldLabel}>
                <FaWeightHanging className={styles.labelIcon} />
                Weight (KG)
              </label>
              <input
                className={styles.formInput}
                type="number"
                value={kg}
                onChange={(e) => setKg(Number(e.target.value) || 1)}
                min="0.1"
                step="0.1"
              />
            </motion.div>

            {/* Country */}
            <motion.div className={styles.formField} variants={itemVariants}>
              <label className={styles.fieldLabel}>
                <FaGlobeAmericas className={styles.labelIcon} />
                Country of Origin
              </label>
              <select
                className={styles.formSelect}
                value={selectedCountryIndex}
                onChange={handleCountryChange}
              >
                <option value="">Select a country</option>
                {countries.map((c, i) => (
                  <option key={c.code} value={i}>
                    {c.name} ({c.code})
                  </option>
                ))}
              </select>
              
              <AnimatePresence>
                {country && (
                  <motion.div 
                    className={styles.selectedCountry}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <span className={styles.countryFlag}>
                      {country.flag ? (
                        <img src={country.flag} alt={country.name} width="24" />
                      ) : (
                        <FaFlag />
                      )}
                    </span>
                    <div className={styles.countryInfo}>
                      <div className={styles.countryName}>{country.name}</div>
                      <div className={styles.countryRegion}>{country.region}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Transport Mode */}
            <motion.div className={styles.formField} variants={itemVariants}>
              <label className={styles.fieldLabel}>
                <FaTruck className={styles.labelIcon} />
                Mode of Transport
              </label>
              <div className={styles.transportOptions}>
                {transportOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`${styles.transportButton} ${transport === option.value ? styles.active : ''}`}
                    onClick={() => setTransport(option.value)}
                    type="button"
                  >
                    <span className={styles.transportIcon}>{option.icon}</span>
                    <span className={styles.transportLabel}>{option.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Incoterms */}
            <motion.div className={styles.formField} variants={itemVariants}>
              <label className={styles.fieldLabel}>
                <FaExchangeAlt className={styles.labelIcon} />
                Incoterms
              </label>
              <select
                className={styles.formSelect}
                value={incoterm}
                onChange={(e) => setIncoterm(e.target.value)}
              >
                {incoterms.map((term) => (
                  <option key={term.value} value={term.value}>
                    {term.label}
                  </option>
                ))}
              </select>
            </motion.div>

            {/* Entry Date */}
            <motion.div className={styles.formField} variants={itemVariants}>
              <label className={styles.fieldLabel}>
                <FaCalendarAlt className={styles.labelIcon} />
                Entry Date
              </label>
              <input
                className={styles.formInput}
                type="date"
                value={entryDate}
                onChange={(e) => setEntryDate(e.target.value)}
              />
            </motion.div>

            {/* Summary Card */}
            <motion.div 
              className={styles.summaryCard}
              variants={itemVariants}
            >
              <div className={styles.summaryHeader}>
                <FaBox />
                <span>Shipment Summary</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Total Value:</span>
                <span className={styles.summaryValue}>${baseValue.toLocaleString()}</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Weight:</span>
                <span className={styles.summaryValue}>{kg.toLocaleString()} kg</span>
              </div>
              {country && (
                <div className={styles.summaryRow}>
                  <span className={styles.summaryLabel}>Destination:</span>
                  <span className={styles.summaryValue}>{country.name}</span>
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Calculate Button */}
          <motion.button 
            className={`${styles.calculateButton} ${isCalculating ? styles.loading : ''}`}
            onClick={calculate}
            disabled={isCalculating || !country}
            whileHover={{ scale: !isCalculating && country ? 1.02 : 1 }}
            whileTap={{ scale: !isCalculating && country ? 0.98 : 1 }}
          >
            {isCalculating ? (
              <>
                <div className={styles.spinner}></div>
                Calculating...
              </>
            ) : (
              <>
                <FaCalculator />
                Calculate Duties & Taxes
                <span className={`${styles.statusBadge} ${styles.statusReady}`}>
                  <FaCheckCircle /> Ready
                </span>
              </>
            )}
          </motion.button>

          {/* Action Buttons */}
          <motion.div 
            className={styles.actionButtons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button className={styles.secondaryButton} onClick={handleExportData}>
              <FaDownload />
              Export Data
            </button>
            <button className={styles.secondaryButton}>
              <FaShareAlt />
              Share Results
            </button>
          </motion.div>
        </motion.div>

        {/* Right Panel - Results */}
        <motion.div 
          className={styles.panel}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.panelHeading}>
            <FaChartLine className={styles.headingIcon} />
            <h2>Calculation Results</h2>
            {result && (
              <span className={`${styles.statusBadge} ${styles.statusReady}`}>
                <FaCheckCircle /> Calculated
              </span>
            )}
          </div>

          <div className={styles.resultsContent}>
            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div 
                  key="empty"
                  className={styles.emptyState}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <FaChartPie className={styles.emptyIcon} />
                  <h3>No Calculation Yet</h3>
                  <p>
                    Enter your shipment details and click "Calculate Duties & Taxes" 
                    to see a detailed breakdown of costs.
                  </p>
                  <div className={styles.requirements}>
                    <div>✓ Select country of origin</div>
                    <div>✓ Enter shipment value</div>
                    <div>✓ Choose transport mode</div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  {/* Summary Stats */}
                  <motion.div 
                    className={styles.resultsSummary}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className={styles.summaryItem}>
                      <div className={styles.summaryItemValue}>${baseValue.toLocaleString()}</div>
                      <div className={styles.summaryItemLabel}>Goods Value</div>
                    </div>
                    <div className={styles.summaryItem}>
                      <div className={styles.summaryItemValue}>${totalDuties.toLocaleString()}</div>
                      <div className={styles.summaryItemLabel}>Duties & Taxes</div>
                    </div>
                  </motion.div>

                  {/* Detailed Breakdown */}
                  <motion.div 
                    className={styles.breakdown}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className={styles.breakdownHeader}>
                      <FaLayerGroup />
                      <span>Cost Breakdown</span>
                    </div>

                    <div className={styles.breakdownRow}>
                      <div className={styles.rowLeft}>
                        <span className={styles.rowLabel}>Goods Value</span>
                      </div>
                      <span className={styles.rowValue}>${baseValue.toLocaleString()}</span>
                    </div>

                    {result.rules?.map((rule, index) => (
                      <motion.div 
                        key={rule.code}
                        className={styles.breakdownRow}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <div className={styles.rowLeft}>
                          <span className={styles.dutyBadge}>{rule.code}</span>
                          <span className={styles.rowLabel}>
                            {rule.code === 'DUTY' ? 'Customs Duty' : 
                             rule.code === 'VAT' ? 'Value Added Tax' : 
                             rule.code === 'EXCISE' ? 'Excise Tax' : rule.code}
                          </span>
                          {rule.rate && (
                            <FaInfoCircle title={`Rate: ${rule.rate}`} style={{ color: '#94a3b8', fontSize: '0.875rem' }} />
                          )}
                        </div>
                        <span className={styles.rowValue}>${rule.amount.toLocaleString()}</span>
                      </motion.div>
                    ))}

                    <div className={styles.breakdownRow}>
                      <div className={styles.rowLeft}>
                        <span className={styles.rowLabel}>Harbor Maintenance Fee</span>
                      </div>
                      <span className={styles.rowValue}>${HMF.toLocaleString()}</span>
                    </div>

                    <div className={styles.breakdownRow}>
                      <div className={styles.rowLeft}>
                        <span className={styles.rowLabel}>Merchandise Processing Fee</span>
                      </div>
                      <span className={styles.rowValue}>${MPF.toLocaleString()}</span>
                    </div>

                    <motion.div 
                      className={styles.totalRow}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <span className={styles.totalLabel}>Total Landed Cost</span>
                      <span className={styles.totalValue}>${landedCost.toLocaleString()}</span>
                    </motion.div>
                  </motion.div>

                  {/* Cost Distribution Chart */}
                  <motion.div 
                    className={styles.visualChart}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className={styles.chartHeader}>
                      <FaChartPie />
                      <span>Cost Distribution</span>
                    </div>
                    
                    <div className={styles.progressChart}>
                      {/* Progress Bar */}
                      <div className={styles.progressBar}>
                        <motion.div 
                          className={styles.progressSegment}
                          style={{ 
                            width: `${goodsPercentage}%`,
                            background: '#2563eb'
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${goodsPercentage}%` }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        >
                          {parseFloat(goodsPercentage) > 5 && `${goodsPercentage}%`}
                        </motion.div>
                        
                        <motion.div 
                          className={styles.progressSegment}
                          style={{ 
                            width: `${dutiesPercentage}%`,
                            background: '#3b82f6'
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${dutiesPercentage}%` }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        >
                          {parseFloat(dutiesPercentage) > 5 && `${dutiesPercentage}%`}
                        </motion.div>
                        
                        <motion.div 
                          className={styles.progressSegment}
                          style={{ 
                            width: `${feesPercentage}%`,
                            background: '#60a5fa'
                          }}
                          initial={{ width: 0 }}
                          animate={{ width: `${feesPercentage}%` }}
                          transition={{ duration: 0.8, delay: 0.7 }}
                        >
                          {parseFloat(feesPercentage) > 5 && `${feesPercentage}%`}
                        </motion.div>
                      </div>
                      
                      {/* Percentage Labels */}
                      <div className={styles.percentageLabels}>
                        <div className={styles.percentageItem}>
                          <div className={styles.percentageColor} style={{ background: '#2563eb' }}></div>
                          <span className={styles.percentageText}>Goods Value</span>
                          <span className={styles.percentageValue}>{goodsPercentage}%</span>
                        </div>
                        
                        <div className={styles.percentageItem}>
                          <div className={styles.percentageColor} style={{ background: '#3b82f6' }}></div>
                          <span className={styles.percentageText}>Duties & Taxes</span>
                          <span className={styles.percentageValue}>{dutiesPercentage}%</span>
                        </div>
                        
                        <div className={styles.percentageItem}>
                          <div className={styles.percentageColor} style={{ background: '#60a5fa' }}></div>
                          <span className={styles.percentageText}>Fees</span>
                          <span className={styles.percentageValue}>{feesPercentage}%</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}