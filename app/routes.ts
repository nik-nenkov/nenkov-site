import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about/view-about.tsx"), 
  route("books", "routes/books/view-books.tsx"), 
  route("skills", "routes/skills/view-skills.tsx"), 
  route("contact", "routes/contact/view-contact.tsx"), 
  route("courses", "routes/courses/view-courses.tsx"), 
  route("diagrams", "routes/diagrams/view-diagrams.tsx"), 
  route("projects", "routes/projects/view-projects.tsx"),
] satisfies RouteConfig;
