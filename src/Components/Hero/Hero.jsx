import style from "./Hero.module.css";
//import {currentStep} from "../MultiStepForm/MultiStepForm";
const Hero = () => {
  
  // Get the current step from the MultiStepForm
  //const currentStage = currentStep;
  //const currentStage = currentStep;

  /*let backgroundImage;

  if (currentStage === 1) {
    backgroundImage = "/assets/dog.jpg";
  } else if (currentStage === 2) {
    backgroundImage = "/assets/dogs.jpg";
  } else if (currentStage === 3) {
    backgroundImage = "/assets/dog_snow.jpg";
  } else {
    backgroundImage = "/assets/dog_snow.jpg";
  } */

  return (
    <div className={style.heroImage}>
    <img src="/assets/dog_snow.jpg" alt="dog" className={style.heroImage} />  
    </div>
     
  );
  // Depending on the step, set the appropriate background image
  /*switch (currentStage) {
    case 1:
      backgroundImage = "dog.jpg"
      break;
    case 2:
      backgroundImage = "dogs.jpg"
      break;
    case 3:
      backgroundImage = "dog_snow.jpg";
      break;
    default:
      backgroundImage = "dog_snow.jpg";
  } */


/*
  return (
    <div className={style.imageContainer}>
    <img src="/assets/dog.jpg" alt="dog" className={style.heroImage} />  
    </div>
     
  );
  
}; 
*/
}
export { Hero }; 