import styles from "./CSSModule.module.scss";
const CSSModule = () => {
  return (
    <div className={styles.wrapper}>
      안녕하세요, 저는 <span className="something">CSS Module</span>입니다.
    </div>
  );
};

export default CSSModule;
