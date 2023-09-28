import style from "./SubmitButton.module.css";
export const SubmitButton = ({ text, onClickEvent }) => {
  return (
    <button className={style.button} onClick={onClickEvent}>
      {text}
    </button>
  );
};
