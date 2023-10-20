import Image from "next/image"


import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col justify-center text-center min-h-screen py-16">
      <div>
        <p className="text-md">Projects</p>
        <h1 className="text-3xl tracking-widest mt-4 font-bold">项目</h1>
      </div>
      <div className="flex gap-4 mt-8 justify-center max-lg:flex-col">
        {
          [1, 2, 3, 4].map(item => {
            return (
              <Card key={item} className="w-[500px]">
                <CardHeader>
                  <CardTitle>前端开技术</CardTitle>
                  <CardDescription>Frontend Development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center items-center w-full flex-col text-center">
                    <Image width={400} height={400}
                      src="/assets/project-2.png"
                      alt="Project 2"
                      className="project-img"
                    />
                    <h2 className="experience-sub-title project-title">Project Two</h2>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-4">
                    <Button
                      className="btn btn-color-2 project-btn"
                      onClick={() => location.href = 'https://github.com/'}
                    >
                      Github
                    </Button>
                    <Button
                      className="btn btn-color-2 project-btn"
                      onClick={() => location.href = 'https://github.com/'}
                    >
                      Live Demo
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            )
          })
        }
      </div>
    </section>

  )
}


export default Projects;