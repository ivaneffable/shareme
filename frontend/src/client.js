import { createClient } from "@sanity/client";
import imageURLBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-05-13",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageURLBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
