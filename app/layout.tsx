import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salary Transparency Checker – LinkedIn Job Compliance",
  description: "Scan LinkedIn job postings to verify salary range disclosure compliance with NY, CA, CO, and other state laws."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="88a4e260-89fd-4ca1-a224-aaf34c9d8fdd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
