import { FaMobileAlt } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { GiArtificialIntelligence } from "react-icons/gi";
import { FaDesktop } from "react-icons/fa6";



interface FeatureProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: FeatureProps[] = [
  {
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    icon: <FaMobileAlt/>,
  },
  {
    title: "Intuitive user interface",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    icon: <FaDesktop/>,
  },
  {
    title: "AI-Powered insights",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    icon: <GiArtificialIntelligence/>,
  },
];

const featureList: string[] = [
  "Dark/Light theme",
  "Reviews",
  "Features",
  "Pricing",
  "Contact form",
  "Our team",
  "Responsive design",
  "Newsletter",
  "Minimalist",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <span
              
              className="text-sm"
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, icon }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <span className="text-6xl md:text-[150px] w-auto mx-auto my-5 text-primary">                {icon}</span>

            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
