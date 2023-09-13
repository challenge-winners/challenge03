import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame14.module.css";
const Frame14 = () => {
  const navigate = useNavigate();

  const onCTAButtonContainerClick = useCallback(() => {
    navigate("/10");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.backgroundParent}>
        <div className={styles.background} />
        <div className={styles.frameChild} />
        <div className={styles.vistoria}>
          <div className={styles.ctaButton} onClick={onCTAButtonContainerClick}>
            <b className={styles.entendo}>Entendo</b>
          </div>
          <div className={styles.ctaButton1}>
            <b className={styles.horaDaFoto}>Hora da Foto!</b>
          </div>
          <div className={styles.avisoAPartir}>
            Aviso! A partir do primeiro envio as fotos teram um prazo de
            validade e devem ser enviadas em até 24* horas
          </div>
        </div>
        <div className={styles.tambmExisteUm}>
          Também existe um limite de tentativas para o envio de fotos, então
          faça questão de enviar com a melhor qualidade possível!
        </div>
        <b className={styles.seEntendeE}>
          Se entende e deseja prosseguir, clique o botão abaixo:
        </b>
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

export default Frame14;
