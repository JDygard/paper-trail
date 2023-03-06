import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

const HomeHero = styled.div`
  background-image: url('https://picsum.photos/id/237/1920/1080');
  background-size: cover;
  background-position: center;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeSection = styled.section`
  background-color: #fff;
  padding: 4rem 2rem;
`;

const HomeTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const HomeSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const HomeProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

const HomeProduct = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
`;

const HomeProductImage = styled.img`
  max-width: 100%;
`;

const HomeButton = styled(Button)`
  color: #fff;
`;

function Home() {
  return (
    <>
      <HomeHero>
        <HomeTitle>Welcome to Paper Trail Co.</HomeTitle>
      </HomeHero>
      <HomeSection>
        <HomeSubtitle>Our Featured Products</HomeSubtitle>
        <HomeProductGrid>
          <HomeProduct>
            <HomeProductImage src="https://picsum.photos/id/1011/400/400" alt="Stapler" />
            <h3>Stapler</h3>
            <p>$7.99</p>
          </HomeProduct>
          <HomeProduct>
            <HomeProductImage src="https://picsum.photos/id/1025/400/400" alt="Highlighter" />
            <h3>Highlighter</h3>
            <p>$2.99</p>
          </HomeProduct>
          <HomeProduct>
            <HomeProductImage src="https://picsum.photos/id/1033/400/400" alt="Scissors" />
            <h3>Scissors</h3>
            <p>$9.99</p>
          </HomeProduct>
        </HomeProductGrid>
        <HomeButton variant="contained" size="large">
          Shop Now
        </HomeButton>
      </HomeSection>
    </>
  );
}

export default Home;
