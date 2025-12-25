import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://falada-landing.vercel.app/sitemap.xml",
    host: "https://falada-landing.vercel.app",
  };
}
