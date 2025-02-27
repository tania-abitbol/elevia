import "../styles/globals.css";
import "../styles/carousel.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Head from "next/head";
import Script from "next/script";
import Hotjar from "@hotjar/browser";

export default function App({ Component, pageProps }: AppProps) {
  const siteId = 5309279;
  const hotjarVersion = 6;

  Hotjar.init(siteId, hotjarVersion);

  return (
    <div className="relative">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <title>Accueil | Elevia</title>
      </Head>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16866771162');
          `}
      </Script>

      <Script id="linkedin-insight" strategy="afterInteractive">
        {`
            _linkedin_partner_id = "6845242";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
      </Script>
      <Script id="linkedin-insight-script" strategy="afterInteractive">
        {`
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
      </Script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=6845242&fmt=gif"
        />
      </noscript>

      <GoogleAnalytics trackPageViews gaMeasurementId="G-9Z08YBERKK" />

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
