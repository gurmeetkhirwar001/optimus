import { FunctionComponent, useCallback } from "react";
import { useNavigate, Link} from "react-router-dom";
import styles from "./css/Login.module.css";

export const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonContainer1Click = useCallback(() => {
    navigate("/payment1");
  }, [navigate]);

  
  return (
    <div className={styles.loginDiv}>
      <div className={styles.homeBannerDiv}>
        <div className={styles.rectangleDiv} />
        <img className={styles.ellipseIcon} alt="" src="ellipse-42.svg" />
        <img className={styles.groupIcon} alt="" src="group-163.svg" />
        <div className={styles.groupDiv}>
          <div className={styles.image48Div} />
          <img className={styles.groupIcon1} alt="" src="group-252.svg" />
          <div className={styles.groupDiv1}>
            <img className={styles.iconlyLightNotification} alt="" />
            <div className={styles.jumpStartDiv}>{`Jump start `}</div>
            <div className={styles.yourPortfolioLooksGreatTod}>
              Your portfolio looks great today
            </div>
          </div>
          <div className={styles.groupDiv2}>
            <div className={styles.groupDiv3}>
              <div className={styles.portfolioBalanceDiv}>
                Portfolio balance
              </div>
              <div className={styles.div}>$12,175.11</div>
              <div className={styles.groupDiv4}>
                <img className={styles.vectorIcon} alt="" src="vector-12.svg" />
                <div className={styles.div1}>$24.74 (3.79%)</div>
              </div>
              <div className={styles.todayMay222021}>Today (May 22,2021)</div>
            </div>
            <div className={styles.groupDiv5}>
              <div className={styles.availableBalanceDiv}>
                Available balance
              </div>
              <div className={styles.div2}>$173.21</div>
              <div className={styles.groupDiv6}>
                <img className={styles.vectorIcon1} alt="" />
                <div className={styles.portfolioBalanceDiv}>More details</div>
              </div>
            </div>
            <div className={styles.groupDiv7}>
              <div className={styles.rectangleDiv1} />
              <div className={styles.hDiv}>1h</div>
            </div>
            <div className={styles.groupDiv8}>
              <div className={styles.rectangleDiv2} />
              <div className={styles.hDiv1}>24h</div>
            </div>
            <div className={styles.groupDiv9}>
              <div className={styles.rectangleDiv2} />
              <div className={styles.wDiv}>1w</div>
            </div>
            <div className={styles.groupDiv10}>
              <div className={styles.rectangleDiv2} />
              <div className={styles.wDiv}>1w</div>
            </div>
            <div className={styles.groupDiv11}>
              <div className={styles.rectangleDiv2} />
              <div className={styles.yDiv}>1y</div>
            </div>
            <div className={styles.groupDiv12}>
              <div className={styles.rectangleDiv2} />
              <div className={styles.wDiv}>All</div>
            </div>
            <div className={styles.rectangleDiv7} />
            <img className={styles.groupIcon2} alt="" src="group-182.svg" />
            <div className={styles.groupDiv13}>
              <div className={styles.rectangleDiv8} />
              <div className={styles.sendDiv}>Send</div>
            </div>
            <div className={styles.groupDiv14}>
              <div className={styles.rectangleDiv9} />
              <div className={styles.withdrawDiv}>Withdraw</div>
            </div>
            <img className={styles.groupIcon3} alt="" />
            <img className={styles.groupIcon4} alt="" src="group-272.svg" />
          </div>
        </div>
        <img className={styles.bluee011Icon} alt="" src="bluee01-1@2x.png" />
      </div>
      <div className={styles.groupDiv15}>
        <img className={styles.ezgif6Icon} alt="" src="ezgif-4@2x.png" />
      </div>
      <div className={styles.rectangleDiv10} />
      <b className={styles.thankYouForChoosingThePla}>
      Let your Optimus Know Who you are
      </b>
      <div className={styles.navBarDiv}>
        <div className={styles.cONTACTDiv}>CONTACT</div>
        <div className={styles.pRICINGDiv}>PRICING</div>
        <div className={styles.tESTIMONIALSDiv}>TESTIMONIALS</div>
        <Link to="/competitors"><div className={styles.cOMPETITORSDiv}>
          COMPETITORS
        </div></Link>
        <Link to="/product"><div className={styles.pRODUCTDiv}>PRODUCT</div></Link>
        <div className={styles.cOMPANYDiv}>COMPANY</div>
        <Link to="/"><div className={styles.logomain}>
          <img src="logo.png" height="50" width="50" />
        </div></Link>
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.rectangleDiv11} />
        <div className={styles.rectangleDiv12} />
        <div className={styles.logoDiv}><img src="logo.png" height="50" width="50" /></div>
        <div className={styles.transformingLivesOfPeopleA}>
        Transforming lives across the globe by adventuring Artificial Intelligence.
        </div>
        <div
          className={styles.needAnswersNeedHelpJust}
        >{`Need Answers? Need help ? Just email us `}</div>
        <div className={styles.copyright2022Div}>Copyright 2022</div>
        <div className={styles.companyDiv}>Company</div>
        <Link to="/product"><div className={styles.productDiv}>Product</div></Link>
        <Link to="/competitors"><div className={styles.competitorsDiv}>Competitors</div></Link>
        <div className={styles.pricingDiv}>Pricing</div>
        <div className={styles.contactDiv}>Contact</div>
        <div className={styles.linksDiv}>Links</div>
        <div className={styles.followUsDiv}>{`Follow Us `}</div>
        <div className={styles.getInTouchWithUs}>Get In touch with Us</div>
        <div className={styles.groupDiv16}>
          <div className={styles.fbcomaaaDiv}>https://twitter.com/AiTensors</div>
            <a href="https://twitter.com/AiTensors"><img
              className={styles.featherfacebookIcon}
              alt=""
              src="twitter.svg"
            /></a>
        </div>
        <div className={styles.groupDiv18}>
          <div className={styles.fbcomaaaDiv}>https://www.linkedin.com/company/82789169/</div>
            <a href="https://www.linkedin.com/company/82789169/"><img
              className={styles.featherfacebookIcon}
              alt=""
              src="linkedin.svg"
            /></a>
        </div>
        
      </div>
      <div className={styles.groupDiv19}>
        <div className={styles.groupDiv20}>
          <div className={styles.rectangleDiv13} />
        </div>
        <div className={styles.formDiv}>
          <div className={styles.buttonDiv} onClick={onButtonContainer1Click}>
            <div className={styles.elementsButtonsPrimary}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv} />
                <div className={styles.buttonTextDiv}>Proceed</div>
              </div>
            </div>
          </div>
          <div className={styles.formDiv1}>
            <div className={styles.elementsInputsLarge60px}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv1} />
                <div className={styles.typeYourEMail}>First Name</div>
              </div>
            </div>
            <div className={styles.elementsInputsLarge60px1}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv1} />
                <div className={styles.typeYourEMail}>Phone Number</div>
              </div>
            </div>
            <div className={styles.elementsInputsLarge60px2}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv1} />
                <div className={styles.typeYourEMail}>City</div>
              </div>
            </div>
            <div className={styles.elementsInputsLarge60px3}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv1} />
                <div className={styles.typeYourEMail}>Country</div>
              </div>
            </div>
            <div className={styles.elementsInputsLarge60px4}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv1} />
                <div className={styles.typeYourEMail}>
                  Street Number and Name
                </div>
              </div>
            </div>
            <div className={styles.elementsInputsLarge60px5}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv1} />
                <div className={styles.typeYourEMail}>Last Name</div>
              </div>
            </div>
            <div className={styles.elementsInputsLarge60px6}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv1} />
                <div className={styles.typeYourEMail}>Email</div>
              </div>
            </div>
            <div className={styles.elementsInputsLarge60px7}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv1} />
                <div className={styles.typeYourEMail}>{`State `}</div>
              </div>
            </div>
            <div className={styles.baseDiv9} />
            <div className={styles.elementsInputsLarge60px8}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv1} />
                <div className={styles.typeYourEMail}>Apartment</div>
              </div>
            </div>
            <div className={styles.registrationPayment}>
              <span>Registration</span>
              <span className={styles.payment}> - Payment - Download</span>
            </div>
          </div>
          <div className={styles.typeYourEMail9}>Zip code</div>
        </div>
      </div>
    </div>
  );
};
