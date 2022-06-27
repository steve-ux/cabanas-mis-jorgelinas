import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 20px 30px;
    font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
    color: white;
    text-transform: uppercase;
    font-size: 1rem;
  }
  li:hover {
      color: #266d9b;
  }
  a {
      text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 19;

    li {
      color: black;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <a href="#Nosotros"><li>Nosotros</li></a>
      <a href="#Galeria"><li>Galería</li></a>
      <a href="#Contacto"><li>Contactanos</li></a>
    </Ul>
  )
}

export default RightNav;