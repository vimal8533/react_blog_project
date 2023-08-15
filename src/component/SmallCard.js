import React from 'react'
import instagram1 from "../logo/instagram.png";
import persion from "../logo/man.png";
import youtube from "../logo/youtube.png";
import twitter from "../logo/twitter.png";
import facebbok from "../logo/facebook.png";
import './innerpage.css'

function SmallCard() {
  return (
    <div className="smallCard-containeer">
      <div className="smallcard-parent">
        <div>
          <div
            className="smallcard-persion-img bg"
            style={{ backgroundImage: `url(${persion})` }}
          ></div>
        </div>
        <div className="smallcard-userdata">
          <div className="h5">Vimal kumar</div>
          <div>14 August 2023</div>
        </div>
      </div>
      <div className="small-social">
        <div
          className="smallcard-img1 bg"
          style={{ backgroundImage: `url(${facebbok})` }}
        ></div>{" "}
        <div
          className="smallcard-img1 bg"
          style={{ backgroundImage: `url(${twitter})` }}
        ></div>{" "}
        <div
          className="smallcard-img1 bg"
          style={{ backgroundImage: `url(${youtube})` }}
        ></div>
        <div
          className="smallcard-img1 bg"
          style={{ backgroundImage: `url(${instagram1})` }}
        ></div>
      </div>
    </div>
  )
}

export default SmallCard
