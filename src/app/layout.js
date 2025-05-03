
import "./globals.css";

export const metadata = {
  title: "RoyalBreed International School",
  description: "RoyalBreed International School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[100vw] overflow-x-hidden">{children}</body>
    </html>
  );
}
