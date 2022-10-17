import { FunctionComponent } from "react";
import styles from "./ForSeniors.module.css";
import { Link } from "react-router-dom";

const ForSeniors: FunctionComponent = () => {
  return (
    <>
      <div className={`${styles.forSeniorsDiv} container`}>
        <section className={`${styles.topNav} container`}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo01"
              >
                <a className="navbar-brand" href="#">
                  <div className={styles.logomain}>
                    <img src="chatbot.png" height="50" width="50" />
                  </div>
                </a>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
                  <li className={styles.listDiv}>
                    <div className={styles.sENIORSDiv}>SENIORS</div>
                  </li>
                  <li className={styles.listDiv}>
                    <Link to="/product">
                      <div className={styles.pRODUCTDiv}>PRODUCT</div>
                    </Link>
                  </li>
                  <li className={styles.listDiv}>
                    {" "}
                    <Link to="/competitors">
                      <div className={styles.cOMPETITORSDiv}>COMPETITORS</div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>

        <section>
          <div className="row mt-5">
            <div className="col-sm-12 col-xs1-12 col-md-6">
              <b className={styles.aICaregiverForElders}>
                AI Caregiver for Elders
              </b>
              <p className={styles.usingOptimusToAvoidInciden}>
                Using Optimus to avoid incidents and monitor behaviour patterns
                for unusual behaviour in elders allows many seniors to stay in
                their homes safely. And notifying caregivers, family, friends
                and doctors for quick assistance to elders.
              </p>
            </div>
            <div className="col-sm-12 col-xs1-12 col-md-6">
              <img className={styles.untitled11Icon} alt="" src="../123.png" />
            </div>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col-sm-12 col-xs1-12 col-md-6">
              <div className={styles.groupDiv17}>
                <b className={styles.fallDetectionB}>Fall Detection</b>

                <p
                  className={styles.fallsAreTheLeadingCauseOf}
                >{`Falls are the leading cause of fatal and nonfatal injuries among adults aged ≥65 years (older adults). Our solution is to monitor elders 24/7 and detect in case of falls only by using images from a standard video-camera without the need to use depth camera nor environmental sensors. `}</p>
              </div>
              <div>
                <img
                  className={styles.w023N0032929bP12929ConveIcon}
                  alt=""
                  src="../img_2208w023n003.svg"
                />
              </div>
            </div>

            <div className="col-sm-12 col-xs1-12 col-md-6">
              <div className={styles.groupDiv21}>
                <b className={styles.sleepBehaviour}>Medication Schedule</b>

                <p
                  className={styles.optimusIsACuttingEdgeVirt}
                >{`Optimus voice alerts seniors about medication, and optimus camera detects medication consumption and notifies care taker if the user is missing a schedule. `}</p>
              </div>
              <div>
                <img
                  className={styles.oldWomanWithMigraineTakingIcon}
                  alt=""
                  src="../group.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row mt-5">
            <div className="col-sm-12 col-xs1-12 col-md-6">
              <div className={styles.groupDiv18}>
                <b className={styles.sleepBehaviour}>Sleep Behaviour</b>

                <div
                  className={styles.optimusIsACuttingEdgeVirt}
                >{`Optimus camera detects senior sleep pattern and analyses and sends notification to care taker on daily or weekly. `}</div>
              </div>
              <div>
                {" "}
                <img
                  className={styles.oldWomanSufferingFromHeadaIcon}
                  alt=""
                  src="../oldwomansufferingfromheadacheinhospital-1.svg"
                />
              </div>
            </div>

            <div className="col-sm-12 col-xs1-12 col-md-6">
              <div className={styles.groupDiv22}>
                <b className={styles.sleepBehaviour}>Prediction Anomalies</b>

                <p
                  className={styles.optimusIsACuttingEdgeVirt}
                >{`Optimus eyes detects senior anomaly behaviors and notifies care taker if necessary. `}</p>
              </div>
              <div>
                <img
                  className={styles.retiredWomenFellDownByHeaIcon}
                  alt=""
                  src="../retiredwomenfelldownbyheartattack-1.svg"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={`${styles.topSpace} row`}>
            <div className="col-sm-12 col-xs-12 col-md-6">
              <div className={styles.groupDiv19}>
                <b className={styles.sleepBehaviour}>Vision </b>

                <p
                  className={styles.optimusIsACuttingEdgeVirt}
                >{`Optimus eyes and voice helps low vision seniors by reading and speaking expiry dates of food packages, and many more. `}</p>
              </div>
              <div>
                <img
                  className={styles.oldPersonSmoking11}
                  alt=""
                  src="../oldpersonsmoking-1-1.svg"
                />
              </div>
              <div>
                <div className={styles.groupDiv20}>
                  <b className={styles.sleepBehaviour}>Transportation</b>

                  <p
                    className={styles.optimusIsACuttingEdgeVirt}
                  >{`Seniors using tech is not quite often, so Optimus custom skill set (Amazon Alexa) helps checking route, calling cab and many more with simple questions. `}</p>
                </div>
                <div>
                  <img
                    className={styles.icon}
                    alt=""
                    src="../3648586-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-6">
              <div className={styles.groupDiv23}>
                <b className={styles.sleepBehaviour}>Nutrition</b>

                <p
                  className={styles.optimusIsACuttingEdgeVirt}
                >{`Optimus custom NLP skill set(Amazon Alexa) for seniors, helps understanding nutritions. `}</p>
              </div>
              <div>
                <img className={styles.icon1} alt="" src="../2565-1.svg" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.footerDivs}>
        <div className={`${styles.footerDiv} container`}>
          {/* <div className={styles.rectangleDiv} />
          <div className={styles.rectangleDiv1} /> */}
          <div className="row">
            <div className="col-sm-12 col-xs-12 col-md-3">
              <a href="https://www.aitensors.org/">
                <div className={styles.logoDiv}>
                  <img src="chatbot.png" height="50" width="50" />{" "}
                </div>
              </a>
              <div className={styles.transformingLivesOfPeopleA}>
                Transforming lives across the globe by adventuring Artificial
                Intelligence.
              </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-3">
              <div className={styles.linksDiv}>Links</div>
              <div className={styles.companyDiv}>Company</div>
              <Link to="/product">
                <div className={styles.productDiv}>Product</div>
              </Link>
              <Link to="/competitors">
                <div className={styles.competitorsDiv}>Competitors</div>
              </Link>
              <div className={styles.pricingDiv}>Pricing</div>
              <div className={styles.contactDiv}>Contact</div>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-3">
              <div className={styles.followUsDiv}>{`Follow Us `}</div>
              <div className={styles.groupDiv}>
                <a href="https://twitter.com/AiTensors">
                  <div className={styles.fbcomaaaDiv}>Twitter</div>
                </a>
              </div>
              <div className={styles.groupDiv2}>
                <a href="https://www.linkedin.com/company/82789169/">
                  <div className={styles.fbcomaaaDiv}>Linkedin</div>
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-3">
              <div className={styles.getInTouchWithUs}>
                Get In touch with Us
              </div>
              <div
                className={styles.needAnswersNeedHelpJust}
              >{`Need Answers? Need help ? Just email us `}</div>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.copyright2022Div}>Copyright 2022</div>
    </>
  );
};

export default ForSeniors;
