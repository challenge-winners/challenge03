import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame10.module.css";
const Frame10 = () => {
  const navigate = useNavigate();

  const onCTAButtonContainer2Click = useCallback(() => {
    navigate("/17");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.ctaButton}>
        <b className={styles.proximo}>Proximo</b>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.backgroundParent}>
          <div className={styles.background} />
          <div className={styles.groupChild} />
          <div className={styles.ctaButton1}>
            <b className={styles.horaDaFoto}>Hora da foto!</b>
          </div>
          <div className={styles.fotoDaBike}>Foto da Bike Completa:</div>
          <div className={styles.ctaButton2} />
          <b className={styles.deixeSuaBike}>
            Deixe sua bike visivel! Sem garrafinha ou outros acessorios do tipo
            na foto!
          </b>
          <div className={styles.groupItem} />
        </div>
        <div className={styles.ctaButton3} onClick={onCTAButtonContainer2Click}>
          <b className={styles.enviar}>Enviar</b>
        </div>
      </div>
      <div className={styles.bikecheckParent}>
        <b className={styles.bikecheck}>BikeCheck</b>
        <img className={styles.menuIcon} alt="" src="/undefined.png" />
      </div>
    </div>
  );
};

export default Frame10;
