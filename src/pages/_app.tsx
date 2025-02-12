import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <title>Accueil | Elevia</title>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16866771162"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16866771162');
          `}
        </script>

        <script>
          {`
            _linkedin_partner_id = "6845242";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </script>
        <script>
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
        </script>
      </Head>

      <noscript>
        <img height="1" width="1" style={{ display: "none" }} alt="" src="https://px.ads.linkedin.com/collect/?pid=6845242&fmt=gif" />
      </noscript>

      <GoogleAnalytics trackPageViews gaMeasurementId="G-9Z08YBERKK" />

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
