import "./globals.css";

export const metadata = {
  title: "pulse — Business analytics",
  description: "A modern SaaS analytics dashboard for revenue, customers and growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}