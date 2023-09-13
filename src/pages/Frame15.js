import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame15.module.css";
const Frame15 = () => {
  const navigate = useNavigate();

  const onCTAButtonContainerClick = useCallback(() => {
    navigate("/9");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.telaParent}>
        <div className={styles.telaParent}>
          <div className={styles.background} />
          <div className={styles.telaChild} />
          <div className={styles.formulario2}>
            <div
              className={styles.ctaButton}
              onClick={onCTAButtonContainerClick}
            >
              <b className={styles.proximo}>Proximo</b>
            </div>
            <div className={styles.ctaButton1}>
              <b className={styles.hmmESobre}>hmm... e sobre isso aqui:</b>
            </div>
            <div className={styles.essasInformaesSoContainer}>
              <span
                className={styles.essasInformaesSo}
              >{`Essas informações são `}</span>
              <b>OBRIGATORIAS!</b>
            </div>
            <div className={styles.modelo}>
              <div className={styles.modeloChild} />
              <div className={styles.digiteOModelo}>
                Digite o modelo da respectiva peça, caso sejá original deixe em
                branco
              </div>
            </div>
            <div className={styles.modelo1}>
              <div className={styles.modeloItem} />
              <div className={styles.aro}>{`Aro `}</div>
            </div>
            <div className={styles.modelo2}>
              <div className={styles.modeloItem} />
              <div className={styles.aro}>Banco:</div>
            </div>
            <div className={styles.modelo3}>
              <div className={styles.modeloItem} />
              <div className={styles.aro}>Guidão:</div>
            </div>
            <div className={styles.modelo4}>
              <div className={styles.modeloItem} />
              <div className={styles.aro}>Transmissão:</div>
            </div>
            <div className={styles.tipo}>
              <div className={styles.tipoChild} />
              <div className={styles.ctaButton2}>
                <b className={styles.sim}>Sim</b>
              </div>
              <div className={styles.suaBikePossui}>
                Sua bike possui modificações?
              </div>
              <div className={styles.ctaButton3}>
                <b className={styles.no}>Não</b>
              </div>
            </div>
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
    </div>
  );
};

export default Frame15;
