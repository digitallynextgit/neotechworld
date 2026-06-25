"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PreLoader from "@/components/Common/PreLoader";
import ToasterContext from "@/app/api/contex/ToasetContex";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return <PreLoader />;
  }

  return (
    <SessionProvider>
      <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
        <ToasterContext />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </SessionProvider>
  );
}
