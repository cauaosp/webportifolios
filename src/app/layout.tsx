import { Footer, TopMenu } from "../components/layout";
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
        <link rel="icon" href="/images/code-svgrepo-green.svg" type="image/svg+xml" />
      </head>
      <body>
        <div>
          <TopMenu />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
