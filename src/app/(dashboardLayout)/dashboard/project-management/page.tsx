import { Metadata } from "next";
import AdminProjectPage from "./AdminProjectPage";

export const metadata: Metadata = {
  title: "Project Management",
  description: "Add, delete or edit projects here",
};

const ProjectManageMentPage = () => {
  return <AdminProjectPage />;
};

export default ProjectManageMentPage;
