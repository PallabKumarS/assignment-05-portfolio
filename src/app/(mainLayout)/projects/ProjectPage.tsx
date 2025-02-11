"use client";

import ProjectCard from "@/components/cards/ProjectCard";
import { NoData } from "@/components/shared/NoData";
import { TMongoose, TProject } from "@/types/types";
import { baseUrl } from "@/utils/authOptions";
import { useEffect, useState } from "react";

const ProjectPage = () => {
  const [data, setData] = useState<(TProject & TMongoose)[]>([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/projects`)
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-semibold">All projects</h1>
      </div>
      <div>
        {data?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 items-center justify-center gap-4">
            {data?.map((project) => (
              <ProjectCard data={project} key={project?._id} />
            ))}
          </div>
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
