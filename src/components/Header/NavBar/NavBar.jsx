import { NavBarStyles } from "./style";
import logo from "../../../share/Logo/Logo.png";





const ContactMe = () => {
    return (
        <>
            <a href="#Contacts" className={NavBarStyles.button}>Contact Me</a>
        </>
    )
}

export default function NavBar() {
    return (
        <>
            <nav className={NavBarStyles.backgroundColor}>
                <ul className={NavBarStyles.default}>
                    <li>

                        <img src={logo} alt="Logo Portfolio" className={NavBarStyles.NavbarLogo} />

                    </li>

                    <li>
                        <ul className={NavBarStyles.navCenter}>
                            <li><a href="#Home" className={NavBarStyles.itemMenuTheme}>Home</a></li>
                            <li><a href="#About" className={NavBarStyles.itemMenuTheme}>About Me</a></li>
                            <li><a href="#Tech" className={NavBarStyles.itemMenuTheme}>Techs</a></li>
                            <li><a href="#Projects" className={NavBarStyles.itemMenuTheme}>Projects</a></li>
                            <li><a href="#Contacts" className={NavBarStyles.itemMenuTheme}>Contact</a></li>
                        </ul>
                    </li>

                    <li>
                        <ContactMe />
                    </li>
                </ul>
            </nav >

        </>


    )
}



