import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame12.module.css";
const Frame12 = () => {
  const navigate = useNavigate();

  const onCTAButtonContainer1Click = useCallback(() => {
    navigate("/11");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.oNumeroDeveEstarLegvelEParent}>
        <div className={styles.oNumeroDeve}>
          O numero deve estar legível e não obstruido, e deve ser o mesmo
          inserido na etapa anterior
        </div>
        <div className={styles.oNumeroDeveEstarLegvelEParent}>
          <div className={styles.background} />
          <div className={styles.groupChild} />
          <div className={styles.oNumeroDe}>
            O numero de serie pode estar localizado em um desses locais:
          </div>
          <div className={styles.ctaButton}>
            <b className={styles.horaDaFoto}>Hora da foto!</b>
          </div>
          <div className={styles.tireUmaFoto}>
            Tire uma foto do numero de serie
          </div>
          <div className={styles.header}>
            <div className={styles.headerChild} />
            <div className={styles.bikecheckParent}>
              <b className={styles.bikecheck}>BikeCheck</b>
              <img className={styles.menuIcon} alt="" src="/undefined.png" />
            </div>
          </div>
          <img
            className={styles.numerodeserie1Icon}
            alt=""
            src="/undefined7.png"
          />
        </div>
      </div>
      <div className={styles.ctaButton1} onClick={onCTAButtonContainer1Click}>
        <b className={styles.prosseguirParaA}>Prosseguir para a captura</b>
      </div>
    </div>
  );
};

export default Frame12;
