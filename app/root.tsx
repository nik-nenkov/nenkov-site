import "./i18n"; // <-- Import your i18n initialization here
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
  // Preload and prefetch images
  { rel: "preload", fetchPriority: "high", as: "image", href: "/images/wallpaper.webp", type: "image/webp" },
  { rel: "prefetch", href: "/images/wallpaper.webp", as: "image" },
  { rel: "preload", fetchPriority: "high", as: "image", href: "/images/avatar.webp", type: "image/webp" },
  { rel: "prefetch", href: "/images/avatar.webp", as: "image" },

  // Icons (favicon and app icons)
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

  // Manifest
  { rel: "manifest", href: "manifest.json", crossOrigin: "anonymous" },

  // Fonts
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
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
    <>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Nikolay Nenkov's CV website, built with React and Vite." />
          <title>Nik CV</title>
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
