"use client";

import Image from "next/image";
import frontEnd from "../../../public/front-end.png";
import backEnd from "../../../public/back-end.png";
import jwt from "../../../public/jwt.png";
import { Progress } from "@/components/ui/progress";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaTools,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "../ui/card";

const SkillSet = () => {
  return (
    <div className="flex flex-col gap-5 md:flex-row justify-center items-stretch pb-10 relative flex-wrap">
      {/* Frontend Card */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="w-full md:w-96"
      >
        <Card className="h-full bg-gray-800">
          <CardHeader className="flex flex-row gap-3 items-center">
            <Image alt="frontend" src={frontEnd} width={40} />
            <p className="text-xl text-gray-300">Frontend Development</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <SiNextdotjs
                    className="text-2xl text-sky-600"
                    title="Next.js"
                  />
                  <span className="text-sm text-gray-300">Next.js</span>
                </div>
                <span className="text-sm text-gray-300">90%</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <FaReact className="text-2xl text-sky-600" title="React" />
                  <span className="text-sm text-gray-300">React</span>
                </div>
                <span className="text-sm text-gray-300">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <FaHtml5 className="text-2xl text-orange-600" title="HTML5" />
                  <span className="text-sm text-gray-300">HTML5</span>
                </div>
                <span className="text-sm text-gray-300">95%</span>
              </div>
              <Progress value={95} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <FaCss3Alt className="text-2xl text-sky-600" title="CSS3" />
                  <span className="text-sm text-gray-300">CSS3</span>
                </div>
                <span className="text-sm text-gray-300">90%</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <SiTailwindcss
                    className="text-2xl text-sky-600"
                    title="Tailwind CSS"
                  />
                  <span className="text-sm text-gray-300">Tailwind CSS</span>
                </div>
                <span className="text-sm text-gray-300">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <RiJavascriptFill
                    className="text-2xl text-yellow-600"
                    title="JavaScript"
                  />
                  <span className="text-sm text-gray-300">JavaScript</span>
                </div>
                <span className="text-sm text-gray-300">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <SiTypescript
                    className="text-2xl text-blue-600"
                    title="TypeScript"
                  />
                  <span className="text-sm text-gray-300">TypeScript</span>
                </div>
                <span className="text-sm text-gray-300">80%</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Backend Card */}
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="w-full md:w-96"
      >
        <Card className="h-full bg-gray-800">
          <CardHeader className="flex flex-row gap-3 items-center">
            <Image alt="backend" src={backEnd} width={40} />
            <p className="text-xl text-gray-300">Backend Development</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <FaNodeJs
                    className="text-2xl text-lime-500"
                    title="Node.js"
                  />
                  <span className="text-sm text-gray-300">Node.js</span>
                </div>
                <span className="text-sm text-gray-300">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <SiExpress
                    className="text-2xl text-gray-400"
                    title="Express.js"
                  />
                  <span className="text-sm text-gray-300">Express.js</span>
                </div>
                <span className="text-sm text-gray-300">80%</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <RiJavascriptFill
                    className="text-2xl text-yellow-600"
                    title="JavaScript"
                  />
                  <span className="text-sm text-gray-300">JavaScript</span>
                </div>
                <span className="text-sm text-gray-300">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <SiTypescript
                    className="text-2xl text-blue-600"
                    title="TypeScript"
                  />
                  <span className="text-sm text-gray-300">TypeScript</span>
                </div>
                <span className="text-sm text-gray-300">80%</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Image
                    width="30"
                    src={jwt}
                    alt="JWT"
                    className="rounded-sm"
                  />
                  <span className="text-sm text-gray-300">JWT</span>
                </div>
                <span className="text-sm text-gray-300">75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Tools Card */}
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeIn" }}
        className="w-full md:w-96"
      >
        <Card className="h-full bg-gray-800">
          <CardHeader className="flex flex-row gap-3 items-center">
            <FaTools className="text-3xl text-white" />
            <p className="text-xl text-gray-300">Tools & Platforms</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <SiMongodb
                    className="text-2xl text-green-500"
                    title="MongoDB"
                  />
                  <span className="text-sm text-gray-300">MongoDB</span>
                </div>
                <span className="text-sm text-gray-300">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <SiFirebase
                    className="text-2xl text-yellow-500"
                    title="Firebase"
                  />
                  <span className="text-sm text-gray-300">Firebase</span>
                </div>
                <span className="text-sm text-gray-300">80%</span>
              </div>
              <Progress value={80} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <SiVercel className="text-2xl text-white" title="Vercel" />
                  <span className="text-sm text-gray-300">Vercel</span>
                </div>
                <span className="text-sm text-gray-300">90%</span>
              </div>
              <Progress value={90} className="h-2" />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <FaGithub className="text-2xl text-gray-300" title="GitHub" />
                  <span className="text-sm text-gray-300">GitHub</span>
                </div>
                <span className="text-sm text-gray-300">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default SkillSet;
