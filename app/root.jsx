import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import globalStylesUrl from "~/styles/global.css";

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        {/* <Meta />
        <Links /> */}
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        {/* <ScrollRestoration />
        <Scripts />
        <LiveReload /> */}
      </body>
    </html>
  );
}

function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo">
          Remix
        </Link>
        <ul className="nav">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <div className="container">{children}</div>
    </>
  );
}
