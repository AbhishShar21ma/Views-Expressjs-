import { join } from "path";

const controlhome = (req, res) => {
  console.log(join(process.cwd(), "Views", "index.html"));
  res.sendFile(join(process.cwd(), "Views", "index.html"));
};

export { controlhome };
