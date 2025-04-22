import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons",
  },
  { rel: "icon", type: "image/jpg", href: "favicon/favicon-32x32.jpg" },
  { rel: "apple-touch-icon", sizes: "48x48", href: "favicon/favicon-48x48.jpg" },
  { rel: "apple-touch-icon", sizes: "72x72", href: "favicon/favicon-72x72.jpg" },
  { rel: "apple-touch-icon", sizes: "96x96", href: "favicon/favicon-96x96.jpg" },
  { rel: "apple-touch-icon", sizes: "256x256", href: "favicon/favicon-256x256.jpg" },
  { rel: "apple-touch-icon", sizes: "384x384", href: "favicon/favicon-384x384.jpg" },
  { rel: "apple-touch-icon", sizes: "512x512", href: "favicon/favicon-512x512.jpg" },
  { rel: "manifest", href: "manifest.json", crossOrigin: "anonymous" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
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
        <noscript>You need to enable JavaScript to run this app.</noscript>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
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
