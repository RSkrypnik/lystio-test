"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Header } from "@/components/header";
import { Navigation, NavigationProvider } from "@/components/navigation";
import "./globals.css";

const queryClient = new QueryClient()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#F6F7F9]">
        <QueryClientProvider client={queryClient}>
          <NavigationProvider>
            <Header />
            <Navigation />
            {children}
          </NavigationProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
