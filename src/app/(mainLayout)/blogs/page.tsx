import { baseUrl } from "@/utils/authOptions";
import { Metadata } from "next";
import AllBlogs from "./AllBlogs";

export const metadata: Metadata = {
  title: "Portfolio | Blogs",
  description: "This is Blogs Page",
};

export default async function BlogsPage() {
  const res = await fetch(`${baseUrl}/api/blogs`, {
    next: {
      revalidate: 30,
    },
  });

  const data = await res.json();

  return (
    <div className="container mx-auto py-10 md:px-5 min-h-screen">
      <AllBlogs data={data?.data} />
    </div>
  );
}
