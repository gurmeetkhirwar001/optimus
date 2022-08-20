import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Advanced } from "./Advanced";
import { PortalPopup } from "./PortalPopup";
import styles from "./css/Premium.module.css";

type PremiumType = {
  onClose?: () => void;
};

export const Premium: FunctionComponent<PremiumType> = ({ onClose }) => {
  const navigate = useNavigate();
  const [isAdvancedOpen, setAdvancedOpen] = useState(false);

  const onGroupContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const openAdvanced = useCallback(() => {
    setAdvancedOpen(true);
  }, []);

  const closeAdvanced = useCallback(() => {
    setAdvancedOpen(false);
  }, []);

  const onFreeTextClick = useCallback(() => {
    navigate("/free-plan");
  }, [navigate]);

  return (
    <>
      <div className={styles.premiumDiv}>
        <div className={styles.groupDiv}>
          <div className={styles.groupDiv1} onClick={onGroupContainerClick}>
            <div className={styles.rectangleDiv} />
            <div className={styles.proceedDiv}>Proceed</div>
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
                  <img
                    className={styles.exploreIcon}
                    alt=""
                    src="explore3.svg"
                  />
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
                    Analytics shows the number of pages visited by the user.
                    From here the average visitor interest is calculated
                  </div>
                  <div className={styles.audienceActivityDiv}>
                    Audience activity
                  </div>
                  <img
                    className={styles.paletteIcon}
                    alt=""
                    src="palette3.svg"
                  />
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
                    Analytics shows the number of pages visited by the user.
                    From here the average visitor interest is calculated
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
                    Analytics shows the number of pages visited by the user.
                    From here the average visitor interest is calculated
                  </div>
                  <div className={styles.audienceActivityDiv2}>
                    Audience activity
                  </div>
                  <img className={styles.boxIcon} alt="" src="stack3.svg" />
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
                  <img className={styles.boxIcon} alt="" src="star.svg" />
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
                  <img
                    className={styles.exploreIcon}
                    alt=""
                    src="explore3.svg"
                  />
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
                    Analytics shows the number of pages visited by the user.
                    From here the average visitor interest is calculated
                  </div>
                  <div className={styles.audienceActivityDiv}>
                    Audience activity
                  </div>
                  <img
                    className={styles.paletteIcon}
                    alt=""
                    src="palette3.svg"
                  />
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
                    Analytics shows the number of pages visited by the user.
                    From here the average visitor interest is calculated
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
                    Analytics shows the number of pages visited by the user.
                    From here the average visitor interest is calculated
                  </div>
                  <div className={styles.audienceActivityDiv2}>
                    Audience activity
                  </div>
                  <img className={styles.boxIcon} alt="" src="stack3.svg" />
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
                  <img className={styles.boxIcon} alt="" src="star.svg" />
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
                  <img
                    className={styles.exploreIcon}
                    alt=""
                    src="explore3.svg"
                  />
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
                    Analytics shows the number of pages visited by the user.
                    From here the average visitor interest is calculated
                  </div>
                  <div className={styles.audienceActivityDiv}>
                    Audience activity
                  </div>
                  <img
                    className={styles.paletteIcon}
                    alt=""
                    src="palette3.svg"
                  />
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
                    Analytics shows the number of pages visited by the user.
                    From here the average visitor interest is calculated
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
                    Analytics shows the number of pages visited by the user.
                    From here the average visitor interest is calculated
                  </div>
                  <div className={styles.audienceActivityDiv2}>
                    Audience activity
                  </div>
                  <img className={styles.boxIcon} alt="" src="stack3.svg" />
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
                  <img className={styles.boxIcon} alt="" src="star.svg" />
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
            <div className={styles.groupDiv2}>
              <div className={styles.advancedDiv} onClick={openAdvanced}>
                Advanced
              </div>
              <b className={styles.premiumB}>Premium</b>
              <div className={styles.freeDiv} onClick={onFreeTextClick}>
                Free
              </div>
            </div>
            <div className={styles.majorFeaturesOfThisPlan}>
              Major Features of this Plan
            </div>
          </div>
          <div className={styles.groupDiv3}>
            <div className={styles.groupDiv4}>
              <div className={styles.rectangleDiv2} />
              <div className={styles.languageDiv}>Language</div>
              <div className={styles.accessToCommunicateInEngli}>
                Access to communicate in English as well as any globally
                recognized language of your choice.
              </div>
              <img className={styles.boxIcon6} alt="" src="box17.svg" />
            </div>
            <div className={styles.groupDiv5}>
              <div className={styles.trafficSourcesByGroup}>
                Voice assistance
              </div>
              <div className={styles.alongWithVoiceAssistanceO}>
                {" "}
                Along with voice assistance, object identification feature is
                available.
              </div>
              <img className={styles.boxIcon7} alt="" src="box18.svg" />
            </div>
            <div className={styles.groupDiv6}>
              <div className={styles.trafficSourcesByGroup}>SI Eyes</div>
              <div className={styles.alongWithVoiceAssistanceO}>
                Premium vision available for SI Eyes.
              </div>
              <img className={styles.boxIcon7} alt="" src="box19.svg" />
            </div>
            <div className={styles.groupDiv7}>
              <div className={styles.trafficSourcesByGroup}>Basic Features</div>
              <div className={styles.alongWithVoiceAssistanceO}>
                Along with basic features, moderate features of online order
                placement and Internet surfing are available.
              </div>
              <img className={styles.boxIcon9} alt="" src="box20.svg" />
            </div>
            <div className={styles.groupDiv8}>
              <div className={styles.trafficSourcesByGroup}>Avatar</div>
              <div className={styles.alongWithVoiceAssistanceO}>
                Choose from the 11 Avatars and Voices.
              </div>
              <img className={styles.boxIcon6} alt="" src="box21.svg" />
            </div>
          </div>
        </div>
      </div>
      {isAdvancedOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAdvanced}
        >
          <Advanced onClose={closeAdvanced} />
        </PortalPopup>
      )}
    </>
  );
};
