
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaUserCircle } from "react-icons/fa";

interface TestimonialProps {
  icon: JSX.Element;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    icon: <FaUserCircle/>,
    name: "John Doe React",
    userName: "@john_Doe",
    comment: "This landing page is awesome!",
  },
  {
    icon: <FaUserCircle/>,
    name: "John Doe React",
    userName: "@john_Doe1",
    comment:
      "Lorem ipsum dolor sit amet,empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
  },

  {
    icon: <FaUserCircle/>,
    name: "John Doe React",
    userName: "@john_Doe2",
    comment:
      "Lorem ipsum dolor sit amet,exercitation. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    icon: <FaUserCircle/>,
    name: "John Doe React",
    userName: "@john_Doe3",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    icon: <FaUserCircle/>,
    name: "John Doe React",
    userName: "@john_Doe4",
    comment:
      "Lorem ipsum dolor sit amet, tempor incididunt  aliqua. Ut enim ad minim veniam, quis nostrud.",
  },
  {
    icon: <FaUserCircle/>,
    name: "John Doe React",
    userName: "@john_Doe5",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
      Uncover What Makes This 
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Landing Page a Favorite.{" "}
        </span>
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non unde error
        facere hic reiciendis illo
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ icon, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                 <span className="text-3xl">{icon}</span>
                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
