import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
// import LocalOffer from "@material-ui/icons/LocalOffer";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  const button = () => {
    let items = document.querySelectorAll(".Dashboard__item");
  };

  return (
    <div className="sidebar">
      <Link to="/">
        <img
          //   src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"
          src="https://scontent.fdac8-1.fna.fbcdn.net/v/t39.30808-6/279092917_2871845096451906_8821620375334053829_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGY1lsg2Rc9C1Pfbmr8eWDa9EJIQKhRIDr0QkhAqFEgOqliv53sWGQK2VqtKrdtApeu93yI1B9eSTBnrTar_oX4&_nc_ohc=gZdEdNgQsZUAX-ljeBK&_nc_ht=scontent.fdac8-1.fna&oh=00_AT-uhPk9Wps_27ur0xZU-xZBp10GdAdnouTz6e8fgLCubw&oe=6275C9E9"
          alt="Ecommerce"
        />
      </Link>
      <Link to="/dashboard">
        <p className="Dashboard__item" onClick={button}>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link to="/admin/products">
        <p className="Dashboard__item">
          <PostAddIcon /> All Products
        </p>
      </Link>

      <Link to="/admin/product">
        <p>
          <AddIcon />
          Create Product
        </p>
      </Link>

      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
