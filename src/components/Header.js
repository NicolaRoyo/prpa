import { useState } from 'react';
import { 
    Navbar, 
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Container,
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
            <NavbarBrand href='/' className='ms-4 mt-4'>
                <img 
                    src={PRPALogo} 
                    alt='Puerto Rican Police Association Logo'
                    className='float-start'
                />
                <p className='mb-4 vertical' > Puerto Rican Police Association </p>
            </NavbarBrand>
            <Container className='m-1'>
            <NavbarToggler 
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <Collapse navbar isOpen={menuOpen}>
                <Nav pills navbar>
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
            </Container>
        </Navbar>
  );
};



export default Header;