import "./styles/app.scss";
export const metadata = {
  title: "Aiprop",
  description: "A culinary journey funded to inspire innovation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo/favicon.png" />
      <body>{children}</body>
    </html>
  );
}
