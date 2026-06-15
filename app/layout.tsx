import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moch Rozi Rizky Priyanto — Data Engineer",
  description: "Data Engineer with experience in web scraping, scalable data pipelines, and API development.",
  keywords: ["Data Engineer", "Web Scraping", "ETL", "Python", "Malang", "Indonesia"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
