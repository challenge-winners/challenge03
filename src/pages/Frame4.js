import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame4.module.css";
const Frame4 = () => {
  const navigate = useNavigate();

  const onCTAButtonContainerClick = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.background} />
      <div className={styles.child} />
      <div className={styles.vistoria}>
        <div className={styles.ctaButton} onClick={onCTAButtonContainerClick}>
          <b className={styles.proximo}>Proximo</b>
        </div>
        <div className={styles.ctaButton1}>
          <b className={styles.confirmeSuaIdentidade}>
            Confirme sua identidade
          </b>
        </div>
        <div className={styles.agoraPrecisamosQue}>
          Agora, precisamos que você
        </div>
        <div className={styles.tireUmaFoto}>
          Tire uma foto da frente do documento!
        </div>
        <div className={styles.eviteReflexosEContainer}>
          <span>Evite reflexos e mantenha as mãos estaveis!</span>
          <span className={styles.span}>{` `}</span>
        </div>
        <div className={styles.ctaButton2} />
      </div>
      <img className={styles.rgExemplo1} alt="" src="/undefined6.png" />
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.bikecheckParent}>
          <b className={styles.bikecheck}>BikeCheck</b>
          <img className={styles.menuIcon} alt="" src="/undefined.png" />
        </div>
      </div>
      <div className={styles.header}>
        <div className={styles.headerChild} />
        <div className={styles.bikecheckParent}>
          <b className={styles.bikecheck}>BikeCheck</b>
          <img className={styles.menuIcon} alt="" src="/undefined.png" />
        </div>
      </div>
    </div>
  );
};

export default Frame4;
