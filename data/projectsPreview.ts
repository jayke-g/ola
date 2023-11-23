export interface ProjectsPreview {
  image: string[];
  name: string[];
  description: string[];
  title: string[];
}

const projectsPreview: ProjectsPreview[] = [
  {
    image: ["/projects/stws/main.jpg", "/projects/capturing/main.jpg", "/projects/logos/main.jpg"],
    name: ["Some Things We Shoot", "Capturing the Essence: Australia", "Logo Collection"],
    description: ["Redesign of my Youtube channels brand identity.", "Experience my migrant journey in Australia through a series of images in my handmade zine.", "Collection of logos I created over the past few years."],
    title: [
      "some-things-we-shoot",
      "capturing",
      "logos",
    ],
  },
  {
    image: ["/projects/cs/main.jpg",],
    name: ["Ceska Sporitelna Bank",],
    description: ["Social media posts I created for a client from my previous job."],
    title: [
      "cs-social-media",
    ],
  },
  // Add more sets as needed
];

export default projectsPreview;
