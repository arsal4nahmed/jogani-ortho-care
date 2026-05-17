import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 font-serif text-xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-xl text-primary">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
          <a href="/" className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:bg-accent">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dr. Abhinav Jogani — Best Orthopedic & Joint Replacement Surgeon, Nagpur" },
      { name: "description", content: "Dr. Abhinav Jogani — MS Orthopedics (KEM Mumbai), DNB. Joint replacement, arthroscopy, complex trauma & sports medicine in Nagpur. 15+ years experience." },
      { name: "keywords", content: "best orthopedic surgeon in Nagpur, knee replacement Nagpur, hip replacement Nagpur, arthroscopy surgeon Nagpur, Dr Abhinav Jogani, joint replacement Nagpur, sports medicine Nagpur" },
      { name: "author", content: "Dr. Abhinav Jogani" },
      { property: "og:title", content: "Dr. Abhinav Jogani — Best Orthopedic & Joint Replacement Surgeon, Nagpur" },
      { property: "og:description", content: "Dr. Abhinav Jogani — MS Orthopedics (KEM Mumbai), DNB. Joint replacement, arthroscopy, complex trauma & sports medicine in Nagpur. 15+ years experience." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Dr. Abhinav Jogani" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dr. Abhinav Jogani — Best Orthopedic & Joint Replacement Surgeon, Nagpur" },
      { name: "twitter:description", content: "Dr. Abhinav Jogani — MS Orthopedics (KEM Mumbai), DNB. Joint replacement, arthroscopy, complex trauma & sports medicine in Nagpur. 15+ years experience." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d3278e7a-e235-4d16-a984-47f960b62a76/id-preview-334648a2--e8322996-c918-44f9-bda8-7b5f6577ac23.lovable.app-1778983179796.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d3278e7a-e235-4d16-a984-47f960b62a76/id-preview-334648a2--e8322996-c918-44f9-bda8-7b5f6577ac23.lovable.app-1778983179796.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Physician",
          name: "Dr. Abhinav Jogani",
          medicalSpecialty: "Orthopedic Surgery",
          telephone: "+91-70666-02602",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Opp. Saraf Chambers, Mount Road, Sadar",
            addressLocality: "Nagpur",
            postalCode: "440001",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "320",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
