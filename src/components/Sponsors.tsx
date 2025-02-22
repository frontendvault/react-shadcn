import { FaReact } from "react-icons/fa";
import { SiShadcnui, SiTailwindcss, SiRadixui, SiTypescript, SiReactrouter } from "react-icons/si";


interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
 
  {
    icon: <FaReact size={34} />,
    name: "React",
  },
  {
    icon: <SiShadcnui size={34} />,
    name: "Shadcn",
  },
  {
    icon: <SiTailwindcss size={34} />,
    name: "TailwindCSS",
  },
  {
    icon: <SiRadixui size={34} />,
    name: "RadixUI",
  },
  {
    icon: <SiTypescript size={34} />,
    name: "Typescript",
  },
  {
    icon: <SiReactrouter size={34} />,
    name: "React Router",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="sponsors"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md md:text-3xl font-bold mb-8 text-primary">
        Built with
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-1 text-muted-foreground/60"
          >
            <span>{icon}</span>
            <h3 className="text-xl ml-2 font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
