export const NavBarStyles = {
    backgroundColor: "bg-black w-full",
    default: "mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8 h-20",
    navCenter: "flex items-center gap-8",
    itemMenu: "font-medium text-lg transition-all duration-300 hover:-translate-y-1 inline-block",
    itemTheme: "text-white hover:text-blue-500",
    button: "rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:-translate-y-1 hover:shadow-rose-500/50 hover:shadow-lg cursor-pointer",
    NavbarLogo: "h-35 w-auto transition-all duration-300 hover:scale-110 cursor-pointer"
}

NavBarStyles.itemMenuTheme = `${NavBarStyles.itemMenu} ${NavBarStyles.itemTheme}`