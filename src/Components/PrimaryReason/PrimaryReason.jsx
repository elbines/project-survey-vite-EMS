export const PrimaryReason = ({ updateFormData, value }) => {
  const firstQuestion = (e) => updateFormData("primaryReason", e.target.value)

    return ( <div>
      <h2>Please help us understand why you stopped ordering from us. Choose the primary reason:</h2>
      
        <input type = "radio" id = "highprice" name = "primaryReason" value="highprice" onChange={firstQuestion} />
      <label htmlFor="highprice">Prices were too high</label>
      
        <input type = "radio" id = "quality" name = "primaryReason" value = "quality"  onChange={firstQuestion}/>
      <label htmlFor="quality">Quality of products</label>
      
        <input type = "radio" id = "shipping" name = "primaryReason" value = "shipping"  onChange={firstQuestion}/>
      <label htmlFor="shipping">Shipping and delivery issues</label>
      
        <input type = "radio" id = "betteralternative" name = "primaryReason" value = "betteralternative"  onChange={firstQuestion}/>
      <label htmlFor="betteralternative">Found better alternatives</label>

        <input type = "radio" id = "other" name = "primaryReason" value = "other"  onChange={firstQuestion}/>
      <label htmlFor="other">Other</label>
      <input type="text" id = "other"  name="primaryReason" value = "other" />

      </div>)
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

// function App() {
//   const [topping, setTopping] = useState("Medium")

//   return (
//     <div className="App">
//       <h3>Select Pizza Size</h3>

//       <input
//         type="radio"
//         name="topping"
//         value="Regular"
//         id="regular"
//         checked={topping === "Regular"}
//       />
//       <label htmlFor="regular">Regular</label>

//       <input
//         type="radio"
//         name="topping"
//         value="Medium"
//         id="medium"
//         checked={topping === "Medium"}
//       />
//       <label htmlFor="medium">Medium</label>

//       <input
//         type="radio"
//         name="topping"
//         value="Large"
//         id="large"
//         checked={topping === "Large"}
//       />
//       <label htmlFor="large">Large</label>
//     </div>
//   )
// }

// export default App