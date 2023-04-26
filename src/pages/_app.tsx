import { useState } from "react";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Analytics />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
