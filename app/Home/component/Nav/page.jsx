"use client";

import Link from "next/link";
import styles from "./Nav.module.css";
import {
  MdOutlineArrowDropDown,
  MdMenu,
  MdClose,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  // Freight & Fulfillment icons
  MdLocalShipping,
  MdFlight,
  MdDirectionsCar,
  MdLaptop,
  MdStore,
  MdBusiness,
  MdWarehouse,
  MdLocalPostOffice,
  MdAssignmentReturn,
  MdShoppingCart,
  // Technology icons
  MdNewReleases,
  MdCloud,
  MdControlCamera,
  MdStorefront,
  MdInsights,
  MdCode,
  MdDescription,
  MdSchool,
  MdHelpOutline,
  MdIntegrationInstructions,
  MdApps,
  MdStoreMallDirectory,
  MdDirectionsBoat,
  MdWeb,
  // Resources icons
  MdAnalytics,
  MdTimeline,
  MdPublic,
  MdCalculate,
  MdArticle,
  MdVideoLibrary,
  MdFolderOpen,
  MdOndemandVideo,
  MdHelpCenter,
  MdList,
  MdBook,
  MdGavel,
  MdUpdate,
  MdChecklist,
  // Company icons
  MdInfo,
  MdWork,
  MdNewspaper,
  MdLanguage,
  MdContactPhone,
  // Additional icons
  MdAttachMoney,
  MdMoneyOff,
  MdSecurity,
  MdLightbulb,
  MdCategory,
  MdSettingsApplications,
  MdCalendarToday,
  // User icons
  MdPersonAdd,
} from "react-icons/md";
import { useState, useEffect, useRef } from "react";

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close all dropdowns when closing mobile menu
    if (isMobileMenuOpen) {
      setOpenMobileDropdown(null);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  const toggleMobileDropdown = (menu) => {
    if (openMobileDropdown === menu) {
      setOpenMobileDropdown(null);
    } else {
      setOpenMobileDropdown(menu);
    }
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // Cleanup
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMobileMenuOpen]);

  // Close dropdowns when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (window.innerWidth <= 1080 && openMobileDropdown) {
        const target = event.target;
        if (menuRef.current && !menuRef.current.contains(target)) {
          setOpenMobileDropdown(null);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openMobileDropdown]);

  return (
    <nav className={styles.navbar} ref={menuRef}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>Exportliex</div>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <ul className={styles.menu}>
            {/* Freight & Fulfillment */}
            <li className={styles.menuItem}>
              <button
                className={styles.label}
                onClick={() => toggleMobileDropdown("freight")}
              >
                Freight & Fulfillment
                <span className={styles.mobileArrow}>
                  {openMobileDropdown === "freight" ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </span>
                <span className={styles.desktopArrow}>
                  <MdOutlineArrowDropDown />
                </span>
              </button>

              <div
                className={`${styles.megaMenu} ${
                  openMobileDropdown === "freight" ? styles.mobileOpen : ""
                }`}
              >
                <div className={styles.megaMenuContent}>
                  {/* Column 1 - FORWARDING */}
                  <div className={styles.menuColumn}>
                    <h4>FORWARDING</h4>
                    <div className={styles.grid2x2}>
                      <Link
                        href="/products/ocean-freight"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.blueIcon}`}
                        >
                          <MdDirectionsBoat />
                        </span>
                        Ocean Freight
                      </Link>
                      <Link
                        href="/products/air-freight"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.skyBlueIcon}`}
                        >
                          <MdFlight />
                        </span>
                        Air Freight
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.greenIcon}`}
                        >
                          <MdDirectionsCar />
                        </span>
                        Trucking
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.purpleIcon}`}
                        >
                          <MdLaptop />
                        </span>
                        Exportliex Platform
                      </Link>
                    </div>
                  </div>

                  {/* Column 3 - CONTROL TOWER */}
                  <div className={styles.menuColumn}>
                    <h4>CONTROL TOWER</h4>
                    <div className={styles.grid2x2}>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.blueIcon}`}
                        >
                          <MdControlCamera />
                        </span>
                        Order Management
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.greenIcon}`}
                        >
                          <MdLocalShipping />
                        </span>
                        Buyer's Consolidation
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.purpleIcon}`}
                        >
                          <MdDescription />
                        </span>
                        Booking Management
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.tealIcon}`}
                        >
                          <MdPublic />
                        </span>
                        Carbon Control
                      </Link>
                    </div>
                  </div>

                  {/* Column 4 - CUSTOMS & FINANCIAL SERVICES */}
                  <div className={styles.menuColumn}>
                    <h4>CUSTOMS & FINANCIAL SERVICES</h4>
                    <div className={styles.grid2x2}>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.indigoIcon}`}
                        >
                          <MdGavel />
                        </span>
                        Customs Brokerage
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.greenIcon}`}
                        >
                          <MdAttachMoney />
                        </span>
                        Trade Finance
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.orangeIcon}`}
                        >
                          <MdMoneyOff />
                        </span>
                        Duty Drawback
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.blueIcon}`}
                        >
                          <MdSecurity />
                        </span>
                        Insurance
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.yellowIcon}`}
                        >
                          <MdLightbulb />
                        </span>
                        Trade Advisory
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.purpleIcon}`}
                        >
                          <MdCategory />
                        </span>
                        Classification
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Technology */}
            <li className={styles.menuItem}>
              <button
                className={styles.label}
                onClick={() => toggleMobileDropdown("technology")}
              >
                Technology
                <span className={styles.mobileArrow}>
                  {openMobileDropdown === "technology" ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </span>
                <span className={styles.desktopArrow}>
                  <MdOutlineArrowDropDown />
                </span>
              </button>

              <div
                className={`${styles.megaMenu} ${
                  openMobileDropdown === "technology" ? styles.mobileOpen : ""
                }`}
              >
                <div className={styles.megaMenuContent}>
                  <div className={styles.menuColumn}>
                    <h4>PRODUCT RELEASES</h4>
                    <div className={styles.grid2x2}>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.orangeIcon}`}
                        >
                          <MdNewReleases />
                        </span>
                        2025 Fall Release
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.blueIcon}`}
                        >
                          <MdNewReleases />
                        </span>
                        2025 Winter Release
                      </Link>
                    </div>
                  </div>

                  <div className={styles.menuColumn}>
                    <h4>TECHNOLOGY SOLUTIONS</h4>
                    <div className={styles.grid2x2}>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.skyBlueIcon}`}
                        >
                          <MdCloud />
                        </span>
                        Exportliex Platform
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.purpleIcon}`}
                        >
                          <MdControlCamera />
                        </span>
                        Exportliex Control Tower
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.greenIcon}`}
                        >
                          <MdStoreMallDirectory />
                        </span>
                        Omnichannel Seller Portal
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.indigoIcon}`}
                        >
                          <MdInsights />
                        </span>
                        Exportliex Intelligence
                      </Link>
                    </div>
                  </div>

                  <div className={styles.menuColumn}>
                    <h4>DEVELOPERS</h4>
                    <div className={styles.grid2x2}>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.blueIcon}`}
                        >
                          <MdCode />
                        </span>
                        Developer Portal
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.greenIcon}`}
                        >
                          <MdDescription />
                        </span>
                        API Documentation
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.orangeIcon}`}
                        >
                          <MdSchool />
                        </span>
                        API Tutorials
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.yellowIcon}`}
                        >
                          <MdHelpOutline />
                        </span>
                        FAQ
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.purpleIcon}`}
                        >
                          <MdIntegrationInstructions />
                        </span>
                        EDI Documentation
                      </Link>
                    </div>
                  </div>

                  <div className={styles.menuColumn}>
                    <h4>INTEGRATIONS</h4>
                    <div className={styles.grid2x2}>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.tealIcon}`}
                        >
                          <MdApps />
                        </span>
                        ERP Systems
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.orangeIcon}`}
                        >
                          <MdStore />
                        </span>
                        Marketplaces
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.blueIcon}`}
                        >
                          <MdWeb />
                        </span>
                        Carrier APIs
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.greenIcon}`}
                        >
                          <MdSettingsApplications />
                        </span>
                        Custom Solutions
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Resources */}
            <li className={styles.menuItem}>
              <button
                className={styles.label}
                onClick={() => toggleMobileDropdown("resources")}
              >
                Resources
                <span className={styles.mobileArrow}>
                  {openMobileDropdown === "resources" ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </span>
                <span className={styles.desktopArrow}>
                  <MdOutlineArrowDropDown />
                </span>
              </button>

              <div
                className={`${styles.megaMenu} ${
                  openMobileDropdown === "resources" ? styles.mobileOpen : ""
                }`}
              >
                <div className={styles.megaMenuContent}>
                  <div className={styles.menuColumn}>
                    <h4>INSIGHTS & ANALYTICS</h4>
                    <div className={styles.grid2x2}>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.indigoIcon}`}
                        >
                          <MdAnalytics />
                        </span>
                        Tariff Simulator
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.greenIcon}`}
                        >
                          <MdTimeline />
                        </span>
                        Rate Explorer
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.blueIcon}`}
                        >
                          <MdPublic />
                        </span>
                        Market Intelligence
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.tealIcon}`}
                        >
                          <MdCalculate />
                        </span>
                        Carbon Calculator
                      </Link>
                    </div>
                  </div>

                  <div className={styles.menuColumn}>
                    <h4>LEARNING RESOURCES</h4>
                    <div className={styles.grid2x2}>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.orangeIcon}`}
                        >
                          <MdArticle />
                        </span>
                        Blog
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.purpleIcon}`}
                        >
                          <MdVideoLibrary />
                        </span>
                        Webinars
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.greenIcon}`}
                        >
                          <MdFolderOpen />
                        </span>
                        Case Studies
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.redIcon}`}
                        >
                          <MdOndemandVideo />
                        </span>
                        Video Tutorials
                      </Link>
                    </div>
                  </div>

                  <div className={styles.menuColumn}>
                    <h4>TOOLS & GUIDES</h4>
                    <div className={styles.grid2x2}>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.yellowIcon}`}
                        >
                          <MdCalendarToday />
                        </span>
                        Peak Season 2025
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.blueIcon}`}
                        >
                          <MdHelpCenter />
                        </span>
                        Help Center
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.greenIcon}`}
                        >
                          <MdList />
                        </span>
                        HS Codes
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.purpleIcon}`}
                        >
                          <MdBook />
                        </span>
                        Glossary
                      </Link>
                    </div>
                  </div>

                  <div className={styles.menuColumn}>
                    <h4>COMPLIANCE & REGULATIONS</h4>
                    <div className={styles.grid2x2}>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.indigoIcon}`}
                        >
                          <MdGavel />
                        </span>
                        Trade Regulations
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.blueIcon}`}
                        >
                          <MdUpdate />
                        </span>
                        Customs Updates
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.greenIcon}`}
                        >
                          <MdDescription />
                        </span>
                        Documentation Guide
                      </Link>
                      <Link
                        href="/"
                        onClick={closeMobileMenu}
                        className={styles.linkWithIcon}
                      >
                        <span
                          className={`${styles.navicons} ${styles.tealIcon}`}
                        >
                          <MdChecklist />
                        </span>
                        Compliance Checklist
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Company */}
            <li className={styles.menuItem}>
              <button
                className={styles.label}
                onClick={() => toggleMobileDropdown("company")}
              >
                Company
                <span className={styles.mobileArrow}>
                  {openMobileDropdown === "company" ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </span>
                <span className={styles.desktopArrow}>
                  <MdOutlineArrowDropDown />
                </span>
              </button>

              <div
                className={`${styles.simpleMenu} ${
                  openMobileDropdown === "company" ? styles.mobileOpen : ""
                }`}
              >
                <ul className={styles.companyMenu}>
                  <li>
                    <Link
                      href="/about-us"
                      onClick={closeMobileMenu}
                      className={styles.linkWithIcon}
                    >
                      <span className={`${styles.navicons} ${styles.blueIcon}`}>
                        <MdInfo />
                      </span>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      onClick={closeMobileMenu}
                      className={styles.linkWithIcon}
                    >
                      <span
                        className={`${styles.navicons} ${styles.greenIcon}`}
                      >
                        <MdWork />
                      </span>
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/newsroom"
                      onClick={closeMobileMenu}
                      className={styles.linkWithIcon}
                    >
                      <span
                        className={`${styles.navicons} ${styles.orangeIcon}`}
                      >
                        <MdNewspaper />
                      </span>
                      Newsroom
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/global-network"
                      onClick={closeMobileMenu}
                      className={styles.linkWithIcon}
                    >
                      <span
                        className={`${styles.navicons} ${styles.purpleIcon}`}
                      >
                        <MdLanguage />
                      </span>
                      Global Network
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      onClick={closeMobileMenu}
                      className={styles.linkWithIcon}
                    >
                      <span className={`${styles.navicons} ${styles.tealIcon}`}>
                        <MdContactPhone />
                      </span>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          {/* Login/Register Buttons - Desktop */}
          <div className={styles.authButtons}>
            <Link href="/register" className={styles.registerBtn}>
              <span className={styles.navicons}>
                <MdPersonAdd />
              </span>
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <button
          className={`${styles.mobileMenuButton} ${
            isMobileMenuOpen ? styles.Menubtn : ""
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
        </button>
        <div
          className={`${styles.mobileMenu} ${
            isMobileMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <button
            className={`${styles.mobileMenuButton} ${styles.secondMobileBtn}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <MdClose />
          </button>
          <ul className={styles.mobileMenuList}>
            {/* Mobile Freight & Fulfillment */}
            <li className={styles.mobileMenuItem}>
              <button
                className={styles.mobileLabel}
                onClick={() => toggleMobileDropdown("freight")}
              >
                Freight & Fulfillment
                <span className={styles.mobileArrow}>
                  {openMobileDropdown === "freight" ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </span>
              </button>
              {openMobileDropdown === "freight" && (
                <div className={styles.mobileDropdown}>
                  <h4 className={styles.mobileDropdownTitle}>FORWARDING</h4>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.blueIcon}`}>
                      <MdDirectionsBoat />
                    </span>
                    Ocean Freight
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span
                      className={`${styles.navicons} ${styles.skyBlueIcon}`}
                    >
                      <MdFlight />
                    </span>
                    Air Freight
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.greenIcon}`}>
                      <MdDirectionsCar />
                    </span>
                    Trucking
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.purpleIcon}`}>
                      <MdLaptop />
                    </span>
                    Exportliex Platform
                  </Link>

                  <h4 className={styles.mobileDropdownTitle}>CONTROL TOWER</h4>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.blueIcon}`}>
                      <MdControlCamera />
                    </span>
                    Order Management
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.greenIcon}`}>
                      <MdLocalShipping />
                    </span>
                    Buyer's Consolidation
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.purpleIcon}`}>
                      <MdDescription />
                    </span>
                    Booking Management
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.tealIcon}`}>
                      <MdPublic />
                    </span>
                    Carbon Control
                  </Link>

                  <h4 className={styles.mobileDropdownTitle}>
                    CUSTOMS & FINANCIAL SERVICES
                  </h4>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.indigoIcon}`}>
                      <MdGavel />
                    </span>
                    Customs Brokerage
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.greenIcon}`}>
                      <MdAttachMoney />
                    </span>
                    Trade Finance
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.orangeIcon}`}>
                      <MdMoneyOff />
                    </span>
                    Duty Drawback
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.blueIcon}`}>
                      <MdSecurity />
                    </span>
                    Insurance
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.yellowIcon}`}>
                      <MdLightbulb />
                    </span>
                    Trade Advisory
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.purpleIcon}`}>
                      <MdCategory />
                    </span>
                    Classification
                  </Link>
                </div>
              )}
            </li>

            {/* Mobile Technology */}
            <li className={styles.mobileMenuItem}>
              <button
                className={styles.mobileLabel}
                onClick={() => toggleMobileDropdown("technology")}
              >
                Technology
                <span className={styles.mobileArrow}>
                  {openMobileDropdown === "technology" ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </span>
              </button>
              {openMobileDropdown === "technology" && (
                <div className={styles.mobileDropdown}>
                  <h4 className={styles.mobileDropdownTitle}>
                    PRODUCT RELEASES
                  </h4>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.orangeIcon}`}>
                      <MdNewReleases />
                    </span>
                    2025 Fall Release
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.blueIcon}`}>
                      <MdNewReleases />
                    </span>
                    2025 Winter Release
                  </Link>

                  <h4 className={styles.mobileDropdownTitle}>
                    TECHNOLOGY SOLUTIONS
                  </h4>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span
                      className={`${styles.navicons} ${styles.skyBlueIcon}`}
                    >
                      <MdCloud />
                    </span>
                    Exportliex Platform
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.purpleIcon}`}>
                      <MdControlCamera />
                    </span>
                    Exportliex Control Tower
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.greenIcon}`}>
                      <MdStoreMallDirectory />
                    </span>
                    Omnichannel Seller Portal
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.indigoIcon}`}>
                      <MdInsights />
                    </span>
                    Exportliex Intelligence
                  </Link>

                  <h4 className={styles.mobileDropdownTitle}>DEVELOPERS</h4>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.blueIcon}`}>
                      <MdCode />
                    </span>
                    Developer Portal
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.greenIcon}`}>
                      <MdDescription />
                    </span>
                    API Documentation
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.orangeIcon}`}>
                      <MdSchool />
                    </span>
                    API Tutorials
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.yellowIcon}`}>
                      <MdHelpOutline />
                    </span>
                    FAQ
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.purpleIcon}`}>
                      <MdIntegrationInstructions />
                    </span>
                    EDI Documentation
                  </Link>

                  <h4 className={styles.mobileDropdownTitle}>INTEGRATIONS</h4>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.tealIcon}`}>
                      <MdApps />
                    </span>
                    ERP Systems
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.orangeIcon}`}>
                      <MdStore />
                    </span>
                    Marketplaces
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.blueIcon}`}>
                      <MdWeb />
                    </span>
                    Carrier APIs
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.greenIcon}`}>
                      <MdSettingsApplications />
                    </span>
                    Custom Solutions
                  </Link>
                </div>
              )}
            </li>

            {/* Mobile Resources */}
            <li className={styles.mobileMenuItem}>
              <button
                className={styles.mobileLabel}
                onClick={() => toggleMobileDropdown("resources")}
              >
                Resources
                <span className={styles.mobileArrow}>
                  {openMobileDropdown === "resources" ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </span>
              </button>
              {openMobileDropdown === "resources" && (
                <div className={styles.mobileDropdown}>
                  <h4 className={styles.mobileDropdownTitle}>
                    INSIGHTS & ANALYTICS
                  </h4>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.indigoIcon}`}>
                      <MdAnalytics />
                    </span>
                    Tariff Simulator
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.greenIcon}`}>
                      <MdTimeline />
                    </span>
                    Rate Explorer
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.blueIcon}`}>
                      <MdPublic />
                    </span>
                    Market Intelligence
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.tealIcon}`}>
                      <MdCalculate />
                    </span>
                    Carbon Calculator
                  </Link>

                  <h4 className={styles.mobileDropdownTitle}>
                    LEARNING RESOURCES
                  </h4>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.orangeIcon}`}>
                      <MdArticle />
                    </span>
                    Blog
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.purpleIcon}`}>
                      <MdVideoLibrary />
                    </span>
                    Webinars
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.greenIcon}`}>
                      <MdFolderOpen />
                    </span>
                    Case Studies
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.redIcon}`}>
                      <MdOndemandVideo />
                    </span>
                    Video Tutorials
                  </Link>

                  <h4 className={styles.mobileDropdownTitle}>TOOLS & GUIDES</h4>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.yellowIcon}`}>
                      <MdCalendarToday />
                    </span>
                    Peak Season 2025
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.blueIcon}`}>
                      <MdHelpCenter />
                    </span>
                    Help Center
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.greenIcon}`}>
                      <MdList />
                    </span>
                    HS Codes
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.purpleIcon}`}>
                      <MdBook />
                    </span>
                    Glossary
                  </Link>

                  <h4 className={styles.mobileDropdownTitle}>
                    COMPLIANCE & REGULATIONS
                  </h4>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.indigoIcon}`}>
                      <MdGavel />
                    </span>
                    Trade Regulations
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.blueIcon}`}>
                      <MdUpdate />
                    </span>
                    Customs Updates
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.greenIcon}`}>
                      <MdDescription />
                    </span>
                    Documentation Guide
                  </Link>
                  <Link
                    href="/"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.tealIcon}`}>
                      <MdChecklist />
                    </span>
                    Compliance Checklist
                  </Link>
                </div>
              )}
            </li>

            {/* Mobile Company */}
            <li className={styles.mobileMenuItem}>
              <button
                className={styles.mobileLabel}
                onClick={() => toggleMobileDropdown("company")}
              >
                Company
                <span className={styles.mobileArrow}>
                  {openMobileDropdown === "company" ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </span>
              </button>
              {openMobileDropdown === "company" && (
                <div className={styles.mobileDropdown}>
                  <Link
                    href="/about-us"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.blueIcon}`}>
                      <MdInfo />
                    </span>
                    About Us
                  </Link>
                  <Link
                    href="/careers"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.greenIcon}`}>
                      <MdWork />
                    </span>
                    Careers
                  </Link>
                  <Link
                    href="/newsroom"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.orangeIcon}`}>
                      <MdNewspaper />
                    </span>
                    Newsroom
                  </Link>
                  <Link
                    href="/global-network"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.purpleIcon}`}>
                      <MdLanguage />
                    </span>
                    Global Network
                  </Link>
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className={styles.mobileLinkWithIcon}
                  >
                    <span className={`${styles.navicons} ${styles.tealIcon}`}>
                      <MdContactPhone />
                    </span>
                    Contact
                  </Link>
                </div>
              )}
            </li>

            {/* Mobile Register Button */}
            <div className={styles.mobileAuthButtons}>
              <Link
                href="/register"
                className={styles.mobileRegisterBtn}
                onClick={closeMobileMenu}
              >
                <span className={styles.navicons}>
                  <MdPersonAdd />
                </span>
                Get Started
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
