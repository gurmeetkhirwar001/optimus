import { FunctionComponent, useCallback } from "react";
import styles from "./css/Product.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Product: FunctionComponent = () => {
  const onCOMPETITORSTextClick = useCallback(() => {
    // Please sync "Competitors" to the project
  }, []);

  const onLOGOTextClick = useCallback(() => {
    // Please sync "Page 1 Home" to the project
  }, []);

  const onCONTACTText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='/hoempage/CONTACTContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const navigate = useNavigate();

  return (
    <>
    <div className={styles.productDiv}>
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
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#">
                <div className={styles.logomain}>
                  <img src="chatbot.png" height="50" width="50" />
                </div>
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
                <li className={`${styles.navItem} nav-item`}>
                  <a className="nav-link active" aria-current="page" href="#">
                    <div className={styles.cOMPANYDiv}>COMPANY</div>
                  </a>
                </li>
                <li className={`${styles.navItem} nav-item`}>
                  <Link to="/ForSeniors">
                    <div className={styles.sENIORDiv1}>SENIORS</div>
                  </Link>
                </li>
                <li className={`${styles.navItem} nav-item`}>
                  <a className="nav-link " href="#">
                    <div className={styles.pRODUCTDiv}>PRODUCT</div>
                  </a>
                </li>
                <li className={`${styles.navItem} nav-item`}>
                  <Link to="/competitors">
                    <div className={styles.cOMPETITORSDiv}>COMPETITORS</div>
                  </Link>
                </li>{" "}
                <li className={`${styles.navItem} nav-item`}>
                  <div className={styles.tESTIMONIALSDiv}>TESTIMONIALS</div>
                </li>
                <li className={`${styles.navItem} nav-item`}>
                  <a className="nav-link active" aria-current="page" href="#">
                    <div className={styles.pRICINGDiv}>PRICING</div>
                  </a>
                </li>
                <li className={`${styles.navItem} nav-item`}>
                  <a className="nav-link active" aria-current="page" href="#">
                    <div className={styles.cONTACTDiv1}>CONTACT</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <section className={`${styles.humanMachine} container`}>
        <div className="row">
          <div className="col-sm-12 col-xs-12 col-md-6">
            <div className={styles.groupDiv1}>
              <b className={styles.theFutureOfHumanMachineIn}>
                <p className={styles.theFutureOf}>
                  <span>The Future of </span>
                </p>
                <p className={styles.humanMachineInteractionP}>
                  <span>Human-Machine Interaction</span>
                </p>
              </b>
              <div className={styles.itTakesLessThanAMinuteTo}>
                Conversations with Optimus are practical, reasonable, and
                effective within the realms of the information fed into it. You
                will hardly feel that you are speaking to a machine when you
                compare in terms of both logical and emotional responses.
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-6">
            <img
              className={styles.productTv12}
              alt=""
              src="product-tv1-2@2x.png"
            />
          </div>
        </div>
      </section>
      <section className={`${styles.technoLogy} container`}>
        <div className={styles.groupDiv4}>
          <b className={styles.nLPANewWayToInteractWi}>
            NLP - A New way to interact With Technology
          </b>
          <div className={styles.naturalLanguageProcessingN}>
            <p className={styles.theFutureOf}>
              {" "}
              Being able to speak and understand human language is something
              Optimus can do much better and this technology is called Natural
              Language Processing (NLP). NLP is a component of Artificial
              Intelligence.
            </p>
            <img className={styles.icon} alt="" src="65050443-1@2x.png" />
            <p className={styles.theFutureOf}>
              {" "}
              NLP strives to build machines that understand and respond to text
              or voice data—and respond with text or speech of their own—in much
              the same way humans do.
            </p>
            <img className={styles.nLP1Icon} alt="" src="nlp-1@2x.png" />
            <div className={styles.wtsMore}>
              <div className={styles.groupDiv3}>
                <b className={styles.whatsMoreCombinationOfN}>
                  <p className={styles.theFutureOf2}>What’s More.? CV + NLP</p>
                </b>
                <div className={styles.theApplicationOfComputerVi}>
                  <p className={styles.theFutureOf}>
                    Usually, the smart assistants come with Natural Language
                    processing but Optimus is designed using Natural Language
                    Processing and also Computer Vision.
                  </p>
                </div>
              </div>
              <img
                className={styles.pRODUCT11}
                alt=""
                src="product-1-1@2x.png"
              />
            </div>
            <div className={styles.betterWorld}>
              <div className={styles.groupDiv5}>
                <b className={styles.aWorldBetterWithAISmartA}>
                  A World Better With Smart Assistants
                </b>
                <div className={styles.anIndividualsWorthIncrease}>
                  Whether you are a homemaker or a professional or a student or
                  an entrepreneur, having a Smart assistant certainly makes a
                  difference to your lifestyle.
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-sm-12 col-xs-12 col-md-6">
                  <div className={styles.groupDiv8}>
                    <div className={styles.groupDiv9}>
                      <b className={styles.youDontNeedAnyoneElse}>
                        New-Age Tech, Old-fashioned Care
                      </b>
                      <div className={styles.optimusCanDoAnythingFromC}>
                        Optimus cares for you, your needs, and your wants and
                        helps you in whatever way it can.
                      </div>
                    </div>
                    <img
                      className={styles.email1Icon}
                      alt=""
                      src="email-1.svg"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-xs-12 col-md-6">
                  <div className={styles.groupDiv10}>
                    <div className={styles.groupDiv11}>
                      <b className={styles.youDontNeedAnyoneElse}>
                        The Most Human AI Assistant
                      </b>
                      <div className={styles.optimusCanDoAnythingFromC}>
                        You are not speaking to just a box. Feel the human touch
                        with Optimus.
                      </div>
                    </div>
                    <img className={styles.help1Icon} alt="" src="help-1.svg" />
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-sm-12 col-xs-12 col-md-6">
                  <div className={styles.groupDiv16}>
                    <div className={styles.groupDiv9}>
                      <b className={styles.youDontNeedAnyoneElse}>
                        <p className={styles.theFutureOf}>
                          Talk With Your Eyes Closed
                        </p>
                      </b>
                      <div className={styles.optimusCanDoAnythingFromC}>
                        Imagine being able to do your regular tasks by just
                        speaking to Optimus!
                      </div>
                    </div>
                    <img
                      className={styles.kakao3Icon}
                      alt=""
                      src="kakao-3.svg"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-xs-12 col-md-6">
                  <div className={styles.groupDiv18}>
                    <div className={styles.groupDiv19}>
                      <b className={styles.youDontNeedAnyoneElse}>
                        You're In Charge
                      </b>
                      <div className={styles.wereAllAboutGivingYouMor}>
                        Become the boss of an AI-built Optimus whose duty is to
                        take instructions from and simply execute them.
                      </div>
                    </div>
                    <img
                      className={styles.kakao2Icon}
                      alt=""
                      src="kakao-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-sm-12 col-xs-12 col-md-6">
                  <div className={styles.groupDiv6}>
                    <div className={styles.groupDiv7}>
                      <b className={styles.youDontNeedAnyoneElse}>
                        Keep Delegating
                      </b>
                      <div className={styles.noOneSaysYouNeedAHumanT}>
                        Optimus is more than a human when it comes to tirelessly
                        helping you over and over in your tasks.
                      </div>
                    </div>
                    <img
                      className={styles.rockingChair1Icon}
                      alt=""
                      src="rockingchair-1.svg"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-xs-12 col-md-6">
                  <div className={styles.groupDiv20}>
                    <div className={styles.groupDiv21}>
                      <b className={styles.youDontNeedAnyoneElse}>
                        <p className={styles.theFutureOf}>
                          Lost in an Ocean of Options.?
                        </p>
                      </b>
                      <div className={styles.optimusCanDoAnythingFromC}>
                        Confusion due to the abundance of unfiltered data should
                        be your least concern when you have Optimus who
                        understands your needs and addresses them appropriately.
                      </div>
                    </div>
                    <img
                      className={styles.click1Icon}
                      alt=""
                      src="click-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-sm-12 col-md-6 col-xs-12">
                  <div className={styles.groupDiv12}>
                    <div className={styles.groupDiv13}>
                      <b className={styles.companionReadyForAnything}>
                        <p
                          className={styles.theFutureOf}
                        >{`Companion Ready For Anything `}</p>
                      </b>
                      <div
                        className={styles.optimusCanAccompanyYouThro}
                      >{`Optimus is that companion who helps you with a range of many activities from setting up an alarm to making a purchase. `}</div>
                    </div>
                    <img className={styles.help2Icon} alt="" src="help-2.svg" />
                    <img
                      className={styles.thinking1Icon}
                      alt=""
                      src="thinking-1.svg"
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-xs-12 col-md-6">
                  <div className={styles.groupDiv14}>
                    <div className={styles.groupDiv15}>
                      <b className={styles.stayOneStepAhead}>
                        Stay One Step Ahead
                      </b>
                      <div className={styles.usingASmartAssistantLikeO}>
                        With Optimus as your intelligent assistant, you stay one
                        step ahead compared to those who don’t have it.
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.growthLevel1Icon}
                    alt=""
                    src="growthlevel-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.containers} container`}>
        <div className={styles.competitors2Div1}>
          <b className={styles.anAssistantForAllPeopleA}>
            <p className={styles.theFutureOf}>An Assistant for All People.</p>
            <p className={styles.dontHaveTo}> An Assistant for Every Need</p>
          </b>
          <div className={styles.onTheMarketThereAreALot}>
            <p>
              {" "}
              On the market, there are a lot of Smart Assistants. But they are
              still far away from the ideal user experience. AIT's creativity
              lies in providing a service that is "super" intelligent with the
              application of Computer Vision driven NLP technology. Meet Optimus
              that understands you and your needs and is more than just a
              machine. It's got a personality to match your mood!
            </p>
          </div>
          <div className="row mt-4">
            <div className="col-sm-12 col-xs-12 col-md-3">
              <div>
                <a
                  className={styles.optimusUnderstandsYourNeeds}
                  href={`https://iconscout.com/icon/help-2653359
https://iconscout.com/icon/kakao-1884642
`}
                  target="_blank"
                >
                  Optimus understands your needs and fulfills them at work or
                  home, with the level of intelligence that only AI can provide.
                </a>
              </div>
              <img className={styles.task21} alt="" src="task-2-1.svg" />
            </div>
            <div className="col-sm-12 col-xs-12 col-md-3">
              <div className={styles.optimusIsAHighlyIntelligen}>
                Optimus is a highly intelligent, personal assistant that you can
                talk to in your own language.
              </div>
              <img className={styles.voice1Icon} alt="" src="voice-1.svg" />
            </div>
            <div className="col-sm-12 col-xs-12 col-md-3">
              <div className={styles.optimusIsACompleteAndAccu}>
                <p className={styles.theFutureOf}>
                  {" "}
                  Optimus is a complete and accurate Smart Assistant. It answers
                  all your questions.
                </p>
              </div>
              <img className={styles.answer1Icon} alt="" src="answer-1.svg" />
            </div>
            <div className="col-sm-12 col-xs-12 col-md-3">
              <div className={styles.optimusIsYourPrivate247S}>
                Optimus is your private 24/7 smart assistant! This isn't just a
                voice-enabled search engine!
              </div>
              <img
                className={styles.hoursService1Icon}
                alt=""
                src="24hoursservice-1.svg"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-12 col-xs-12 col-md-3">
              <div className={styles.optimusWillUnderstandYourI}>
                Optimus will understand your intent, think about it, and then
                ask the correct questions to get your job done.
              </div>
              <img
                className={styles.question1Icon}
                alt=""
                src="question-1.svg"
              />
            </div>
            <div className="col-sm-12 col-xs-12 col-md-3">
              <div className={styles.fromTheTimeAUserGetsInT}>
                From the time a user gets in touch with their Optimus,
                literally, it will take care of things on their behalf.
              </div>
              <img
                className={styles.onlineWriting1Icon}
                alt=""
                src="onlinewriting-1.svg"
              />
            </div>
            <div className="col-sm-12 col-xs-12 col-md-3">
              <div className={styles.withThePowerOfNaturalLang}>
                With the power of natural language, Optimus will assist you in
                accomplishing tasks without requiring you to move through
                numerous screens.
              </div>
              <img className={styles.answer1Icon} alt="" src="answer-1.svg" />
            </div>
            <div className="col-sm-12 col-xs-12 col-md-3">
              <div className={styles.fromMakingReservationsAnd}>
                <p className={styles.theFutureOf}>
                  From making reservations, and checking the weather to
                  shopping, Optimus is here to help you in every aspect of life,
                  so that you never need to worry.
                </p>
                <p className={styles.theFutureOf}></p>
              </div>
              <div className={styles.groupDiv22}>
                <div className={styles.rectangleDiv3}>AIML</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.acc} container mt-5`}>
        <div className={styles.competitors2Div}>
          <b className={styles.letUsDiveDeepIntoWhatThe}>
            Let us dive deep into what the “Super Intelligent” Optimus can do
            for you
          </b>
          <div className="row">
            <div className="col-sm-12 col-xs-12 col-md-6">
              <div className={styles.groupDiv23}>
                <div className={styles.withTheHelpOfComputerVisi}>
                  <b className={styles.optimusHasEyes}>Optimus Has Eyes</b>

                  <p className={styles.theFutureOf12}>
                    With the help of Computer vision, Optimus can identify,
                    differentiate, capture, record, and display things. Optimus
                    always keeps a track of the people and other things around
                    it. Useful in homes and offices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-6">
              <div
                className={`${styles.theFutureOf12} d-flex justify-content-center align-items-center`}
              >
                {" "}
                <img
                  className={styles.camera11}
                  alt=""
                  src="360camera-1-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-12 col-xs-12 col-md-6">
              <div
                className={`${styles.theFutureOf12} d-flex justify-content-center align-items-center`}
              >
                {" "}
                <img
                  className={styles.responsiveDesign1Icon}
                  alt=""
                  src="responsivedesign-1.svg"
                />
              </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-6">
              <div className={styles.groupDiv24}>
                <b className={styles.optimusHasEyes}>
                  Super Flexible Availability
                </b>

                <div className={styles.withTheHelpOfComputerVisi}>
                  Optimus is digitally flexible to be connected to gadgets like
                  smartphones or PC or tablets. You can be in touch with Optimus
                  even when going out of home or the workplace. Available to you
                  round the clock as well.
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-12 col-xs-12 col-md-6">
              <div className={styles.groupDiv25}>
                <b className={styles.optimusHasEyes}>Latest News on the go</b>

                <div className={styles.withTheHelpOfComputerVisi}>
                  Your one-stop service to know all the latest News Headlines.
                  It gives you flashes of news from different sources
                  automatically.
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-6">
              <div
                className={`${styles.theFutureOf12} d-flex justify-content-center align-items-center`}
              >
                <img className={styles.newsIcon} alt="" src="news.svg" />
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm-12 col-xs-12 col-md-6">
              <div
                className={`${styles.theFutureOf12} d-flex justify-content-center align-items-center`}
              >
                {" "}
                <img
                  className={styles.homeLove1Icon}
                  alt=""
                  src="homelove-1.svg"
                />
              </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-6">
              <div className={styles.groupDiv27}>
                <b className={styles.optimusHasEyes}>Your Guardian Angel</b>

                <div
                  className={styles.withTheHelpOfComputerVisi}
                >{`Optimus will watch over your home and alerts you instantly if it sees a stranger. `}</div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-12 col-xs-12 col-md-6">
              <div className={styles.groupDiv29}>
                <div className={styles.groupDiv30}>
                  <b className={styles.optimusHasEyes}>Automate Your Life</b>

                  <div className={styles.withTheHelpOfComputerVisi}>
                    Right after you meet Optimus, most of your daily tasks will
                    be automatic.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-6">
              <div
                className={`${styles.theFutureOf12} d-flex justify-content-center align-items-center`}
              >
                <img
                  className={styles.timeManagementCopy1}
                  alt=""
                  src="timemanagement-copy-1.svg"
                />
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-12 col-xs-12 col-md-6">
              <div
                className={`${styles.theFutureOf12} d-flex justify-content-center align-items-center`}
              >
                {" "}
                <img
                  className={styles.voiceAssistantInTheMobileIcon}
                  alt=""
                  src="voiceassistantinthemobilephone-1.svg"
                />
              </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-6">
              <div className={styles.groupDiv28}>
                <b className={styles.stayHandsFreeB}>Stay Hands-Free</b>

                <div className={styles.ourIntelligentOptimusHasBe}>
                  Your hands are busy working somewhere? Then let your voice
                  instruct the Optimus to do something else.
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-xs-12 col-md-6">
              <div className={styles.groupDiv26}>
                <b className={styles.optimusHasEyes}>
                  Small Package, Big Impact
                </b>
                <div className={styles.withTheHelpOfComputerVisi}>
                  Optimus is that personal advisor who is smaller in size but is
                  bigger in its personality.
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-6">
              <div
                className={`${styles.theFutureOf12} d-flex justify-content-center align-items-center`}
              >
                <img
                  className={styles.image55Icon}
                  alt=""
                  src="image-55@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.footerDivs}>
        <div className={`${styles.footerDiv} container`}>
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
                <div className={styles.proDuctDiv}>Product</div>
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
    </div>
      <div className={styles.copyright2022Div}>Copyright 2022</div>
      </>

  );
};
