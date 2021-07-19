import CheckSvg from "../Svg/CheckSvg";
import Container from "./../Container/index";

interface SCProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

export default function SkillsCard({ icon, title, skills }: SCProps) {
  return (
    <Container className="flex-1 my-4 lg:mb-0 relative">
      <div className="absolute top-0 left-0 w-full">
        <div className="mx-auto w-max bg-blue-400 rounded-full p-2 -mt-8">{icon}</div>
      </div>
      <div className="text-2xl pt-2 text-center">{title}</div>
      <div>
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-row">
            <CheckSvg className="w-6 h-6 mr-4" />
            {skill}
          </div>
        ))}
      </div>
    </Container>
  );
}
