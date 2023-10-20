import { Button } from "@/components/ui/button"
import Image from "next/image"
import { QqOutlined, GithubOutlined, WechatFilled,MailOutlined } from "@ant-design/icons"

const Profile = () => {
  return (
    <section id="profile" className="flex gap-8  justify-center text-center items-center min-h-screen max-lg:flex-col">
      <Image src={"/assets/profile.jpg"} width={350} height={350} alt="Profile picture"
        className="rounded-full h-92 w-92 max-lg:h-48 max-lg:w-48" />
      <div className="flex flex-col gap-4 justify-center text-center items-center antialiased hover:subpixel-antialiased">
        <p className="text-md text-slate-500 font-semibold">你好, 我是</p>
        <h1 className="text-3xl font-bold">Huala（哗啦）站点的开发者</h1>
        <p className="text-xl text-slate-500 font-semibold">一个全栈开发者（新时代农民工）</p>
        <p className="text-md text-slate-500 font-semibold">练习时长两年半（经验）</p>
        <div className="flex gap-4 justify-center" >
          <Button variant="secondary" onClick={() => window.open('/assets/resume-example.pdf')}> 简历下载</Button>
          <Button variant="secondary" onClick={() => location.href = './#contact'}> 联系信息 </Button>
        </div>
        {/* 社交链接 */}
        <div className="flex gap-4 justify-center">
          <MailOutlined className="text-2xl cursor-pointer hover:scale-125"/>
          <QqOutlined className="text-2xl cursor-pointer hover:scale-125" onClick={() => window.open('https://qm.qq.com/q/l4FrAsizqU')} />
          <WechatFilled className="text-2xl cursor-pointer hover:scale-125" onClick={() => window.open('https://qm.qq.com/q/l4FrAsizqU')} />
          <GithubOutlined className="text-2xl cursor-pointer hover:scale-125" onClick={() => window.open('https://github.com/hualafun')} />
        </div>
      </div>
    </section>
  )
}

export default Profile;