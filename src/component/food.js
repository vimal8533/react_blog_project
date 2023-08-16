import React, { useContext } from "react";
import { ContextApi } from "../App";
import { NavLink } from "react-router-dom";
import './style.css'
import Footer from "./Footer";
function Food(){
    const data=useContext(ContextApi)
    console.log(data);
    return(

        <>
          <div className='Food-parent'>
        <div className='Food-containeer'>
          <h3 className="sub-title ">Food</h3>

          <hr className="sub-heading-hr " />

          <div className="latest-Articles latest-food1">


            <div className="latest-Articles-parent the-latest-food-parent">

              <div className="articles-one">


                {data
                  .filter((item) => item.cat === "food")
                  .map((data) => {
                    return (
                      <>
                        {
                          <NavLink to={`/${data.id}`} className={"home1"} >
                            <div className="article-image-details-parent">

                              <div>
                                <hr className="Food-hr" />
                                <img
                                  src={data.image}
                                  alt="not found"
                                  className={"latest-card1"}
                                />
                              </div>
                              <div className="article-image-details">
                                <h3>{data.heading}</h3>
                                <h5>{data.description.slice(0, 150)}...</h5>
                                <span>
                                  Travel
                                  <span className="travel-time">
                                    /August 21 2023
                                  </span>{" "}
                                </span>

                              </div>

                            </div></NavLink>
                        }
                      </>
                    );
                  })}
              </div>

            </div>

          </div>
        </div>
        <div className="top-post-details-parent food-tops">
          <h3 className="sub-title top-post-titlefood">Top Post</h3>
          <hr className="sub-heading-hr top-post-hr" />
          <div className="top-post-con">
            <div className="top-post-one-data">

              {data
                .filter((item) => item.id === 56)
                .map((data) => {

                  return (
                    <>
                      {
                        <NavLink to={`/${data.id}`} className={"home1"} >
                          <div>
                            <img
                              src={data.image}
                              alt="not found"
                              className={"top-post-card2"}
                            />
                            <div>
                              <div className="top-post-data1">
                                <div>
                                  {" "}
                                  <h3>{data.title}</h3>
                                  <h4>
                                    Travel{" "}
                                    <span className="travel-time">
                                      /August 21 2023
                                    </span>{" "}
                                  </h4>
                                </div>
                                <div>
                                  <span className="top-post-count">1</span>
                                </div>
                              </div>
                            </div>
                          </div></NavLink>
                      }
                    </>
                  );
                })}
            </div>
          </div>
          <hr className="top-post-divider top-post-divider2" />

          <div className="latest-one">
            {data
              .filter((item) => item.id === 65)
              .map((data) => {
                return (
                  <>
                    {<NavLink to={`/${data.id}`} className={"home1"} >
                      <div className="top-posrt-sub-con1 top-posrt-sub-con2 ">
                        <div>
                          <img
                            src={data.image}
                            alt="not found"
                            className={"top-post-sub1-card1"}
                          />
                        </div>
                        <div>
                          <h5>{data.heading}</h5>

                          <h6>
                            Travel{" "}
                            <span className="travel-time">/August 21 2023</span>{" "}
                          </h6>
                        </div>
                        <div>
                          <span className="top-post-count">2</span>{" "}
                        </div>
                      </div></NavLink>
                    }
                  </>
                );
              })}


          </div>
          <hr className="top-post-divider3" />
          <div className="latest-one top-post3">
            {data
              .filter((item) => item.id === 24)
              .map((data) => {
                return (
                  <>
                    {<NavLink to={`/${data.id}`} className={"home1"} >
                      <div className="top-posrt-sub-con1 top-posrt-sub-con2 ">
                        <div>
                          <img
                            src={data.image}
                            alt="not found"
                            className={"top-post-sub1-card1"}
                          />
                        </div>
                        <div>
                          <h5>{data.heading}</h5>

                          <h6>
                            Travel{" "}
                            <span className="travel-time">/August 21 2023</span>{" "}
                          </h6>
                        </div>
                        <div>
                          <span className="top-post-count">3</span>{" "}
                        </div>
                      </div></NavLink>
                    }
                  </>
                );
              })}


          </div>
          <div className="advatige advatige-Food">
            <h2 className="advatige-text advatige-text-Food ">advertistment</h2>
          </div>

        </div>

      </div>
      <div className='food_footer'>
        <div className="foodfooter">
        <Footer />
        </div>
        

      </div>
        
        </>
    );

}
export default Food;