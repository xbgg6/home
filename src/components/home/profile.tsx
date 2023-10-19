import { Button } from "@/components/ui/button"
import { QqOutlined, GithubOutlined, WechatFilled } from "@ant-design/icons"

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
        <QqOutlined className="text-4xl cursor-pointer hover:scale-125" onClick={() => window.open('https://qm.qq.com/q/l4FrAsizqU')} />
        <WechatFilled className="text-4xl cursor-pointer hover:scale-125" onClick={() => window.open('https://qm.qq.com/q/l4FrAsizqU')} />
        <GithubOutlined className="text-4xl cursor-pointer hover:scale-125" onClick={() => window.open('https://github.com/hualafun')} />
      </div>
    </section>
  )
}

export default Profile;