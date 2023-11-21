import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import "@/styles/reset.css";
import Background from "@/components/background";
import { ScrollProgress } from "@/components/progress";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Huala 的个人主页",
  description: "个人主页",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <main>{children}</main>
          <Background />
          <ScrollProgress />
        </ThemeProvider>
      </body>
    </html>
  );
}
