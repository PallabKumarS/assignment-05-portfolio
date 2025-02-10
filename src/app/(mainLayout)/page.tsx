import AboutMe from "@/components/home/AboutMe";
import SkillSet from "@/components/home/SkillSet";

export default function HomePage() {
  return (
    <div className="container mx-auto py-2">
      <AboutMe />

      <div className="mt-10">
        <h2 className="text-center mx-auto text-4xl">Skill Set</h2>
        <div className="xl:container border-t border-gray-300 dark:border-gray-700 my-4 xl:mx-auto mb-10 mx-10" />
        <SkillSet />
      </div>
    </div>
  );
}
