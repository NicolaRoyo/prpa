import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
 } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import PRPALogo from '../app/assets/img/logo1.jpg'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar 
            dark color='primary' 
            sticky='top' 
            expand='md'
        >
            <NavbarBrand href='/' className='ms-5'>
                <img 
                    src={PRPALogo} 
                    alt='Puerto Rican Police Association Logo'
                    className='float-start' 
                />
                <h1 className='mt-1' > Puerto Rican Police Association </h1>
            </NavbarBrand>
            <NavbarToggler 
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <Collapse navbar isOpen={menuOpen}>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home 
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/directory'>
                            <i className='fa fa-list fa-lg' /> Directory 
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg' /> About 
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/board_members'>
                            <i className='fa fa-info fa-lg' /> Board Members 
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/partnerships'>
                            <i className='fa fa-info fa-lg' /> Partnerships 
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
  );
};

export default Header;