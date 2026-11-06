import { serviceDetails } from "@/data/service-details";

// The service detail catalogue is the single source of truth for public service summaries.
export const services = serviceDetails.map(({ id, title, href, summary }) => ({
  id,
  title,
  href,
  summary,
}));
