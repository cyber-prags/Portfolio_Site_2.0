"use client";
import { projects } from "@/data";
import { Carousel, Card } from "./ui/apple-cards-carousel";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-20 space-y-10 scroll-mt-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

      <Carousel
        items={projects.map((item, index) => (
          <Card
            key={index}
            card={{
              src: item.img,
              title: item.title,
              category: "Project",
              content: (
                <p className="text-gray-700 dark:text-gray-300">{item.des}</p>
              ),
              link: item.link,
              iconLists: item.iconLists || [], // ✅ Ensure iconLists is passed (empty array if undefined)
            }}
            index={index}
          />
        ))}
      />
    </div>
  );
};

export default RecentProjects;
