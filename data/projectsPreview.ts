export interface ProjectsPreview {
  image: string[];
  name: string[];
  description: string[];
  title: string[];
}

const projectsPreview: ProjectsPreview[] = [
  {
    image: ["/projects/img1.jpg", "/projects/img2.jpg", "/projects/img3.jpg"],
    name: ["cheap and fancy", "some things we shoot", "Project 3"],
    description: [
      "A book about cheap and beautiful meals.",
      "A photography YouTube channels visual identity.",
      "Description 3",
    ],
    title: ["cheap-and-fancy", "some-things-we-shoot", "test-test"],
  },
  {
    image: ["/projects/img4.jpg", "/projects/img5.jpg", "/projects/img6.jpg"],
    name: ["Project 4", "Project 5", "Project 6"],
    description: ["Description 4", "Description 5", "Description 6"],
    title: [
      "cheap-and-fancy",
      "hello-world",
      "some-things-we-shoot",
    ],
  },
  {
    image: ["/projects/img7.jpg", "/projects/img8.jpg", "/projects/img9.jpg"],
    name: ["Project 7", "Project 8", "Project 9"],
    description: ["Description 7", "Descriptions 8", "Description 9"],
    title: [
      "/cheap-and-fancy",
      "/some-things-we-shoot",
      "/some-things-we-shoot",
    ],
  },
  // Add more sets as needed
];

export default projectsPreview;
