import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>cauaosp</title>
        <meta name="description" content="This is my website description." />
        <link rel="icon" href="/icons/code-svgrepo.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
