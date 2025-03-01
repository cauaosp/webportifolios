import { Footer, PortifolioDownload, TopMenu } from "./components/shared";
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
      <body>
        <div className="grid gap-2 h-screen bg-gray-950 pt-2 md:px-10 select-none">
          <TopMenu />
          <PortifolioDownload />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
