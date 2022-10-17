import { FunctionComponent, useState, useCallback, useRef } from "react";
// {Container, Button, Form} from 'react-bootstrap';
import { T2 } from "./T2";
import { PortalPopup } from "./PortalPopup";
import { T3 } from "./T3";
import { T4 } from "./T4";
import { T5 } from "./T5";
import { T6 } from "./T6";
import { Company } from "./Company";
import styles from "./css/Page1Home.module.css";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Page1Home: FunctionComponent = () => {
  const [isT2Open, setT2Open] = useState(false);
  const [isT3Open, setT3Open] = useState(false);
  const [isT4Open, setT4Open] = useState(false);
  const [isT5Open, setT5Open] = useState(false);
  const [isT6Open, setT6Open] = useState(false);
  const [isT21Open, setT21Open] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  //testing contact form
  const [message, setMessage] = useState("");
  interface FormDataType {
    message: string;
  }
  //const responseBody: FormDataType = {message: ""}

  const [name, setName] = useState("");
  interface FormDataType {
    name: string;
  }
  //const responseBody: FormDataType = {name: "", message:""}

  const [email, setEmail] = useState("");
  interface FormDataType {
    email: string;
  }
  const responseBody: FormDataType = { name: "", message: "", email: "" };

  const contactusformid = useRef();

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Sucessfully send");

    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.currentTarget.reset);

    emailjs
      .sendForm(
        "service_n6dvkka",
        "template_tsey3fh",
        event.currentTarget,
        "X2SUJkCJdcfm73hqB"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    //Form submission happens here
  };

  const inputChangeHandler = (
    setFunction: React.Dispatch<React.SetStateAction<string>>,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFunction(event.target.value);
  };

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
    <Link to="/competitors" />;
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
      <div className="container">
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
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
                  <li className={`${styles.navItem} nav-item`}>
                    <a className="nav-link active" aria-current="page" href="#">
                      <div
                        className={styles.cOMPANYDiv}
                        onClick={onCOMPANYTextClick}
                      >
                        COMPANY
                      </div>
                    </a>
                  </li>
                  <li className={`${styles.navItem} nav-item`}>
                    <Link to="/ForSeniors">
                      <div className={styles.sENIORDiv1}>SENIORS</div>
                    </Link>
                  </li>
                  <li className={`${styles.navItem} nav-item`}>
                    <a className="nav-link " href="#">
                      <div
                        className={styles.pRODUCTDiv}
                        onClick={onPRODUCTTextClick}
                      >
                        PRODUCT
                      </div>
                    </a>
                  </li>
                  <li className={`${styles.navItem} nav-item`}>
                    <Link to="/competitors">
                      <div
                        className={styles.cOMPETITORSDiv}
                        onClick={onCOMPETITORSTextClick}
                      >
                        COMPETITORS
                      </div>
                    </Link>
                  </li>{" "}
                  <li className={`${styles.navItem} nav-item`}>
                    <div
                      className={styles.tESTIMONIALSDiv}
                      onClick={onTESTIMONIALSTextClick}
                    >
                      TESTIMONIALS
                    </div>
                  </li>
                  <li className={`${styles.navItem} nav-item`}>
                    <a className="nav-link active" aria-current="page" href="#">
                      <div
                        className={styles.pRICINGDiv}
                        onClick={onPRICINGText1Click}
                      >
                        PRICING
                      </div>
                    </a>
                  </li>
                  <li className={`${styles.navItem} nav-item`}>
                    <a className="nav-link active" aria-current="page" href="#">
                      <div
                        className={styles.cONTACTDiv1}
                        onClick={onCONTACTText1Click}
                      >
                        CONTACT
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
        <section className={`${styles.meetOptimus} container`}>
          {" "}
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xs-12 ">
              <div className={styles.flexHeight}>
                <div className={styles.theSmartestAIVirtualAssist}>
                  <p className={styles.ePanchavatiTownship}>
                    <span
                      className={styles.theSmartest}
                    >{`Meet the Virtual  `}</span>
                    <br />
                    <span
                      className={styles.theOpti}
                    >{`Assistant “Optimus”`}</span>
                  </p>
                </div>
                <div className={styles.weLiveInADigitalConnecte}>
                  The AI-backed voice-assisted Virtual Assistant for all your
                  digital tasks. Be it at work or at home, Optimus will be your
                  best ally to do your tasks and enjoy things better.
                </div>
                <div
                  className={styles.groupDiv23}
                  onClick={onRectangleRectangle18Click}
                >
                  <div className={styles.rectangleDiv18} />
                  <div className={styles.rectangleDiv19}>Download Now</div>
                  {/* <div className={styles.downloadNowDiv}></div> */}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 col-xs-12">
              <Carousel className={styles.blueMainBannerr2}>
                <div>
                  <img src="bluee01-1@2x.png" />
                </div>
                <div>
                  <img src="banner2.png" />
                </div>
                <div>
                  <img src="banner-3-3@2x.png" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
      </div>

      <section className={styles.aboutUs}>
        <div className={styles.aboutUsDiv}>
          <div className={styles.aboutDiv} data-scroll-to="aboutContainer">
            <div className="row">
              <div className="col-sm-12 col-md-7 col-xs-12">
                <img
                  className={styles.aboutUsFinall51}
                  alt=""
                  src="about-us-copy.gif"
                />
              </div>
              <div className="col-sm-12 col-md-5 col-xs-12">
                <div className={styles.flexHeight}>
                  <div className="d-flex flex-row mb-3">
                    {" "}
                    <div className={`${styles.pRODUCTDiv1} me-4`}>PRODUCT</div>
                    <div className={styles.cOMPANYDiv1}>COMPANY</div>
                  </div>

                  <div className={styles.groupDiv47}>
                    <p>
                      <span className={styles.inviteAGeniusToYourHome}>
                        Invite a genius to your home
                      </span>
                    </p>

                    <div className={styles.seeAndListenToOptimusThe}>
                      Assign to your virtual friend the common day-to-day tasks
                      and let it take care of them for you all day and every
                      day.
                    </div>
                    <Link to="/product">
                      <div className={styles.groupDiv48}>
                        <div className={styles.rectangleDiv25}>know more</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* <img
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
            /> */}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.voiceCount}>
        <div className={styles.groupDiv24}>
          <div className={styles.groupDiv25}>
            <span className={styles.ePanchavatiTownship22}>
              Every voice counts
            </span>

            <p className={styles.whatCanYouDoWithOptimus}>
              <span>
                {" "}
                Need to switch off the AC or read out an email? Just voice it to
                do something which you usually do yourself by reaching out to
                the Smartphone or PC or TV.
              </span>
              <br />
              <br />
              <span>
                {" "}
                Converse with Optimus like the way you converse with any human
                being and see the results instantly.
              </span>
            </p>
          </div>
        </div>
      </section>
      <div className={`${styles.designView} container`}>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-xs-12">
            <div className={styles.groupDiv27}>
              <b className={styles.aGreetingCompanion}>Eyes Everywhere</b>
              <div
                className={styles.greetYourOptimusAndBeAmaz}
              >{`Optimus is observing your home all day and every day. This engrossed viewer never needs a break.`}</div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-xs-12 d-flex justify-content-center">
            <img
              className={styles.aiReadingBooksCopy1}
              alt=""
              src="eyes-eveywhere.gif"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-xs-12">
            <img
              className={styles.aiParcelDeliveryCopy1}
              alt=""
              src="Design-your-assistant.gif"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-xs-12">
            <div className={styles.groupDiv30}>
              <b className={styles.worldsFirstMultilingualSma}>
                Design your perfect assistant!
              </b>
              <div
                className={styles.optimusIsAStandaloneDevice}
              >{`Design Optimus with our easy-to-use interface and customize it or choose a pre-designed model.`}</div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-6 col-xs-12">
            <div className={styles.groupDiv26}>
              <b className={styles.aGreetingCompanion}>A Greeting Companion</b>
              <div className={styles.greetYourOptimusAndBeAmaz}>
                {" "}
                Please yourself with a companion ready to greet you anytime to
                remind you of its presence. Optimus can predict your moods by
                observing your voice modulation and pitch.
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-xs-12 d-flex justify-content-center">
            <img
              className={styles.aiHello1}
              alt=""
              src="greeting-companion.gif"
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-6 col-xs-12">
            <img
              className={styles.aiTranslatesLanguages1}
              alt=""
              src="multilingual.gif"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-xs-12">
            <div className={styles.groupDiv28}>
              <b className={styles.worldsFirstMultilingualSma}>
                Integrity with languages
              </b>
              <div className={styles.optimusIsAStandaloneDevice}>
                Optimus is multilingual. It comes with the ability to listen and
                respond to you in globally renowned languages.
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-md-6 col-xs-12">
            <div className={styles.groupDiv32}>
              <div className={styles.theDaysOfAskingSomeoneTo}>
                <b className={styles.voiceAssistedPhotographyB}>
                  Instant Photography
                </b>
                <p className={styles.ePanchavatiTownship}>
                  Optimus can take pictures and record videos when you want.
                  Voice your Optimus anytime to get the job done.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-xs-12 d-flex justify-content-center">
            <img
              className={styles.aiCapturingDatas21}
              alt=""
              src="voice-asistant.gif"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-xs-12">
            <img
              className={styles.aiThinking1}
              alt=""
              src="Ask-a-Question.gif"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-xs-12">
            <div className={styles.groupDiv29}>
              <div className={styles.optimusIsAStandaloneDevice}>
                <b className={styles.worldsFirstMultilingualSma}>
                  Ask a Question, Get an Answer
                </b>
                <p className={styles.ePanchavatiTownship}>
                  Share a Query and Optimus does the inquiry and answers you
                  back with the most accurate results within seconds, by
                  accessing worldwide information.
                </p>
                <p className={styles.ePanchavatiTownship}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.deviceSection}>
        <div className={styles.devicesDiv}>
          <div className={styles.groupDiv39}>
            {/* <b
              className={styles.sedEgetLectusTinciduntCon}
            >{`Sed eget lectus tincidunt, consequat `}</b> */}
            <div className={styles.devicesYouCanUse}>Devices you can use</div>
            <b className={styles.omnipresentInYourHome}>
              Omnipresent in Your Home
            </b>
          </div>
          <div className={styles.rectangleDiv23} />
          <div className={styles.frameDiv16}>
            <div className={styles.frameDiv17} />
          </div>
          <div className={styles.groupDiv40}>
            <div className={styles.groupDiv41}>
              {isHovering && (
                <img
                  src="frame.png"
                  alt="left"
                  margin-left="-500px"
                  height="110"
                  width="680"
                  className={styles.imgAbsolute}
                />
              )}
            </div>
            <img
              className={styles.tv21}
              alt="left"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              src="tv-2-1.svg"
            />
          </div>
          <div className={styles.tVDiv}>TV</div>
        </div>
      </section>
      <section className={`${styles.deviceUse} container`}>
        <div className={styles.competitors2Div}>
          <div className={styles.groupDiv42}>
            <div className={styles.oURTEAMDiv}>
              WHY CHOOSE US.? WHY ARE WE DIFFERENT.?
            </div>
          </div>
          <div className={styles.ourSuperIntelligentAssistan}>
            Our Super Intelligent Assistant - Optimus
          </div>
          <div className={styles.optimusIsUniqueAndOneOfI}>
            <p
              className={styles.ePanchavatiTownship2}
            >{`Applications of Natural Language Processing and Computer Vision make Optimus unique and one of its kind among all the virtual smart assistants. All you need in this fast-paced world is a machine that does your tasks and has a personality to match your mood.  that has a personality to match your mood. `}</p>
            {/* <p className={styles.thatHasA}>
              that has a personality to match your mood.
            </p> */}
          </div>
        </div>
      </section>
      <section className={`${styles.subscribe} container`}>
        <b className={styles.pricingB} data-scroll-to="pricingContainer">
          Optimus is worth a Subscription Try{" "}
        </b>
        <div className={styles.pricingDiv1}>
          <div className={styles.pricingDiv2}>
            <div className="row">
              <div className="col-sm-12 col-xs-12 col-md-4">
                {" "}
                <div className={styles.categoryDiv}>
                  <div className={styles.frameDiv1}>
                    <div className={styles.helperTextDiv}>Premium</div>
                    <b className={styles.b1}>$250</b>
                  </div>
                  <div className={styles.frameDiv2}>
                    <div className={styles.pointsDiv}>
                      <img
                        className={styles.feathersendIcon}
                        alt=""
                        src="point.svg"
                      />
                      <div className={styles.visitorsDiv}>
                        Monthly Subscription
                      </div>
                    </div>
                    <div className={styles.pointsDiv}>
                      <img
                        className={styles.feathersendIcon}
                        alt=""
                        src="point.svg"
                      />
                      <div className={styles.visitorsDiv}>250 $/Month</div>
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
                    <div className={styles.rectangleDiv20}>Download</div>
                    {/* <div className={styles.downloadDiv}>Download</div> */}
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-xs-12 col-md-4">
                {" "}
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
                        <div className={styles.visitorsDiv}>
                          3 Weeks Timeline
                        </div>
                      </div>
                      <div className={styles.pointsDiv}>
                        <img
                          className={styles.feathersendIcon}
                          alt=""
                          src="point.svg"
                        />
                        <div className={styles.visitorsDiv}>
                          4 Basic Features
                        </div>
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
                      <div
                        className={styles.downloadNowDiv2}
                      >{`Download `}</div>
                    </div>
                  </div>
                  <div className={styles.groupDiv36}>
                    <Link to="/ProceedPaymentFree">
                      <div className={styles.rectangleDiv20}>Download</div>
                    </Link>
                    {/* <div className={styles.downloadDiv}>Download</div> */}
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-xs-12 col-md-4">
                {" "}
                <div className={styles.categoryDiv2}>
                  <div className={styles.frameDiv10}>
                    <div className={styles.helperTextDiv}>Advanced</div>
                    <b className={styles.b1}>$500</b>
                  </div>
                  <div className={styles.frameDiv11}>
                    <div className={styles.pointsDiv}>
                      <img
                        className={styles.feathersendIcon}
                        alt=""
                        src="point7.svg"
                      />
                      <div className={styles.visitorsDiv6}>
                        Yearly Subscription
                      </div>
                    </div>
                    <div className={styles.pointsDiv}>
                      <img
                        className={styles.feathersendIcon}
                        alt=""
                        src="point7.svg"
                      />
                      <div className={styles.visitorsDiv6}>500 $/Year</div>
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
                    <div className={styles.rectangleDiv20}>Download</div>
                    {/* <div className={styles.downloadDiv}>Download</div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.trialDiv} container`}>
        <div className={styles.downloadDiv3}>
          <div className="row">
            <div className="col-sm-12 col-xs-12 col-md-6">
              {" "}
              <div
                className={styles.groupDiv38}
                data-scroll-to="groupContainer"
              >
                <div className={styles.dOWNLOADDiv}>DOWNLOAD</div>

                <b className={styles.startYourTrialToday}>
                  Start Your Trial Today
                </b>
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
            </div>
            <div className="col-sm-12 col-xs-12 col-md-6">
              <img
                className={styles.dOWNLOAD1Icon}
                alt=""
                src="download-1@2x.png"
              />
              <img className={styles.sCAN1Icon} alt="" src="scan-1@2x.png" />
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.peopleBehind} container`}>
        <div className="row">
          <div className="col-sm-12 col-xs-12 col-md-6">
            {" "}
            <div className={styles.contactDiv1}>
              <b className={styles.thePeopleBehindOptimus}>
                The People behind Optimus
              </b>
              <div className={styles.createScreensDirectlyInMet1}>
                Meet our team of aspirant professionals who have shaped Optimus
                from an idea into an everyday application. They are a fine
                example of dedication and passion. Inspiration-filled endeavours
                made them pursue this milestone for a long time.
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-6">
            <div className={styles.teamDiv}>
              <div className={styles.groupDiv5}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="2418-1-1@2x.png"
                />
                <div className={styles.rectangleDiv6}>
                  <div className={styles.createScreensDirectlyInMet2}>
                    Jeevan Kota
                  </div>
                  <i className={styles.createScreensDirectlyInMet3}>
                    Data Scientist
                  </i>
                </div>
              </div>

              <div className={styles.groupDiv7}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="img2022080916310601-1@2x.png"
                />
                <div className={styles.rectangleDiv4}>
                  <div className={styles.createScreensDirectlyInMet2}>
                    Yashaswini
                  </div>
                  <i className={styles.createScreensDirectlyInMet3}>
                    Data Scientist
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.getInTouch} container`}>
        <div className={styles.getTouch}>
          <div
            className={styles.cONTACTDiv}
            data-scroll-to="CONTACTContainer"
            id="ContactDiv"
          >
            CONTACT
          </div>
          <b className={styles.getInTouch}>Get in touch</b>
        </div>

        <div className="row">
          <div className="col-sm-6 col-xs-6 col-md-8">
            <div className={styles.createScreensDirectlyInMet}>
              We are happy to help you out if you have any queries and concerns.
            </div>
            <div className={styles.dFlex}>
              <div className={styles.elementsInputsLarge60px2}>
                <div className={styles.elementsButtonsPrimary}>
                  <div className={styles.typeYourEMail} id="form-control">
                    <input
                      id="name"
                      onChange={(e) => inputChangeHandler(setName, e)}
                      className="form-control mr-2"
                      placeholder="Name"
                      type="text"
                      name="name"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className={styles.elementsInputsLarge60px1}>
                <div className={styles.elementsButtonsPrimary}>
                  <div className={styles.typeYourEMail} id="form-control">
                    <input
                      id="email"
                      onChange={(e) => inputChangeHandler(setEmail, e)}
                      className="form-control"
                      placeholder="Email"
                      type="email"
                      name="email"
                      pattern="^[Aa-Zz0-9._%+-]+@[Aa-Zz0-9.-]+\.[Aa-Zz]{2,4}$"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.elementsInputsLarge60px}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.textFieldDiv}>
                  <textarea
                    id="message"
                    className="textarea"
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className={styles.buttonDiv}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.elementsButtonsPrimary}>
                  <div className={styles.baseDiv} />
                  <div className={styles.buttonTextDiv}>
                    <input type="submit" value="Send" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-xs-6 col-md-4">
            <div className={styles.groupDiv3}>
              <div className={styles.phoneDiv}>
                <div className={styles.phoneDiv1}>Phone</div>

                <div className={styles.b}>+1 248 567-2917</div>
              </div>
              <div className={styles.emailDiv}>
                <div className={styles.emailDiv1}>Email</div>
                <div className={styles.infoaivectorsorgDiv}>
                  admin@aitensors.org
                </div>
              </div>
              <div className={styles.emailDiv2}>
                <div className={styles.infoaivectorsorgDiv}>
                  <div className={styles.emailDiv3}>Address</div>

                  <p
                    className={styles.ePanchavatiTownship}
                  >{`455, E Eisenhower Pkwy, `}</p>
                  <p className={styles.ePanchavatiTownship}>
                    Suite 300 PMB1084,
                  </p>
                  <p className={styles.thatHasA}>Ann Arbor,MI 48108, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              <div className={styles.pricingDiv} onClick={onPRICINGText1Click}>
                Pricing
              </div>
              <div className={styles.contactDiv} onClick={onCONTACTText1Click}>
                Contact
              </div>
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
      {/* // <div className={styles.copyright2022Div}>Copyright 2022</div> */}
    </>
  );
};
