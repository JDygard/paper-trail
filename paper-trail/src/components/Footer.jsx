import React from 'react';
import styled from 'styled-components';
import { Container, Grid, Link, Typography } from '@mui/material';

const FooterContainer = styled(Container)`
  padding: 2rem;
  color: #fff;
`;

const FooterGrid = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FooterLogo = styled.img`
  max-width: 100%;
  margin-bottom: 1rem;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-right: 1rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterGrid container spacing={4}>
        <Grid item xs={12} md={3}>
          <FooterLogo src="https://picsum.photos/id/1043/200/200" alt="Paper Trail Co. logo" />
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris mauris, maximus
            sed mauris nec, vestibulum tempor enim.
          </Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5" gutterBottom>
            Quick Links
          </Typography>
          <nav>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/products">Products</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </nav>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">1234 Main Street</Typography>
          <Typography variant="body1">Anytown, USA 12345</Typography>
          <Typography variant="body1">Phone: (555) 555-5555</Typography>
          <Typography variant="body1">Email: info@papertrailco.com</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography variant="h5" gutterBottom>
            Follow Us
          </Typography>
          <nav>
            <FooterLink href="https://www.facebook.com/">
              <i className="fab fa-facebook fa-lg"></i>
            </FooterLink>
            <FooterLink href="https://www.twitter.com/">
              <i className="fab fa-twitter fa-lg"></i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/">
              <i className="fab fa-instagram fa-lg"></i>
            </FooterLink>
          </nav>
        </Grid>
      </FooterGrid>
    </FooterContainer>
  );
}

export default Footer;
