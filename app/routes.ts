import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("projects", "routes/projects/view-projects.tsx"), // Add the projects route
] satisfies RouteConfig;
