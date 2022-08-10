import { FunctionComponent } from "react";
import styles from "./css/T5.module.css";

type T5Type = {
  onClose?: () => void;
};

export const T5: FunctionComponent<T5Type> = ({ onClose }) => {
  return (
    <div className={styles.t5Div}>
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
            Optimus is a virtual assistant that can understand and speak in
            English, French, German, Italian, Korean, Spanish, and Chinese with
            more languages added all the time.
          </i>
          <div className={styles.groupDiv2}>
            <b className={styles.jaquonHartB}>Mong Joe</b>
            <div className={styles.digitalMarketingEx}>Teacher</div>
          </div>
        </div>
        <img className={styles.ellipseIcon} alt="" src="ellipse-2.svg" />
        <img className={styles.ellipseIcon1} alt="" src="ellipse-31.svg" />
        <img className={styles.ellipseIcon2} alt="" src="ellipse-31.svg" />
        <img className={styles.ellipseIcon3} alt="" src="ellipse-31.svg" />
        <img className={styles.ellipseIcon4} alt="" src="ellipse-31.svg" />
        <img className={styles.groupIcon} alt="" src="group-402.svg" />
        <img className={styles.groupIcon1} alt="" src="group-411.svg" />
      </div>
    </div>
  );
};
