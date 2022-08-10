import { FunctionComponent, useState, useCallback } from "react";
import { T3 } from "./T3";
import { PortalPopup } from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./css/T2.module.css";

type T2Type = {
  onClose?: () => void;
};

export const T2: FunctionComponent<T2Type> = ({ onClose }) => {
  const [isT3Open, setT3Open] = useState(false);
  const navigate = useNavigate();

  const openT3 = useCallback(() => {
    setT3Open(true);
  }, []);

  const closeT3 = useCallback(() => {
    setT3Open(false);
  }, []);

  const onGroup1Click = useCallback(() => {
    navigate("/page-1-home");
  }, [navigate]);

  return (
    <>
      <div className={styles.t2Div}>
        <div className={styles.testimonial2Div}>
          <div className={styles.rectangleDiv} />
          <div className={styles.testimonialsDiv}>
            <div className={styles.tESTIMONIALSDiv}>TESTIMONIALS</div>
          </div>
          <b className={styles.trackAnyHashtags}>
            An Assistant for All People. An Assistant for Every Need
          </b>
          <div className={styles.dontWasteTimeOn}>
            Reviews From Trusted Users
          </div>
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
              <p className={styles.blankLineP}>&nbsp;</p>
              <p className={styles.blankLineP}>
                I have a smart assistant that I can talk to and it will do
                anything I want. It feels like Siri and Alexa had a baby and it
                grew up to be way smarter.
              </p>
              <p className={styles.blankLineP}></p>
            </i>
            <div className={styles.groupDiv2}>
              <b className={styles.jaquonHartB}>Swathi Datta</b>
              <div className={styles.digitalMarketingEx}>HR Manager</div>
            </div>
          </div>
          <img className={styles.ellipseIcon} alt="" src="ellipse-2.svg" />
          <img className={styles.ellipseIcon1} alt="" src="ellipse-31.svg" />
          <img className={styles.ellipseIcon2} alt="" src="ellipse-31.svg" />
          <img className={styles.ellipseIcon3} alt="" src="ellipse-31.svg" />
          <img className={styles.ellipseIcon4} alt="" src="ellipse-31.svg" />
          <img
            className={styles.groupIcon}
            alt=""
            src="group-405.svg"
            onClick={openT3}
          />
          <img
            className={styles.groupIcon1}
            alt=""
            src="group-414.svg"
            onClick={onGroup1Click}
          />
        </div>
      </div>
      {isT3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeT3}
        >
          <T3 onClose={closeT3} />
        </PortalPopup>
      )}
    </>
  );
};
