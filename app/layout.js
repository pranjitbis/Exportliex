import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ureh76xhos");
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
