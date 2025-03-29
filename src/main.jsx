import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { opBNB, opBNBTestnet } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { store } from "./Redux/Store.js";
import { Provider } from "react-redux";

// import { getDefaultConfig } from "@rainbow-me/rainbowkit";
export const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "my project Id",
  chains: [opBNB],
  ssr: true,
});

const queryClient = new QueryClient();


createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {/* <StrictMode> */}
            <Toaster />
            <App />
          {/* </StrictMode> */}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </Provider>
);
