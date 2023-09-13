import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame.module.css";
const Frame = () => {
  const navigate = useNavigate();

  const onCTAButtonContainerClick = useCallback(() => {
    navigate("/15");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.backgroundParent}>
        <div className={styles.background} />
        <div className={styles.frameChild} />
        <div className={styles.ctaButton} onClick={onCTAButtonContainerClick}>
          <b className={styles.prosseguirParaA}>Prosseguir para a captura</b>
        </div>
        <div className={styles.ctaButton1}>
          <b className={styles.horaDaFoto}>Hora da foto!</b>
          <div className={styles.issoSimExemplos}>
            Isso sim! Exemplos positivos:
          </div>
        </div>
        <div className={styles.header}>
          <div className={styles.headerChild} />
          <div className={styles.bikecheckParent}>
            <b className={styles.bikecheck}>BikeCheck</b>
            <img className={styles.menuIcon} alt="" src="/undefined.png" />
          </div>
        </div>
        <img className={styles.bikeSim3} alt="" src="/undefined1.png" />
        <img className={styles.bikeSim22} alt="" src="/undefined2.png" />
        <div className={styles.noExemplosNegativos}>
          Não! Exemplos negativos:
        </div>
        <img className={styles.bikeNao1} alt="" src="/undefined3.png" />
        <img className={styles.bikeNao2} alt="" src="/undefined4.png" />
      </div>
    </div>
  );
};

export default Frame;
