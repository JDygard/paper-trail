import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AppBar, Toolbar, Button } from '@mui/material';

const HeaderAppBar = styled(AppBar)`
  background-color: #000;
`;

const HeaderToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const HeaderLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
`;

const HeaderButton = styled(Button)`
  background-color: #f00;
  color: #fff;
`;

function Header({ theme }) {
  return (
    <HeaderAppBar position="static" theme={theme}>
      <HeaderToolbar>
        <div>
          <HeaderLink to="/">Paper Trail Co.</HeaderLink>
        </div>
        <div>
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderLink to="/products">Products</HeaderLink>
          <HeaderLink to="/contact">Contact</HeaderLink>
          <HeaderButton variant="contained">Login</HeaderButton>
        </div>
      </HeaderToolbar>
    </HeaderAppBar>
  );
}

export default Header;
