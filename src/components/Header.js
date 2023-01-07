import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>

      <NavMenu>
        <a href="/home">
          <img src="images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </a>
        <a href="/">
          <img src="images/search-icon.svg" alt="search" />
          <span>SEARCH</span>
        </a>
        <a href="/">
          <img src="images/watchlist-icon.svg" alt="watchlist" />
          <span>WATCHLIST</span>
        </a>
        <a href="/">
          <img src="images/original-icon.svg" alt="orignals" />
          <span>ORIGNALS</span>
        </a>
        <a href="/">
          <img src="images/movie-icon.svg" alt="movies" />
          <span>MOVIES</span>
        </a>
        <a href="/">
          <img src="images/series-icon.svg" alt="series" />
          <span>SERIES</span>
        </a>
      </NavMenu>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background-color: #040714;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  width: 80px;
  max-height: 70px;
  padding: 0;
  margin-top: 4px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row-nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      line-height: 1.08;
      letter-spacing: 1.42px;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left;
        transform: scaleX(0);
        transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visiblity: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visiblity: visible;
        opacity: 1 !important;
      }
    }
  }
`;

export default Header;
