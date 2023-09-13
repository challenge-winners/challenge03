import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame7.module.css";
const Frame7 = () => {
  const navigate = useNavigate();

  const onCTAButtonContainerClick = useCallback(() => {
    navigate("/12");
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
              <b className={styles.proximo}>Proximo</b>
            </div>
            <div className={styles.ctaButton1}>
              <b className={styles.horaDaFoto}>Hora da foto!</b>
            </div>
            <div className={styles.fotoDoNumero}>Foto do Numero de Serie:</div>
            <div className={styles.ctaButton2} />
          </div>
          <b className={styles.deixeSuaBike}>
            Deixe sua bike estável para tirar a foto, tenha cuidado com você e
            sua bicicleta!
          </b>
          <div className={styles.header}>
            <div className={styles.headerChild} />
            <div className={styles.bikecheckParent}>
              <b className={styles.bikecheck}>BikeCheck</b>
              <img className={styles.menuIcon} alt="" src="/undefined.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame7;
