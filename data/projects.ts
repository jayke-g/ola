export interface Projects {
  slug: string;
  title: string;
  header: string;
  description: string;
  image1: string;
  image2: string;
}

const projects: Projects[] = [
  {
    slug: "/placeholder-project",
    title: "Placeholder Project",
    header: "/projects/placeholder/header.jpg",
    description: "Placeholder description.",
    image1: "/projects/placeholder/1.jpg",
    image2: "/projects/placeholder/2.jpg"
  },
];

export default projects;
