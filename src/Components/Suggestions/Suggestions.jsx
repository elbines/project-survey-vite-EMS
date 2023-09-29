import style from "./Suggestions.module.css";
import { SecondaryHeading } from "../SecondaryHeading/SecondaryHeading";

export const Suggestions = ({ updateFormData, value }) => {
  const thirdQuestion = (e) => updateFormData("thirdQuestion", e.target.value);

  return (
    <div>
      <SecondaryHeading question="3. What suggestions do you have to improve your shopping experience?" />
      <div className={style.input_wrapper}>
        <textarea
          id="input"
          className={style.text_input}
          placeholder="Please type here"
          rows="3"
          onChange={thirdQuestion}
          required
          value={value}
        ></textarea>
      </div>
    </div>
  );
};

//   3. What suggestions do you have to improve your shopping experience?
// (Text Input)
