export interface ProjectsPreview {
  image: string[];
  name: string[];
  description: string[];
  title: string[];
}

const projectsPreview: ProjectsPreview[] = [
  {
    image: ["/projects/rere/main.jpg", "/projects/posters/main.jpg", "/projects/capturing/main.jpg"],
    name: ["Art Book Store Brand Identity", "Posters Collection", "Capturing the Essence: Australia"],
    description: ["Brand identity for an art bookstore tailored for the creative spirits of today.", "A collection of posters I created for my TikTok account.", "Experience my migrant journey in Australia through a series of images in my handmade zine."],
    title: [
      "rere",
      "posters",
      "capturing-australia",
    ],
  },
  {
    image: ["/projects/stws/main.jpg", "/projects/logos/main.jpg", "/projects/cs/main.jpg"],
    name: ["Some Things We Shoot", "Logo Collection", "Ceska Sporitelna Bank"],
    description: ["Redesign of my Youtube channels brand identity.", "Collection of logos I created over the past few years.", "Social media posts I created for a client from my previous job."],
    title: [
      "some-things-we-shoot",
      "logos",
      "cs-social-media"
    ],
  },
  // Add more sets as needed
];

export default projectsPreview;
