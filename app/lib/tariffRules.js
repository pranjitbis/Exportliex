// app/lib/tariffRules.js

export const REGION_RULES = {
  EUROPE: { dutyRate: 0.04, fees: 40 },
  ASIA: { dutyRate: 0.1, fees: 42 },
  AFRICA: { dutyRate: 0.12, fees: 44 },
  AMERICAS: { dutyRate: 0.06, fees: 38 },
  OCEANIA: { dutyRate: 0.05, fees: 36 },
  DEFAULT: { dutyRate: 0.08, fees: 45 },
};

export const COUNTRY_OVERRIDES = {
  CN: { dutyRate: 0.25, fees: 48 },
  IN: { dutyRate: 0.1, fees: 42 },
  MX: { dutyRate: 0.0, fees: 35 },
  VN: { dutyRate: 0.08, fees: 40 },
};
