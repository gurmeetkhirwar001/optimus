import { FunctionComponent } from "react";
import styles from "./ForSeniors.module.css";
import { Link } from "react-router-dom";

const ForSeniors: FunctionComponent = () => {
  return (
    <div className={styles.forSeniorsDiv}>
      <div className={styles.footerDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.rectangleDiv1} />
        <Link to="/"><div className={styles.logoDiv}><img src="chatbot.png" height="50" width="50" /></div></Link>
        <div className={styles.transformingLivesAcrossThe}>
          Transforming lives across the globe by adventuring Artificial
          Intelligence.
        </div>
        <div
          className={styles.needAnswersNeedHelpJust}
        >{`Need Answers? Need help ? Just email us `}</div>
        <div className={styles.copyright2022Div}>Copyright 2022</div>
        <div className={styles.companyDiv}>Company</div>
        <div className={styles.productDiv}>Product</div>
        <div className={styles.competitorsDiv}>Competitors</div>
        <div className={styles.pricingDiv}>Pricing</div>
        <div className={styles.contactDiv}>Contact</div>
        <div className={styles.seniorsDiv}>Seniors</div>
        <div className={styles.linksDiv}>Links</div>
        <div className={styles.followUsDiv}>{`Follow Us `}</div>
        <div className={styles.getInTouchWithUs}>Get In touch with Us</div>
        <div className={styles.groupDiv}>
          <a href="https://twitter.com/AiTensors"><div className={styles.twitterDiv}>Twitter</div></a>
        </div>
        <div className={styles.groupDiv1}>
          <a href="https://www.linkedin.com/company/82789169/">
          <div className={styles.linkedInDiv}>LinkedIn</div></a>
        </div>
      </div>
      <div className={styles.homeBannerDiv}>
        <div className={styles.rectangleDiv2} />
        <img className={styles.ellipseIcon} alt="" src="../ellipse-42.svg" />
        <img className={styles.groupIcon} alt="" src="../group-163.svg" />
        <div className={styles.groupDiv2}>
          <div className={styles.image48Div} />
          <img className={styles.groupIcon1} alt="" src="../group-25.svg" />
          <div className={styles.groupDiv3}>
            <img
              className={styles.iconlyLightNotification}
              alt=""
              src="../iconlylightnotification.svg"
            />
            <div className={styles.jumpStartDiv}>{`Jump start `}</div>
            <div className={styles.yourPortfolioLooksGreatTod}>
              Your portfolio looks great today
            </div>
          </div>
          <div className={styles.groupDiv4}>
            <div className={styles.groupDiv5}>
              <div className={styles.portfolioBalanceDiv}>
                Portfolio balance
              </div>
              <div className={styles.div}>$12,175.11</div>
              <div className={styles.groupDiv6}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="../vector-1.svg"
                />
                <div className={styles.div1}>$24.74 (3.79%)</div>
              </div>
              <div className={styles.todayMay222021}>Today (May 22,2021)</div>
            </div>
            <div className={styles.groupDiv7}>
              <div className={styles.availableBalanceDiv}>
                Available balance
              </div>
              <div className={styles.div2}>$173.21</div>
              <div className={styles.groupDiv8}>
                <img
                  className={styles.vectorIcon1}
                  alt=""
                  src="../vector-3.svg"
                />
                <div className={styles.moreDetailsDiv}>More details</div>
              </div>
            </div>
            <div className={styles.groupDiv9}>
              <div className={styles.rectangleDiv3} />
              <div className={styles.hDiv}>1h</div>
            </div>
            <div className={styles.groupDiv10}>
              <div className={styles.rectangleDiv4} />
              <div className={styles.hDiv1}>24h</div>
            </div>
            <div className={styles.groupDiv11}>
              <div className={styles.rectangleDiv4} />
              <div className={styles.wDiv}>1w</div>
            </div>
            <div className={styles.groupDiv12}>
              <div className={styles.rectangleDiv4} />
              <div className={styles.wDiv}>1w</div>
            </div>
            <div className={styles.groupDiv13}>
              <div className={styles.rectangleDiv4} />
              <div className={styles.yDiv}>1y</div>
            </div>
            <div className={styles.groupDiv14}>
              <div className={styles.rectangleDiv4} />
              <div className={styles.allDiv}>All</div>
            </div>
            <div className={styles.rectangleDiv9} />
            <img className={styles.groupIcon2} alt="" src="../group-18.svg" />
            <div className={styles.groupDiv15}>
              <div className={styles.rectangleDiv10} />
              <div className={styles.sendDiv}>Send</div>
            </div>
            <div className={styles.groupDiv16}>
              <div className={styles.rectangleDiv11} />
              <div className={styles.withdrawDiv}>Withdraw</div>
            </div>
            <img className={styles.groupIcon3} alt="" src="../group-31.svg" />
            <img className={styles.groupIcon4} alt="" src="../group-27.svg" />
          </div>
        </div>
        <b className={styles.aICaregiverForElders}>AI Caregiver for Elders</b>
        <div className={styles.usingOptimusToAvoidInciden}>
          Using Optimus to avoid incidents and monitor behaviour patterns for
          unusual behaviour in elders allows many seniors to stay in their homes
          safely. And notifying caregivers, family, friends and doctors for
          quick assistance to elders.
        </div>
        <img className={styles.bluee011Icon} alt="" src="../bluee01-1@2x.png" />
      </div>
      <div className={styles.navBarDiv}>
        {/* <div className={styles.cONTACTDiv}>CONTACT</div>
        <div className={styles.pRICINGDiv}>PRICING</div>
        <div className={styles.tESTIMONIALSDiv}>TESTIMONIALS</div> */}
        <Link to="/competitors"><div className={styles.cOMPETITORSDiv}>COMPETITORS</div></Link>
        <Link to="/product"><div className={styles.pRODUCTDiv}>PRODUCT</div></Link>
        <div className={styles.sENIORSDiv}>SENIORS</div>
        {/* <div className={styles.cOMPANYDiv}>COMPANY</div> */}
      </div>
      <div className={styles.groupDiv17}>
        <div
          className={styles.fallsAreTheLeadingCauseOf}
        >{`Falls are the leading cause of fatal and nonfatal injuries among adults aged ≥65 years (older adults). Our solution is to monitor elders 24/7 and detect in case of falls only by using images from a standard video-camera without the need to use depth camera nor environmental sensors. `}</div>
        <b className={styles.fallDetectionB}>Fall Detection</b>
      </div>
      <div className={styles.groupDiv18}>
        <div
          className={styles.optimusIsACuttingEdgeVirt}
        >{`Optimus camera detects senior sleep pattern and analyses and sends notification to care taker on daily or weekly. `}</div>
        <b className={styles.sleepBehaviour}>Sleep Behaviour</b>
      </div>
      <div className={styles.groupDiv19}>
        <div
          className={styles.optimusIsACuttingEdgeVirt}
        >{`Optimus eyes and voice helps low vision seniors by reading and speaking expiry dates of food packages, and many more. `}</div>
        <b className={styles.sleepBehaviour}>Vision </b>
      </div>
      <div className={styles.groupDiv20}>
        <div
          className={styles.optimusIsACuttingEdgeVirt}
        >{`Seniors using tech is not quite often, so Optimus custom skill set (Amazon Alexa) helps checking route, calling cab and many more with simple questions. `}</div>
        <b className={styles.sleepBehaviour}>Transportation</b>
      </div>
      <div className={styles.groupDiv21}>
        <div
          className={styles.optimusIsACuttingEdgeVirt}
        >{`Optimus voice alerts seniors about medication, and optimus camera detects medication consumption and notifies care taker if the user is missing a schedule. `}</div>
        <b className={styles.sleepBehaviour}>Medication Schedule</b>
      </div>
      <div className={styles.groupDiv22}>
        <div
          className={styles.optimusIsACuttingEdgeVirt}
        >{`Optimus eyes detects senior anomaly behaviors and notifies care taker if necessary. `}</div>
        <b className={styles.sleepBehaviour}>Prediction Anomalies</b>
      </div>
      <div className={styles.groupDiv23}>
        <div
          className={styles.optimusIsACuttingEdgeVirt}
        >{`Optimus custom NLP skill set(Amazon Alexa) for seniors, helps understanding nutritions. `}</div>
        <b className={styles.sleepBehaviour}>Nutrition</b>
      </div>
      <div className={styles.groupDiv24}>
        <img className={styles.ezgif6Icon} alt="" src="../ezgif-6@2x.png" />
      </div>
      <div className={styles.groupDiv25}>
        <div className={styles.rectangleDiv12} />
        <div className={styles.rectangleDiv13} />
        <div className={styles.rectangleDiv14} />
        <div className={styles.rectangleDiv15} />
        <div className={styles.rectangleDiv16} />
      </div>
      <div className={styles.groupDiv26}>
        <div className={styles.rectangleDiv17} />
        <div className={styles.rectangleDiv18} />
        <div className={styles.rectangleDiv19} />
        <div className={styles.rectangleDiv20} />
        <div className={styles.rectangleDiv21} />
        <div className={styles.rectangleDiv22} />
        <div className={styles.rectangleDiv23} />
      </div>
      <img
        className={styles.w023N0032929bP12929ConveIcon}
        alt=""
        src="../img_2208w023n003.svg"
      />
      <img
        className={styles.analysisOfDataBlockchain1Icon}
        alt=""
        src="../analysisofdatablockchain-1.svg"
      />
      <div className={styles.rectangleDiv24} />
      <img className={styles.vectorIcon2} alt="" src="../vector.svg" />
      <img
        className={styles.oldWomanSufferingFromHeadaIcon}
        alt=""
        src="../oldwomansufferingfromheadacheinhospital-1.svg"
      />
      <img
        className={styles.retiredWomenFellDownByHeaIcon}
        alt=""
        src="../retiredwomenfelldownbyheartattack-1.svg"
      />
      <img
        className={styles.oldPersonSmoking11}
        alt=""
        src="../oldpersonsmoking-1-1.svg"
      />
      <img className={styles.icon} alt="" src="../3648586-1@2x.png" />
      <img className={styles.icon1} alt="" src="../2565-1.svg" />
      <img className={styles.untitled11Icon} alt="" src="../123.png" />
      <img
        className={styles.oldWomanWithMigraineTakingIcon}
        alt=""
        src="../group.svg"
      />
      <img className={styles.calender1Icon} alt="" src="../calender-1.svg" />
      <Link to="/"><img 
        className={styles.rectangleIcon}
        alt=""
        src="../chatbot.png"
      /></Link>
    </div>
  );
};

export default ForSeniors;
