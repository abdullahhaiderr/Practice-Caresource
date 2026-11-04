import type { MetadataRoute } from "next";
import { business } from "@/config/business";
import { serviceDetails } from "@/data/service-details";
import { specialtyDetails } from "@/data/specialty-details";
import { blogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/specialties", priority: 0.8, changeFrequency: "monthly" },
    { path: "/why-choose-us", priority: 0.7, changeFrequency: "monthly" },
    { path: "/how-it-works", priority: 0.7, changeFrequency: "monthly" },
    { path: "/hipaa-security", priority: 0.6, changeFrequency: "yearly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/resources", priority: 0.6, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms-and-conditions", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cookie-policy", priority: 0.3, changeFrequency: "yearly" },
  ].map((route) => ({
    url: new URL(route.path, business.url).toString(),
    lastModified: now,
    changeFrequency: route.changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: route.priority,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = serviceDetails.map((service) => ({
    url: new URL(service.href, business.url).toString(),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const specialtyRoutes: MetadataRoute.Sitemap = specialtyDetails.map(
    (specialty) => ({
      url: new URL(specialty.href, business.url).toString(),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: new URL(`/blog/${post.slug}`, business.url).toString(),
    lastModified: new Date(`${post.date}T00:00:00Z`),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...specialtyRoutes, ...blogRoutes];
}
