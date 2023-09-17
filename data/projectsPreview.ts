export interface ProjectsPreview {
  image: string[];
  name: string[];
  description: string[];
  title: string[];
}

const projectsPreview: ProjectsPreview[] = [
  {
    image: ["/projects/placeholder/preview.jpg", "/projects/placeholder/preview.jpg", "/projects/placeholder/preview.jpg"],
    name: ["placeholder project", "placeholder project", "placeholder project"],
    description: ["Placeholder description", "Placeholder description", "Placeholder description"],
    title: [
      "/placeholder-project",
      "/placeholder-project",
      "/placeholder-project",
    ],
  },
  {
    image: ["/projects/placeholder/preview.jpg", "/projects/placeholder/preview.jpg", "/projects/placeholder/preview.jpg"],
    name: ["placeholder project", "placeholder project", "placeholder project"],
    description: ["Placeholder description", "Placeholder description", "Placeholder description"],
    title: [
      "/placeholder-project",
      "/placeholder-project",
      "/placeholder-project",
    ],
  },
  {
    image: ["/projects/placeholder/preview.jpg", "/projects/placeholder/preview.jpg", "/projects/placeholder/preview.jpg"],
    name: ["placeholder project", "placeholder project", "placeholder project"],
    description: ["Placeholder description", "Placeholder description", "Placeholder description"],
    title: [
      "/placeholder-project",
      "/placeholder-project",
      "/placeholder-project",
    ],
  },
  // Add more sets as needed
];

export default projectsPreview;
