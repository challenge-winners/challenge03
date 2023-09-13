import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame8.module.css";
const Frame8 = () => {
  const navigate = useNavigate();

  const onCTAButtonContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.groupParent}>
        <div className={styles.groupParent}>
          <div className={styles.groupParent}>
            <div className={styles.background} />
            <div className={styles.groupChild} />
            <div className={styles.fotoDaBike}>Foto da Bike Completa</div>
            <div className={styles.algumaInstruesEviteContainer}>
              <p className={styles.algumaInstrues}>Alguma instruções:</p>
              <p className={styles.algumaInstrues}>Evite angulos baixos</p>
              <p className={styles.algumaInstrues}>
                Evite lugares com pouca iluminosidade
              </p>
              <p className={styles.algumaInstrues}>
                Apareça na foto apenas se indicado!
              </p>
            </div>
            <div className={styles.issoSimExemplos}>
              Isso sim! Exemplos positivos:
            </div>
            <div className={styles.ctaButton}>
              <b className={styles.horaDaFoto}>Hora da foto!</b>
            </div>
            <div className={styles.exemplos}>Exemplos:</div>
            <div className={styles.header}>
              <div className={styles.headerChild} />
              <div className={styles.bikecheckParent}>
                <b className={styles.bikecheck}>BikeCheck</b>
                <img className={styles.menuIcon} alt="" src="/undefined.png" />
              </div>
            </div>
            <img className={styles.bikeSim1} alt="" src="/undefined1.png" />
            <img className={styles.bikeSim21} alt="" src="/undefined2.png" />
          </div>
        </div>
        <div className={styles.ctaButton1} onClick={onCTAButtonContainer1Click}>
          <b className={styles.enviar}>Enviar</b>
        </div>
      </div>
    </div>
  );
};

export default Frame8;
