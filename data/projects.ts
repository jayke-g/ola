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
    slug: "/cheap-and-fancy",
    title: "Cheap and Fancy",
    header: "/projects/img1.jpg",
    description: "A book about cheap and beautiful meals.",
    image1: "/projects/img1.jpg",
    image2: "/projects/img1.jpg"
  },
  {
    slug: "/some-things-we-shoot",
    title: "Some Things We Shoot",
    header: "/projects/img2.jpg",
    description: "A photography YouTube channels visual identity.",
    image1: "/projects/img2.jpg",
    image2: "/projects/img2.jpg"
  }
];

export default projects;
