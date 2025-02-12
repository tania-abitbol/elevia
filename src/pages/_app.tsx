import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Head from "next/head";
import Script from "next/script"; // Utilisation de next/script pour un chargement optimisé

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <title>Accueil | Elevia</title>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16866771162"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-16866771162');
        }
        </Script>
      </Head>

      <GoogleAnalytics trackPageViews gaMeasurementId="G-9Z08YBERKK" />

      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
