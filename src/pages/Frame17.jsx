import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Frame17.module.css";
const Frame17 = () => {
  const navigate = useNavigate();

  const onCheckContainerClick = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <img className={styles.groupIcon} alt="" src="/undefined8.png" />
      <img className={styles.groupIcon1} alt="" src="/undefined9.png" />
      <div className={styles.backgroundParent}>
        <div className={styles.background} />
        <div className={styles.frameChild} />
        <img className={styles.groupIcon2} alt="" src="/undefined10.png" />
        <img className={styles.groupIcon3} alt="" src="/undefined11.png" />
        <img className={styles.groupIcon4} alt="" src="/undefined12.png" />
        <img className={styles.groupIcon5} alt="" src="/undefined13.png" />
        <img className={styles.groupIcon6} alt="" src="/undefined14.png" />
        <img className={styles.groupIcon7} alt="" src="/undefined15.png" />
        <img className={styles.groupIcon8} alt="" src="/undefined16.png" />
        <img className={styles.groupIcon9} alt="" src="/undefined17.png" />
        <img className={styles.groupIcon10} alt="" src="/undefined18.png" />
        <div className={styles.oQue}>O que é BikeCheck?</div>
        <div className={styles.oDesafioAtual}>
          O desafio atual consiste em desenvolver uma solução digital para que
          os clientes do produto Porto Seguro Bike, possam realizar a inspeção
          online no momento da contratação sem a necessidade de intervenção
          humana no processo. Para enfrentar esse desafio, foi formado o grupo
          com o objetivo de criar uma resposta eficaz, e assim surgiu a
          BikeCheck.
        </div>
        <div className={styles.frameItem} />
        <div className={styles.bikecheckParent}>
          <b className={styles.bikecheck}>BikeCheck</b>
          <img className={styles.menuIcon} alt="" src="/undefined.png" />
        </div>
        <div className={styles.check} onClick={onCheckContainerClick}>
          <b className={styles.verifique}>Vistoria</b>
        </div>
      </div>
    </div>
  );
};

export default Frame17;
