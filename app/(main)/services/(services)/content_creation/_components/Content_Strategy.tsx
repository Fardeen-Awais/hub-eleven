'use client'
import { BadgeCheck, GoalIcon, LineChart, MenuSquare, Presentation } from "lucide-react"
import { useState } from "react"

const Content_Strategy = () => {

    const [steps, setStep] = useState({
        stepsItems: ["Talk Now", "Plan", "Writing ✍", "Reach 📈"],
        icons: [<Presentation />, <GoalIcon />, <BadgeCheck/>, <LineChart/>],
        currentStep: 2
    })
    const icons = [
        <MenuSquare />,
    ]
    return (
        <div className="flex max-w-screen-xl min-h-60 mx-auto px-4 md:px-8">
            <ul aria-label="Steps" className="items-center text-gray-600 md:flex ">
                {steps.stepsItems.map((item, idx) => (
                    <li aria-current={steps.currentStep == idx + 1 ? "step" : false} className="flex-1 flex md:items-center ">
                        <div className={`flex-1 flex items-center gap-x-3 md:block ${idx != 0 ? "" : ""}`}>
                            <div className="flex my-4">
                            {steps.icons[idx]}
                            </div>
                            <span className={`block h-24 w-1 md:w-full md:h-1 ${steps.currentStep > idx + 1 ? "bg-cyan-600" : "bg-gray-200"}`}></span>
                            <div className="md:mt-2">
                                <p className={`text-sm ${steps.currentStep > idx + 1 ? "text-cyan-600" : ""}`}>Step {idx + 1}</p>
                                <h4 className="mt-1 font-medium w-40">
                                    {item}
                                </h4>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content_Strategy