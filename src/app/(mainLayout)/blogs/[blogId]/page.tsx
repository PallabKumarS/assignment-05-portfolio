import { baseUrl } from "@/utils/authOptions";
import BlogDetails from "./BlogDetails";

// generate meta data
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
  const { blogId } = await params;

  const res = await fetch(`${baseUrl}/api/blogs/${blogId}`);
  const { data: blog } = await res.json();
  return {
    title: `${blog?.title} | Pallab Kumar Sarker`,
    description: blog?.content.slice(0, 160),
  };
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;

  const res = await fetch(`${baseUrl}/api/blogs/${blogId}`);
  const { data: blog } = await res.json();

  return (
    <div className="min-h-screen mx-auto py-16 px-4">
      <BlogDetails data={blog} />
    </div>
  );
}
