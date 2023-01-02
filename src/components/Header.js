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
            dark 
            sticky='top' 
            expand='md'
        >
            <NavbarBrand className='ms-5' href='/' >
                <img 
                    src={PRPALogo} 
                    alt='Puerto Rican Police Association Logo'
                    className='float-start'
                />
            </NavbarBrand>
            <NavbarToggler 
                onClick={() => setMenuOpen(!menuOpen)}
                className='me-5'
            />
            <Collapse navbar isOpen={menuOpen}>
                <Nav  navbar pills className='navbar-nav'>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home 
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info-circle fa-lg' /> About 
                        </NavLink>
                
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/directory'>
                            <i className='fa fa-list fa-lg' /> Event Directory
                        </NavLink>

                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/board_members'>
                            <i className='fa fa-users fa-lg' /> Board Members 
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/partnerships'>
                            <i className='fa fa-handshake-o fa-lg' /> Partnerships 
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/news'>
                            <i className='fa fa-newspaper-o fa-lg' /> News 
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa fa-address-card-o fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
  );
};



export default Header;