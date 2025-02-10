"use client";
import Image from "next/image";
import picture from "../../../public/My Picture.jpg";
import { FaDownload } from "react-icons/fa";
import { MdArrowCircleRight, MdContactMail } from "react-icons/md";
import Link from "next/link";
import { Button } from "../ui/moving-border";

const AboutMe = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");

    link.href =
      "https://drive.usercontent.google.com/download?id=1hnE3GFeSiVtfh2n5R_KMj_--raSzQK1k&export=download&authuser=0&confirm=t&uuid=8f17ab0c-1f24-40b0-9f2c-1ba609dd1d42&at=APZUnTWrynxXKIR0lPQwR-8DI6Rr:1702369481015";

    link.download = "Pallab_Kumar_Sarker_Resume.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row-reverse items-center justify-around px-1">
        <div>
          <Image
            src={picture}
            alt="My Picture"
            width={500}
            height={200}
            priority
            className="rounded-full w-80 border-8 border-slate-600"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-300 mb-3">
            I am Pallab Kumar Sarker
          </h2>
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-300 mb-3">
            MERN Stack Web Developer
          </h3>
          <div className="flex flex-row justify-center items-center gap-5 flex-wrap">
            <Button onClick={handleDownloadResume} borderRadius="1rem">
              Download Resume <FaDownload className="ml-2" />
            </Button>

            <Link href="/contact">
              <Button borderRadius="1rem">
                Contact Me <MdContactMail className="ml-2" />
              </Button>
            </Link>

            <Link href="/projects">
              <Button borderRadius="1rem">
                Projects <MdArrowCircleRight className="ml-2 text-xl" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <h1 className="text-5xl text-center mt-20 text-gray-900 dark:text-gray-300 font-semibold underline">
        About me
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 gap-10">
        <p className="text-md text-center text-gray-900 dark:text-gray-300 flex-1">
          <span className="text-3xl">A</span>s a B.Sc. student studying in
          Electrical and Electronic Engineering, I am currently exploring web
          development. I am proficient in HTML, CSS, Tailwind CSS, React,
          Mongoose and Node js. I also have done some projects with my current
          skill in web development. I am currently also exploring Next js and
          Redux js. I am willing to dive deep into the realm of web development.
          My ambition is to evolve into a versatile Full Stack Developer.
        </p>

        {/* additional info  */}
        <div className="flex-1 px-5">
          <p className="text-xl text-gray-900 dark:text-gray-300">
            Name : Pallab Kumar Sarker
          </p>
          <hr className="border-2 border-slate-600 mt-1" />
          <h3 className="text-2xl text-gray-900 dark:text-gray-300 mt-3 border-b-2 w-fit border-teal-700">
            Education
          </h3>
          <ul className="my-3">
            <li>
              <h4 className="text-xl text-gray-900 dark:text-gray-300">
                Bsc in Engineering
              </h4>
              <h4 className="text-xl text-gray-900 dark:text-gray-300">
                Department of Electrical and Electronic Engineering
              </h4>
              <h4 className="text-xl text-gray-900 dark:text-gray-300">
                Begum Rokeya University, Rangpur
              </h4>
            </li>
            <li className="my-3">
              <p className="text-xl text-gray-900 dark:text-gray-300">
                SSC & HSC : Cantonment Public School & College, Rangpur
              </p>
            </li>
          </ul>
          <hr className="border-2 border-slate-600 mt-1" />
          <h3 className="text-xl text-gray-900 dark:text-gray-300 my-3">
            Present Address : Rangpur, Bangladesh
          </h3>
          <hr className="border-2 border-slate-600 mt-1" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
