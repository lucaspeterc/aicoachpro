import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "AI Coach Pro",
  description: "AI Coach Pro is a customer support platform that helps you manage your customer interactions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
