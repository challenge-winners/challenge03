import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame3.module.css";
const Frame3 = () => {
  const navigate = useNavigate();

  const onCTAButtonContainerClick = useCallback(() => {
    navigate("/6");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.background} />
      <div className={styles.child} />
      <div className={styles.vistoria}>
        <div className={styles.ctaButton} onClick={onCTAButtonContainerClick}>
          <b className={styles.enviar}>Enviar</b>
        </div>
        <div className={styles.ctaButton1}>
          <b className={styles.confirmeSuaIdentidade}>
            Confirme sua identidade
          </b>
        </div>
        <div className={styles.sMaisUma}>Só mais uma! Agora,</div>
        <div className={styles.tireUmaFoto}>
          Tire uma foto do verso do documento!
        </div>
        <div className={styles.semReflexo}>
          Sem reflexo + objetos estáveis = confirmado!
        </div>
        <div className={styles.ctaButton2}>
          <img className={styles.exemploRg21} alt="" src="/undefined5.png" />
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

export default Frame3;
