import toggleMenu from "@/lib/toggle-menu"
import { MenuOutlined } from "@ant-design/icons"
const menus = [
  {
    title: "技能",
    href: "#skill",
  },
  {
    title: "项目",
    href: "#projects",
  },
  {
    title: "网站心电图",
    target: '_blank',
    href: "https://status.huala.fun",
  },
]

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const DropdownMenuDemo = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <MenuOutlined className="text-xl cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {
          menus.map(item => {
            return (
              <DropdownMenuItem key={item.href} className="cursor-pointer" onClick={() => {
                if (item.target) {
                  window.open(item.href, item.target)
                }else{
                  location.href = item.href
                }
              }}>
                {item.title}
              </DropdownMenuItem>
            )
          })
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}





const Nav = () => {
  return (
    <>
      {/* 在 lg 以下屏幕隐藏 */}
      <nav id="desktop-nav" className="flex justify-between my-4 text-xl max-lg:hidden">
        <div className="logo">
          <a href="/">Huala</a>
        </div>
        <div>
          <ul className="nav-links flex gap-8">
            {
              menus.map((menu) => (
                <li key={menu.href} className="hover:decoration-slate-500	 hover:underline hover:underline-offset-8"><a href={menu.href} target={menu?.target}>{menu.title}</a></li>
              ))
            }
          </ul>
        </div>
      </nav>
      {/* 在 lg 以上屏幕隐藏 */}
      <nav id="hamburger-nav" className="flex justify-between text-xl lg:hidden">
        <div className="logo">Huala</div>
        <div className="hamburger-menu">
          <DropdownMenuDemo />
          <div className="menu-links hidden">
            <ul>
              {
                menus.map((menu) => (
                  <li key={menu.href}><a href={menu.href} onClick={() => toggleMenu()}>{menu.title}</a></li>
                ))
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;