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
      </Head>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-9Z08YBERKK" />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
