import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame2.module.css";
const Frame2 = () => {
  const navigate = useNavigate();

  const onCTAButtonContainerClick = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.background} />
      <div className={styles.child} />
      <div className={styles.formulario1}>
        <div className={styles.ctaButton} onClick={onCTAButtonContainerClick}>
          <b className={styles.proximo}>Proximo</b>
        </div>
        <div className={styles.ctaButton1}>
          <b className={styles.meConteSobre}>Me conte sobre essa Bike!</b>
        </div>
        <div className={styles.essasInformaesSoContainer}>
          <span
            className={styles.essasInformaesSo}
          >{`Essas informações são `}</span>
          <b>OBRIGATORIAS!</b>
        </div>
        <div className={styles.modelo}>
          <div className={styles.modeloChild} />
          <div className={styles.modelo1}>
            <span>Modelo</span>
            <span className={styles.span}>:</span>
          </div>
        </div>
        <div className={styles.modelo2}>
          <div className={styles.modeloChild} />
          <div className={styles.cor}>Cor:</div>
        </div>
        <div className={styles.modelo3}>
          <div className={styles.modeloChild} />
          <div className={styles.cor}>Ano:</div>
        </div>
        <div className={styles.modelo4}>
          <div className={styles.modeloChild} />
          <div className={styles.cor}>Numero de Serie:</div>
        </div>
        <div className={styles.modelo5}>
          <div className={styles.modeloChild} />
          <div className={styles.cor}>Fabricante:</div>
        </div>
        <div className={styles.tipo}>
          <div className={styles.tipoChild} />
          <div className={styles.ctaButton2}>
            <div className={styles.tipo1}>Tipo:</div>
            <b className={styles.urbana}>Urbana</b>
          </div>
          <div className={styles.ctaButton3}>
            <b className={styles.esporte}>Esporte</b>
          </div>
          <div className={styles.ctaButton4}>
            <b className={styles.eletrica}>Eletrica</b>
          </div>
        </div>
        <div className={styles.issoFicaNo}>
          Isso fica no quadro da bicicleta!
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

export default Frame2;
