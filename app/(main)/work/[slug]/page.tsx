import { Button } from "@/components/ui/button";
import { AboutProject } from "../_component/AboutProject";
import { AboutProjectsm } from "../_component/AboutProjectsm";

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <section className="flex gap-20 min-h-screen max-w-6xl mx-auto px-5">
            <div className="flex flex- gap-10">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-5">
                            <h2>Gitness</h2>
                            <p>Open-source code hosting & pipeline engine</p>
                        </div>
                        <Button className="rounded-full text-cyan-800 border-cyan-950 w-fit" variant="outline" >Visit Gitness</Button>
                    </div>
                    <div className="flex md:hidden">
                        <AboutProjectsm />
                    </div>

                    <div className="flex flex-col gap-5">
                        <div>
                            <h4 className="text-xl font-semibold mb-2">About the project</h4>
                            <p>
                                Gitness, by Harness, is an open-source code hosting and CI/CD platform. It features robust security, one-click migration from platforms like GitHub, and delivers 4x faster pipeline execution with versatile templates. <br /><br />

                                Our journey with Gitness was intense and rewarding. With a tight deadline of just seven weeks to transform an idea into a fully operational website for a conference showcase, every moment counted. The initial four weeks were dedicated to branding and designing both the homepage and the documentation portal. Our efforts culminated in a design that received immediate approval, with no revisions needed. The subsequent three weeks saw us diving deep into creating interactive animations using Rive and developing a high-performance, visually captivating landing page. We were able to complete all the work a couple of days ahead of the deadline, allowing ample time for polishing and making any necessary copy changes. <br /><br />

                                <div>
                                    <blockquote>
                                    Pixel Point's recipe for success is a blend of careful planning with effective expectation management, all while benefiting from the client's trust in our expertise. The resulting Gitness website stands as a testament to what modern development platforms should embody: sleek, visually striking, yet minimalistic and highly functional. It targets the forward-thinking developers of tomorrow, equipping them with the tools they need to excel.
                                    </blockquote><br /><br />
                                </div>

                                Pixel Point's recipe for success is a blend of careful planning with effective expectation management, all while benefiting from the client's trust in our expertise. The resulting Gitness website stands as a testament to what modern development platforms should embody: sleek, visually striking, yet minimalistic and highly functional. It targets the forward-thinking developers of tomorrow, equipping them with the tools they need to excel.
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="text-lg font-semibold mb-2">Key Results and Outcomes</h4>
                            <ol className="list-decimal px-4 flex flex-col gap-2">
                                <li>A beautiful landing page</li>
                                <li>PPC generate $230k revenue</li>
                                <li>Seo helps to keep traffic</li>
                                <li>We handle all the social media channels</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="hidden md:flex h-fit">
                    <AboutProject />
                </div>
            </div>
        </section>
    )
}