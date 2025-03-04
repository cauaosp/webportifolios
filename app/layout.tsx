import { CurriculoDownload, Footer, TopMenu } from "./components/shared";
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
        <link rel="icon" href="/icons/code-svgrepo-green.svg" type="image/svg+xml" />
      </head>
      <body>
        <div className="grid gap-2 h-screen bg-gray-950 pt-2 md:px-10 select-none">
          <TopMenu />
          <CurriculoDownload />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
