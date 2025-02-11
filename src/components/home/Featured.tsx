"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ImageCarousel from "@/components/shared/ImageCarousel";
import { FiArrowRight, FiGithub, FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";

const Featured = () => {
  const featured = {
    name: "Tour Quest",
    images: ["/TQ1.png", "/TQ2.png", "/TQ3.png"],
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
  };

  return (
    <section className="py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Project
        </h2>
        <Card className="max-w-5xl mx-auto bg-gray-800/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="w-full h-full">
                <ImageCarousel images={featured.images} title={featured.name} />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{featured.name}</h3>
                <p className="text-gray-300">{featured.info}</p>
                <div className="flex flex-wrap gap-2">
                  {featured.technology.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-gray-700 hover:bg-gray-600"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button variant="default" className="group" asChild>
                    <a
                      href={featured.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGlobe className="mr-2 h-4 w-4" />
                      Live Site
                      <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button variant="outline" className="group" asChild>
                    <a
                      href={featured.clientRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="mr-2 h-4 w-4" />
                      Client Code
                      <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                  <Button variant="outline" className="group" asChild>
                    <a
                      href={featured.serverRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="mr-2 h-4 w-4" />
                      Server Code
                      <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default Featured;
