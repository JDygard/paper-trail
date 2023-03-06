import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProductsSection = styled.section`
  background-color: #fff;
  padding: 4rem 2rem;
`;

const ProductsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

const ProductItem = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  text-align: center;
`;

const ProductImage = styled.img`
  max-width: 100%;
`;

const dummyProducts = [
  {
    id: 1,
    name: 'Stapler',
    price: 7.99,
    image: 'https://picsum.photos/id/1011/400/400',
  },
  {
    id: 2,
    name: 'Pens',
    price: 4.99,
    image: 'https://picsum.photos/id/1015/400/400',
  },
  {
    id: 3,
    name: 'Notebook',
    price: 3.99,
    image: 'https://picsum.photos/id/1021/400/400',
  },
  {
    id: 4,
    name: 'Highlighter',
    price: 2.99,
    image: 'https://picsum.photos/id/1025/400/400',
  },
  {
    id: 5,
    name: 'Scissors',
    price: 9.99,
    image: 'https://picsum.photos/id/1033/400/400',
  },
  {
    id: 6,
    name: 'Paper Clips',
    price: 1.99,
    image: 'https://picsum.photos/id/1040/400/400',
  },
];


function Products() {
  const [products, setProducts] = useState(dummyProducts); // Dummy data until backend is complete

  useEffect(() => {
    // Simulate fetching data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ProductsSection>
      <ProductsTitle>Our Products</ProductsTitle>
      <ProductGrid>
        {products.map((product) => (
          <ProductItem key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </ProductItem>
        ))}
      </ProductGrid>
    </ProductsSection>
  );
}

export default Products;
