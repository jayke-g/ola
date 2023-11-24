export interface ProjectsPreview {
  image: string[];
  name: string[];
  description: string[];
  title: string[];
}

const projectsPreview: ProjectsPreview[] = [
  {
    image: ["/projects/rere/main.jpg", "/projects/capturing/main.jpg", "/projects/stws/main.jpg"],
    name: ["Art Book Store Brand Identity", "Capturing the Essence: Australia", "Some Things We Shoot"],
    description: ["Brand identity for an art bookstore tailored for the creative spirits of today.", "Experience my migrant journey in Australia through a series of images in my handmade zine.", "Redesign of my Youtube channels brand identity."],
    title: [
      "rere",
      "capturing-australia",
      "some-things-we-shoot",
    ],
  },
  {
    image: ["/projects/logos/main.jpg", "/projects/cs/main.jpg", "/projects/coming_soon.jpg"],
    name: ["Logo Collection", "Ceska Sporitelna Bank", "Coming Soon"],
    description: ["Collection of logos I created over the past few years.", "Social media posts I created for a client from my previous job.", "Watch this space."],
    title: [
      "logos",
      "cs-social-media",
      "coming-soon"
    ],
  },
  // Add more sets as needed
];

export default projectsPreview;
