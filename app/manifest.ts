import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stretching Remindly",
    short_name: "Remindly",
    description: "macOS stretching reminder app for healthy work habits",
    start_url: "/",
    display: "standalone",
    background_color: "#1e1433",
    theme_color: "#ff5ca3",
    icons: [
      {
        src: "/images/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
