import CurrentUrl from "../../../UI/CurrentUrl";
import classes from "./AboutContent.module.css";
import logo from "../../../svg/logo-2.svg";
import NumberAnimation from "../../../UI/NumberAnimation";
import Headline from "../../../UI/Headline";
import location from "../../../svg/location.svg";
import concierge from "../../../svg/concierge.svg";
import yoga from "../../../svg/lotus-yoga.svg";
import chef from "../../../svg/chef.svg";
import tree from "../../../svg/tree.svg";
import backpack from "../../../svg/backpack-svgrepo-com.svg";
import { useEffect, useRef, useState } from "react";
import useStickyNav from "../../../hooks/useStickyNav";
/* eslint-disable no-unused-vars */

function AboutContent() {
  const aboutRow = useRef();
  const [runAgain, setRunAgain] = useState(false);
  useStickyNav(aboutRow.current, { root: null, threshold: 0 });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setRunAgain(true);
  }, []);
  return (
    <>
      <CurrentUrl />
      <div className={classes.about}>
        <div className="container">
          <div className={classes["about-section-1"]}>
            <span className={classes["logo-1"]}>
              <img src={logo} alt="" />
            </span>
            <span className={classes["logo-2"]}>
              <img src={logo} alt="" />
            </span>
            <div ref={aboutRow} className="row align-items-center">
              <div className="col-md-6">
                <div className={classes["about-big-img"]}>
                  <img src="/images/about.jpg" alt="" />
                </div>
              </div>
              <div className={`col-md-6 ${classes["about-col-2"]}`}>
                <h1>A place of heart, your home away</h1>
                <h6>Different. Better. Special.</h6>
                <p>
                  It all began in 1995, when we received the keys to the
                  legendary Nouvhotel. Since then we’ve grown to a carefully
                  curated collection of travel adventures, each with a rich
                  story to tell.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["about-stats"]}>
          <div className="d-flex justify-content-center flex-wrap">
            <div className={classes["about-stats-col"]}>
              <h6>Luxury rooms</h6>
              <NumberAnimation targetNumber={524} duration={3000} />
            </div>
            <div className={classes["about-stats-col"]}>
              <h6>Guests</h6>
              <p>
                <NumberAnimation
                  targetNumber={748}
                  duration={3000}
                  thousand={true}
                />
              </p>
            </div>
            <div className={classes["about-stats-col"]}>
              <h6>Five star ratings</h6>
              <NumberAnimation targetNumber={3659} duration={3000} />
            </div>
            <div className={classes["about-stats-col"]}>
              <h6>Served Breakfast</h6>
              <p>
                <NumberAnimation
                  targetNumber={1782}
                  duration={3000}
                  thousand={true}
                />
              </p>
            </div>
          </div>
        </div>
        <div className={classes.explore}>
          <div className="container">
            <Headline
              title="Explore in Depth"
              smallTitle="A nurturing enviroment"
            />
            <div className="row">
              <div className={`col-md-4 ${classes["explore-col"]}`}>
                <div className={classes["explore-col-img"]}>
                  <img src={location} alt="" />
                </div>
                <h5>Gorgeous location</h5>
                <p>
                  Nestled in the stunning surrounds of Bundjalung Country,
                  Gaia's story began organically, inspired by friendship, dreams
                  and synchronicity.
                </p>
              </div>
              <div className={`col-md-4 ${classes["explore-col"]}`}>
                <div className={classes["explore-col-img"]}>
                  <img src={concierge} alt="" />
                </div>
                <h5>Dedicated concierge</h5>
                <p>
                  With a shared vision of heart and healing, this piece of
                  paradise was born, and continues to evolve with deep grace and
                  gratitude to the land today.
                </p>
              </div>
              <div className={`col-md-4 ${classes["explore-col"]}`}>
                <div className={classes["explore-col-img"]}>
                  <img src={yoga} alt="" />
                </div>
                <h5>Yoga retreats</h5>
                <p>
                  We are dedicated to providing boutique healing experiences
                  where you can surrender, slow down and nurture your being.
                </p>
              </div>
              <div className={`col-md-4 ${classes["explore-col"]}`}>
                <div className={classes["explore-col-img"]}>
                  <img src={chef} alt="" />
                </div>
                <h5>Gastronomy</h5>
                <p>
                  As curators of truly unique experiences, we pride ourselves on
                  developing meaningful places that enhance the health and
                  wellbeing
                </p>
              </div>
              <div className={`col-md-4 ${classes["explore-col"]}`}>
                <div className={classes["explore-col-img"]}>
                  <img src={tree} alt="" />
                </div>
                <h5>Safaris</h5>
                <p>
                  Whether you are seeking total time-out or an improvement in
                  general health, wellbeing or fitness.
                </p>
              </div>
              <div className={`col-md-4 ${classes["explore-col"]}`}>
                <div className={classes["explore-col-img"]}>
                  <img src={backpack} alt="" />
                </div>
                <h5>Packages and tours</h5>
                <p>
                  A variety of cultural-themed parties on the beach or around
                  the lagoon, in the ballrooms or outside the resort
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutContent;
