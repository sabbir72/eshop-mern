import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../Footer";
import BottomTab from "../../more/BottomTab";
import Loading from "../../more/Loading";
import MetaData from "../../more/MetaData";
import Header from "../Home/Header";
import "./About.css";


const About = () => {
  const { loading } = useSelector((state) => state.profile);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <MetaData title="About" />
          <div>
            <Header />
            <div
              style={{
                width: "90%",
                margin: "0px auto",
              }}
            >
              <div className="about__page">
                {/* 1st verse */}
                <div className="row flex">
                  <div className="col__2">
                    {/* <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-1.png" /> */}
                    <img
                      src="https://img.freepik.com/free-vector/fast-free-delivery-logo-with-bike-man-courier_1308-48906.jpg?t=st=1650314877~exp=1650315477~hmac=09deea34bf7c985bea14b0752a61a89ae4560cd5ae1bb692ebc03a27cfc9f677&w=740"
                      alt="About"
                    />
                  </div>
                  <div className="col__2">
                    <div className="meta">
                      <span
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                        }}
                      >
                        Welcome to Nest
                      </span>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate id est laborum.
                      </p>
                      <p>
                        lus ferri velit sanctus cu, sed at soleat accusata.
                        Dictas prompta et Ut placerat legendos interpre.Donec
                        vitae sapien ut libero venenatis faucibus. Nullam quis
                        ante Etiam sit amet orci eget. Quis commodo odio aenean
                        sed adipiscing. Turpis massa tincidunt dui ut ornare
                        lectus. Auctor elit sed vulputate mi sit amet. Commodo
                        consequat. Duis aute irure dolor in reprehenderit in
                        voluptate id est laborum.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd verse */}
                <div className="second">
                  <div className="heading">
                    <h2>What We Provide?</h2>
                  </div>
                  <div className="row flex">
                    <div className="col__3">
                      <div
                        style={{
                          padding: "10px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img
                            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg"
                            alt="Best Prices & Offers"
                          />
                        </div>
                        <span>Best Prices & Offers</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div
                        style={{
                          padding: "10px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img
                            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg"
                            alt="Best For Trust & Quality"
                          />
                        </div>
                        <span>Best For Trust & Quality</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img
                            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg"
                            alt="Fast Delivery System"
                          />
                        </div>
                        <span>Fast Delivery System</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img
                            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg"
                            alt="Easy Returns Service"
                          />
                        </div>
                        <span>Easy Returns Service</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img
                            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg"
                            alt="100% satisfication"
                          />
                        </div>
                        <span>100% satisfication</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img
                            src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg"
                            alt="Great Daily Deal"
                          />
                        </div>
                        <span>Great Daily Deal</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
          <BottomTab/>
        </>
      )}
    </>
  );
};

export default About;
