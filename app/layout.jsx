import './globals.css';
import { DM_Sans } from 'next/font/google';
import { headers } from 'next/headers';
import { optimisticFont } from './fonts';

const dmSans = DM_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export async function generateMetadata() {
  const headersList = headers();
  const protocol = headersList.get('x-forwarded-proto') || 'https';
  const host = headersList.get('host') || 'localhost:3000';
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "Furniture Next App - Somor Mk",
    description: "Designed by Somor Mk",
    icons: {
      icon: '/favicon.png',
    },
    openGraph: {
      images: [`${metadataBase.origin}/thumbnail.png`],
      description: "Online furniture apps simplify home shopping with convenience, variety, and affordability. Browse easily, compare prices."
    }
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-5TGXPNEDCF"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5TGXPNEDCF');
          `
        }} />
      </head>
      <body className={`${dmSans.className} ${optimisticFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
