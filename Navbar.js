import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { useTheme } from './context/ThemeContexts';
import { useProductContext } from '../context';
import { FaRegMoon } from 'react-icons/fa';
import { GoSun } from 'react-icons/go';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { filterProducts } = useProductContext();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };

  return (
    <div>
      {isMobile ? (
        // Mobile View
        <MobileNavWrapper className="navbar nav-bar-expand-sm bg-slate-800 px-sm-5 w-100">
          <Link to="/" className="w-50">
            <img src={logo} alt="store" className="navbar-brand" />
          </Link>
          <div className="text-white w-50 menu" onClick={handleMenu}>
            <AiOutlineMenu className="menubar" />
          </div>
          {menuOpen && (
            <div className="resmenu w-100">
              <NavLink to="/" className={({ isActive }) => isActive ? "text-primary" : "text-white hover"}>
                Products
              </NavLink>
              <li style={{ listStyleType: 'none' }}>
                <input
                  placeholder='Search for products'
                  onChange={(e) => filterProducts(e.target.value)}
                />
              </li>
              <Link className="text-white bg-transparent themes" onClick={toggleTheme}>
                {theme ? <h6>Dark Mode <FaRegMoon /></h6> : <h6>Light Mode <GoSun /></h6>}
              </Link>
              <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                  <i className="fas fa-cart-plus">my cart</i>
                </ButtonContainer>
              </Link>
            </div>
          )}
        </MobileNavWrapper>
      ) : (
        // Desktop View
        <DesktopNavWrapper className="navbar nav-bar-expand-sm bg-slate-800 px-sm-5">
          <Link to="/">
            <img src={logo} alt="store" className="navbar-brand" />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <input
                placeholder='Search for products'
                onChange={(e) => filterProducts(e.target.value)}
              />
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <i className="fas fa-cart-plus">my cart</i>
            </ButtonContainer>
          </Link>
          <div className="text-white bg-transparent themes mainmenu" onClick={toggleTheme}>
            {theme ? <FaRegMoon /> : <GoSun />}
          </div>
        </DesktopNavWrapper>
      )}
    </div>
  );
};

const NavWrapper = styled.nav`
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

const MobileNavWrapper = styled(NavWrapper)`
  /* Add mobile-specific styles here */
`;

const DesktopNavWrapper = styled(NavWrapper)`
  /* Add desktop-specific styles here */
`;

export default Navbar;
