import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
const clerkFrontendApi = "pk_test_Zml0LXNoYWQtODIuY2xlcmsuYWNjb3VudHMuZGV2JA"; // Replace with your Clerk frontend API
export const metadata: Metadata = {
  title: "Beyond Boundaries ",
  description: "Modern & Minimal JS Mastery Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider frontendApi={clerkFrontendApi}>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="finvergelogo.png" />
        </head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
