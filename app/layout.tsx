import "./globals.css";
import { Toaster } from "react-hot-toast";
import TanstackQueryProvider from "./providers/TanstackQueryProvider";
import NextAuthProvider from "./providers/NextAuthProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Sacco</title>
        <meta
          name="description"
          content="All your Sacco's needs in one place"
        />
      </head>
      <body>
        <Toaster position="top-center" />
        <NextAuthProvider>
          <TanstackQueryProvider>{children}</TanstackQueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
