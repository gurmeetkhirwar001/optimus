import { FunctionComponent, useState, useCallback } from "react";
import { T2 } from "./T2";
import { PortalPopup } from "./PortalPopup";
import { T3 } from "./T3";
import { T4 } from "./T4";
import { T5 } from "./T5";
import { T6 } from "./T6";
import { Company } from "./Company";
import styles from "./css/Page1Home.module.css";
import { Link } from "react-router-dom";

export const Page1Home: FunctionComponent = () => {
  const [isT2Open, setT2Open] = useState(false);
  const [isT3Open, setT3Open] = useState(false);
  const [isT4Open, setT4Open] = useState(false);
  const [isT5Open, setT5Open] = useState(false);
  const [isT6Open, setT6Open] = useState(false);
  const [isT21Open, setT21Open] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const onRectangleRectangle18Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCONTACTText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='CONTACTContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPRICINGText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='pricingContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTESTIMONIALSTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='text']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCOMPETITORSTextClick = useCallback(() => {
    console.log("competitors");
    <Link to="/competitors"/>
    // Please sync "Competitors" to the project
  }, []);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const onPRODUCTTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCOMPANYTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='cOMPANYText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const openT2 = useCallback(() => {
    setT2Open(true);
  }, []);

  const closeT2 = useCallback(() => {
    setT2Open(false);
  }, []);

  const openT3 = useCallback(() => {
    setT3Open(true);
  }, []);

  const closeT3 = useCallback(() => {
    setT3Open(false);
  }, []);

  const openT4 = useCallback(() => {
    setT4Open(true);
  }, []);

  const closeT4 = useCallback(() => {
    setT4Open(false);
  }, []);

  const openT5 = useCallback(() => {
    setT5Open(true);
  }, []);

  const closeT5 = useCallback(() => {
    setT5Open(false);
  }, []);

  const openT6 = useCallback(() => {
    setT6Open(true);
  }, []);

  const closeT6 = useCallback(() => {
    setT6Open(false);
  }, []);

  const openT21 = useCallback(() => {
    setT21Open(true);
  }, []);

  const closeT21 = useCallback(() => {
    setT21Open(false);
  }, []);

  const openCompany = useCallback(() => {
    setCompanyOpen(true);
  }, []);

  const closeCompany = useCallback(() => {
    setCompanyOpen(false);
  }, []);

  const onRectangleRectangle24Click = useCallback(() => {
    // Please sync "product" to the project
  }, []);

  return (
    <>
      <div className={styles.page1Home}>
        <div className={styles.footerDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.rectangleDiv1} />
          <div className={styles.logoDiv}>Logo</div>
          <div className={styles.transformingLivesOfPeopleA}>
            Transforming lives of people across all walks of life with
            out-of-the-box ideas peeking into the possibilities of today’s
            Artificial Intelligence and bringing those ideas alive in the form
            of valuable applications.z
          </div>
          <div
            className={styles.needAnswersNeedHelpJust}
          >{`Need Answers? Need help ? Just email us `}</div>
          <div className={styles.copyright2022Div}>Copyright 2022</div>
          <div className={styles.companyDiv }>Company</div>
          <Link to="/product"><div className={styles.productDiv}>Product</div></Link>
          <Link to="/competitors"><div className={styles.competitorsDiv}>Competitors</div></Link>
          <div className={styles.pricingDiv}>Pricing</div>
          <div className={styles.contactDiv}>Contact</div>
          <div className={styles.linksDiv}>Links</div>
          <div className={styles.followUsDiv}>{`Follow Us `}</div>
          <div className={styles.getInTouchWithUs}>Get In touch with Us</div>
          <div className={styles.groupDiv}>
            <div className={styles.fbcomaaaDiv}>fb.com/aaa</div>
            <img
              className={styles.featherfacebookIcon}
              alt=""
              src="featherfacebook.svg"
            />
          </div>
          <div className={styles.groupDiv1}>
            <div className={styles.aaaDiv}>@aaa</div>
            <img
              className={styles.featherfacebookIcon}
              alt=""
              src="featherinstagram.svg"
            />
          </div>
          <div className={styles.groupDiv2}>
            <div className={styles.fbcomaaaDiv}>@aaa</div>
            <img
              className={styles.featherfacebookIcon}
              alt=""
              src="feathertwitter.svg"
            />
          </div>
          <div className={styles.xFormGroupDiv}>
            <div className={styles.labelDiv}>
              <div className={styles.helperTextDiv}>Default Label</div>
            </div>
            <div className={styles.inputeDiv}>
              <img className={styles.groupIcon} alt="" src="group-210.svg" />
              <img
                className={styles.feathersearchIcon}
                alt=""
                src="feathersearch.svg"
              />
              <div className={styles.labelDiv1}>Your email</div>
              <img
                className={styles.feathersearchIcon}
                alt=""
                src="feathercalendar.svg"
              />
              <img
                className={styles.feathersearchIcon}
                alt=""
                src="feathereyeoff.svg"
              />
              <img
                className={styles.feathersearchIcon}
                alt=""
                src="feathereye.svg"
              />
              <img
                className={styles.feathersearchIcon}
                alt=""
                src="featherchevrondown.svg"
              />
              <div className={styles.frameDiv}>
                <img
                  className={styles.featherplusIcon}
                  alt=""
                  src="featherplus.svg"
                />
                <img
                  className={styles.featherplusIcon}
                  alt=""
                  src="featherminus.svg"
                />
              </div>
              <img
                className={styles.feathersearchIcon}
                alt=""
                src="featherminuscircle.svg"
              />
              <img
                className={styles.feathersendIcon}
                alt=""
                src="feathersend.svg"
              />
            </div>
            <div className={styles.helperTextDiv1}>
              <div className={styles.helperTextDiv2}>Helper text</div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleDiv2} />
        <div className={styles.groupDiv3}>
          <div className={styles.socialDiv}>
            <img
              className={styles.elementsButtonsIcon48}
              alt=""
              src="elements--buttons--icon--48px-copy-2.svg"
            />
            <img
              className={styles.elementsButtonsIcon48}
              alt=""
              src="elements--buttons--icon--48px.svg"
            />
            <img
              className={styles.elementsButtonsIcon48}
              alt=""
              src="elements--buttons--icon--48px-copy.svg"
            />
          </div>
          <div className={styles.emailDiv}>
            <div className={styles.infoaivectorsorgDiv}>info@aivectors.org</div>
            <div className={styles.emailDiv1}>Email</div>
          </div>
          <div className={styles.emailDiv2}>
            <div className={styles.infoaivectorsorgDiv}>
              <p
                className={styles.ePanchavatiTownship}
              >{`24-E, Panchavati Township, `}</p>
              <p className={styles.ePanchavatiTownship}>
                Akkireddypalem, Sheelanagar,
              </p>
              <p className={styles.thatHasA}> Vizag - 530012</p>
            </div>
            <div className={styles.emailDiv3}>Address</div>
          </div>
          <div className={styles.phoneDiv}>
            <b className={styles.b}>+1 234 567 89 10</b>
            <div className={styles.phoneDiv1}>Phone</div>
          </div>
        </div>
        <div className={styles.formDiv}>
          <div className={styles.buttonDiv}>
            <div className={styles.elementsButtonsPrimary}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv} />
                <div className={styles.buttonTextDiv}>Send</div>
              </div>
            </div>
          </div>
          <div className={styles.formDiv1}>
            <div className={styles.elementsInputsLarge60px}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv1} />
                <div className={styles.kinesDiv}>
                  <div className={styles.rectangleDiv3} />
                  <div className={styles.rectangleCopyDiv} />
                </div>
                <div className={styles.textFieldDiv}>Message</div>
              </div>
            </div>
            <div className={styles.elementsInputsLarge60px1}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv1} />
                <div className={styles.typeYourEMail}>Email</div>
              </div>
            </div>
            <div className={styles.elementsInputsLarge60px2}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv1} />
                <div className={styles.typeYourEMail}>Name</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.createScreensDirectlyInMet}>
          We are happy to help you out if you have any queries and concerns.
        </div>
        <div className={styles.cONTACTDiv} data-scroll-to="CONTACTContainer">CONTACT</div>
        <b className={styles.getInTouch}>Get in touch</b>
        <div className={styles.contactDiv1}>
          <div className={styles.groupDiv4}>
            <div className={styles.oURTEAMDiv}>OUR TEAM</div>
          </div>
          <b className={styles.thePeopleBehindOptimus}>
            The People behind Optimus
          </b>
          <div className={styles.createScreensDirectlyInMet1}>
            Optimus is not just software. Optimistic people working with optimum
            efficiency have resulted in Optimus today. Our exuberant team, who
            have tirelessly pursued excellence on it for years. Our team's sole
            focus is to make Optimus one of the most comprehensive tools for
            household, and other social needs. They shaped a vision into an
            everyday application.
          </div>
        </div>
        <div className={styles.teamDiv}>
          <div className={styles.groupDiv5}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="20220805-231349-1-1@2x.png"
            />
            <div className={styles.rectangleDiv4} />
            <div className={styles.createScreensDirectlyInMet2}>
              Swati Bansal
            </div>
            <i className={styles.createScreensDirectlyInMet3}>Data Scientist</i>
          </div>
          <div className={styles.groupDiv6}>
            <div className={styles.rectangleDiv5} />
            <img
              className={styles.rectangleIcon}
              alt=""
              src="2418-1-1@2x.png"
            />
            <div className={styles.rectangleDiv6} />
            <div className={styles.createScreensDirectlyInMet2}>
              Jeevan Kota
            </div>
            <i className={styles.createScreensDirectlyInMet3}>Data Scientist</i>
          </div>
          <div className={styles.groupDiv7}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="img2022080916310601-1@2x.png"
            />
            <div className={styles.rectangleDiv4} />
            <div className={styles.createScreensDirectlyInMet2}>
              Yashaswini
            </div>
            <i className={styles.createScreensDirectlyInMet3}>Data Scientist</i>
          </div>
        </div>
        <div className={styles.homeBannerDiv}>
          <div className={styles.rectangleDiv8} />
          <img className={styles.ellipseIcon} alt="" src="ellipse-42.svg" />
          <img className={styles.groupIcon1} alt="" src="group-579.svg" />
          <img className={styles.groupIcon2} alt="" src="group-163.svg" />
          <div className={styles.groupDiv8}>
            <div className={styles.image48Div} />
            <img className={styles.groupIcon3} alt="" src="group-25.svg" />
            <div className={styles.groupDiv9}>
              <img className={styles.iconlyLightNotification} alt="" />
              <div className={styles.jumpStartDiv}>{`Jump start `}</div>
              <div className={styles.yourPortfolioLooksGreatTod}>
                Your portfolio looks great today
              </div>
            </div>
            <div className={styles.groupDiv10}>
              <div className={styles.groupDiv11}>
                <div className={styles.portfolioBalanceDiv}>
                  Portfolio balance
                </div>
                <div className={styles.div}>$12,175.11</div>
                <div className={styles.groupDiv12}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="vector-1.svg"
                  />
                  <div className={styles.div1}>$24.74 (3.79%)</div>
                </div>
                <div className={styles.todayMay222021}>Today (May 22,2021)</div>
              </div>
              <div className={styles.groupDiv13}>
                <div className={styles.availableBalanceDiv}>
                  Available balance
                </div>
                <div className={styles.div2}>$173.21</div>
                <div className={styles.groupDiv14}>
                  <img className={styles.vectorIcon1} alt="" />
                  <div className={styles.portfolioBalanceDiv}>More details</div>
                </div>
              </div>
              <div className={styles.groupDiv15}>
                <div className={styles.rectangleDiv9} />
                <div className={styles.hDiv}>1h</div>
              </div>
              <div className={styles.groupDiv16}>
                <div className={styles.rectangleDiv10} />
                <div className={styles.hDiv1}>24h</div>
              </div>
              <div className={styles.groupDiv17}>
                <div className={styles.rectangleDiv10} />
                <div className={styles.wDiv}>1w</div>
              </div>
              <div className={styles.groupDiv18}>
                <div className={styles.rectangleDiv10} />
                <div className={styles.wDiv}>1w</div>
              </div>
              <div className={styles.groupDiv19}>
                <div className={styles.rectangleDiv10} />
                <div className={styles.yDiv}>1y</div>
              </div>
              <div className={styles.groupDiv20}>
                <div className={styles.rectangleDiv10} />
                <div className={styles.wDiv}>All</div>
              </div>
              <div className={styles.rectangleDiv15} />
              <img className={styles.groupIcon4} alt="" src="group-18.svg" />
              <div className={styles.groupDiv21}>
                <div className={styles.rectangleDiv16} />
                <div className={styles.sendDiv}>Send</div>
              </div>
              <div className={styles.groupDiv22}>
                <div className={styles.rectangleDiv17} />
                <div className={styles.withdrawDiv}>Withdraw</div>
              </div>
              <img className={styles.groupIcon5} alt="" />
              <img className={styles.groupIcon6} alt="" src="group-27.svg" />
            </div>
          </div>
          <b className={styles.meetOptimusB}>Meet Optimus</b>
          <div className={styles.theSmartestAIVirtualAssist}>
            <p className={styles.ePanchavatiTownship}>
              <span className={styles.theSmartest}>{`The smartest  `}</span>
              <span>{`AI virtual assistant `}</span>
            </p>
            <p className={styles.ofTheFuture}>
              <span>of the future.</span>
            </p>
          </div>
          <div className={styles.weLiveInADigitalConnecte}>
            We live in a digital, connected world that is ever-evolving. Optimus
            is a brand-new invention of the 21st Century. Be it at work or at
            home, Optimus will be your best ally to do your tasks and enjoy
            things better.
          </div>
          <div className={styles.groupDiv23}>
            <div className={styles.rectangleDiv18} />
            <div
              className={styles.rectangleDiv19}
              onClick={onRectangleRectangle18Click}
            />
            <div className={styles.downloadNowDiv}>Download Now</div>
          </div>
          <img className={styles.bluee011Icon} alt="" src="bluee01-1@2x.png" />
          <img
            className={styles.blueMainBannerr2}
            alt=""
            src="blue-main-bannerr-2@2x.png"
          />
        </div>
        <div className={styles.navBarDiv}>
          <div className={styles.cONTACTDiv1} onClick={onCONTACTText1Click}>
            CONTACT
          </div>
          <div className={styles.pRICINGDiv} onClick={onPRICINGText1Click}>PRICING</div>
          <div
            className={styles.tESTIMONIALSDiv}
            onClick={onTESTIMONIALSTextClick}
          >
            TESTIMONIALS
          </div>
          <Link to="/competitors"><div className={styles.cOMPETITORSDiv} onClick={onCOMPETITORSTextClick}
          >
            COMPETITORS
          </div></Link>
          <div className={styles.pRODUCTDiv} onClick={onPRODUCTTextClick}>
            PRODUCT
          </div>
          <div className={styles.cOMPANYDiv} onClick={onCOMPANYTextClick}>
            COMPANY
          </div>
          <b className={styles.lOGOB}>LOGO</b>
        </div>
        <div className={styles.groupDiv24}>
          <div className={styles.groupDiv25}>
            <b className={styles.everyVoiceCounts}>
              <p className={styles.ePanchavatiTownship}>Every voice counts</p>
            </b>
            <div className={styles.whatCanYouDoWithOptimus}>
              <span>{`What can you do with Optimus?  To put it in one word..., `}</span>
              <i className={styles.conversation}>conversation.</i>
              <span>
                {" "}
                A human like conversationalist who doesn't have eyes or ears or
                a tongue but can do all the watching, looking, hearing and
                speaking to assist you with daily activities, chores, schedules,
                reminders, suggestions, travel, work, education, entertainment,
                shopping, music, market trends, business development and a lot
                more.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.groupDiv26}>
          <div className={styles.greetYourOptimusAndBeAmaz}>
            {" "}
            Greet your Optimus and be amazed to feel how it responds to you.
            Your Smart Assistant can accompany you through all sorts of
            activities, and predicts your mood too.!
          </div>
          <b className={styles.aGreetingCompanion}>A Greeting Companion</b>
        </div>
        <div className={styles.groupDiv27}>
          <div
            className={styles.greetYourOptimusAndBeAmaz}
          >{`Optimus is a cutting-edge Virtual Assistant that monitors everything in your home. This engrossed viewer never needs to take a break. `}</div>
          <b className={styles.aGreetingCompanion}>Eyes Everywhere</b>
        </div>
        <img
          className={styles.aiReadingBooksCopy1}
          alt=""
          src="eyes-eveywhere.gif"
        />
        <div className={styles.groupDiv28}>
          <div className={styles.optimusIsAStandaloneDevice}>
            Optimus is a standalone device that helps you in real-time
            translating your voice into any language and responds to you in that
            very language, try it out.
          </div>
          <b className={styles.worldsFirstMultilingualSma}>
            World’s First Multilingual Smart Assistant
          </b>
        </div>
        <div className={styles.groupDiv29}>
          <div className={styles.optimusIsAStandaloneDevice}>
            <p className={styles.ePanchavatiTownship}>
              Share a Query and Optimus does the inquiry and answers you back
              with the most accurate results within seconds, by accessing
              worldwide information.
            </p>
            <p className={styles.ePanchavatiTownship}></p>
          </div>
          <b className={styles.worldsFirstMultilingualSma}>
            Ask a Question, Get a Answer
          </b>
        </div>
        <div className={styles.groupDiv30}>
          <div
            className={styles.optimusIsAStandaloneDevice}
          >{`Design Optimus with our easy-to-use interface, or choose a pre-designed model and customize it in seconds. `}</div>
          <b className={styles.worldsFirstMultilingualSma}>
            Design your perfect assistant!
          </b>
        </div>
        <img
          className={styles.aiThinking1}
          alt=""
          src="Ask-a-Question.gif"
        />
        <div className={styles.groupDiv31}>
          <div className={styles.aiParcelDeliveryCopy2} />
          <div className={styles.groupDiv32}>
            <div className={styles.theDaysOfAskingSomeoneTo}>
              <p className={styles.ePanchavatiTownship}>
                The days of asking someone to click a pic for you or setting a
                timer to the camera are long gone. Voice your Optimus anytime to
                get the job done.
              </p>
              <p className={styles.ePanchavatiTownship}></p>
            </div>
            <b className={styles.voiceAssistedPhotographyB}>
              Voice-Assisted Photography
            </b>
          </div>
          <img
            className={styles.aiCapturingDatas21}
            alt=""
            src="voice-asistant.gif"
          />
        </div>
        <div className={styles.groupDiv33}>
          <img className={styles.ezgif6Icon} alt="" src="ezgif-6@2x.png" />
        </div>
        <div className={styles.pricingDiv1}>
          <div className={styles.pricingDiv2}>
            <div className={styles.categoryDiv}>
              <div className={styles.frameDiv1}>
                <div className={styles.helperTextDiv}>Premium</div>
                <b className={styles.b1}>$0</b>
              </div>
              <div className={styles.frameDiv2}>
                <div className={styles.pointsDiv}>
                  <img
                    className={styles.feathersendIcon}
                    alt=""
                    src="point.svg"
                  />
                  <div className={styles.visitorsDiv}>Monthly Subscription</div>
                </div>
                <div className={styles.pointsDiv}>
                  <img
                    className={styles.feathersendIcon}
                    alt=""
                    src="point.svg"
                  />
                  <div className={styles.visitorsDiv}>99 $/Month</div>
                </div>
                <div className={styles.pointsDiv}>
                  <img
                    className={styles.feathersendIcon}
                    alt=""
                    src="point.svg"
                  />
                  <div className={styles.visitorsDiv}>
                    Upto 8 Advanced Features
                  </div>
                </div>
                <div className={styles.pointsDiv}>
                  <img
                    className={styles.feathersendIcon}
                    alt=""
                    src="point.svg"
                  />
                  <div className={styles.visitorsDiv}>
                    <p
                      className={styles.ePanchavatiTownship}
                    >{`Monthly Upgradation cost `}</p>
                    <p className={styles.thatHasA}>10$</p>
                  </div>
                </div>
              </div>
              <div className={styles.buttonDiv2}>
                <div className={styles.downloadNowDiv1}>Download Now</div>
              </div>
              <div className={styles.groupDiv34}>
                <div className={styles.rectangleDiv20} />
                <div className={styles.downloadDiv}>Download</div>
              </div>
            </div>
            <div className={styles.groupDiv35}>
              <div className={styles.categoryDiv1}>
                <div className={styles.frameDiv6}>
                  <div className={styles.helperTextDiv}>Free</div>
                  <b className={styles.b1}>$0</b>
                </div>
                <div className={styles.frameDiv7}>
                  <div className={styles.pointsDiv}>
                    <img
                      className={styles.feathersendIcon}
                      alt=""
                      src="point.svg"
                    />
                    <div className={styles.visitorsDiv}>3 Weeks Timeline</div>
                  </div>
                  <div className={styles.pointsDiv}>
                    <img
                      className={styles.feathersendIcon}
                      alt=""
                      src="point.svg"
                    />
                    <div className={styles.visitorsDiv}>4 Basic Features</div>
                  </div>
                  <div className={styles.pointsDiv}>
                    <img
                      className={styles.feathersendIcon}
                      alt=""
                      src="point.svg"
                    />
                    <div className={styles.visitorsDiv}>Free</div>
                  </div>
                </div>
                <div className={styles.buttonDiv3}>
                  <div className={styles.downloadNowDiv2}>{`Download `}</div>
                </div>
              </div>
              <div className={styles.groupDiv36}>
                <Link to="/ProceedPaymentFree"><div className={styles.rectangleDiv20} /></Link>
                <div className={styles.downloadDiv}>Download</div>
              </div>
            </div>
            <div className={styles.categoryDiv2}>
              <div className={styles.frameDiv10}>
                <div className={styles.helperTextDiv}>Advanced</div>
                <b className={styles.b1}>$0</b>
              </div>
              <div className={styles.frameDiv11}>
                <div className={styles.pointsDiv}>
                  <img
                    className={styles.feathersendIcon}
                    alt=""
                    src="point7.svg"
                  />
                  <div className={styles.visitorsDiv6}>Yearly Subscription</div>
                </div>
                <div className={styles.pointsDiv}>
                  <img
                    className={styles.feathersendIcon}
                    alt=""
                    src="point7.svg"
                  />
                  <div className={styles.visitorsDiv6}>999 $/Year</div>
                </div>
                <div className={styles.pointsDiv}>
                  <img
                    className={styles.feathersendIcon}
                    alt=""
                    src="point7.svg"
                  />
                  <div className={styles.visitorsDiv6}>
                    up to 10 Advanced Features
                  </div>
                </div>
                <div className={styles.pointsDiv}>
                  <img
                    className={styles.feathersendIcon}
                    alt=""
                    src="point7.svg"
                  />
                  <div
                    className={styles.visitorsDiv6}
                  >{`2 Offline Features `}</div>
                </div>
                <div className={styles.pointsDiv}>
                  <img
                    className={styles.feathersendIcon}
                    alt=""
                    src="point7.svg"
                  />
                  <div className={styles.visitorsDiv6}>
                    Monthly Upgradation cost 7$
                  </div>
                </div>
              </div>
              <div className={styles.buttonDiv4}>
                <div className={styles.downloadNowDiv1}>Download Now</div>
              </div>
              <div className={styles.groupDiv37}>
                <div className={styles.rectangleDiv20} />
                <div className={styles.downloadDiv}>Download</div>
              </div>
            </div>
            <b className={styles.pricingB} data-scroll-to="pricingContainer">Pricing</b>
          </div>
          <div className={styles.downloadDiv3}>
            <div className={styles.groupDiv38} data-scroll-to="groupContainer">
              <b className={styles.startYourTrialToday}>
                Start Your Trial Today
              </b>
              <div className={styles.dOWNLOADDiv}>DOWNLOAD</div>
              <div className={styles.letYourHomeHaveAVoiceAv}>
                Let your home have a voice. Avail the Optimus, and start your
                free trial today. Who knows.? Maybe this is the best
                cutting-edge technology you have ever enjoyed.
              </div>
              <img
                className={styles.image54Icon}
                alt=""
                src="image-54@2x.png"
              />
            </div>
            <img
              className={styles.dOWNLOAD1Icon}
              alt=""
              src="download-1@2x.png"
            />
            <img className={styles.sCAN1Icon} alt="" src="scan-1@2x.png" />
          </div>
        </div>
        <div className={styles.devicesDiv}>
          <div className={styles.groupDiv39}>
            <b
              className={styles.sedEgetLectusTinciduntCon}
            >{`Sed eget lectus tincidunt, consequat `}</b>
            <div className={styles.devicesYouCanUse}>Devices you can use</div>
          </div>
          <div className={styles.rectangleDiv23} />
          <div className={styles.frameDiv16}>
            <div className={styles.frameDiv17} />
          </div>
          <div className={styles.groupDiv40}>
            <div className={styles.groupDiv41}>
              <div className={styles.tVDiv} >TV</div>
              {isHovering && <img src="frame.png" alt="left" height="110" width="680"/>}
            </div>
            <img className={styles.tv21} alt="" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}  src="tv-2-1.svg"  />
          </div>
          
        </div>
        <b className={styles.omnipresentInYourHome}>Omnipresent in Your Home</b>
        <div className={styles.dEVICESYOUCANUSE}>DEVICES YOU CAN USE</div>
        <div className={styles.competitors2Div}>
          <div className={styles.groupDiv42}>
            <div className={styles.oURTEAMDiv}>
              WHY CHOOSE US.? WHY ARE WE DIFFERENT.?
            </div>
          </div>
          <b className={styles.ourSuperIntelligentAssistan}>
            Our Super Intelligent Assistant - Optimus
          </b>
          <div className={styles.optimusIsUniqueAndOneOfI}>
            <p
              className={styles.ePanchavatiTownship}
            >{`Optimus is unique and one of its kind. With the application of Computer Vision driven NLP technology, Optimus stands firm and tall, compared to any Smart Assistant in the market. Our team’s creativity lies in providing a service that is "super" intelligent making Optimist the trendsetter. You need a machine, `}</p>
            <p className={styles.thatHasA}>
              that has a personality to match your mood.
            </p>
          </div>
        </div>
        <div className={styles.frameDiv18}>
          <div className={styles.testimonial2Div}>
            <div className={styles.rectangleDiv24} />
            <div className={styles.testimonialsDiv}>
              <div className={styles.oURTEAMDiv}>TESTIMONIALS</div>
              <div className={styles.groupDiv43}>
                <b className={styles.jaquonHartB}>Nikita Michaels</b>
                <div className={styles.digitalMarketingEx}>Homemaker</div>
              </div>
            </div>
            <b className={styles.trackAnyHashtags}>
              <p className={styles.ePanchavatiTownship}>What people say</p>
              <p className={styles.ePanchavatiTownship}>
                about our smart assistant
              </p>
              <p className={styles.thatHasA}>Optimus</p>
            </b>
            <div className={styles.dontWasteTimeOn}>
              Trusted by Users across the globe
            </div>
            <div className={styles.div3} data-scroll-to="text">
              “
            </div>
            <div className={styles.groupDiv44}>
              <div className={styles.groupDiv45}>
                <div className={styles.starDiv}>star</div>
                <div className={styles.starDiv1}>star</div>
                <div className={styles.star2}>star</div>
                <div className={styles.star3}>star</div>
                <div className={styles.star4}>star</div>
              </div>
              <i className={styles.dontWasteTimeOn1}>
                I'm a mom of two under two and I love using Optimus. It helps me
                keep track of things I need to do and reminds me. Very useful
                when you have two kids that nap at different times.
              </i>
              <div className={styles.groupDiv46}>
                <b className={styles.jaquonHartB1}>James Chan</b>
                <div className={styles.digitalMarketingEx1}>
                  Retail Business Entrepreneur
                </div>
              </div>
            </div>
            <img className={styles.ellipseIcon1} alt="" src="ellipse-2.svg" />
            <img
              className={styles.ellipseIcon2}
              alt=""
              src="ellipse-3.svg"
              onClick={openT2}
            />
            <img
              className={styles.ellipseIcon3}
              alt=""
              src="ellipse-3.svg"
              onClick={openT3}
            />
            <img
              className={styles.ellipseIcon4}
              alt=""
              src="ellipse-3.svg"
              onClick={openT4}
            />
            <img
              className={styles.ellipseIcon5}
              alt=""
              src="ellipse-3.svg"
              onClick={openT5}
            />
            <img
              className={styles.ellipseIcon6}
              alt=""
              src="ellipse-3.svg"
              onClick={openT6}
            />
            <img
              className={styles.groupIcon7}
              alt=""
              src="group-40.svg"
              onClick={openT21}
            />
          </div>
        </div>
        <div className={styles.aboutUsDiv}>
          <div className={styles.aboutDiv} data-scroll-to="aboutContainer">
            <div className={styles.groupDiv47}>
              <b className={styles.inviteAGeniusToYourHome}>
                Invite a genius to your home
              </b>
              <div className={styles.pRODUCTDiv1}>PRODUCT</div>
              <div
                className={styles.cOMPANYDiv1}
                data-scroll-to="cOMPANYText"
                onClick={openCompany}
              >
                COMPANY
              </div>
              <div className={styles.seeAndListenToOptimusThe}>
                See and listen to Optimus the way you like it. A friend who
                never gets tired or bored and helps you with daily tasks like
                monitoring your house, performing a google search, operating
                smart devices, switching ON your TV or AC and many others. This
                latest grandchild of Artificial Intelligence will make your life
                effective by adding more value to your vocals.
              </div>
              <div className={styles.groupDiv48}>
                <Link to="/product"><div className={styles.rectangleDiv25} onClick={onRectangleRectangle24Click}
                /></Link>
                <div className={styles.downloadDiv}>know more</div>
              </div>
            </div>
            <img
              className={styles.untitled1d1Icon}
              alt=""
              src="untitled1d-1@2x.png"
            />
            <img
              className={styles.untitled1d2Icon}
              alt=""
              src="untitled1d-2@2x.png"
            />
            <img className={styles.aboutUs1} alt="" src="about-us-1@2x.png" />
            <img
              className={styles.aboutUss11}
              alt=""
              src="about-uss1-1@2x.png"
            />
            <img
              className={styles.aboutUssFinal1}
              alt=""
              src="about-uss-final-1@2x.png"
            />
            <img
              className={styles.aboutUsFinall1}
              alt=""
              src="about-us-finall-1@2x.png"
            />
            <img
              className={styles.aboutUsFinall51}
              alt=""
              src="about-us-copy.gif"
            />
          </div>
        </div>
        <img
          className={styles.aiParcelDeliveryCopy1}
          alt=""
          src="Design-your-assistant.gif"
        />
        <img className={styles.aiHello1} alt="" src="greeting-companion.gif" />
        <img
          className={styles.aiTranslatesLanguages1}
          alt=""
          src="multilingual.gif"
        />
      </div>
      {isT2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeT2}
        >
          <T2 onClose={closeT2} />
        </PortalPopup>
      )}
      {isT3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeT3}
        >
          <T3 onClose={closeT3} />
        </PortalPopup>
      )}
      {isT4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeT4}
        >
          <T4 onClose={closeT4} />
        </PortalPopup>
      )}
      {isT5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeT5}
        >
          <T5 onClose={closeT5} />
        </PortalPopup>
      )}
      {isT6Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeT6}
        >
          <T6 onClose={closeT6} />
        </PortalPopup>
      )}
      {isT21Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeT21}
        >
          <T2 onClose={closeT21} />
        </PortalPopup>
      )}
      {isCompanyOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCompany}
        >
          <Company onClose={closeCompany} />
        </PortalPopup>
      )}
    </>
  );
};
