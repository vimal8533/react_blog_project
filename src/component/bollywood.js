import React, { useContext, useEffect, useState } from "react";
import { ContextApi } from "../App"
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import './bolly.css'


function Bollywood(){
  const [data, setDetails] = useState("")
  console.log(data);

  useEffect(() => {
    axios.get('https://reactblogserver.onrender.com/data')
      .then(response => response.data)
      .then(biharData => {
        console.log(biharData, "bihari bubu")
        setDetails(biharData)

      }
      )
  }, [])
  console.log(data);
    return(

        <>
        <Header/>
         
      <div className="main_box">
      <div className="box1">
        <h1 className="head">Bollywood</h1>
        <hr className="head_line"/>
        <div className="news_card">
        {data
                  .filter((item) => item.cat === "bolloywood")
                  .map((data) => {
                    return (
                      <>
                        {
                          <NavLink to={`/${data.id}`} className={"nav_link"} >
                            <div className="news_box">

                              <div>
                                
                                <img
                                  src={data.image}
                                  alt="not found"
                                  className={"img_card"}
                                />
                              </div>
                              <div className="head_card">
                                <h3>{data.heading}</h3>
                                <p>{data.description.slice(0, 150)}...</p>
                                <span className="travel">
                                  Travel
                                  <span className="travel_details">
                                    /August 21 2023
                                  </span>{" "}
                                </span>

                              </div>

                            </div>
                          </NavLink>
                        }
                      </>
                    );
                })}
                
        </div>
        
      </div>
      <div className="box2">
      <h1 className="head">Top Posts</h1>
        <hr className="head_line"/>
        {data
                .filter((item) => item.id === 10)
                .map((data) => {

                  return (
                    <>
                      {
                        <NavLink to={`/${data.id}`} className={"nav_link"} >
                          <div className="top_post">
                            <img
                              src={data.image}
                              alt="not found"
                              className={"top_post_img1"}
                            />
                            <div>
                              <div className="top_post_data1">
                                <div>
                                  {" "}
                                  <h3>{data.heading}</h3>
                                  <div className="travel">
                                  <h4>
                                    Travel{" "}
                                    <span className="travel_details">
                                      /August 21 2023
                                    </span>{" "}
                                  </h4>
                                  </div>
                                </div>
                                <div>
                                  <span className="top-post-count">1</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </NavLink>
                      }

                    </>
                  );
                })}
                 {data
              .filter((item) => item.id === 9)
              .map((data) => {
                return (
                  <>
                    {
                      <NavLink to={`/${data.id}`} className={"home1"} >
                        <div className="top_post2">
                          <div>
                            <img
                              src={data.image}
                              alt="not found"
                              className={"top_post_img2"}
                            />
                          </div>
                          <div className="top_post_data2">
                            <h5>{data.heading}</h5>
                            <div className="travel">
                            <h6>
                              Travel{" "}
                              <span className="travel_details">/August 21 2023</span>{" "}
                            </h6>
                            </div>
                          </div>
                          <div>
                            <span className="top-post-count">2</span>{" "}
                          </div>
                        </div></NavLink>
                    }
                  </>
                );
              })}
              {data
              .filter((item) => item.id === 15)
              .map((data) => {
                return (
                  <>
                    {
                      <NavLink to={`/${data.id}`} className={"home1"} >
                        <div className="top_post2">
                          <div>
                            <img
                              src={data.image}
                              alt="not found"
                              className={"top_post_img2"}
                            />
                          </div>
                          <div className="top_post_data2">
                            <h5>{data.heading}</h5>
                            <div className="travel">
                            <h6>
                              Travel{" "}
                              <span className="travel_details">/August 21 2023</span>{" "}
                            </h6>
                            </div>
                          </div>
                          <div>
                            <span className="top-post-count">3</span>{" "}
                          </div>
                        </div></NavLink>
                    }
                  </>
                );
              })}
              {data
              .filter((item) => item.id === 7)
              .map((data) => {
                return (
                  <>
                    {
                      <NavLink to={`/${data.id}`} className={"home1"} >
                        <div className="top_post2">
                          <div>
                            <img
                              src={data.image}
                              alt="not found"
                              className={"top_post_img2"}
                            />
                          </div>
                          <div className="top_post_data2">
                            <h5>{data.heading}</h5>
                            <div className="travel">
                            <h6>
                              Travel{" "}
                              <span className="travel_details">/August 21 2023</span>{" "}
                            </h6>
                            </div>
                          </div>
                          <div>
                            <span className="top-post-count">4</span>{" "}
                          </div>
                        </div></NavLink>
                    }
                  </>
                );
              })}
              <div className="adv">
                <h4>Advertistment</h4>
              </div>
      </div>
      </div>
      <div className='BollyFooter'>
        <Footer />

      </div>
        </>
    );
}

export default Bollywood;