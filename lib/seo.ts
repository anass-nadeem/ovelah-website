import { Metadata } from "next";

interface MetadataProps {
  title: string;
  description: string;
  url: string;
  image?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  url,
  image = "/dash-hero.png",
  noIndex = false,
}: MetadataProps): Metadata {
  return {
    title,
    description,
    metadataBase: new URL("https://ovelah.com"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Ovelah",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}