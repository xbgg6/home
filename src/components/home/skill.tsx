import Image from "next/image";
import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const Skill = () => {
  return (
    <section id="skill" className="flex flex-col justify-center text-center min-h-screen py-16">
      <div>
        <p className="text-md">Skill Detail</p>
        <h1 className="text-3xl tracking-widest mt-4 font-bold">技能</h1>
      </div>
      <div className="flex justify-between gap-4 mt-8  max-lg:flex-col">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>前端开技术</CardTitle>
            <CardDescription>Frontend Development</CardDescription>
          </CardHeader>
          <CardContent>
            <p>三年</p>
            <p>全栈开发工程师</p>
          </CardContent>
        </Card>
        <Card className="flex-1">
          <CardHeader>
            <CardTitle>后端开发技术</CardTitle>
            <CardDescription>Backend Development</CardDescription>
          </CardHeader>
          <CardContent>
            <p>全日制本科</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Skill;