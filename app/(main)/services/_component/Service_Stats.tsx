'use client'
import CountingNumbers from "@/app/components/counting-numbers"
import { useInView } from "framer-motion"
import { useRef } from "react"
const Service_Stats = ({stats}:any) => {
    
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
        <section className="py-28 bg-gray-900 w-full mx-auto flex items-center">
            <div className="max-w-screen-xl mx-auto px-5">
                <div className="flex flex-col items-center p-5 max-w-xl mx-auto text-center">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        Our customers are always happy
                    </h3>
                    <p className="max-w-xl mt-3 text-gray-300">
                        Helping our customer to grow their business with our services that help them to achieve their goals and reach larger audience 
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
                        {
                            stats.map((item:any, idx:any) => (
                                <li ref={ref} key={idx} className="w-full h-full text-center bg-gray-800 px-12 py-4 rounded-lg sm:w-auto">
                                    <h4 className="text-4xl text-white font-semibold flex items-center justify-center"><CountingNumbers className="" value={isInView?item.data:0}/>{item.sign}</h4>
                                    <p className="mt-3 text-gray-400 font-medium">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default Service_Stats