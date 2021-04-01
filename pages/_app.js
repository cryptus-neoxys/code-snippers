import { UserProvider } from "@auth0/nextjs-auth0";
import { ThemeProvider } from "next-themes";

import "../styles/app.css";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ThemeProvider
        attribute="class"
        storageKey="nightwind-mode"
        defaultTheme="dark" // default "light"
      >
        <div className="w-full min-h-screen p-10 bg-blue-100">
          <div className="max-w-2xl mx-auto">
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    </UserProvider>
  );
}

export default MyApp;
