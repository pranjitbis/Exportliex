// app/api/tariff/route.js

import { calculateTariff } from "@/app/lib/tariffEngine";

export async function POST(req) {
  const { countries, value } = await req.json();

  if (!Array.isArray(countries) || !value) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const results = countries.map((c) => {
    const result = calculateTariff({
      countryCode: c.code,
      region: c.region,
      value,
    });

    return {
      name: c.name,
      code: c.code,
      region: c.region,
      ...result,
    };
  });

  return Response.json(results);
}
