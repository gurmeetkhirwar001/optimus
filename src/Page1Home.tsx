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
  const [message, setMessage] = useState("")
  interface FormDataType {message:string}
  //const responseBody: FormDataType = {message: ""}

  const [name, setName] = useState("")
  interface FormDataType {name:string}
  //const responseBody: FormDataType = {name: "", message:""}

  const [email, setEmail] = useState("")
  interface FormDataType {email:string}
  const responseBody: FormDataType = {name: "", message:"", email:""}
  
  const contactusformid = useRef();

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("Sucessfully send");
    
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.currentTarget.reset);
  
      emailjs.sendForm('service_n6dvkka', 'template_tsey3fh', event.currentTarget, 'X2SUJkCJdcfm73hqB')
          .then((response) => {

              console.log('SUCCESS!', response.status, response.text);
            }, (error) => {
              console.log(error.text);
          });
      //Form submission happens here
      }

  const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, event: React.ChangeEvent<HTMLInputElement>) => {
    setFunction(event.target.value)
  }


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
          <a href="https://www.aitensors.org/"><div className={styles.logoDiv}>
            <img src="logo.png" height="50" width="50" /> </div></a>
          <div className={styles.transformingLivesOfPeopleA}>
          Transforming lives across the globe by adventuring Artificial Intelligence.
          </div>
          <div 
            className={styles.needAnswersNeedHelpJust}
          >{`Need Answers? Need help ? Just email us `}</div>          
          <div className={styles.copyright2022Div}>Copyright 2022</div>
          <div className={styles.companyDiv }>Company</div>
          <Link to="/product"><div className={styles.productDiv}>Product</div></Link>
          <Link to="/competitors"><div className={styles.competitorsDiv}>Competitors</div></Link>
          <div className={styles.pricingDiv} onClick={onPRICINGText1Click}>Pricing</div>
          <div className={styles.contactDiv} onClick={onCONTACTText1Click}>Contact</div>
          <div className={styles.linksDiv}>Links</div>
          <div className={styles.followUsDiv}>{`Follow Us `}</div>
          <div className={styles.getInTouchWithUs}>Get In touch with Us</div>
          <div className={styles.groupDiv}>
            <a href="https://twitter.com/AiTensors"><div className={styles.fbcomaaaDiv}>https://twitter.com/AiTensors</div></a>
            <img
              className={styles.featherfacebookIcon}
              alt=""
              src="twitter.svg"
            />
          </div>          
          <div className={styles.groupDiv2}>
          <a href="https://www.linkedin.com/company/82789169/"><div className={styles.fbcomaaaDiv}>
              https://www.linkedin.com/company/82789169/</div></a>
            <img
              className={styles.featherfacebookIcon}
              alt=""
              src="linkedin.svg"
            />
          </div>
          <div className={styles.xFormGroupDiv}>
            <div className={styles.labelDiv}>
              <div className={styles.helperTextDiv}>Default Label</div>
            </div>
            
            <div className={styles.helperTextDiv1}>
              <div className={styles.helperTextDiv2}>Helper text</div>
            </div>
          </div>
        </div>
        <div className={styles.rectangleDiv2} />
        <div className={styles.groupDiv3}>
          
          <div className={styles.emailDiv}>
            <div className={styles.infoaivectorsorgDiv}>admin@aitensors.org</div>
            <div className={styles.emailDiv1}>Email</div>
          </div>
          <div className={styles.emailDiv2}>
            <div className={styles.infoaivectorsorgDiv}>
              <p
                className={styles.ePanchavatiTownship}
              >{`455, E Eisenhower Pkwy, `}</p>
              <p className={styles.ePanchavatiTownship}>
                Suite 300 PMB1084, 
              </p>
              <p className={styles.thatHasA}>Ann Arbor ,MI 48108, USA</p>
            </div>
            <div className={styles.emailDiv3}>Address</div>
          </div>
          <div className={styles.phoneDiv}>
            <b className={styles.b}>+1 248 567-2917</b>
            <div className={styles.phoneDiv1}>Phone</div>
          </div>
        </div>

        {/* <form onSubmit={onSubmitHandler}>
          <div><label htmlFor="first_name">First Name</label></div>
          <div><input id="first_name" onChange={(e)=>inputChangeHandler(setFirstName, e)} type="text"/></div>
          <input type="submit"/>
        </form> */}
        <form id="contactusformid" onSubmit={onSubmitHandler}>
        <div className={styles.formDiv}>
          <div className={styles.buttonDiv}>
            <div className={styles.elementsButtonsPrimary}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.buttonTextDiv}>
                  <input type="submit" value="Send" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formDiv1}>
            <div className={styles.elementsInputsLarge60px}>
              <div className={styles.elementsButtonsPrimary}>               
                <div className={styles.textFieldDiv}>                  
                  <textarea id="message" className="textarea" name="message" placeholder="Message" required ></textarea>
                </div>
              </div>
            </div>
            <div className={styles.elementsInputsLarge60px1}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.typeYourEMail} id="form-control">
                  <input id="email" onChange={(e)=>inputChangeHandler(setEmail, e)} className="form-control" placeholder="Email" type="email" name="email" pattern="^[Aa-Zz0-9._%+-]+@[Aa-Zz0-9.-]+\.[Aa-Zz]{2,4}$" required/>
                </div>
              </div>
            </div>
            <div className={styles.elementsInputsLarge60px2}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.typeYourEMail} id="form-control">
                  <input id="name" onChange={(e)=>inputChangeHandler(setName, e)} className="form-control" placeholder="Name" type="text" name="name" required/>
                </div>
              </div>
            </div>
          {/* <div className={styles.buttonDiv}>
            <div className={styles.elementsButtonsPrimary}>
              <div className={styles.elementsButtonsPrimary}>
                <div className={styles.baseDiv} />
                <div className={styles.buttonTextDiv}>send
                  <input type="submit" value="Send" /></div>
              </div>
            </div>
          </div>              */}
          </div>
        </div>
        </form>
        <div className={styles.createScreensDirectlyInMet}>
          We are happy to help you out if you have any queries and concerns.
        </div>
        <div className={styles.cONTACTDiv} data-scroll-to="CONTACTContainer" id="ContactDiv">CONTACT</div>
        <b className={styles.getInTouch}>Get in touch</b>
        <div className={styles.contactDiv1}>
          
          <b className={styles.thePeopleBehindOptimus}>
            The People behind Optimus
          </b>
          <div className={styles.createScreensDirectlyInMet1}>
          Meet our team of aspirant professionals who have shaped 
          Optimus from an idea into an everyday application. 
          They are a fine example of dedication and passion. 
          Inspiration-filled endeavours made them pursue this milestone for a long time.
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
            <i className={styles.createScreensDirectlyInMet3}>Architect</i>
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
          <b className={styles.meetOptimusB}> </b>
          <div className={styles.theSmartestAIVirtualAssist}>
            <p className={styles.ePanchavatiTownship}>
              <span className={styles.theSmartest}>{`Meet the Virtual  `}</span><br/>
              <span>{`Assistant “Optimus”`}</span>
            </p>
            
          </div>
          <div className={styles.weLiveInADigitalConnecte}>
          The AI-backed voice-assisted Virtual Assistant for all your digital tasks. Be it at work or at home, Optimus will be your best ally to do your tasks and enjoy things better.
          </div>
          <div className={styles.groupDiv23} onClick={onRectangleRectangle18Click}>
            <div className={styles.rectangleDiv18} />
            <div className={styles.rectangleDiv19}/>
            <div className={styles.downloadNowDiv}>Download Now</div>
          </div>
          <img className={styles.bluee011Icon} alt="" src="Banner.gif" />
          <img
            className={styles.blueMainBannerr2}
            alt=""
            src="Banner.gif"
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
          <div className={styles.logomain}>
            <img src="logo.png" height="50" width="50"/></div>
        </div>
        <div className={styles.groupDiv24}>
          <div className={styles.groupDiv25}>
            <span className={styles.ePanchavatiTownship}>Every voice counts</span>
            
            <div className={styles.whatCanYouDoWithOptimus}>
              <span>
                {" "}
                Need to switch off the AC or read out an email? Just voice it to do something
                 which you usually do yourself by reaching out to the Smartphone or PC or TV.
              </span><br/>
              <br />
              <span> Converse with Optimus like the way you converse with any human being and see the results instantly.</span>
            </div>
          </div>
        </div>
        <div className={styles.groupDiv26}>
          <div className={styles.greetYourOptimusAndBeAmaz}>
            {" "}
            Please yourself with a companion ready to greet you anytime to
             remind you of its presence. Optimus can predict your moods by 
             observing your voice modulation and pitch.
          </div>
          <b className={styles.aGreetingCompanion}>A Greeting Companion</b>
        </div>
        <div className={styles.groupDiv27}>
          <div
            className={styles.greetYourOptimusAndBeAmaz}
          >{`Optimus is observing your home all day and every day. This engrossed viewer never needs a break.`}</div>
          <b className={styles.aGreetingCompanion}>Eyes Everywhere</b>
        </div>
        <img
          className={styles.aiReadingBooksCopy1}
          alt=""
          src="eyes-eveywhere.gif"
        />
        <div className={styles.groupDiv28}>
          <div className={styles.optimusIsAStandaloneDevice}>
          Optimus is multilingual. It comes with the ability to listen and respond to you in globally renowned languages. 
          </div>
          <b className={styles.worldsFirstMultilingualSma}>
          Integrity with languages
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
            Ask a Question, Get an Answer
          </b>
        </div>
        <div className={styles.groupDiv30}>
          <div
            className={styles.optimusIsAStandaloneDevice}
          >{`Design Optimus with our easy-to-use interface and customize it or choose a pre-designed model.`}</div>
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
              Optimus can take pictures and record videos when you want. 
              Voice your Optimus anytime to get the job done.
              </p>
              <p className={styles.ePanchavatiTownship}></p>
            </div>
            <b className={styles.voiceAssistedPhotographyB}>
            Instant Photography
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
            <b className={styles.pricingB} data-scroll-to="pricingContainer">Optimus is worth a Subscription Try </b>
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
              {isHovering && <img src="frame.png" alt="left" margin-left="-500px" height="110" width="680"/>}
            </div>
            <img className={styles.tv21} alt="left" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}  src="tv-2-1.svg"  />
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
            >{`Applications of Natural Language Processing and Computer Vision make Optimus unique and one of its kind among all the virtual smart assistants. All you need in this fast-paced world is a machine that does your tasks and has a personality to match your mood. `}</p>
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
              <p className={styles.ePanchavatiTownship}>Optimus has its </p>
              <p className={styles.ePanchavatiTownship}>
              own Fanbase
              </p>
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
              <p><span className={styles.inviteAGeniusToYourHome}>
                Invite a genius to your home
              </span></p>
              <div className={styles.pRODUCTDiv1}>PRODUCT</div>
              <div className={styles.cOMPANYDiv1}>
                COMPANY
              </div>
              <div className={styles.seeAndListenToOptimusThe}>
              Assign to your virtual friend the common day-to-day tasks and let it take care of them for you all day and every day.
              </div>
              <Link to="/product"><div className={styles.groupDiv48}>
                <div className={styles.rectangleDiv25}/>
                <div className={styles.downloadDiv}>know more</div>
              </div></Link>
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
