"use client"

import home from "@/components/home"



export default function Home() {

  return (
    <div className="container px-32 flex flex-col min-h-screen pt-4">
      <home.Nav />
      <home.Profile />
      <home.About />
      <home.Experience />
      <home.Projects />
      <home.Contact />
      <home.Footer />
    </div>
  )
}
