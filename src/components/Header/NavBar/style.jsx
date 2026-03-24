// style.jsx

export const NavBarStyles = {
  backgroundColor: "bg-black w-full relative z-50",

  default: "mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-20",

  // Links desktop — esconde no mobile
  navCenter: "hidden md:flex items-center gap-8",

  itemMenu: "font-medium text-lg transition-all duration-300 hover:-translate-y-1 inline-block",
  itemTheme: "text-white hover:text-blue-500",

  // Botão Contact Me — mantido igual, só some no mobile
  button: "hidden md:block rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:-translate-y-1 hover:shadow-blue-500/50 hover:shadow-lg cursor-pointer",

  NavbarLogo: "h-30 w-auto transition-all duration-300 hover:scale-110 cursor-pointer",

  // Hamburguer — só aparece no mobile
  hamburger: "md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 cursor-pointer",
  hamburgerLine: "w-6 h-0.5 bg-white rounded-full transition-all duration-300",

  // Menu mobile
  mobileMenu: "md:hidden absolute top-20 left-0 w-full bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-5 shadow-xl shadow-black/50",

  mobileLink: "text-white text-lg font-medium hover:text-blue-400 transition-colors duration-200",
}

NavBarStyles.itemMenuTheme = `${NavBarStyles.itemMenu} ${NavBarStyles.itemTheme}`