import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame13.module.css";
const Frame13 = () => {
  const navigate = useNavigate();

  const onCTAButtonContainerClick = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.inner}>
        <div className={styles.inner}>
          <div className={styles.inner}>
            <div className={styles.groupChild} />
            <div className={styles.bikecheckParent}>
              <b className={styles.bikecheck}>BikeCheck</b>
              <img className={styles.menuIcon} alt="" src="/undefined.png" />
            </div>
            <div className={styles.background} />
            <div className={styles.groupItem} />
            <div
              className={styles.ctaButton}
              onClick={onCTAButtonContainerClick}
            >
              <b className={styles.enviar}>Enviar</b>
            </div>
            <div className={styles.seuRostinho}>Seu rostinho!</div>
            <div className={styles.semOculosSem}>
              Sem oculos, sem acessorios e num ambiente claro!
            </div>
            <div className={styles.tireUmaSelfie}>
              Tire uma ‘selfie’ para comprovar que é você no documento!
            </div>
            <div className={styles.groupInner} />
            <div className={styles.ctaButton1}>
              <b className={styles.confirmeSuaIdentidade}>
                Confirme sua identidade
              </b>
            </div>
            <div className={styles.groupChild} />
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

export default Frame13;
