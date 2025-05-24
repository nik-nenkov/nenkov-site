import "./i18n";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { useLocation } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import type { Route } from "./+types/root";
import "./root.scss";
import AppFooter from "./components/footer/app-footer";

// Extend the Window interface to include GA_INITIALIZED
declare global {
  interface Window {
    GA_INITIALIZED?: boolean;
  }
}

export const links: Route.LinksFunction = () => [
  { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  { rel: "stylesheet", href: "/fonts/inter.css" },
  { rel: "stylesheet", href: "/fonts/material-icons.css" },
  { rel: "preload", fetchPriority: "high", as: "image", href: "/images/wallpaper.webp", type: "image/webp" },
  { rel: "prefetch", href: "/images/wallpaper.webp", as: "image" },
  { rel: "preload", fetchPriority: "high", as: "image", href: "/images/avatar_192x192.webp", type: "image/webp" },
  { rel: "prefetch", href: "/images/avatar_192x192.webp", as: "image" },
  { rel: "preload", as: "font", href: "/fonts/Material-Icons.woff2", type: "font/woff2", crossOrigin: "anonymous" },
  { rel: "icon", type: "image/png", sizes: "32x32", href: "icons/icon-32x32.png" },
  { rel: "icon", type: "image/png", sizes: "48x48", href: "icons/icon-48x48.png" },
  { rel: "icon", type: "image/png", sizes: "64x64", href: "icons/icon-64x64.png" },
  { rel: "icon", type: "image/png", sizes: "72x72", href: "icons/icon-72x72.png" },
  { rel: "icon", type: "image/png", sizes: "96x96", href: "icons/icon-96x96.png" },
  { rel: "icon", type: "image/png", sizes: "128x128", href: "icons/icon-128x128.png" },
  { rel: "icon", type: "image/png", sizes: "144x144", href: "icons/icon-144x144.png" },
  { rel: "icon", type: "image/png", sizes: "152x152", href: "icons/icon-152x152.png" },
  { rel: "icon", type: "image/png", sizes: "192x192", href: "icons/icon-192x192.png" },
  { rel: "icon", type: "image/png", sizes: "256x256", href: "icons/icon-256x256.png" },
  { rel: "icon", type: "image/png", sizes: "384x384", href: "icons/icon-384x384.png" },
  { rel: "icon", type: "image/png", sizes: "512x512", href: "icons/icon-512x512.png" },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "apple-touch-icon", href: "icons/apple-icon-180.png" },
  { rel: "manifest", href: "manifest.json", crossOrigin: "anonymous" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Nikolay Nenkov's CV website, built with React and Vite." />
          <title>Nik CV</title>
          {/* Google tag (gtag.js) for scanners */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-PX82K4PW6V"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-PX82K4PW6V', { 'anonymize_ip': true, 'allow_ad_personalization_signals': false });
              `,
            }}
          />
          <Meta />
          <Links />
        </head>
        <body>
          <main>{children}</main>
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
      <AppFooter />
    </>
  );
}

export default function App() {
  const [analyticsAllowed, setAnalyticsAllowed] = useState(
    typeof window !== "undefined"
      ? window.localStorage.getItem("analyticsAllowed") === "true"
      : false
  );

  useEffect(() => {
    if (analyticsAllowed && typeof window !== "undefined" && !window.GA_INITIALIZED) {
      ReactGA.initialize("G-PX82K4PW6V");
      window.GA_INITIALIZED = true;
    }
  }, [analyticsAllowed]);

  usePageView(analyticsAllowed);

  return (
    <>
      <CookieConsent
        onAccept={() => {
          setAnalyticsAllowed(true);
          if (typeof window !== "undefined") {
            window.localStorage.setItem("analyticsAllowed", "true");
          }
        }}
      >
        Този сайт използва бисквитки за Google Analytics.{" "}
        <a
          href="https://bg.wikipedia.org/wiki/Google_Analytics"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff", textDecoration: "underline" }}
        >
          Научи повече.
        </a>
      </CookieConsent>
      <Outlet />
    </>
  );
}

function usePageView(analyticsAllowed: boolean) {
  const location = useLocation();
  useEffect(() => {
    if (
      analyticsAllowed &&
      typeof window !== "undefined" &&
      window.GA_INITIALIZED
    ) {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [location, analyticsAllowed]);
}
