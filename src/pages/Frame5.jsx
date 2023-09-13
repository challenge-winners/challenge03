import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame5.module.css";
const Frame5 = () => {
  const navigate = useNavigate();

  const onCTAButtonContainerClick = useCallback(() => {
    navigate("/4");
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
          <b className={styles.vistoria1}>Vistoria</b>
        </div>
        <div className={styles.olVocEntrou}>{`Olá! Você entrou na `}</div>
        <div className={styles.masAntesDaContainer}>
          <p className={styles.masAntesDa}>Mas antes da parte divertida,</p>
          <p className={styles.masAntesDa}>precisamos de algumas informações</p>
        </div>
        <div className={styles.vistoriaBikecheck}>Vistoria BikeCheck!</div>
        <div className={styles.ctaButton2}>
          <b className={styles.confirmeSuaIdentidade}>
            Confirme sua identidade
          </b>
        </div>
        <div className={styles.ctaButton3}>
          <b className={styles.rg}>RG</b>
        </div>
        <div className={styles.ctaButton4}>
          <b className={styles.cnh}>CNH</b>
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

export default Frame5;