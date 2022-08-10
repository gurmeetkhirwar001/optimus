import { FunctionComponent } from "react";
import styles from "./css/T3.module.css";

type T3Type = {
  onClose?: () => void;
};

export const T3: FunctionComponent<T3Type> = ({ onClose }) => {
  return (
    <div className={styles.t3Div}>
      <div className={styles.testimonial2Div}>
        <div className={styles.rectangleDiv} />
        <div className={styles.testimonialsDiv}>
          <div className={styles.tESTIMONIALSDiv}>TESTIMONIALS</div>
        </div>
        <b className={styles.trackAnyHashtags}>
          An Assistant for All People. An Assistant for Every Need
        </b>
        <div className={styles.dontWasteTimeOn}>Reviews From Trusted Users</div>
        <div className={styles.div}>“</div>
        <div className={styles.groupDiv}>
          <div className={styles.groupDiv1}>
            <div className={styles.starDiv}>star</div>
            <div className={styles.starDiv1}>star</div>
            <div className={styles.star2}>star</div>
            <div className={styles.star3}>star</div>
            <div className={styles.star4}>star</div>
          </div>
          <i className={styles.dontWasteTimeOn1}>
            I love the fact that a lot of people can talk to it. I am happy that
            I can use it on my mobile, Laptop and tablet.
          </i>
          <div className={styles.groupDiv2}>
            <b className={styles.jaquonHartB}>James Chan</b>
            <div className={styles.digitalMarketingEx}>
              Retail Business Entrepreneur
            </div>
          </div>
        </div>
        <img className={styles.ellipseIcon} alt="" src="ellipse-2.svg" />
        <img className={styles.ellipseIcon1} alt="" src="ellipse-31.svg" />
        <img className={styles.ellipseIcon2} alt="" src="ellipse-31.svg" />
        <img className={styles.ellipseIcon3} alt="" src="ellipse-31.svg" />
        <img className={styles.ellipseIcon4} alt="" src="ellipse-31.svg" />
        <img className={styles.groupIcon} alt="" src="group-404.svg" />
        <img className={styles.groupIcon1} alt="" src="group-413.svg" />
      </div>
    </div>
  );
};
