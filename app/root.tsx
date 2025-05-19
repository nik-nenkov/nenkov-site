import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./root.scss";
import AppFooter from "./components/footer/app-footer";

export const links: Route.LinksFunction = () => [
  {
    rel: "preload",
    fetchPriority: "high",
    as: "image",
    href: "/no.jpg",
    type: "image/jpg"
  },
  {
    rel: "apple-touch-icon",
    href: "icons/apple-icon-180.png"
  },
  {
    rel: "preload",
    fetchPriority: "high",
    as: "image",
    href: "/no.jpg",
    type: "image/jpg"
  },
  {
    rel: "prefetch",
    href: "/no.jpg",
    as: "image"
  },
  { rel: "preload", 
    href: "/107142654.jpg",
    fetchPriority: "high", 
    as: "image" 
  },
  {
    rel: "prefetch",
    href: "/107142654.jpg",
    fetchPriority: "high",
    as: "image"
  },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  { rel: "icon", type: "image/png", sizes: "48x48", href: "icons/icon-48x48.png" },
  { rel: "icon", type: "image/png", sizes: "72x72", href: "icons/icon-72x72.png" },
  { rel: "icon", type: "image/png", sizes: "96x96", href: "icons/icon-96x96.png" },
  { rel: "icon", type: "image/png", sizes: "128x128", href: "icons/icon-128x128.png" },
  { rel: "icon", type: "image/png", sizes: "144x144", href: "icons/icon-144x144.png" },
  { rel: "icon", type: "image/png", sizes: "152x152", href: "icons/icon-152x152.png" },
  { rel: "icon", type: "image/png", sizes: "192x192", href: "icons/icon-192x192.png" },
  { rel: "icon", type: "image/png", sizes: "384x384", href: "icons/icon-384x384.png" },
  { rel: "icon", type: "image/png", sizes: "512x512", href: "icons/icon-512x512.png" },
  { rel: "manifest", href: "manifest.json", crossOrigin: "anonymous" },
  { rel: "apple-touch-icon", href: "icons/apple-icon-180.png" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-2048-2732.jpg", media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-2732-2048.jpg", media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-1668-2388.jpg", media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-2388-1668.jpg", media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-1536-2048.jpg", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-2048-1536.jpg", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-1640-2360.jpg", media: "(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-2360-1640.jpg", media: "(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-1668-2224.jpg", media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-2224-1668.jpg", media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-1620-2160.jpg", media: "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-2160-1620.jpg", media: "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-1488-2266.jpg", media: "(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-2266-1488.jpg", media: "(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-1320-2868.jpg", media: "(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-2868-1320.jpg", media: "(device-width: 440px) and (device-height: 956px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-1206-2622.jpg", media: "(device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-2622-1206.jpg", media: "(device-width: 402px) and (device-height: 874px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-1290-2796.jpg", media: "(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-2796-1290.jpg", media: "(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-1179-2556.jpg", media: "(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-2556-1179.jpg", media: "(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-1170-2532.jpg", media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-2532-1170.jpg", media: "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-1284-2778.jpg", media: "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-2778-1284.jpg", media: "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-1125-2436.jpg", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-2436-1125.jpg", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-1242-2688.jpg", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-2688-1242.jpg", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-828-1792.jpg", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-1792-828.jpg", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-1242-2208.jpg", media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-2208-1242.jpg", media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-750-1334.jpg", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-1334-750.jpg", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-640-1136.jpg", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" },
  { rel: "apple-touch-startup-image", href: "icons/apple-splash-1136-640.jpg", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Nikolay Nenkov's CV website, built with React and Vite." />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <title>Nik CV</title>
        <Meta />
        <Links />
      </head>
      <body>
        <main>{children}</main>
        <ScrollRestoration />
        <Scripts />
      </body>
      <AppFooter />
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
