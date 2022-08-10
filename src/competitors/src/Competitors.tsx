import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./css/Competitors.module.css";
import {Link} from "react-router-dom"

export const Competitors: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCOMPETITORSTextClick = useCallback(() => {
    navigate("/competitors");
  }, [navigate]);

  const onLOGOTextClick = useCallback(() => {
    // Please sync "Page 1 Home" to the project
  }, []);

  return (
    <div className={styles.competitorsDiv}>
      <div className={styles.groupDiv}>
        <b className={styles.whyOptForOptimus}>Why opt for Optimus.?</b>
        <div className={styles.withSoManySmartAssistants}>
          <p className={styles.withSoMany}>
            With so many Smart Assistants available from popular brands in the
            market, why do we need one more Smart assistant.? What makes Optimus
            any different.? If it is different, then how much different it is.?
          </p>
          <p className={styles.withSoMany}>
            Are you finding it difficult to choose among Smart Assistants? Is
            too much gossip or chatter confusing you.? Let’s have a quick look
          </p>
        </div>
      </div>
      <img
        className={styles.comparisiond1Icon}
        alt=""
        src="comparisiond-1@2x.png"
      />
      <img
        className={styles.competitorss1Icon}
        alt=""
        src="competitorss1@2x.png"
      />
      <div className={styles.div} />
      <img
        className={styles.competitorss1Icon1}
        alt=""
        src="competitorss11@2x.png"
      />
      <div className={styles.groupDiv1}>
        <div className={styles.groupDiv2}>
          <div className={styles.aITensorsDesignedOptimusUs}>
            <p className={styles.withSoMany}>
              AI Tensors designed Optimus using the technology of Computer
              Vision(CV) driven NLP. None of the existing Smart Assistant
              providers in the market do this.
            </p>
            <p className={styles.withSoMany}>&nbsp;</p>
            <p className={styles.withSoMany}>
              {" "}
              To make the users feel that the SI Agent is more conversational
              and humanlike, we are providing the users with a lot of visual
              avatars and voice specimens.
            </p>
            <p className={styles.withSoMany}>&nbsp;</p>
            <p className={styles.withSoMany}>
              Not just that, you will feel that you are conversing with an
              actual human being with the lip-syncing technique and body
              movement of the virtual assistant.
            </p>
          </div>
        </div>
      </div>
      <b className={styles.smartAssistantsInMarket}>
        Smart Assistants in Market
      </b>
      <div className={styles.text3Div}>Security</div>
      <div className={styles.text5Div}>Volume</div>
      <div className={styles.text4Div}>Connectivity</div>
      <div className={styles.text6Div}>Response</div>
      <div className={styles.text7Div}>Plugging</div>
      <div className={styles.text8Div}>Reliability</div>
      <div className={styles.textDiv}>Human Feel</div>
      <div className={styles.textDiv1}>Advancement</div>
      <div className={styles.textDiv2}>Accuracy</div>
      <div className={styles.textDiv3}>Compatibility</div>
      <b className={styles.usageB}>Parameter</b>
      <div className={styles.groupDiv3}>
        <div className={styles.baseDiv} />
        <div className={styles.startDiv}>SI Assistant</div>
        <div className={styles.div1}></div>
        <div className={styles.div2}></div>
        <div className={styles.div3}></div>
        <div className={styles.div4}></div>
        <div className={styles.div5}></div>
        <div className={styles.div6}></div>
        <div className={styles.div7}></div>
        <div className={styles.div8}></div>
        <div className={styles.div9}></div>
        <div className={styles.div10}></div>
      </div>
      <div className={styles.groupDiv4}>
        <div className={styles.baseDiv} />
        <div className={styles.startDiv}>Google Assistant</div>
        <div className={styles.div1}></div>
        <div className={styles.div2}></div>
        <div className={styles.div13}></div>
        <div className={styles.div4}></div>
        <div className={styles.div5}></div>
        <div className={styles.div6}></div>
        <div className={styles.div7}></div>
        <div className={styles.div18}></div>
      </div>
      <div className={styles.groupDiv5}>
        <div className={styles.baseDiv} />
        <div className={styles.startDiv}>Alexa</div>
        <div className={styles.div13}></div>
        <div className={styles.div3}></div>
        <div className={styles.div5}></div>
        <div className={styles.div6}></div>
        <div className={styles.div8}></div>
      </div>
      <div className={styles.groupDiv6}>
        <div className={styles.baseDiv} />
        <div className={styles.startDiv}>Siri</div>
        <div className={styles.div1}></div>
        <div className={styles.div13}></div>
        <div className={styles.div5}></div>
        <div className={styles.div8}></div>
      </div>
      <div className={styles.groupDiv7}>
        <div className={styles.baseDiv} />
        <div className={styles.startDiv}>Bixby</div>
        <div className={styles.div6}></div>
        <div className={styles.div7}></div>
        <div className={styles.div8}></div>
      </div>
      <div className={styles.groupDiv8}>
        <div className={styles.baseDiv} />
        <div className={styles.startDiv}>Cortana</div>
        <div className={styles.div2}></div>
        <div className={styles.div5}></div>
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.rectangleDiv1} />
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
        <div className={styles.competitorsDiv1}>Competitors</div>
        <div className={styles.pricingDiv}>Pricing</div>
        <div className={styles.contactDiv}>Contact</div>
        <div className={styles.linksDiv}>Links</div>
        <div className={styles.followUsDiv}>{`Follow Us `}</div>
        <div className={styles.getInTouchWithUs}>Get In touch with Us</div>
        <div className={styles.groupDiv9}>
          <div className={styles.fbcomaaaDiv}>fb.com/aaa</div>
          <img
            className={styles.featherfacebookIcon}
            alt=""
            src="featherfacebook.svg"
          />
        </div>
        <div className={styles.groupDiv10}>
          <div className={styles.aaaDiv}>@aaa</div>
          <img
            className={styles.featherfacebookIcon}
            alt=""
            src="featherinstagram.svg"
          />
        </div>
        <div className={styles.groupDiv11}>
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
      <div className={styles.navBarDiv}>
        <div className={styles.cONTACTDiv}>CONTACT</div>
        <div className={styles.pRICINGDiv}>PRICING</div>
        <div className={styles.tESTIMONIALSDiv}>TESTIMONIALS</div>
        <div className={styles.cOMPETITORSDiv} onClick={onCOMPETITORSTextClick}>
          COMPETITORS
        </div>
        <div className={styles.pRODUCTDiv}>PRODUCT</div>
        <div className={styles.cOMPANYDiv}>COMPANY</div>
        <Link to="/"><b className={styles.lOGOB} onClick={onLOGOTextClick}>
          LOGO
          
        </b></Link>
      </div>
    </div>
  );
};
