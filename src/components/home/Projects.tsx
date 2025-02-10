"use client";

import { motion } from "framer-motion";
import TQ1 from "../../../public/TQ1.png";
import TQ2 from "../../../public/TQ2.png";
import TQ3 from "../../../public/TQ3.png";
import HE1 from "../../../public/HE1.png";
import HE2 from "../../../public/HE2.png";
import HE3 from "../../../public/HE3.png";
import SS1 from "../../../public/SS1.png";
import SS2 from "../../../public/SS2.png";
import SS3 from "../../../public/SS3.png";
import CustomSlider from "../CustomSlider";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

const Projects = () => {
  const projects = [
    {
      name: "Tour Quest",
      images: [TQ1, TQ2, TQ3],
      info: "Embark on a captivating journey through the vibrant landscapes and rich cultural tapestry of Bangladesh with our MERN stack-powered website. As your gateway to immersive travel experiences, we seamlessly blend modern technology with the enchanting allure of Bangladesh.",
      technology: [
        "Html",
        "Css",
        "Tailwind",
        "React",
        "JWT",
        "DaisyUi",
        "Mongoose",
        "NodeJs",
        "Express",
        "Firebase",
        "Stripe",
      ],
      liveLink: "https://pks-tour-guide.web.app/",
      clientRepo: "https://github.com/PallabKumarS/tour-quest-client",
      serverRepo: "https://github.com/PallabKumarS/tour-quest-server",
    },
    {
      name: "Hype Electronic",
      images: [HE1, HE2, HE3],
      info: "Explore our advanced MERN stack platform for electronic component repair. We blend technology and expertise to revive your devices. From intricate circuit boards to complex components, our platform offers a range of services designed to meet your electronic repair needs.",
      technology: [
        "Html",
        "Css",
        "Tailwind",
        "React",
        "JWT",
        "DaisyUi",
        "MongoDB",
        "NodeJs",
        "Express",
        "Firebase",
      ],
      liveLink: "https://pks-service.web.app/",
      clientRepo: "https://github.com/PallabKumarS/hype-electronic-client",
      serverRepo: "https://github.com/PallabKumarS/hype-electronic-server",
    },
    {
      name: "Spark Splash",
      images: [SS1, SS2, SS3],
      info: "Step into a world of technological wonders with our MERN stack-powered electronic product shop. From the latest gadgets to cutting-edge appliances, our platform offers a curated collection of top-quality electronic products to meet the diverse needs of tech enthusiasts.",
      technology: [
        "Html",
        "Css",
        "Tailwind",
        "React",
        "DaisyUi",
        "MongoDB",
        "NodeJs",
        "Express",
        "Firebase",
      ],
      liveLink: "https://pks-brands.web.app/",
      clientRepo: "https://github.com/PallabKumarS/spark-splash-client",
      serverRepo: "https://github.com/PallabKumarS/spark-splash-server",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 pb-20">
        {projects.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            key={idx}
          >
            <div>
              <Card className="py-4 bg-base-200 min-h-[710px]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <h4 className="font-bold text-3xl text-gray-400">
                    {project.name}
                  </h4>
                </CardHeader>
                <CardContent className="overflow-visible py-2">
                  <div className="my-3">
                    <CustomSlider images={project.images}></CustomSlider>
                  </div>
                  <p className="text-md font-medium text-gray-300">
                    {project.info}
                  </p>{" "}
                  <br />
                  <div className="flex flex-wrap gap-2 text-blue-200">
                    Technology Used :{" "}
                    {project?.technology?.map((item, idx) => (
                      <p
                        className="border-2 border-sky-300 rounded-r-full rounded-l-full px-2 text-indigo-300"
                        key={idx}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-5">
                    <a
                      className="text-lime-100 font-semibold underline"
                      href={project.liveLink}
                    >
                      Live Link
                    </a>
                    <a
                      className="text-lime-100 font-semibold underline"
                      href={project.clientRepo}
                    >
                      Client Repo
                    </a>
                    <a
                      className="text-lime-100 font-semibold underline"
                      href={project.serverRepo}
                    >
                      Server Repo
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
