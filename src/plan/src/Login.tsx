import { FunctionComponent, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./css/Login.module.css";

export const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCOMPETITORSTextClick = useCallback(() => {
    // Please sync "Competitors" to the project
  }, []);

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
        Thank you for choosing the plan
      </b>
      <div className={styles.navBarDiv}>
        <div className={styles.cONTACTDiv}>CONTACT</div>
        <div className={styles.pRICINGDiv}>PRICING</div>
        <div className={styles.tESTIMONIALSDiv}>TESTIMONIALS</div>
        <div className={styles.cOMPETITORSDiv} onClick={onCOMPETITORSTextClick}>
          COMPETITORS
        </div>
        <div className={styles.pRODUCTDiv}>PRODUCT</div>
        <div className={styles.cOMPANYDiv}>COMPANY</div>
        <Link to="/"><b className={styles.lOGOB}>LOGO</b></Link>
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.rectangleDiv11} />
        <div className={styles.rectangleDiv12} />
        <div className={styles.logoDiv}>Logo</div>
        <div className={styles.transformingLivesOfPeopleA}>
          Transforming lives of people across all walks of life with
          out-of-the-box ideas peeking into the possibilities of today’s
          Artificial Intelligence and bringing those ideas alive in the form of
          valuable applications.
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
        <div className={styles.linksDiv}>Links</div>
        <div className={styles.followUsDiv}>{`Follow Us `}</div>
        <div className={styles.getInTouchWithUs}>Get In touch with Us</div>
        <div className={styles.groupDiv16}>
          <div className={styles.fbcomaaaDiv}>fb.com/aaa</div>
          <img
            className={styles.featherfacebookIcon}
            alt=""
            src="featherfacebook3.svg"
          />
        </div>
        <div className={styles.groupDiv17}>
          <div className={styles.aaaDiv}>@aaa</div>
          <img
            className={styles.featherfacebookIcon}
            alt=""
            src="featherinstagram3.svg"
          />
        </div>
        <div className={styles.groupDiv18}>
          <div className={styles.fbcomaaaDiv}>@aaa</div>
          <img
            className={styles.featherfacebookIcon}
            alt=""
            src="feathertwitter3.svg"
          />
        </div>
        <div className={styles.xFormGroupDiv}>
          <div className={styles.labelDiv}>
            <div className={styles.helperTextDiv}>Default Label</div>
          </div>
          <div className={styles.inputeDiv}>
            <img className={styles.groupIcon5} alt="" src="group-2102.svg" />
            <img
              className={styles.feathersearchIcon}
              alt=""
              src="feathersearch3.svg"
            />
            <div className={styles.labelDiv1}>Your email</div>
            <img
              className={styles.feathersearchIcon}
              alt=""
              src="feathercalendar2.svg"
            />
            <img
              className={styles.feathersearchIcon}
              alt=""
              src="feathereyeoff2.svg"
            />
            <img
              className={styles.feathersearchIcon}
              alt=""
              src="feathereye2.svg"
            />
            <img
              className={styles.feathersearchIcon}
              alt=""
              src="featherchevrondown2.svg"
            />
            <div className={styles.frameDiv}>
              <img
                className={styles.featherplusIcon}
                alt=""
                src="featherplus2.svg"
              />
              <img
                className={styles.featherplusIcon}
                alt=""
                src="featherminus8.svg"
              />
            </div>
            <img
              className={styles.feathersearchIcon}
              alt=""
              src="featherminuscircle2.svg"
            />
            <img
              className={styles.feathersendIcon}
              alt=""
              src="feathersend2.svg"
            />
          </div>
          <div className={styles.helperTextDiv1}>
            <div className={styles.helperTextDiv2}>Helper text</div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv19}>
        <div className={styles.groupDiv20}>
          <div className={styles.rectangleDiv13} />
        </div>
        <div className={styles.formDiv}>
          <div className={styles.buttonDiv}>
            <div className={styles.elementsButtonsPrimary}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv} onClick={onButtonContainer1Click}/>
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
