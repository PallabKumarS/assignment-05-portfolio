import { baseUrl } from "@/utils/authOptions";
import ProjectDetails from "./ProjectDetails";

// generate meta data
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;

  const res = await fetch(`${baseUrl}/api/projects/${projectId}`);
  const { data: project } = await res.json();
  return {
    title: `${project?.title} | Pallab Kumar Sarker`,
    description: project?.description,
  };
};

export default async function DetailsPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;

  console.log(projectId);

  const res = await fetch(`${baseUrl}/api/projects/${projectId}`);
  const { data: project } = await res.json();
  console.log(project);

  console.log(res);

  return (
    <div className="min-h-screen mx-auto py-16 px-4">
      <ProjectDetails data={project} />
    </div>
  );
}
