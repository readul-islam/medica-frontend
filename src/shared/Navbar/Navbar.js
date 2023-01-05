import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import NavbarView from "./NavbarView"

const Navbar = () =>{
    const colorMode = useContext(ColorModeContext);



return (
    <>
    <NavbarView colorMode={colorMode}/>
    </>
)    
}

export default Navbar