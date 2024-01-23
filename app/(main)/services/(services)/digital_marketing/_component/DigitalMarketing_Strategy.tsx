'use client'
import { useState } from "react"

const DigitalMarketing_Strategy = () => {

    const [steps, setStep] = useState({
        stepsItems: ["Talk Now", "Goals", "Marketing", "Growth 📈"],
        currentStep: 2
    })

    return (
        <div className="flex max-w-screen-xl min-h-80 mx-auto px-4 md:px-8">
            <ul aria-label="Steps" className="items-center text-gray-600 md:flex ">
                {steps.stepsItems.map((item, idx) => (
                    <li aria-current={steps.currentStep == idx + 1 ? "step" : false} className="flex-1 flex md:items-center ">
                        <div className={`flex-1 flex items-center gap-x-3 md:block ${idx != 0 ? "md:space-x-10" : ""}`}>
                            <span className={`block h-24 w-1 md:w-full md:h-1 ${steps.currentStep > idx + 1 ? "bg-indigo-600" : "bg-gray-200"}`}></span>
                            <div className="md:mt-2">
                                <p className={`text-sm ${steps.currentStep > idx + 1 ? "text-indigo-600" : ""}`}>Step {idx + 1}</p>
                                <h3 className="mt-1 font-medium w-40">
                                    {item}
                                </h3>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DigitalMarketing_Strategy