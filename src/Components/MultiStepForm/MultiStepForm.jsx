import { useState } from "react";
import { Button } from "../Button/Button";
import {Footer} from "../Footer/Footer"
import { Hero } from "../Hero/Hero";
import { HowOften } from "../HowOften/HowOften";
import { PrimaryReason } from "../PrimaryReason/PrimaryReason";
import { Suggestions } from "../Suggestions/Suggestions";


export const MultiStepForm = () => {
    const [formData,setFormData]=useState({
        primaryReason:'',
        howOften:'',
        Suggestions:''
    })

    const updateFormData=(field,value)=>{
        setFormData((previous)=>({...previous,[field]:value}))
    }

    const [currentStep,setCurrentStep]=useState(1)
    const nextStep=()=>{
        if(currentStep<4) setCurrentStep(c=>c+1)
        }
    const prevStep=()=>{
        if(currentStep>1) setCurrentStep(c=>c-1)
        }

    return (<div>
<Button/>
<Button/>

<Hero/>

<PrimaryReason/>
<HowOften/>
<Suggestions/>
<Footer/>
<button></button>
    </div>)
  };



//   4. Thank you for sharing your feedback with us!
// Your €15 Discount Code: PALA15