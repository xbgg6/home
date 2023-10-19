import toggleMenu from "@/lib/toggle-menu"

const menus = [
  {
    title: "关于",
    href: "#about",
  },
  {
    title: "技能",
    href: "#experience",
  },
  {
    title: "项目",
    href: "#projects",
  },
  {
    title: "联系我",
    href: "#contact",
  },
  {
    title: "网站心电图",
    target: '_blank',
    href: "https://status.huala.fun",
  },
]

const Nav = () => {
  return (
    <>
      {/* 在 lg 以下屏幕隐藏 */}
      <nav id="desktop-nav" className="flex justify-between my-4 text-xl max-lg:hidden">
        <div className="logo">Huala</div>
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
          <div className="hamburger-icon" onClick={() => toggleMenu()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
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