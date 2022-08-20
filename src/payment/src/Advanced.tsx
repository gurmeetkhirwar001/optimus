import { FunctionComponent, useState, useCallback } from "react";
import { Premium } from "./Premium";
import { PortalPopup } from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./css/Advanced.module.css";

type AdvancedType = {
  onClose?: () => void;
};

export const Advanced: FunctionComponent<AdvancedType> = ({ onClose }) => {
  const [isPremiumOpen, setPremiumOpen] = useState(false);
  const navigate = useNavigate();

  const openPremium = useCallback(() => {
    setPremiumOpen(true);
  }, []);

  const closePremium = useCallback(() => {
    setPremiumOpen(false);
  }, []);

  const onFreeTextClick = useCallback(() => {
    navigate("/free-plan");
  }, [navigate]);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <>
      <div className={styles.advancedDiv}>
        <div className={styles.groupDiv}>
          <div className={styles.groupDiv1}>
            <div className={styles.rectangleDiv} />
            <div className={styles.languageDiv}>Language</div>
            <div className={styles.accessToCommunicateInYour}>
              Access to communicate in your own language that is recognized
              globally.
            </div>
            <img className={styles.boxIcon} alt="" src="box.svg" />
          </div>
          <div className={styles.groupDiv2}>
            <div className={styles.voiceAssistanceDiv}>Voice assistance</div>
            <div className={styles.alongWithVoiceAssistanceAn}>
              Along with voice assistance and object identification, in-house
              monitoring and intruder alarm features are available.
            </div>
            <img className={styles.boxIcon1} alt="" src="box1.svg" />
          </div>
          <div className={styles.groupDiv3}>
            <div className={styles.voiceAssistanceDiv}>SI Eyes</div>
            <div className={styles.enhancedVisionAvailableFor}>
              <p className={styles.enhancedVisionAvailable}>
                {" "}
                Enhanced vision available for SI Eyes.
              </p>
              <p className={styles.enhancedVisionAvailable}></p>
            </div>
            <img className={styles.boxIcon1} alt="" src="box2.svg" />
          </div>
          <div className={styles.groupDiv4}>
            <div className={styles.voiceAssistanceDiv}>Basic Features</div>
            <div className={styles.enhancedVisionAvailableFor}>
              Along with the basic and moderate features, advanced features of
              helping you solve complex mathematical equations are available.
            </div>
            <img className={styles.boxIcon3} alt="" src="box3.svg" />
          </div>
          <div className={styles.groupDiv5}>
            <div className={styles.voiceAssistanceDiv}>Avatar</div>
            <div className={styles.enhancedVisionAvailableFor}>
              Choose from the 25 Avatars and voices, moreover make adjustments
              as you like.
            </div>
            <img className={styles.boxIcon} alt="" src="box4.svg" />
          </div>
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
                  <p className={styles.ofViewsFor}>
                    of views for each page and allows you to find out the most
                    visited
                  </p>
                </div>
                <div className={styles.popularPagesDiv}>Popular Pages</div>
                <img className={styles.exploreIcon} alt="" src="explore.svg" />
              </div>
              <div className={styles.div2}>
                <div className={styles.voiceAssistanceDiv}>
                  Traffic sources by group
                </div>
                <div className={styles.informationOnTransitionsFro}>
                  Information on transitions from various traffic sources:
                  search engines, ad block, website, forum
                </div>
                <img className={styles.copyIcon} alt="" src="box5.svg" />
              </div>
              <div className={styles.div3}>
                <div className={styles.analyticsShowsTheNumberOf}>
                  Analytics shows the number of pages visited by the user. From
                  here the average visitor interest is calculated
                </div>
                <div className={styles.audienceActivityDiv}>
                  Audience activity
                </div>
                <img className={styles.paletteIcon} alt="" src="palette.svg" />
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
                <img className={styles.exploreIcon} alt="" src="envelope.svg" />
              </div>
              <div className={styles.div6}>
                <div className={styles.analyticsShowsTheNumberOf1}>
                  Analytics shows the number of pages visited by the user. From
                  here the average visitor interest is calculated
                </div>
                <div className={styles.audienceActivityDiv1}>
                  Audience activity
                </div>
                <img className={styles.copyIcon} alt="" src="copy.svg" />
              </div>
              <div className={styles.div7}>
                <div className={styles.analyticsCalculatesTheNumbe1}>
                  <p
                    className={styles.analyticsCalculatesThe}
                  >{`Analytics calculates the number `}</p>
                  <p className={styles.ofViewsFor}>
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
                <img className={styles.copyIcon} alt="" src="stack.svg" />
              </div>
              <div className={styles.div10}>
                <div className={styles.analyticsCalculatesTheNumbe2}>
                  <p
                    className={styles.analyticsCalculatesThe}
                  >{`Analytics calculates the number `}</p>
                  <p className={styles.ofViewsFor}>
                    of views for each page and allows you to find out the most
                    visited
                  </p>
                </div>
                <div className={styles.popularPagesDiv2}>Popular Pages</div>
                <img className={styles.copyIcon} alt="" src="star.svg" />
              </div>
              <div className={styles.div11}>
                <div className={styles.voiceAssistanceDiv}>
                  Traffic sources by group
                </div>
                <div className={styles.informationOnTransitionsFro}>
                  Information on transitions from various traffic sources:
                  search engines, ad block, website, forum
                </div>
                <img className={styles.copyIcon} alt="" src="box5.svg" />
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
                      <span className={styles.span}>{` `}</span>
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
                  <p className={styles.ofViewsFor}>
                    of views for each page and allows you to find out the most
                    visited
                  </p>
                </div>
                <div className={styles.popularPagesDiv}>Popular Pages</div>
                <img className={styles.exploreIcon} alt="" src="explore.svg" />
              </div>
              <div className={styles.div2}>
                <div className={styles.voiceAssistanceDiv}>
                  Traffic sources by group
                </div>
                <div className={styles.informationOnTransitionsFro}>
                  Information on transitions from various traffic sources:
                  search engines, ad block, website, forum
                </div>
                <img className={styles.copyIcon} alt="" src="box5.svg" />
              </div>
              <div className={styles.div3}>
                <div className={styles.analyticsShowsTheNumberOf}>
                  Analytics shows the number of pages visited by the user. From
                  here the average visitor interest is calculated
                </div>
                <div className={styles.audienceActivityDiv}>
                  Audience activity
                </div>
                <img className={styles.paletteIcon} alt="" src="palette.svg" />
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
                <img className={styles.exploreIcon} alt="" src="envelope.svg" />
              </div>
              <div className={styles.div6}>
                <div className={styles.analyticsShowsTheNumberOf1}>
                  Analytics shows the number of pages visited by the user. From
                  here the average visitor interest is calculated
                </div>
                <div className={styles.audienceActivityDiv1}>
                  Audience activity
                </div>
                <img className={styles.copyIcon} alt="" src="copy.svg" />
              </div>
              <div className={styles.div7}>
                <div className={styles.analyticsCalculatesTheNumbe1}>
                  <p
                    className={styles.analyticsCalculatesThe}
                  >{`Analytics calculates the number `}</p>
                  <p className={styles.ofViewsFor}>
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
                <img className={styles.copyIcon} alt="" src="stack.svg" />
              </div>
              <div className={styles.div10}>
                <div className={styles.analyticsCalculatesTheNumbe2}>
                  <p
                    className={styles.analyticsCalculatesThe}
                  >{`Analytics calculates the number `}</p>
                  <p className={styles.ofViewsFor}>
                    of views for each page and allows you to find out the most
                    visited
                  </p>
                </div>
                <div className={styles.popularPagesDiv2}>Popular Pages</div>
                <img className={styles.copyIcon} alt="" src="star.svg" />
              </div>
              <div className={styles.div11}>
                <div className={styles.voiceAssistanceDiv}>
                  Traffic sources by group
                </div>
                <div className={styles.informationOnTransitionsFro}>
                  Information on transitions from various traffic sources:
                  search engines, ad block, website, forum
                </div>
                <img className={styles.copyIcon} alt="" src="box5.svg" />
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
                      <span className={styles.span}>{` `}</span>
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
                  <p className={styles.ofViewsFor}>
                    of views for each page and allows you to find out the most
                    visited
                  </p>
                </div>
                <div className={styles.popularPagesDiv}>Popular Pages</div>
                <img className={styles.exploreIcon} alt="" src="explore.svg" />
              </div>
              <div className={styles.div2}>
                <div className={styles.voiceAssistanceDiv}>
                  Traffic sources by group
                </div>
                <div className={styles.informationOnTransitionsFro}>
                  Information on transitions from various traffic sources:
                  search engines, ad block, website, forum
                </div>
                <img className={styles.copyIcon} alt="" src="box5.svg" />
              </div>
              <div className={styles.div3}>
                <div className={styles.analyticsShowsTheNumberOf}>
                  Analytics shows the number of pages visited by the user. From
                  here the average visitor interest is calculated
                </div>
                <div className={styles.audienceActivityDiv}>
                  Audience activity
                </div>
                <img className={styles.paletteIcon} alt="" src="palette.svg" />
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
                <img className={styles.exploreIcon} alt="" src="envelope.svg" />
              </div>
              <div className={styles.div6}>
                <div className={styles.analyticsShowsTheNumberOf1}>
                  Analytics shows the number of pages visited by the user. From
                  here the average visitor interest is calculated
                </div>
                <div className={styles.audienceActivityDiv1}>
                  Audience activity
                </div>
                <img className={styles.copyIcon} alt="" src="copy.svg" />
              </div>
              <div className={styles.div7}>
                <div className={styles.analyticsCalculatesTheNumbe1}>
                  <p
                    className={styles.analyticsCalculatesThe}
                  >{`Analytics calculates the number `}</p>
                  <p className={styles.ofViewsFor}>
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
                <img className={styles.copyIcon} alt="" src="stack.svg" />
              </div>
              <div className={styles.div10}>
                <div className={styles.analyticsCalculatesTheNumbe2}>
                  <p
                    className={styles.analyticsCalculatesThe}
                  >{`Analytics calculates the number `}</p>
                  <p className={styles.ofViewsFor}>
                    of views for each page and allows you to find out the most
                    visited
                  </p>
                </div>
                <div className={styles.popularPagesDiv2}>Popular Pages</div>
                <img className={styles.copyIcon} alt="" src="star.svg" />
              </div>
              <div className={styles.div11}>
                <div className={styles.voiceAssistanceDiv}>
                  Traffic sources by group
                </div>
                <div className={styles.informationOnTransitionsFro}>
                  Information on transitions from various traffic sources:
                  search engines, ad block, website, forum
                </div>
                <img className={styles.copyIcon} alt="" src="box5.svg" />
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
                      <span className={styles.span}>{` `}</span>
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
          <div className={styles.rectangleDiv1} />
          <div className={styles.groupDiv6}>
            <div className={styles.premiumDiv} onClick={openPremium}>
              Premium
            </div>
            <b className={styles.advancedB}>Advanced</b>
            <div className={styles.freeDiv} onClick={onFreeTextClick}>
              Free
            </div>
          </div>
          <div className={styles.majorFeaturesOfThisPlan}>
            Major Features of this Plan
          </div>
        </div>
        <div className={styles.groupDiv7} onClick={onGroupContainer7Click}>
          <div className={styles.rectangleDiv2} />
          <div className={styles.proceedDiv}>Proceed</div>
        </div>
      </div>
      {isPremiumOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePremium}
        >
          <Premium onClose={closePremium} />
        </PortalPopup>
      )}
    </>
  );
};
