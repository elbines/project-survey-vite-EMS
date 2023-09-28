
export const HowOften = ({ updateFormData, value }) => {
  const handleHowOftenChange = (e) => updateFormData("howOften", e.target.value);

  return (
    <div>
      <h1>2. How frequently did you make an order? Please select an option below:</h1>

      <select onChange={handleHowOftenChange} value={value}>
        <option value="">Options:</option>
        <option value="Monthly">Monthly</option>
        <option value="Every-second-month">Every second month</option>
        <option value="Rarely">Rarely</option>
        <option value="Never">Never</option>
      </select>
    </div>
  );
};