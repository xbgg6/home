import Image from "next/image";
import { Button } from "@/components/ui/button"
const Profile = () => {
  return (
    <section id="profile" className="flex flex-col gap-4 justify-center text-center items-center min-h-screen">
      <p className="text-xl">Hello, I&apos;m</p>
      <h1 className="text-5xl">Huala</h1>
      <p className="text-4xl">Full Stack Developer</p>
      <div className="flex gap-4 justify-center" >
        <Button variant="secondary" onClick={() => window.open('/assets/resume-example.pdf')}> 简历下载</Button>
        <Button variant="secondary" onClick={() => location.href = './#contact'}> 联系信息 </Button>
      </div>
      {/* 社交链接 */}
      <div className="flex gap-4 justify-center">
        <Image
          width={800} height={400}
          src="/assets/qq.png"
          alt="My LinkedIn profile"
          className="h-8 w-16 cursor-pointer"
          onClick={() => window.open('https://qm.qq.com/q/l4FrAsizqU')}
        />
        <Image
          width={400} height={400}
          src="/assets/github.png"
          alt="My Github profile"
          className="h-8 w-8 cursor-pointer"
          onClick={() => window.open('https://github.com/')}
        />
      </div>
    </section>
  )
}

export default Profile;