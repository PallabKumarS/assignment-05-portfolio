"use client";

import BlogCard from "@/components/cards/BlogCard";
import BlogForm from "@/components/forms/BlogForm";
import { Modal } from "@/components/shared/Modal";
import { NoData } from "@/components/shared/NoData";
import ShimmerButton from "@/components/shared/ShimmerButton";
import { TBlog, TMongoose } from "@/types/types";
import { baseUrl } from "@/utils/authOptions";
import { useEffect, useState } from "react";

const AdminBlogPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<(TBlog & TMongoose)[]>([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/blogs`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-semibold">All Blogs</h1>
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title="Create Project"
          content={<BlogForm setIsOpen={setIsOpen} />}
          trigger={<ShimmerButton>Add Blog</ShimmerButton>}
        />
      </div>
      <div>
        {data?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 items-center justify-center gap-4">
            {data?.map((blog) => (
              <BlogCard edit={true} data={blog} key={blog?._id} />
            ))}
          </div>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default AdminBlogPage;
