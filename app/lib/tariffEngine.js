// app/lib/tariffEngine.js

import { REGION_RULES, COUNTRY_OVERRIDES } from "./tariffRules";

/**
 * Calculate tariff for a country
 */
export function calculateTariff({ countryCode, region, value }) {
  // 1️⃣ Determine rule priority
  const baseRule =
    COUNTRY_OVERRIDES[countryCode] ||
    REGION_RULES[region] ||
    REGION_RULES.DEFAULT;

  const dutyRate = Math.max(baseRule.dutyRate, 0);
  const fees = baseRule.fees;

  // 2️⃣ Calculations
  const dutyAmount = value * dutyRate;
  const landedCost = value + dutyAmount + fees;

  // 3️⃣ Return result
  return {
    baseDutyRate: dutyRate,
    dutyAmount,
    fees,
    landedCost,
    rules: [
      {
        code: countryCode,
        label: "Base Import Duty",
        rate: dutyRate * 100,
        amount: Math.round(dutyAmount),
      },
    ],
  };
}
