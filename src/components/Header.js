import { Navbar, NavbarBrand } from "reactstrap";
import PRPALogo from '../app/assets/img/logo1.jpg'

const Header = () => {
    return (
    <Navbar 
        dark color='primary' 
        sticky='top' 
        expand='md'
    >
        <NavbarBrand href='/'>
            <img src={PRPALogo} alt='Puerto Rican Police Association Logo' />
        </NavbarBrand>
    </Navbar>
  )
};

export default Header;