import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame9.module.css";
const Frame9 = () => {
  const navigate = useNavigate();

  const onCTAButtonContainerClick = useCallback(() => {
    navigate("/16");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.inner}>
        <div className={styles.inner}>
          <div className={styles.background} />
          <div className={styles.groupChild} />
          <div className={styles.vistoria}>
            <div
              className={styles.ctaButton}
              onClick={onCTAButtonContainerClick}
            >
              <b className={styles.enviar}>Enviar</b>
            </div>
            <div className={styles.ctaButton1}>
              <b className={styles.horaDaFoto}>Hora da foto!</b>
            </div>
            <div className={styles.fotoDaBike}>Foto da Bike Completa:</div>
            <div className={styles.ctaButton2} />
          </div>
          <b className={styles.okayAgoraDo}>Okay, agora do outro lado!</b>
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

export default Frame9;