export interface ProjectsPreview {
  image: string[];
  name: string[];
  description: string[];
  title: string[];
}

const projectsPreview: ProjectsPreview[] = [
  {
    image: ["/projects/rere/main.jpg", "/projects/posters/main.jpg", "/projects/crush/main.jpg"],
    name: ["Art Book Store Brand Identity", "Posters Collection", "Wine Packaging Design"],
    description: ["Brand identity for an art bookstore tailored for the creative spirits of today.", "A collection of posters I created for my TikTok account.", "Minimalist packaging for a wine brand called Crush Vino."],
    title: [
      "rere",
      "posters",
      "crush",
    ],
  },
  {
    image: ["/projects/capturing/main.jpg", "/projects/stws/main.jpg", "/projects/logos/main.jpg"],
    name: ["Capturing the Essence: Australia", "Some Things We Shoot", "Logo Collection"],
    description: ["Experience my migrant journey in Australia through a series of images in my handmade zine.", "Redesign of my Youtube channels brand identity.", "Collection of logos I created over the past few years."],
    title: [
      "capturing-australia",
      "some-things-we-shoot",
      "logos"
    ],
  },
  {
    image: ["/projects/cs/main.jpg"],
    name: ["Ceska Sporitelna Bank"],
    description: ["Social media posts I created for a client from my previous job."],
    title: [
      "cs-social-media"
    ],
  },
  // Add more sets as needed
];

export default projectsPreview;
