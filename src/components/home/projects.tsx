import Image from "next/image";

import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { EnterIcon } from "@radix-ui/react-icons";

const projects = [
  {
    cover: "/assets/moyu.png",
    name: "在线摸鱼",
    link: "#",
    codePath: null,
    description: <>上班摸鱼的好东西~</>,
  },

  {
    cover: "/assets/project-it-tools.png",
    name: "运维工具箱",
    link: "#",
    codePath: "#",
    description: <>众多实用的的工具箱，全在这里，永久免费使用</>,
  },

];

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-content: start; text-center min-h-screen py-16">
      <div>
        <p className="text-md">Projects</p>
        <h1 className="text-3xl tracking-widest mt-4 font-bold">项目</h1>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4 justify-center max-lg:grid-cols-1">
        {projects.map((item) => {
          return (
            <Card key={item.name} className="w-full max-lg:w-full shadow-none">
              <CardContent className="p-0">
                <div className="flex justify-center items-center w-full flex-col text-center">
                  <Image
                    width={400}
                    height={400}
                    src={item.cover}
                    alt="Project"
                    className="rounded-md"
                  />
                  <div className="flex flex-col gap-2">
                    <span className="text-2xl mt-4">{item.name}</span>
                    <p className="text-inherit text-sm">{item.description}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pb-2">
                <div className="flex gap-4 justify-center w-full">
                  {item.codePath ? (
                    <Button
                      variant="link"
                      onClick={() => window.open(item.codePath)}>
                      源码地址
                    </Button>
                  ) : (
                    <Button disabled variant="link">暂未开放</Button>
                  )}
                  <Button variant="link" onClick={() => window.open(item.link)}>
                    在线访问 <EnterIcon className="ml-2" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
