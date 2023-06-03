import { join } from "path";

const controlabout = (req, res, next) => {
  console.log(join(process.cwd(), "Views", "about.html"));
  res.sendFile(join(process.cwd(), "Views", "about.html"));
};

export { controlabout };
