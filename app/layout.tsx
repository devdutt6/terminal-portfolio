import type { Metadata } from 'next';
import Head from 'next/head';
import './globals.css';

export const metadata: Metadata = {
  title: 'devdutt.sh://',
  description: 'A shell like experience on web with my terminal portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>sh://</title>
        <meta name='description' content={'Terminal portfolio'} />
        {/* <link rel='canonical' href={ogUrl} /> */}
        <meta
          name='keywords'
          content={[
            'terminal',
            'portfolio',
            'terminal portfolio',
            'devdutt',
            'devduttsinh',
          ].join(', ')}
        />

        <meta property='og:title' content={'Terminal Portfolio'} />
        <meta
          property='og:description'
          content={'A shell experience but on web'}
        />
        {/* <meta property='og:image' content={ogImage} /> */}
        {/* <meta property='og:url' content={ogUrl} /> */}
        <meta property='twitter:creator' content='@devdutt_sinh' />
        <meta property='twitter:card' content='summary_large_image' />
      </Head>
      <body className='bg-background gradient h-screen text-sm sm:text-md md:text-base'>
        <div className='lg:aspect-video mx-auto items-center max-w-[1200px] px-2 lg:border-2 lg:border-foreground lg:rounded-lg overflow-scroll bg-background shd'>
          {children}
        </div>
      </body>
    </html>
  );
}

//  radial-gradient(circle,rgba(31,255,117,1) 0%, rgba(0,0,0,1) 100%);
