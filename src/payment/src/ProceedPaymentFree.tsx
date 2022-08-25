import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FAQ2 } from "./FAQ2";
import { PortalPopup } from "./PortalPopup";
import { FAQ31 } from "./FAQ31";
import { FAQ4 } from "./FAQ4";
import { FAQ1 } from "./FAQ1";
import { FAQ5 } from "./FAQ5";
import { FAQ3 } from "./FAQ3";
import { Premium } from "./Premium";
import { Advanced } from "./Advanced";
import styles from "./css/ProceedPaymentFree.module.css";

export const ProceedPaymentFree: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isFAQ2Open, setFAQ2Open] = useState(false);
  const [isFAQ3Open, setFAQ3Open] = useState(false);
  const [isFAQ4Open, setFAQ4Open] = useState(false);
  const [isFAQ1Open, setFAQ1Open] = useState(false);
  const [isFAQ5Open, setFAQ5Open] = useState(false);
  const [isFAQ31Open, setFAQ31Open] = useState(false);
  const [isPremiumOpen, setPremiumOpen] = useState(false);
  const [isAdvancedOpen, setAdvancedOpen] = useState(false);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const openFAQ2 = useCallback(() => {
    setFAQ2Open(true);
  }, []);

  const closeFAQ2 = useCallback(() => {
    setFAQ2Open(false);
  }, []);

  const openFAQ3 = useCallback(() => {
    setFAQ3Open(true);
  }, []);

  const closeFAQ3 = useCallback(() => {
    setFAQ3Open(false);
  }, []);

  const openFAQ4 = useCallback(() => {
    setFAQ4Open(true);
  }, []);

  const closeFAQ4 = useCallback(() => {
    setFAQ4Open(false);
  }, []);

  const openFAQ1 = useCallback(() => {
    setFAQ1Open(true);
  }, []);

  const closeFAQ1 = useCallback(() => {
    setFAQ1Open(false);
  }, []);

  const openFAQ5 = useCallback(() => {
    setFAQ5Open(true);
  }, []);

  const closeFAQ5 = useCallback(() => {
    setFAQ5Open(false);
  }, []);

  const openFAQ31 = useCallback(() => {
    setFAQ31Open(true);
  }, []);

  const closeFAQ31 = useCallback(() => {
    setFAQ31Open(false);
  }, []);

  const onCOMPETITORSTextClick = useCallback(() => {
    // Please sync "Competitors" to the project
  }, []);

  const openPremium = useCallback(() => {
    setPremiumOpen(true);
  }, []);

  const closePremium = useCallback(() => {
    setPremiumOpen(false);
  }, []);

  const openAdvanced = useCallback(() => {
    setAdvancedOpen(true);
  }, []);

  const closeAdvanced = useCallback(() => {
    setAdvancedOpen(false);
  }, []);

  return (
    <>
      <div className={styles.proceedPaymentFree}>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleDiv} />
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <div className={styles.rectangleDiv3} />
          <div className={styles.rectangleDiv4} />
        </div>
        <div className={styles.footerDiv}>
          <div className={styles.rectangleDiv5} />
          <div className={styles.rectangleDiv6} />
          <div className={styles.logoDiv}><img src="logo.png" height="50" width="50" /></div>
          <div className={styles.transformingLivesOfPeopleA}>
          Transforming lives across the globe by adventuring Artificial Intelligence.
          </div>
          <div
            className={styles.needAnswersNeedHelpJust}
          >{`Need Answers? Need help ? Just email us `}</div>
          <div className={styles.copyright2022Div}>Copyright 2022</div>
          <div className={styles.companyDiv}>Company</div>
          <div className={styles.productDiv}>Product</div>
          <div className={styles.featuresDiv}>Features</div>
          <div className={styles.pricingDiv}>Pricing</div>
          <div className={styles.contactDiv}>Contact</div>
          <div className={styles.linksDiv}>Links</div>
          <div className={styles.followUsDiv}>{`Follow Us `}</div>
          <div className={styles.getInTouchWithUs}>Get In touch with Us</div>
          <div className={styles.groupDiv1}>
            <div className={styles.fbcomaaaDiv}>https://twitter.com/AiTensors</div>
            <img
              className={styles.featherfacebookIcon}
              alt=""
              src="twitter.svg"
            />
          </div>
          <div className={styles.groupDiv3}>
            <div className={styles.fbcomaaaDiv}>https://www.linkedin.com/company/82789169/</div>
            <img
              className={styles.featherfacebookIcon}
              alt=""
              src="linkedin.svg"
            />
          </div>
          
        </div>
        <div className={styles.categoryDiv}>
          <div className={styles.frameDiv1}>
            <div className={styles.helperTextDiv}>Free</div>
            <b className={styles.b}>$0</b>
          </div>
          <div className={styles.frameDiv2}>
            <div className={styles.pointsDiv}>
              <img className={styles.feathersendIcon} alt="" />
              <div className={styles.visitorsDiv}>Loreum</div>
            </div>
            <div className={styles.pointsDiv}>
              <img className={styles.feathersendIcon} alt="" />
              <div className={styles.visitorsDiv}>Ipsum</div>
            </div>
            <div className={styles.pointsDiv}>
              <img className={styles.feathersendIcon} alt="" />
              <div className={styles.visitorsDiv}>Dolor</div>
            </div>
          </div>
          <div className={styles.buttonDiv}>
            <div className={styles.downloadNowDiv}>Download Now</div>
          </div>
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.groupDiv5}>
            <b className={styles.moreFeaturesAreAvailableU}>
              <p className={styles.moreFeaturesAreAvailable}>
                <span>{`More features are available. `}</span>
              </p>
              <p className={styles.upgradeYourPlanNow}>
                <span>Upgrade your plan now!</span>
              </p>
            </b>
            <div className={styles.haveYouUpgradedYourSIAssi}>
              <p className={styles.moreFeaturesAreAvailable}>
                Have you upgraded your SI assistant.?? Get more of the great
                SI-Assistant with a professional plan for as low as $20/month.
              </p>
              <p className={styles.blankLineP}>&nbsp;</p>
            </div>
            <div className={styles.haveYouUpgradedYourSIAssi1}>
              <p className={styles.moreFeaturesAreAvailable}>
                Have you upgraded your SI assistant.?? Get more of the great
                SI-Assistant with a professional plan for as low as $20/month.
              </p>
              <p className={styles.blankLineP}>&nbsp;</p>
            </div>
            <div className={styles.personalizationMadeEasyM}>
              <p className={styles.moreFeaturesAreAvailable}>
                <span className={styles.span}>●</span>
                <span> Personalization made easy.</span>
              </p>
              <p className={styles.moreFeaturesAreAvailable}>
                <span className={styles.span}>●</span>
                <span> More insights.</span>
              </p>
              <p className={styles.moreFeaturesAreAvailable}>
                <span className={styles.span}>●</span>
                <span> More intelligence.</span>
              </p>
              <p className={styles.moreFeaturesAreAvailable}>
                <span className={styles.span}>●</span>
                <span> New features every week.</span>
              </p>
            </div>
            <div className={styles.morbiLigulaExDictumSedDi}>
              Morbi ligula ex, dictum sed diam vitae, porta bibendum felis.
              Aenean ac lobortis erat, vitae lacinia ipsum. Cras vitae nunc
              finibus, mollis nibh a, pharetra odio. Integer consequat
              vestibulum lorem nec ultrices. Nulla facilisi. Nullam dignissim
              magna eu ultrices auctor. Vestibulum accumsan metus quam, a ornare
              sapien congue ut. Praesent massa ipsum
            </div>
          </div>
        </div>
        <div className={styles.groupDiv6}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.getPlanDiv}>{`Get Plan `}</div>
        </div>
        <div className={styles.groupDiv7} onClick={onGroupContainer7Click}>
          <div className={styles.rectangleDiv8} />
          <div className={styles.upgradeNowDiv}>Upgrade Now</div>
        </div>
        <div className={styles.block2Div}>
          <div className={styles.bGDiv} />
          <div className={styles.interactiveReportsDiv}>
            <div className={styles.div}>
              <div className={styles.div1}>
                <div className={styles.analyticsCalculatesTheNumbe}>
                  <p
                    className={styles.analyticsCalculatesThe}
                  >{`Analytics calculates the number `}</p>
                  <p className={styles.blankLineP}>
                    of views for each page and allows you to find out the most
                    visited
                  </p>
                </div>
                <div className={styles.popularPagesDiv}>Popular Pages</div>
                <img className={styles.exploreIcon} alt="" src="explore3.svg" />
              </div>
              <div className={styles.div2}>
                <div className={styles.trafficSourcesByGroup}>
                  Traffic sources by group
                </div>
                <div className={styles.informationOnTransitionsFro}>
                  Information on transitions from various traffic sources:
                  search engines, ad block, website, forum
                </div>
                <img className={styles.boxIcon} alt="" src="box11.svg" />
              </div>
              <div className={styles.div3}>
                <div className={styles.analyticsShowsTheNumberOf}>
                  Analytics shows the number of pages visited by the user. From
                  here the average visitor interest is calculated
                </div>
                <div className={styles.audienceActivityDiv}>
                  Audience activity
                </div>
                <img className={styles.paletteIcon} alt="" src="palette3.svg" />
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.div5}>
                <div className={styles.trafficSourcesByGroup1}>
                  Traffic sources by group
                </div>
                <div className={styles.informationOnTransitionsFro1}>
                  Information on transitions from various traffic sources:
                  search engines, ad block, website, forum
                </div>
                <img
                  className={styles.exploreIcon}
                  alt=""
                  src="envelope3.svg"
                />
              </div>
              <div className={styles.div6}>
                <div className={styles.analyticsShowsTheNumberOf1}>
                  Analytics shows the number of pages visited by the user. From
                  here the average visitor interest is calculated
                </div>
                <div className={styles.audienceActivityDiv1}>
                  Audience activity
                </div>
                <img className={styles.boxIcon} alt="" src="copy3.svg" />
              </div>
              <div className={styles.div7}>
                <div className={styles.analyticsCalculatesTheNumbe1}>
                  <p
                    className={styles.analyticsCalculatesThe}
                  >{`Analytics calculates the number `}</p>
                  <p className={styles.blankLineP}>
                    of views for each page and allows you to find out the most
                    visited
                  </p>
                </div>
                <div className={styles.popularPagesDiv1}>Popular Pages</div>
                <img className={styles.paletteIcon} alt="" src="rows.svg" />
              </div>
            </div>
            <div className={styles.div8}>
              <div className={styles.div9}>
                <div className={styles.analyticsShowsTheNumberOf2}>
                  Analytics shows the number of pages visited by the user. From
                  here the average visitor interest is calculated
                </div>
                <div className={styles.audienceActivityDiv2}>
                  Audience activity
                </div>
                <img className={styles.boxIcon} alt="" src="stack6.svg" />
              </div>
              <div className={styles.div10}>
                <div className={styles.analyticsCalculatesTheNumbe2}>
                  <p
                    className={styles.analyticsCalculatesThe}
                  >{`Analytics calculates the number `}</p>
                  <p className={styles.blankLineP}>
                    of views for each page and allows you to find out the most
                    visited
                  </p>
                </div>
                <div className={styles.popularPagesDiv2}>Popular Pages</div>
                <img className={styles.boxIcon} alt="" src="star6.svg" />
              </div>
              <div className={styles.div11}>
                <div className={styles.trafficSourcesByGroup}>
                  Traffic sources by group
                </div>
                <div className={styles.informationOnTransitionsFro}>
                  Information on transitions from various traffic sources:
                  search engines, ad block, website, forum
                </div>
                <img className={styles.boxIcon} alt="" src="box11.svg" />
              </div>
            </div>
            <div className={styles.combinedButtons50pxText}>
              <div className={styles.div12}>
                <div className={styles.textStatesMediumMedium}>
                  <div className={styles.text04Div}>Interactive Reports</div>
                </div>
              </div>
              <div className={styles.div13}>
                <div className={styles.textStatesMediumMedium1}>
                  <div className={styles.text04Div}>Integration Features</div>
                </div>
              </div>
              <div className={styles.div14}>
                <div className={styles.textStatesMediumMedium2}>
                  <div className={styles.text02Div}>
                    <span className={styles.analyticsSpan}>
                      <span className={styles.analyticsSpan1}>Analytics</span>
                      <span className={styles.span4}>{` `}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.div15}>
                <div className={styles.textStatesMediumMedium3}>
                  <div className={styles.text04Div}>
                    Scalable Infrastructure
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.integrationFeaturesDiv}>
            <div className={styles.div}>
              <div className={styles.div1}>
                <div className={styles.analyticsCalculatesTheNumbe}>
                  <p
                    className={styles.analyticsCalculatesThe}
                  >{`Analytics calculates the number `}</p>
                  <p className={styles.blankLineP}>
                    of views for each page and allows you to find out the most
                    visited
                  </p>
                </div>
                <div className={styles.popularPagesDiv}>Popular Pages</div>
                <img className={styles.exploreIcon} alt="" src="explore3.svg" />
              </div>
              <div className={styles.div2}>
                <div className={styles.trafficSourcesByGroup}>
                  Traffic sources by group
                </div>
                <div className={styles.informationOnTransitionsFro}>
                  Information on transitions from various traffic sources:
                  search engines, ad block, website, forum
                </div>
                <img className={styles.boxIcon} alt="" src="box11.svg" />
              </div>
              <div className={styles.div3}>
                <div className={styles.analyticsShowsTheNumberOf}>
                  Analytics shows the number of pages visited by the user. From
                  here the average visitor interest is calculated
                </div>
                <div className={styles.audienceActivityDiv}>
                  Audience activity
                </div>
                <img className={styles.paletteIcon} alt="" src="palette3.svg" />
              </div>
            </div>
            <div className={styles.div4}>
              <div className={styles.div5}>
                <div className={styles.trafficSourcesByGroup1}>
                  Traffic sources by group
                </div>
                <div className={styles.informationOnTransitionsFro1}>
                  Information on transitions from various traffic sources:
                  search engines, ad block, website, forum
                </div>
                <img
                  className={styles.exploreIcon}
                  alt=""
                  src="envelope3.svg"
                />
              </div>
              <div className={styles.div6}>
                <div className={styles.analyticsShowsTheNumberOf1}>
                  Analytics shows the number of pages visited by the user. From
                  here the average visitor interest is calculated
                </div>
                <div className={styles.audienceActivityDiv1}>
                  Audience activity
                </div>
                <img className={styles.boxIcon} alt="" src="copy3.svg" />
              </div>
              <div className={styles.div7}>
                <div className={styles.analyticsCalculatesTheNumbe1}>
                  <p
                    className={styles.analyticsCalculatesThe}
                  >{`Analytics calculates the number `}</p>
                  <p className={styles.blankLineP}>
                    of views for each page and allows you to find out the most
                    visited
                  </p>
                </div>
                <div className={styles.popularPagesDiv1}>Popular Pages</div>
                <img className={styles.paletteIcon} alt="" src="rows.svg" />
              </div>
            </div>
            <div className={styles.div8}>
              <div className={styles.div9}>
                <div className={styles.analyticsShowsTheNumberOf2}>
                  Analytics shows the number of pages visited by the user. From
                  here the average visitor interest is calculated
                </div>
                <div className={styles.audienceActivityDiv2}>
                  Audience activity
                </div>
                <img className={styles.boxIcon} alt="" src="stack6.svg" />
              </div>
              <div className={styles.div10}>
                <div className={styles.analyticsCalculatesTheNumbe2}>
                  <p
                    className={styles.analyticsCalculatesThe}
                  >{`Analytics calculates the number `}</p>
                  <p className={styles.blankLineP}>
                    of views for each page and allows you to find out the most
                    visited
                  </p>
                </div>
                <div className={styles.popularPagesDiv2}>Popular Pages</div>
                <img className={styles.boxIcon} alt="" src="star6.svg" />
              </div>
              <div className={styles.div11}>
                <div className={styles.trafficSourcesByGroup}>
                  Traffic sources by group
                </div>
                <div className={styles.informationOnTransitionsFro}>
                  Information on transitions from various traffic sources:
                  search engines, ad block, website, forum
                </div>
                <img className={styles.boxIcon} alt="" src="box11.svg" />
              </div>
            </div>
            <div className={styles.combinedButtons50pxText}>
              <div className={styles.div28}>
                <div className={styles.textStatesMediumMedium}>
                  <div className={styles.text04Div}>Interactive Reports</div>
                </div>
              </div>
              <div className={styles.div29}>
                <div className={styles.textStatesMediumMedium1}>
                  <div className={styles.text04Div}>Integration Features</div>
                </div>
              </div>
              <div className={styles.div14}>
                <div className={styles.textStatesMediumMedium2}>
                  <div className={styles.text02Div}>
                    <span className={styles.analyticsSpan}>
                      <span className={styles.analyticsSpan1}>Analytics</span>
                      <span className={styles.span4}>{` `}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.div15}>
                <div className={styles.textStatesMediumMedium3}>
                  <div className={styles.text04Div}>
                    Scalable Infrastructure
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.integrationFeaturesDiv}>
            <div className={styles.div32}>
              <div className={styles.div1}>
                <div className={styles.analyticsCalculatesTheNumbe}>
                  <p
                    className={styles.analyticsCalculatesThe}
                  >{`Analytics calculates the number `}</p>
                  <p className={styles.blankLineP}>
                    of views for each page and allows you to find out the most
                    visited
                  </p>
                </div>
                <div className={styles.popularPagesDiv}>Popular Pages</div>
                <img className={styles.exploreIcon} alt="" src="explore3.svg" />
              </div>
              <div className={styles.div2}>
                <div className={styles.trafficSourcesByGroup}>
                  Traffic sources by group
                </div>
                <div className={styles.informationOnTransitionsFro}>
                  Information on transitions from various traffic sources:
                  search engines, ad block, website, forum
                </div>
                <img className={styles.boxIcon} alt="" src="box11.svg" />
              </div>
              <div className={styles.div3}>
                <div className={styles.analyticsShowsTheNumberOf}>
                  Analytics shows the number of pages visited by the user. From
                  here the average visitor interest is calculated
                </div>
                <div className={styles.audienceActivityDiv}>
                  Audience activity
                </div>
                <img className={styles.paletteIcon} alt="" src="palette3.svg" />
              </div>
            </div>
            <div className={styles.div36}>
              <div className={styles.div5}>
                <div className={styles.trafficSourcesByGroup1}>
                  Traffic sources by group
                </div>
                <div className={styles.informationOnTransitionsFro1}>
                  Information on transitions from various traffic sources:
                  search engines, ad block, website, forum
                </div>
                <img
                  className={styles.exploreIcon}
                  alt=""
                  src="envelope3.svg"
                />
              </div>
              <div className={styles.div6}>
                <div className={styles.analyticsShowsTheNumberOf1}>
                  Analytics shows the number of pages visited by the user. From
                  here the average visitor interest is calculated
                </div>
                <div className={styles.audienceActivityDiv1}>
                  Audience activity
                </div>
                <img className={styles.boxIcon} alt="" src="copy3.svg" />
              </div>
              <div className={styles.div7}>
                <div className={styles.analyticsCalculatesTheNumbe1}>
                  <p
                    className={styles.analyticsCalculatesThe}
                  >{`Analytics calculates the number `}</p>
                  <p className={styles.blankLineP}>
                    of views for each page and allows you to find out the most
                    visited
                  </p>
                </div>
                <div className={styles.popularPagesDiv1}>Popular Pages</div>
                <img className={styles.paletteIcon} alt="" src="rows.svg" />
              </div>
            </div>
            <div className={styles.div40}>
              <div className={styles.div9}>
                <div className={styles.analyticsShowsTheNumberOf2}>
                  Analytics shows the number of pages visited by the user. From
                  here the average visitor interest is calculated
                </div>
                <div className={styles.audienceActivityDiv2}>
                  Audience activity
                </div>
                <img className={styles.boxIcon} alt="" src="stack6.svg" />
              </div>
              <div className={styles.div10}>
                <div className={styles.analyticsCalculatesTheNumbe2}>
                  <p
                    className={styles.analyticsCalculatesThe}
                  >{`Analytics calculates the number `}</p>
                  <p className={styles.blankLineP}>
                    of views for each page and allows you to find out the most
                    visited
                  </p>
                </div>
                <div className={styles.popularPagesDiv2}>Popular Pages</div>
                <img className={styles.boxIcon} alt="" src="star6.svg" />
              </div>
              <div className={styles.div11}>
                <div className={styles.trafficSourcesByGroup}>
                  Traffic sources by group
                </div>
                <div className={styles.informationOnTransitionsFro}>
                  Information on transitions from various traffic sources:
                  search engines, ad block, website, forum
                </div>
                <img className={styles.boxIcon} alt="" src="box11.svg" />
              </div>
            </div>
            <div className={styles.combinedButtons50pxText}>
              <div className={styles.div28}>
                <div className={styles.textStatesMediumMedium}>
                  <div className={styles.text04Div}>Interactive Reports</div>
                </div>
              </div>
              <div className={styles.div45}>
                <div className={styles.textStatesMediumMedium1}>
                  <div className={styles.text04Div}>Integration Features</div>
                </div>
              </div>
              <div className={styles.div14}>
                <div className={styles.textStatesMediumMedium2}>
                  <div className={styles.text02Div}>
                    <span className={styles.analyticsSpan}>
                      <span className={styles.analyticsSpan1}>Analytics</span>
                      <span className={styles.span4}>{` `}</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.div47}>
                <div className={styles.textStatesMediumMedium3}>
                  <div className={styles.text04Div}>
                    Scalable Infrastructure
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rectangleDiv9} />
          <div className={styles.whileYouAreAlreadyUsingTh}>
            While you are already using the SI Assistant for your needs, now it
            is time that you upgrade it with a better plan to enjoy a lot more
            features and benefits
          </div>
          <div className={styles.majorFeaturesOfThisPlan}>
            Major Features of this Plan
          </div>
          <b className={styles.weHaveALotMoreToOffer}>
            <p className={styles.moreFeaturesAreAvailable}>
              We have a lot more
            </p>
            <p className={styles.blankLineP}> to offer</p>
          </b>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.rectangleDiv10} />
          <div className={styles.groupDiv9}>
            <div className={styles.groupDiv10}>
              <div className={styles.groupDiv11}>
                <div className={styles.weGotAlotOfMessageWithTh}>
                  We got alot of Message With the same questions so here are
                  some fast answer for popular questions
                </div>
                <b className={styles.fAQB}>FAQ</b>
                <b className={styles.hereAreSomeAnswerForFrequ}>
                  Here are Some Answer For Frequntly asked Questions
                </b>
              </div>
            </div>
            <div className={styles.groupDiv12}>
              <div className={styles.groupDiv13}>
                <div className={styles.rectangleDiv11} />
                <img
                  className={styles.featherplusIcon1}
                  alt=""
                  src="featherplus3.svg"
                  onClick={openFAQ2}
                />
                <div className={styles.willOptimusSpeakToMeInFr}>
                  Will Optimus speak to me in French?
                </div>
              </div>
              <div className={styles.groupDiv14}>
                <div className={styles.rectangleDiv11} />
                <img
                  className={styles.featherplusIcon1}
                  alt=""
                  src="featherplus3.svg"
                  onClick={openFAQ3}
                />
                <div
                  className={styles.willOptimusSpeakToMeInFr}
                >{`Why do I need  Optimus when I have Siri&Alexa ?`}</div>
              </div>
              <div className={styles.groupDiv15}>
                <div className={styles.rectangleDiv11} />
                <img
                  className={styles.featherplusIcon1}
                  alt=""
                  src="featherplus5.svg"
                  onClick={openFAQ4}
                />
                <div className={styles.isOptimusEasyToCarryAnywh}>
                  Is Optimus easy to carry anywhere ?
                </div>
              </div>
              <div className={styles.groupDiv16}>
                <div className={styles.rectangleDiv11} />
                <img
                  className={styles.featherplusIcon1}
                  alt=""
                  src="featherplus5.svg"
                  onClick={openFAQ1}
                />
                <div className={styles.canOptimusMakeNotesIfIRe}>
                  Can Optimus make notes if I read out?
                </div>
              </div>
              <div className={styles.groupDiv17}>
                <div className={styles.rectangleDiv11} />
                <img
                  className={styles.featherplusIcon1}
                  alt=""
                  src="featherplus5.svg"
                  onClick={openFAQ5}
                />
                <div className={styles.shouldOptimusBeFixedWithW}>
                  Should Optimus be fixed with wired network?
                </div>
              </div>
              <div className={styles.groupDiv18}>
                <div className={styles.rectangleDiv11} />
                <img
                  className={styles.featherplusIcon1}
                  alt=""
                  src="featherplus5.svg"
                  onClick={openFAQ31}
                />
                <div className={styles.shouldOptimusBeFixedWithW}>
                  Can Optimus call the police if I am in danger?
                </div>
              </div>
            </div>
          </div>
          <div className={styles.groupDiv19}>
            <b className={styles.hereAreSomeFrequentlyAnswe}>
              <p
                className={styles.moreFeaturesAreAvailable}
              >{`Here are some `}</p>
              <p className={styles.moreFeaturesAreAvailable}>
                Frequently answered
              </p>
              <p className={styles.blankLineP}>Questions</p>
            </b>
          </div>
          <div className={styles.fAQDiv}>FAQ</div>
        </div>
        <div className={styles.navBarDiv}>
          <div className={styles.cONTACTDiv}>CONTACT</div>
          <div className={styles.pRICINGDiv}>PRICING</div>
          <div className={styles.tESTIMONIALSDiv}>TESTIMONIALS</div>
          <div
            className={styles.cOMPETITORSDiv}
            onClick={onCOMPETITORSTextClick}
          >
            COMPETITORS
          </div>
          <div className={styles.pRODUCTDiv}>PRODUCT</div>
          <div className={styles.cOMPANYDiv}>COMPANY</div>
          <Link to="/"><div className={styles.logomain}><img src="logo.png" height="50" width="50" /></div></Link>
        </div>
        <div className={styles.freePlanDiv}>
          <div className={styles.groupDiv20}>
            <div className={styles.groupDiv21}>
              <div className={styles.premiumDiv}>
                Premium
              </div>
              <b className={styles.freeB}>Free</b>
              <div className={styles.advancedDiv} >
                Advanced
              </div>
            </div>
            <div className={styles.groupDiv22}>
              <div className={styles.groupDiv23}>
                <div className={styles.trafficSourcesByGroup}>Language</div>
                <div className={styles.accessToCommunicateInEngli}>
                  <p className={styles.moreFeaturesAreAvailable}>
                    Access to communicate
                  </p>
                  <p className={styles.blankLineP}>in English.</p>
                </div>
                <img className={styles.boxIcon6} alt="" src="box28.svg" />
              </div>
              <div className={styles.groupDiv24}>
                <div className={styles.trafficSourcesByGroup}>
                  Voice assistance
                </div>
                <div className={styles.accessToCommunicateInEngli}>
                  Features limited to only voice assistance.
                </div>
                <img className={styles.boxIcon7} alt="" src="box29.svg" />
              </div>
              <div className={styles.groupDiv25}>
                <div className={styles.trafficSourcesByGroup}>
                  Basic Features
                </div>
                <div className={styles.accessToCommunicateInEngli}>
                  Basic features of Weather updates, News Headlines, and
                  Navigation Assistance.
                </div>
                <img className={styles.boxIcon8} alt="" src="box30.svg" />
              </div>
              <div className={styles.groupDiv26}>
                <div className={styles.trafficSourcesByGroup}>Avatar</div>
                <div className={styles.accessToCommunicateInEngli}>
                  Choose from the available 3 Avatars and Voices.
                </div>
                <img className={styles.boxIcon6} alt="" src="box31.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isFAQ2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFAQ2}
        >
          <FAQ2 onClose={closeFAQ2} />
        </PortalPopup>
      )}
      {isFAQ3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFAQ3}
        >
          <FAQ31 onClose={closeFAQ3} />
        </PortalPopup>
      )}
      {isFAQ4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFAQ4}
        >
          <FAQ4 onClose={closeFAQ4} />
        </PortalPopup>
      )}
      {isFAQ1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFAQ1}
        >
          <FAQ1 onClose={closeFAQ1} />
        </PortalPopup>
      )}
      {isFAQ5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFAQ5}
        >
          <FAQ5 onClose={closeFAQ5} />
        </PortalPopup>
      )}
      {isFAQ31Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFAQ31}
        >
          <FAQ3 onClose={closeFAQ31} />
        </PortalPopup>
      )}
      {isPremiumOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePremium}
        >
          <Premium onClose={closePremium} />
        </PortalPopup>
      )}
      {isAdvancedOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAdvanced}
        >
          <Premium onClose={closeAdvanced} />
        </PortalPopup>
      )}
    </>
  );
};
