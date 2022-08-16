import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import Logo from "../../assets/Mis-Jorgelinas-logo-transparente-white.png";

const Nav = styled.nav`
  height: 13vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: black;
  z-index: 20;

  .logo {
    padding: 0.8px 40px;
  }
  .logoNav {
    width: 5vw;
    padding: 10px;
  }
  .logoNav:hover {
    width: 5vw;
    padding: 10px;
  }
  @media (max-width: 999px) {
    .logoNav {
      width: 7vw;
    }
  }
  @media (max-width: 768px) {
    .logoNav {
      width: 10vw;
    }
  }
  @media (max-width: 520px) {
    .logoNav {
      width: 14vw;
    }
  }
  @media (max-width: 420px) {
    .logoNav {
      width: 18vw;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav className="navigator">
      <Burger />
      <div className="logo">
        <img className="logoNav" src={Logo} alt="Logo Cabañas Jorgelinas" />
      </div>
    </Nav>
  );
};

export default Navbar;
