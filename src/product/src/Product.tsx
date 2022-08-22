import { FunctionComponent, useCallback } from "react";
import styles from "./css/Product.module.css";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

export const Product: FunctionComponent = () => {
  const onCOMPETITORSTextClick = useCallback(() => {
    // Please sync "Competitors" to the project
  }, []);

  const onLOGOTextClick = useCallback(() => {
    // Please sync "Page 1 Home" to the project
  }, []);

  const navigate = useNavigate();

  return (
    <div className={styles.productDiv}>
      <img className={styles.productTv1} alt="" src="product-tv-1@2x.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <img className={styles.ezgif6Icon} alt="" src="ezgif-6@2x.png" />
      <img className={styles.pRODUCT11} alt="" src="product-1-1@2x.png" />
      <img className={styles.image55Icon} alt="" src="image-55@2x.png" />
      <div className={styles.rectangleDiv2} />
      <div className={styles.groupDiv}>
        <div className={styles.groupDiv1}>
          <b className={styles.theFutureOfHumanMachineIn}>
            <p className={styles.theFutureOf}>
              <span>{`The Future of `}</span>
            </p>
            <p className={styles.humanMachineInteractionP}>
              <span>Human-Machine Interaction</span>
            </p>
          </b>
          <div className={styles.itTakesLessThanAMinuteTo}>
            It takes less than a minute to set up and to train your Optimus to
            follow any accent or slang. With its natural language understanding
            and machine learning capabilities, you will find its voice
            interpretation to be the best, making interactions easier for
            everyone.
          </div>
        </div>
      </div>
      <div className={styles.groupDiv2}>
        <div className={styles.groupDiv3}>
          <b className={styles.whatsMoreCombinationOfN}>
            <p className={styles.theFutureOf}>
              What’s More.? Combination of NLP and Open CV
            </p>
          </b>
          <div className={styles.theApplicationOfComputerVi}>
            <p className={styles.theFutureOf}>
              The application of Computer Vision along with NLP to understand
              the context of your conversations
            </p>
            <p className={styles.theFutureOf}>
              {" "}
              as well as your movements is one of the recent breakthroughs in
              Artificial Intelligence. It also has
            </p>
            <p
              className={styles.theFutureOf}
            >{` an ever-growing library of tasks that it can perform for you. The best part is that you `}</p>
            <p className={styles.dontHaveTo}>
              don’t have to teach Optimus anything!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv4}>
        <b className={styles.nLPANewWayToInteractWi}>
          NLP - A New way to interact With Technology
        </b>
        <div className={styles.naturalLanguageProcessingN}>
          <p className={styles.theFutureOf}>
            {" "}
            Natural language processing (NLP) is the ability of a computer
            program to understand human language as it is spoken and written --
            referred to as natural language. It is a component of artificial
            intelligence (AI).
          </p>
          <p className={styles.theFutureOf}>&nbsp;</p>
          <p className={styles.theFutureOf}>
            {" "}
            It strives to build machines that understand and respond to text or
            voice data—and respond with text or speech of their own—in much the
            same way humans do.
          </p>
          <p className={styles.theFutureOf}></p>
          <p className={styles.dontHaveTo}>{`                   `}</p>
        </div>
        <div className={styles.optimusHasTakenShapeByThe}>
          <p className={styles.theFutureOf}>&nbsp;</p>
          <p className={styles.theFutureOf}>
            {" "}
            Optimus has taken shape by the application of various technologies
            of NLP
          </p>
          <p className={styles.theFutureOf}>
            {" "}
            Speech Recognition, Parts of Speech tagging, Word Sense
            Disambiguation, Named Entity Recognition, Conference Resolution,
            Sentiment Analysis and Natural Language Generation.
          </p>
          <p className={styles.theFutureOf}></p>
          <p className={styles.theFutureOf}>
            {" "}
            Optimus is the first intelligent virtual assistant that uses Natural
            Language Processing as its core technology. Along with providing
            solutions to your everyday tasks, SI Assistant is also available
            24/7 for a more personal touch.
          </p>
        </div>
      </div>
      <div className={styles.groupDiv5}>
        <b className={styles.aWorldBetterWithAISmartA}>
          A World Better With AI Smart Assistants
        </b>
        <div className={styles.anIndividualsWorthIncrease}>
          An individual's worth increases manifold when they have an assistant
          who helps them fulfill their tasks in an efficient manner. Similarly,
          organizations can use Smart Assistants as a tool for optimizing their
          processes and workflows.
        </div>
      </div>
      <div className={styles.competitors2Div}>
        <b className={styles.letUsDiveDeepIntoWhatThe}>
          Let Us Dive Deep Into What The “Super Intelligent” Assistant Can Do
        </b>
      </div>
      <div className={styles.competitors2Div1}>
        <b className={styles.anAssistantForAllPeopleA}>
          <p className={styles.theFutureOf}>An Assistant for All People.</p>
          <p className={styles.dontHaveTo}> An Assistant for Every Need</p>
        </b>
        <div className={styles.onTheMarketThereAreALot}>
          On the market, there are a lot of Smart Assistants. But they are still
          far away from the ideal user experience. AIT's creativity lies in
          providing a service that is "super" intelligent with the application
          of Computer Vision driven NLP technology. Meet Optimus that
          understands you and your needs and is more than just a machine. It's
          got a personality to match your mood!
        </div>
        <a
          className={styles.optimusUnderstandsYourNeeds}
          href={`https://iconscout.com/icon/help-2653359
https://iconscout.com/icon/kakao-1884642
`}
          target="_blank"
        >
          Optimus understands your needs and fulfills them at work or home, with
          the level of intelligence that only AI can provide.
        </a>
        <div className={styles.optimusWillUnderstandYourI}>
          Optimus will understand your intent, think about it, and then ask the
          correct questions to get your job done.
        </div>
        <div className={styles.optimusIsAHighlyIntelligen}>
          Optimus is a highly intelligent, personal assistant that you can talk
          to in your own language.
        </div>
        <div className={styles.fromTheTimeAUserGetsInT}>
          From the time a user gets in touch with their Optimus, literally, it
          will take care of things on their behalf.
        </div>
        <div className={styles.optimusIsACompleteAndAccu}>
          <p className={styles.theFutureOf}>
            {" "}
            Optimus is a complete and accurate Smart Assistant. It answers all
            your questions.
          </p>
        </div>
        <div className={styles.withThePowerOfNaturalLang}>
          With the power of natural language, Optimus will assist you in
          accomplishing tasks without requiring you to move through numerous
          screens.
        </div>
        <div className={styles.optimusIsYourPrivate247S}>
          Optimus is your private 24/7 smart assistant! This isn't just a
          voice-enabled search engine!
        </div>
        <div className={styles.fromMakingReservationsAnd}>
          <p className={styles.theFutureOf}>
            From making reservations, and checking the weather to shopping,
            Optimus is here to help you in every aspect of life, so that you
            never need to worry.
          </p>
          <p className={styles.theFutureOf}></p>
        </div>
      </div>
      <div className={styles.groupDiv6}>
        <div className={styles.groupDiv7}>
          <b className={styles.youDontNeedAnyoneElse}>
            You Don't Need Anyone Else
          </b>
          <div className={styles.noOneSaysYouNeedAHumanT}>
            No one says you need a human to help you with everyday tasks. Why
            not delegate them to Optimus? It will take care of it all while you
            relax.
          </div>
        </div>
        <img
          className={styles.rockingChair1Icon}
          alt=""
          src="rockingchair-1.svg"
        />
      </div>
      <div className={styles.groupDiv8}>
        <div className={styles.groupDiv9}>
          <b className={styles.youDontNeedAnyoneElse}>
            New-Age Tech, Old-Fashioned Care
          </b>
          <div className={styles.optimusCanDoAnythingFromC}>
            Optimus can do anything from checking your email to turning off the
            TV. It's like having a real-life personal assistant, without the
            hassle of minding its moods or needs!
          </div>
        </div>
        <img className={styles.email1Icon} alt="" src="email-1.svg" />
      </div>
      <div className={styles.groupDiv10}>
        <div className={styles.groupDiv11}>
          <b className={styles.youDontNeedAnyoneElse}>
            The Most Human Smart Assistant There Is
          </b>
          <div className={styles.optimusCanDoAnythingFromC}>
            At AIT, our mission is to make this Optimus as human as possible,
            with the sole intention of helping you in one way or another. This
            means that the assistant will understand you and respond to you with
            emotions as much similar to a human being.
          </div>
        </div>
        <img className={styles.help1Icon} alt="" src="help-1.svg" />
      </div>
      <div className={styles.groupDiv12}>
        <div className={styles.groupDiv13}>
          <b className={styles.companionReadyForAnything}>
            <p className={styles.theFutureOf}>{`Companion Ready `}</p>
            <p className={styles.dontHaveTo}>For Anything</p>
          </b>
          <div
            className={styles.optimusCanAccompanyYouThro}
          >{`Optimus can accompany you through all sorts of activities, such as helping you decide what to wear, exploring restaurants on the go, or even helping predict your mood so that it can suggest the perfect playlist for all occasions! `}</div>
        </div>
        <img className={styles.help2Icon} alt="" src="help-2.svg" />
        <img className={styles.thinking1Icon} alt="" src="thinking-1.svg" />
      </div>
      <div className={styles.groupDiv14}>
        <div className={styles.groupDiv15}>
          <b className={styles.stayOneStepAhead}>Stay One Step Ahead</b>
          <div className={styles.usingASmartAssistantLikeO}>
            Using a Smart Assistant like Optimus, you have a great advantage
            compared to others. Imagine comparing two people out of whom one
            uses a Smartphone and the other doesn’t.! So, possessing a Smart
            Assistant will be another level of that comparision.
          </div>
        </div>
      </div>
      <div className={styles.groupDiv16}>
        <div className={styles.groupDiv9}>
          <b className={styles.youDontNeedAnyoneElse}>
            <p className={styles.theFutureOf}>Talk With Your</p>
            <p className={styles.dontHaveTo}> Eyes Closed</p>
          </b>
          <div className={styles.optimusCanDoAnythingFromC}>
            All you have to do is talk. The AI-powered natural language
            processing engine will process your speech input and respond
            instantly in a friendly voice that understands what you need.
          </div>
        </div>
        <img className={styles.kakao3Icon} alt="" src="kakao-3.svg" />
      </div>
      <div className={styles.groupDiv18}>
        <div className={styles.groupDiv19}>
          <b className={styles.youDontNeedAnyoneElse}>You're In Charge</b>
          <div className={styles.wereAllAboutGivingYouMor}>
            We're all about giving you more control. You can command Optimus to
            do practically anything you can do on electronic devices yourself!
          </div>
        </div>
        <img className={styles.kakao2Icon} alt="" src="kakao-2.svg" />
      </div>
      <div className={styles.groupDiv20}>
        <div className={styles.groupDiv21}>
          <b className={styles.youDontNeedAnyoneElse}>
            <p className={styles.theFutureOf}>No More Getting Lost In An</p>
            <p className={styles.dontHaveTo}> Ocean Of Options</p>
          </b>
          <div className={styles.optimusCanDoAnythingFromC}>
            It's time for something new. Optimus will help you find what you
            need at the click of a button, no matter what it is.
          </div>
        </div>
        <img className={styles.click1Icon} alt="" src="click-1.svg" />
      </div>
      <img className={styles.task21} alt="" src="task-2-1.svg" />
      <img className={styles.voice1Icon} alt="" src="voice-1.svg" />
      <img className={styles.answer1Icon} alt="" src="answer-1.svg" />
      <img
        className={styles.hoursService1Icon}
        alt=""
        src="24hoursservice-1.svg"
      />
      <div className={styles.groupDiv22}>
        <div className={styles.rectangleDiv3} />
        <div className={styles.aIMLDiv}>AIML</div>
      </div>
      <img className={styles.reservation1Icon} alt="" src="reservation-1.svg" />
      <img className={styles.question1Icon} alt="" src="question-1.svg" />
      <img
        className={styles.onlineWriting1Icon}
        alt=""
        src="onlinewriting-1.svg"
      />
      <div className={styles.groupDiv23}>
        <div className={styles.withTheHelpOfComputerVisi}>
          <p className={styles.theFutureOf}>
            With the help of Computer vision, Optimus can identify,
            differentiate, capture, record, and display things. Optimus always
            keeps a track of the people and other things around it. Useful in
            homes and offices.
          </p>
          <p className={styles.theFutureOf}></p>
        </div>
        <b className={styles.optimusHasEyes}>Optimus Has Eyes</b>
      </div>
      <div className={styles.groupDiv24}>
        <div className={styles.withTheHelpOfComputerVisi}>
          Optimus is available on multiple devices like Phone, PC, Tablet etc,
          so it will be your assistant round the clock and you can carry it
          anywhere making your smart assistant in various places and at your
          fingertips.
        </div>
        <b className={styles.optimusHasEyes}>
          Get What You Need, When You Need It
        </b>
      </div>
      <div className={styles.groupDiv25}>
        <div className={styles.withTheHelpOfComputerVisi}>
          A service that gives you news flashes from different sources
          automatically. Optimus is observing people's day-to-day activities.
          Based on your movement and posture, it keeps greeting and giving you
          updates when you are around.
        </div>
        <b className={styles.optimusHasEyes}>
          Want To Hear The Latest News Headlines.?
        </b>
      </div>
      <div className={styles.groupDiv26}>
        <div className={styles.withTheHelpOfComputerVisi}>
          Optimus is small enough to fit in your hands with a big enough impact
          that can solve any problem that comes its way. Don't worry about being
          overwhelmed by the world's information – Make Optimus your personal
          advisor.
        </div>
        <b className={styles.optimusHasEyes}>Small Package, Big Impact</b>
      </div>
      <div className={styles.groupDiv27}>
        <div
          className={styles.withTheHelpOfComputerVisi}
        >{`While you are busy working, Optimus will guard your family member who could be a child or disabled person, by watching out for any signs of danger and sounding an alarm - without the need for someone being present in the house. `}</div>
        <b className={styles.optimusHasEyes}>The Guardian Angel In Your Home</b>
      </div>
      <div className={styles.groupDiv28}>
        <div className={styles.ourIntelligentOptimusHasBe}>
          Our intelligent Optimus has been trained with a variety of skills,
          from managing emails to scheduling meetings, making it a real
          all-rounder. You don't need to take your hands off the work at all,
          thanks to the revolutionary AI virtual assistant that can be called
          through voice command.
        </div>
        <b className={styles.stayHandsFreeB}>Stay Hands-Free</b>
      </div>
      <img className={styles.camera11} alt="" src="360camera-1-1.svg" />
      <img className={styles.vectorIcon} alt="" src="vector-8.svg" />
      <img className={styles.newsIcon} alt="" src="news.svg" />
      <img className={styles.homeLove1Icon} alt="" src="homelove-1.svg" />
      <img
        className={styles.voiceAssistantInTheMobileIcon}
        alt=""
        src="voiceassistantinthemobilephone-1.svg"
      />
      <div className={styles.groupDiv29}>
        <div className={styles.groupDiv30}>
          <div className={styles.withTheHelpOfComputerVisi}>
            From switching off your TV in time, switching off all electrical
            devices when you leave the house, or setting alarms according to
            your sleeping schedule. You name it and Optimus will do it for you.
          </div>
          <b className={styles.optimusHasEyes}>Automate Your Life</b>
        </div>
        <img
          className={styles.timeManagementCopy1}
          alt=""
          src="timemanagement-copy-1.svg"
        />
      </div>
      <img
        className={styles.responsiveDesign1Icon}
        alt=""
        src="responsivedesign-1.svg"
      />
      <img className={styles.nLP1Icon} alt="" src="nlp-1@2x.png" />
      <img className={styles.icon} alt="" src="65050443-1@2x.png" />
      <div className={styles.productTv11} />
      <div className={styles.navBarDiv}>
        <div className={styles.cONTACTDiv}>CONTACT</div>
        <div className={styles.pRICINGDiv}>PRICING</div>
        <div className={styles.tESTIMONIALSDiv}>TESTIMONIALS</div>
        <Link to="/competitors"><div className={styles.cOMPETITORSDiv} onClick={onCOMPETITORSTextClick}>
          COMPETITORS
        </div></Link>
        <div className={styles.pRODUCTDiv}>PRODUCT</div>
        <div className={styles.cOMPANYDiv}>COMPANY</div>
        <Link to="/"><b className={styles.lOGOB} onClick={onLOGOTextClick}>
          LOGO
        </b></Link>
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.rectangleDiv4} />
        <div className={styles.rectangleDiv5} />
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
        <div className={styles.productDiv1}>Product</div>
        <div className={styles.competitorsDiv}>Competitors</div>
        <div className={styles.pricingDiv}>Pricing</div>
        <div className={styles.contactDiv}>Contact</div>
        <div className={styles.linksDiv}>Links</div>
        <div className={styles.followUsDiv}>{`Follow Us `}</div>
        <div className={styles.getInTouchWithUs}>Get In touch with Us</div>
        <div className={styles.groupDiv31}>
          <div className={styles.fbcomaaaDiv}>fb.com/aaa</div>
          <img
            className={styles.featherfacebookIcon}
            alt=""
            src="linkedin.svg"
          />
        </div>
        <div className={styles.groupDiv32}>
          <div className={styles.aaaDiv}>@aaa</div>
          <img
            className={styles.featherfacebookIcon}
            alt=""
            src="featherinstagram.svg"
          />
        </div>
        <div className={styles.groupDiv33}>
          <div className={styles.fbcomaaaDiv}>@aaa</div>
          <img
            className={styles.featherfacebookIcon}
            alt=""
            src="feathertwitter.svg"
          />
        </div>
        
      </div>
      <img className={styles.productTv12} alt="" src="product-tv1-2@2x.png" />
      <img className={styles.growthLevel1Icon} alt="" src="growthlevel-1.svg" />
    </div>
  );
};
