import style from "./PrimaryReason.module.css";
import { SecondaryHeading } from "../SecondaryHeading/SecondaryHeading";
export const PrimaryReason = ({ updateFormData, value }) => {
  const firstQuestion = (e) => updateFormData("primaryReason", e.target.value);
  console.log(value);

  return (
    <>
      <SecondaryHeading question="Please help us understand why you stopped ordering from us. Choose the primary reason:" />

      <div className={style.input_wrapper}>
        <div className={style.input_field}>
          <input
            type="radio"
            id="highprice"
            name="primaryReason"
            value="highprice"
            onChange={firstQuestion}
          />
          <label htmlFor="highprice">Prices were too high</label>
        </div>
        <div className={style.input_field}>
          <input
            type="radio"
            id="quality"
            name="primaryReason"
            value="quality"
            onChange={firstQuestion}
          />

          <label htmlFor="quality">Quality of products</label>
        </div>
        <div className={style.input_field}>
          <input
            type="radio"
            id="shipping"
            name="primaryReason"
            value="shipping"
            onChange={firstQuestion}
          />
          <label htmlFor="shipping">Shipping and delivery issues</label>
        </div>
        <div className={style.input_field}>
          <input
            type="radio"
            id="betteralternative"
            name="primaryReason"
            value="betteralternative"
            onChange={firstQuestion}
          />
          <label htmlFor="betteralternative">Found better alternatives</label>
        </div>
        <div className={`${style.input_field} ${style.input_other}`}>
          <div>
            <input
              type="radio"
              id="other"git add .
              
              name="primaryReason"
              value="other"
              onChange={firstQuestion}
            />
            <label htmlFor="other">Other</label>
          </div>
          <input
            type="text"
            id="other"
            className={style.text_input}
            name="primaryReason"
            onChange={firstQuestion}
            placeholder="Other..."
          />
        </div>
      </div>
    </>
  );
};

/*
  export const Album = ({ updateFormData, value }) => {
  const favoriteAlbum = (e) => updateFormData("favoriteAlbum", e.target.value);
  return (
    <div>
      <label>Favorite Album:</label>
      <select value={value} onChange={favoriteAlbum}>
        <option value="">Select an Album</option>
        <option value="taylor-swift-midnights">Taylor Swift - Midnights</option>
        <option value="beyonce-renaissance">Beyonce - Renaissance</option>
        <option value="drake-21-her-loss">Drake & 21 Savage - Her Loss</option>
        <option value="sza-sos">SZA - SOS</option>
      </select>
    </div>
  );
};*/
// 1. Please help us understand why you stopped ordering from us. Choose the primary reason:
// (Radio Buttons)
// Prices were too high
// Quality of products
// Shipping and delivery issues
// Found better alternatives
// Other (Please specify): [Text Input]
