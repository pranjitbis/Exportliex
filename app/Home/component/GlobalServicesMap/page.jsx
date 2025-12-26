import dynamic from "next/dynamic";

const CountryMap = dynamic(() => import("./CountryMapClient"), { ssr: false });

export default function Page() {
  return <CountryMap />;
}
