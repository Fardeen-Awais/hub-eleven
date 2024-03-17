import TalkNowBtn from "../../_component/_subcomponents/TalkNowBtn"

const About_Action = () => {
    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-xl md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Build the future with us
                    </h3>
                    <p className="mt-3 text-gray-600">
                        Let's grow your business together with our experience team. We will help you to make your business grow and digitalize with our cost-effective plans.
                    </p>
                </div>
                <div className="flex gap-3 items-center mt-4 md:justify-center">
                    <TalkNowBtn />
                </div>
            </div>
        </section>
    )
}
export default About_Action