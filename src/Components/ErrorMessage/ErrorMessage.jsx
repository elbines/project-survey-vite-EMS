import style from "./ErrorMessage.module.css";
export const ErrorMessage = ({ error }) => {
  return <>{error.isFailed && <p className={style.text}>{error.message}</p>}</>;
};
