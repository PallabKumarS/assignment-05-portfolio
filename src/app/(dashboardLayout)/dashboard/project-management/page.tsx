"use client";

import ProjectForm from "@/components/forms/ProjectForm";
import { Modal } from "@/components/shared/Modal";
import ShimmerButton from "@/components/shared/ShimmerButton";
import { TMongoose, TProject } from "@/types/types";
import { useEffect, useState } from "react";

const ProjectManageMentPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<(TProject & TMongoose)[]>([]);

  useEffect(() => {
    fetch(`/api/projects`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-semibold">All projects</h1>
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title="Create Project"
          content={<ProjectForm setIsOpen={setIsOpen} />}
          trigger={<ShimmerButton>Add Project</ShimmerButton>}
        />
      </div>
      <div>{data?.length > 0}</div>
    </div>
  );
};

export default ProjectManageMentPage;
