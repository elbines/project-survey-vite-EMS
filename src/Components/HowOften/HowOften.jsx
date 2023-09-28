import style from "./HowOften.module.css";
import { SecondaryHeading } from "../SecondaryHeading/SecondaryHeading";

export const HowOften = ({ updateFormData, value }) => {
  const handleHowOftenChange = (e) => updateFormData("howOften", e.target.value);

  return (
    <>
      <SecondaryHeading question="2. How frequently did you make an order? Select an option below:" />

      <select onChange={handleHowOftenChange} value={value} className={style.input_wrapper} >

        <option value="">Options: </option>
        <option value="Monthly">Monthly</option>
        <option value="Every-second-month">Every second month</option>
        <option value="Rarely">Rarely</option>
        <option value="Never">Never</option>
      </select>
    </>
  );
};
