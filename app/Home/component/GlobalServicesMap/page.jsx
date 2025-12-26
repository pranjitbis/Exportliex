import dynamic from "next/dynamic";

// client-only dynamic import
const CountryMap = dynamic(() => import("./CountryMapClient"), { ssr: false });

export default function Page() {
  return <CountryMap />;
}
