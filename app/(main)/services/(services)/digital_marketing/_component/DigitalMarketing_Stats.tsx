import { MenuSquare } from "lucide-react"

const DigitalMarketing_Stats = () => {

    const stats = [
        {
            data: "35K",
            title: "Customers"
        },
        {
            data: "40+",
            title: "Countries"
        },
        {
            data: "30M+",
            title: "Total revenue"
        },
    ]

    return (
        <section className="py-28 bg-gray-900 w-full mx-auto flex items-center">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        Our customers are always happy
                    </h3>
                    <p className="max-w-xl mt-3 text-gray-300">
                        Helping our customer to grow their business with digital marketing services that help them to achieve their goals and reach larger audience 
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="w-full h-full text-center bg-gray-800 px-12 py-4 rounded-lg sm:w-auto">
                                    <h4 className="text-4xl text-white font-semibold">{item.data}</h4>
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
export default DigitalMarketing_Stats