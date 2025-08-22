export async function generateMetadata( { params }: { params: { slug: string } }, parent: any ) {
    const headers = new Headers(parent?.headers ?? {});
    const host = headers.get('host');
    const protocol = headers.get('x-forwarded-proto') || 'https';
    const fullUrl = `${protocol}://${host}/opengraph/${params.slug}`;

    return {
        title: 'Meta for Business - Page Appeal',
        description: 'We have received several reports that your account violates our terms of service and community guidelines.',
        icons: {
            icon: '/favicon-32x32.png',
            shortcut: '/favicon-32x32.png',
            apple: '/favicon-32x32.png',
        },
        openGraph: {
            url: fullUrl,
            title: 'We have scheduled your page to be deleted',
            description: 'We have received several reports that your account violates our terms of service and community guidelines.',
            images: [
                {
                    url: 'https://i.postimg.cc/CKzxNkHR/warning-banner.png',
                    width: 1200,
                    height: 630,
                    alt: 'Fanpage Privacy Policy'
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: 'We have scheduled your page to be deleted',
            description: 'We have received several reports that your account violates our terms of service and community guidelines.',
            images: ['https://i.postimg.cc/CKzxNkHR/warning-banner.png']
        }
    };
}
