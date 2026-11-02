import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { seoConfig } from '@/config/seo';
import { siteConfig } from '@/config/site';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { NavigationProgress } from '@/components/layout/navigation-progress';
import { SectionScrollManager } from '@/components/layout/section-scroll-manager';
import './globals.css';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    template: `%s | ${seoConfig.siteName}`,
    default: seoConfig.defaultTitle,
  },
  description: seoConfig.defaultDescription,
  openGraph: {
    type: 'website',
    siteName: seoConfig.siteName,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: [{ url: seoConfig.ogImage }],
  },
  twitter: {
    card: 'summary_large_image',
    site: seoConfig.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: './',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full overflow-x-clip`}
    >
      <body className="min-h-full flex flex-col antialiased text-content-primary overflow-x-clip max-w-full">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-brand-600 text-white rounded-md font-medium shadow-lg"
        >
          Skip to content
        </a>

        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}/brand/yutomax-logo-stacked.png`,
            description: siteConfig.description,
            email: siteConfig.contact.email,
            sameAs: siteConfig.socialLinks.map((link) => link.url),
          }}
        />

        <NavigationProgress />
        <SectionScrollManager />
        <Header />
        <main id="main-content" className="flex-1 overflow-x-clip w-full max-w-full">
          {children}
        </main>
        <Footer />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >{`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "yv56b9nbd8");
        `}</Script>
      </body>
    </html>
  );
}
