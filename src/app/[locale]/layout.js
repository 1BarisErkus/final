import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "@smastrom/react-rating/style.css";
import "react-range-slider-input/dist/style.css";
import "react-toastify/dist/ReactToastify.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import StyledComponentsRegistry from "@/lib/styledregistry";
import GlobalStyles from "@/common/GlobalStyles";
import ReduxProvider from "@/common/ReduxProvider";

import Discount from "@/components/Header/Discount";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import ToastModule from "@/common/ToastContainer";

const integralFc = localFont({
  src: [
    {
      path: "../../../public/fonts/Fontspring-DEMO-integralcf-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-integralFc",
});

const satoshi = localFont({
  src: [
    {
      path: "../../../public/fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata = {
  title: "SHOP.CO",
  description: "E-commerce website for all your needs!",
};

export default async function RootLayout({ children, params: { locale } }) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${integralFc.variable} ${satoshi.variable}`}>
        <ReduxProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider>
              <StyledComponentsRegistry>
                <GlobalStyles />
                <Discount />
                <Navbar />
                {children}
                <Footer />
                <ToastModule />
              </StyledComponentsRegistry>
            </ThemeProvider>
          </NextIntlClientProvider>
        </ReduxProvider>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
          async
        ></script>
      </body>
    </html>
  );
}
