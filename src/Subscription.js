import React from "react";
import "./style/subscription.css";
import subimg from "./assests/subs.jpeg"

const Subscription = () => {
  return (
    <div>
      <div className="subscription">
        <p>
          <span>Get hired 2x faster on average </span>
          by discovering over 20 million open jobs and exploring valuable
          resources to help with your search.
        </p>
        <button type="">Try now</button>
      </div>
      <div className="options">
        <div className="option">
          <div className="name">InMail credits</div>
          <img src={subimg} alt=""/>
          <div className="about">Connect with hiring managers</div>
          <div>
            Show your interest in an open role with InMail .it's 2.6x more
            effective than email alone
          </div>
        </div>
        <div className="option">
          <div className="name">Who's Viewed Your Profile</div>
          <img src={subimg} alt=""/>
          <div className="about">Turn views into opportunities</div>
          <div>
            See Who's Viewed your profile over the last 90 days,and who looks
            next.
          </div>
        </div>
        <div className="option">
          <div className="name">LinkedIn Learning courses</div>
          <img src={subimg} alt=""/>
          <div className="about">Sharpen your skills</div>
          <div>
            Show your interest in an open role with InMail .it's 2.6x more
            effective than email alone
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
