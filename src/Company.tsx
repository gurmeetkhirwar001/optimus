import { FunctionComponent, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./css/Company.module.css";

type CompanyType = {
  onClose?: () => void;
};

export const Company: FunctionComponent<CompanyType> = ({ onClose }) => {
  const navigate = useNavigate();

  const onPRODUCTTextClick = useCallback(() => {
    navigate("/Page1Home");
  }, [navigate]);

  return (
    <div className={styles.companyDiv}>
      <div className={styles.aboutDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.groupDiv}>
          <b className={styles.aboutAITensors}>About AI Tensors</b>
          <Link to="/"><div
            className={styles.pRODUCTDiv}
          >{`PRODUCT  `}</div></Link>
          <div className={styles.cOMPANYDiv}>COMPANY</div>
          <div className={styles.weAreTheAdventurersOfArti}>
            <p className={styles.weAreThe}>
              {" "}
              We are the adventurers of Artificial Intelligence, projecting its
              existence into the dimensions of time and space. We are AI
              Tensors.
            </p>
            <p className={styles.weAreThe}>&nbsp;</p>
            <p
              className={styles.weAreThe}
            >{`We, at AI Tensors, are looking to solve corporate and household challenges by providing direct support to customers who want to use API based applications, data management services, among other AI related services or jobs. `}</p>
            <p className={styles.blankLineP1}>&nbsp;</p>
          </div>
          <div className={styles.groupDiv1}>
            <div className={styles.rectangleDiv1} />
            <div className={styles.knowMoreDiv}>know more</div>
          </div>
        </div>
        <img
          className={styles.untitled1d1Icon}
          alt=""
          src="untitled1d-1@2x.png"
        />
        <img
          className={styles.untitled1d2Icon}
          alt=""
          src="untitled1d-2@2x.png"
        />
        <img className={styles.aboutUs1} alt="" src="about-us-1@2x.png" />
      </div>
      <img
        className={styles.aboutUssFinal1}
        alt=""
        src="about-uss-final-1@2x.png"
      />
      <img
        className={styles.aboutUsFinall1}
        alt=""
        src="about-us-finall-1@2x.png"
      />
      <img
        className={styles.aboutUsFinall51}
        alt=""
        src="about-us-finall5-11@2x.png"
      />
    </div>
  );
};
