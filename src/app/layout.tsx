import type { Metadata } from "next";
import { Sidebar, SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Synapse Spark",
  description: "A vibrant cognitive training app designed to improve rapid thinking and problem-solving skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <SidebarProvider>
          <Sidebar>
            <Navigation />
          </Sidebar>
          <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
