import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/Competitors.module.css";
import { Link } from "react-router-dom";

export const Competitors: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  const onCOMPETITORSTextClick = useCallback(() => {
    navigate("/competitors");
  }, [navigate]);

  const onLOGOTextClick = useCallback(() => {
    // Please sync "Page 1 Home" to the project
  }, []);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div className={`${styles.competitorsDiv} container`}>
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

        <div className={styles.groupDiv}>
          <div className="row">
            <div className="col-sm-12 col-xs-12 col-md-6">
              <div className={styles.topText}>
                <b className={styles.whyOptForOptimus}>Why opt for Optimus.?</b>
                <div className={styles.withSoManySmartAssistants}>
                  <p className={styles.withSoMany}>
                    With so many Smart Assistants available from popular brands
                    in the market, why do we need one more Smart assistant.?
                    What makes Optimus any different.? If it is different, then
                    how much different it is.?
                  </p>
                  <p className={styles.withSoMany}>
                    Are you finding it difficult to choose among Smart
                    Assistants? Is too much gossip or chatter confusing you.?
                    Let’s have a quick look
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-xs-12 col-md-6">
              <img
                className={styles.competitorss1Icon1}
                alt=""
                src="competitorss11@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.assistantDiv}>
          <b className={styles.smartAssistantsInMarket}>
            Contemporary Virtual Assistants
          </b>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>
                    <div className={styles.startDiv}>SI Assistant</div>
                  </th>
                  <th>
                    {" "}
                    <div className={styles.startDiv}>Google Assistant</div>
                  </th>
                  <th>
                    {" "}
                    <div className={styles.startDiv}>Alexa</div>
                  </th>
                  <th>
                    <div className={styles.startDiv}>Siri</div>
                  </th>
                  <th>
                    {" "}
                    <div className={styles.startDiv}>Bixby</div>
                  </th>
                  <th>
                    <div className={styles.startDiv}>Cortana</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <b className={styles.usageB}>Parameter</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.textDiv2}>Accuracy</div>
                  </td>
                  <td>
                    <div className={styles.div10}>
                      <a title="Optimus is programmed to &#013; take the inputs accurately">
                        <img src="right.png" width="15" />
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className={styles.div1}>
                      <a title="Playing music or communicating &#013; with Google can be louder.">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className={styles.div13}>
                      <a title="Alexa sometimes substitutes &#013; something else for your voice input">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className={styles.div1}>
                      <a title="Siri ignores silent mode.However low &#013; the volume, Siri is always be audible.">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.textDiv}>Human Feel</div>
                  </td>

                  <td>
                    <div className={styles.div9}>
                      <a title="You will feel the human &#013; emotion using Optimus">
                        <img src="right.png" width="15" />
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className={styles.div18}>
                      <a title="Robotic Voice lacks the &#013; feeling of human interaction">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.text3Div}>Security</div>
                  </td>
                  <td>
                    {" "}
                    <div className={styles.div4}>
                      <a title="Optimus comes with certain &#013; levels of authorization">
                        <img src="right.png" width="15" />
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className={styles.div4}>
                      <a title="Recording your voice on Google &#013; Assistant may cause Privacy concerns.">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.text4Div}>Connectivity</div>
                  </td>
                  <td>
                    <div className={styles.div5}>
                      <a title="Connectivity will be the &#013; least concern for Optimus.">
                        <img src="right.png" width="15" />
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className={styles.div5}>
                      <a title="You rquire a strong internet connection &#013; to be able to use OK Google.">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className={styles.div5}>
                      <a title="Alexa may lose connection with your &#013; clock sometimes due to poor connection.">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className={styles.div5}>
                      <a title="It needs a constant Web connection &#013; to commands that might not need it.">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td></td>
                  <td>
                    <div className={styles.div5}>
                      <a title="Anyone can issue voice commands, &#013; even when it is locked. It's a risk">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                </tr>{" "}
                <tr>
                  <td>
                    <div className={styles.textDiv3}>Compatibility</div>
                  </td>
                  <td>
                    <div className={styles.div6}>
                      <a title="Optimus can fit &#013; into various devices">
                        <img src="right.png" width="15" />
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className={styles.div6}>
                      <a title="Google Home may not pair with &#013; every smart device in the house.">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className={styles.div6}>
                      <a title="It may mishear your request for &#013; a song or might have streaming issues.">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td></td>
                  <td>
                    <div className={styles.div6}>
                      <a title="Samsung Bixby's serverless &#013; computing skills are very limited.">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.textDiv1}>Advancement</div>
                  </td>
                  <td>
                    <div className={styles.div7}>
                      <a title="It uses Computer Vision &#013; driven NLP making it more advanced">
                        <img src="right.png" width="15" />
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className={styles.div7}>
                      <a title="Early stages of Google assistant &#013; require more upgrades.">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    {" "}
                    <div className={styles.div7}>
                      <a title="Another limitation of Bixby is &#013; the absence of an open NLP-AI platform.">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>
                    <div className={styles.text5Div}>Volume</div>
                  </td>
                  <td>
                    <div className={styles.div1}>
                      <a title="Volume adjustability and noise &#013; evasion are two key features of Optimus">
                        <img src="right.png" width="15" />
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className={styles.div1}>
                      <a title="Playing music or communicating &#013; with Google can be louder.">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td></td>
                  <td>
                    {" "}
                    <div className={styles.div1}>
                      <a title="Siri ignores silent mode.However low &#013; the volume, Siri is always be audible.">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                </tr>{" "}
                <tr>
                  <td>
                    <div className={styles.text6Div}>Response</div>
                  </td>
                  <td>
                    <div className={styles.div3}>
                      <a title="The chances of Optimus not &#013; responding are negligible">
                        <img src="right.png" width="15" />
                      </a>
                    </div>
                  </td>
                  <td></td>
                  <td>
                    {" "}
                    <div className={styles.div3}>
                      <a title="Users have lately blamed the updated &#013; version of Alexa for being alow.">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.text7Div}>Plugging</div>
                  </td>
                  <td>
                    {" "}
                    <div className={styles.div3}>
                      <a title="The chances of Optimus not &#013; responding are negligible">
                        <img src="right.png" width="15" />
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className={styles.div2}>
                      <a title="It needs to be plugged into &#013; power outlets to work continuously.">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className={styles.div2}>
                      <a title="Hey Cortana uses only battery power">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className={styles.text8Div}>Reliability</div>
                  </td>
                  <td>
                    <div className={styles.div8}>
                      <a title="Optimus is constantly">
                        <img src="right.png" width="15" />
                      </a>
                    </div>
                  </td>
                  <td></td>
                  <td>
                    <div className={styles.div8}>
                      <a title="Often, you'll have to delete &#013; all the routine and start over.">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className={styles.div8}>
                      <a title="Navigational capabilities are &#013; limited to English and only for locations in USA.">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td>
                    <div className={styles.div8}>
                      <a title="It is poor in image processing, &#013; speech or video analytics and others.">
                        <img src="wrong.png" width="13" />
                      </a>
                    </div>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
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
