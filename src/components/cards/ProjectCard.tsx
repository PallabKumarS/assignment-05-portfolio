"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FiGithub, FiGlobe } from "react-icons/fi";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { BackgroundGradient } from "../ui/gradient";
import ImageCarousel from "../shared/ImageCarousel";
import { TMongoose, TProject } from "@/types/types";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Modal } from "../shared/Modal";
import ProjectForm from "../forms/ProjectForm";
import { useState } from "react";
import ConfirmationBox from "../shared/ConfirmationBox";
import { toast } from "sonner";

interface ProjectCardProps {
  data: TProject & TMongoose;
  edit?: boolean;
}

const ProjectCard = ({ data, edit = false }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    title,
    images,
    description,
    technology,
    liveLink,
    clientRepo,
    serverRepo,
  } = data;

  const deleteProject = async (id: string) => {
    const toastId = toast.loading("Deleting project...");

    const res = await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      toast.success("Project deleted successfully", {
        id: toastId,
      });
    } else {
      toast.error("Something went wrong", {
        id: toastId,
      });
    }
  };

  return (
    <CardContainer className="inter-var w-72 sm:w-96 md:w-full ">
      <BackgroundGradient className="rounded-[22px] p-4 bg-white dark:bg-zinc-900">
        <Card className="w-full bg-transparent border-none">
          <CardBody className="relative w-72 sm:w-96 md:w-full h-fit flex flex-col gap-y-3 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-2 md:p-6">
            {/* title  */}
            <CardItem
              translateZ="50"
              className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white"
            >
              {title}
            </CardItem>

            {/* image here  */}
            <CardItem translateZ="100" className="">
              <ImageCarousel images={images} title={title} />
            </CardItem>

            <CardItem
              translateZ="60"
              className="text-neutral-500 text-xs sm:text-sm mt-4 dark:text-neutral-300"
            >
              {description}
            </CardItem>

            {/* technology here  */}
            <CardItem translateZ="50" className="flex flex-wrap gap-1 md:gap-2">
              {technology.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs sm:text-sm animate-shine bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 bg-[length:200%_100%]"
                >
                  {tech}
                </Badge>
              ))}
            </CardItem>

            {/* links here  */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <CardItem translateZ="40">
                <Link href={liveLink} target="_blank">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm"
                  >
                    <FiGlobe className="w-3 h-3 md:w-4 md:h-4" />
                    Live Site
                  </Button>
                </Link>
              </CardItem>

              <CardItem translateZ="40">
                <Link href={clientRepo} target="_blank">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm"
                  >
                    <FiGithub className="w-3 h-3 md:w-4 md:h-4" />
                    Client
                  </Button>
                </Link>
              </CardItem>

              <CardItem translateZ="40">
                <Link href={serverRepo!} target="_blank">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs sm:text-sm"
                  >
                    <FiGithub className="w-3 h-3 md:w-4 md:h-4" />
                    Server
                  </Button>
                </Link>
              </CardItem>
            </div>

            {/* management button here  */}
            {edit && (
              <div className="mt-auto flex items-center gap-2">
                <CardItem translateZ="40">
                  <Modal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    trigger={
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs sm:text-sm"
                      >
                        <FiEdit className="w-3 h-3 md:w-4 md:h-4" />
                        Edit
                      </Button>
                    }
                    title="Edit Project"
                    content={<ProjectForm setIsOpen={setIsOpen} data={data} />}
                  />
                </CardItem>
                <CardItem translateZ="40">
                  <ConfirmationBox
                    trigger={
                      <Button
                        variant="destructive"
                        size="sm"
                        className="text-xs sm:text-sm"
                      >
                        <FiTrash2 className="w-3 h-2  md:w-4 md:h-4" />
                        Delete
                      </Button>
                    }
                    onConfirm={() => deleteProject(data._id)}
                  />
                </CardItem>
              </div>
            )}
          </CardBody>
        </Card>
      </BackgroundGradient>
    </CardContainer>
  );
};

export default ProjectCard;
