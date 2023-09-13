import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame16.module.css";
const Frame16 = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='cadastroContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCTAButtonContainerClick = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  return (
    <div className={styles.div} onClick={onContainerClick}>
      <div className={styles.inner}>
        <div className={styles.inner}>
          <div className={styles.background} />
          <div className={styles.groupChild} />
          <div className={styles.cadastro} data-scroll-to="cadastroContainer">
            <div
              className={styles.ctaButton}
              onClick={onCTAButtonContainerClick}
            >
              <b className={styles.finalizar}>Finalizar</b>
            </div>
            <div className={styles.ctaButton1}>
              <b className={styles.cadastro1}>Cadastro</b>
            </div>
            <div className={styles.cadastroChild} />
            <div className={styles.emailParaContato}>Email para contato:</div>
            <div className={styles.porUltimoSeu}>Por ultimo, seu CPF:</div>
            <div className={styles.seuNmero}>Seu número é?</div>
            <div className={styles.cadastroItem} />
            <div className={styles.cadastroInner} />
            <div className={styles.rectangleDiv} />
            <div className={styles.eiQualSeu}>Ei! Qual seu nome?</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame16;
