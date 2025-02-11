import { Metadata } from "next";
import ProjectPage from "./ProjectPage";

export const metadata: Metadata = {
  title: "Projects | Pallab Kumar Sarker",
  description: "This is Project Page",
};

const Page = () => {
  return (
    <div className="container mx-auto md:px-5">
      <ProjectPage />
    </div>
  );
};

export default Page;
