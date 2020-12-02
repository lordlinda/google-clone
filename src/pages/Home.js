import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/store">Store</NavLink>
        </div>
        <div className="home__headerRight">
          <NavLink to="/about">Gmail</NavLink>
          <NavLink to="/images">Images</NavLink>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https:www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
