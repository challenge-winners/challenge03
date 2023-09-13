import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame11.module.css";
const Frame11 = () => {
  const navigate = useNavigate();

  const onCTAButtonContainer1Click = useCallback(() => {
    navigate("/19");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.inner}>
        <div className={styles.inner}>
          <div className={styles.inner}>
            <div className={styles.inner}>
              <div className={styles.header}>
                <div className={styles.headerChild} />
                <div className={styles.bikecheckParent}>
                  <b className={styles.bikecheck}>BikeCheck</b>
                  <img
                    className={styles.menuIcon}
                    alt=""
                    src="/undefined.png"
                  />
                </div>
              </div>
              <div className={styles.background} />
              <div className={styles.groupChild} />
              <div className={styles.vistoria}>
                <div className={styles.ctaButton}>
                  <b className={styles.concluido}>Concluido</b>
                </div>
                <div className={styles.suasFotosEsto}>
                  Suas fotos estão em analise!
                </div>
              </div>
              <b className={styles.prontoEnviado}>Pronto! Enviado</b>
              <b className={styles.b}>99%</b>
              <div className={styles.groupItem} />
              <div className={styles.header}>
                <div className={styles.headerChild} />
                <div className={styles.bikecheckParent}>
                  <b className={styles.bikecheck}>BikeCheck</b>
                  <img
                    className={styles.menuIcon}
                    alt=""
                    src="/undefined.png"
                  />
                </div>
              </div>
            </div>
            <div
              className={styles.ctaButton1}
              onClick={onCTAButtonContainer1Click}
            >
              <b className={styles.enviar}>Enviar</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame11;
