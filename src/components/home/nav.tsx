import toggleMenu from "@/lib/toggle-menu"

const menus = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
]

const Nav = () => {
  return (
    <>
      {/* 在 lg 以下屏幕隐藏 */}
      <nav id="desktop-nav" className="flex justify-between my-4 text-2xl max-lg:hidden">
        <div className="logo">Huala</div>
        <div>
          <ul className="nav-links flex gap-8">
            {
              menus.map((menu) => (
                <li key={menu.href}><a href={menu.href}>{menu.title}</a></li>
              ))
            }
          </ul>
        </div>
      </nav>
      {/* 在 lg 以上屏幕隐藏 */}
      <nav id="hamburger-nav" className="flex justify-between text-2xl lg:hidden">
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