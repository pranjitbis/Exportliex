import dynamic from "next/dynamic";

// Dynamic import (client-only)
const CountryMap = dynamic(() => import("./CountryMapClient"), { ssr: false });

export default function Page() {
  return <CountryMap />;
}
