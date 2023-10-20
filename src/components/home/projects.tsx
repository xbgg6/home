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


const projects = [
  {
    cover: '/assets/project-draw.png',
    name: '画板',
    link: 'https://draw.huala.fun',
    codePath: 'https://github.com/excalidraw/excalidraw',
    description: <>
      基于开源项目部署
    </>
  },
  {
    cover: '/assets/project-it-tools.png',
    name: '开发工具箱',
    link: 'https://it-tools.huala.fun',
    codePath: 'https://github.com/hualafun/it-tools',
    description: <>
      众多实用的的工具箱，全在这里，永久免费使用
    </>
  },
  {
    cover: '/assets/project-chat.png',
    name: '潘多拉 ChatGpt',
    link: 'https://chat.huala.fun/auth/login',
    codePath: 'https://github.com/zhile-io/pandora',
    description: <>
      对 ChatGpt 网页版进行逆向
    </>
  },
  {
    cover: '/assets/project-forum.png',
    name: '哗啦论坛',
    link: 'https://forum.huala.fun/',
    codePath: 'https://github.com/didalol/next-forum',
    description: <>
      基于 Next.js 的哗啦论坛
    </>
  }
]


const Projects = () => {
  return (
    <section id="projects" className="flex flex-col justify-content: start; text-center min-h-screen py-16">
      <div>
        <p className="text-md">Projects</p>
        <h1 className="text-3xl tracking-widest mt-4 font-bold">项目</h1>
      </div>
      <div className="mt-8 grid grid-cols-3 gap-4 justify-center max-lg:grid-cols-1">
        {
          projects.map(item => {
            return (
              <Card key={item.name} className="w-full max-lg:w-full ">
                <CardHeader>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center items-center w-full flex-col text-center">
                    <Image width={400} height={400}
                      src={item.cover}
                      alt="Project 2"
                      className="project-img"
                    />
                    <span className="text-3xl mt-4">{item.name}</span>
                    <p className="text-inherit text-sm">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex gap-4 justify-center w-full">
                    <Button
                      className="btn btn-color-2 project-btn"
                      onClick={() => window.open(item.codePath)}
                    >
                      源码地址
                    </Button>
                    <Button
                      className="btn btn-color-2 project-btn"
                      onClick={() => window.open(item.link)}
                    >
                      项目地址
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