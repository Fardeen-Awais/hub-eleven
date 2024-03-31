import { Button } from "@/components/ui/button";
import { AboutProject } from "../_component/AboutProject";
import { AboutProjectsm } from "../_component/AboutProjectsm";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { PortableText } from '@portabletext/react'
import RichText from "../_component/RichText";

export const revalidate = 0  // It will revalidate in an hour 

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const encodedSlug = encodeURIComponent(slug);
    const caseStudies = await client.fetch(`*[_type == "case-study" && slug.current == "${encodedSlug}"][0]`);
    return (
        <section className="flex gap-20 min-h-screen max-w-6xl mx-auto px-5">
            <div className="flex flex- gap-10">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-5">
                            <h2>{caseStudies.title}</h2>
                            <p>{caseStudies.description}</p>
                        </div>
                        <Link href={caseStudies.link}>
                            <Button className="rounded-full text-cyan-800 border-cyan-950 w-fit" variant="outline" >Visit {caseStudies.title}</Button>
                        </Link>
                    </div>

                    <div className="flex md:hidden">
                        <AboutProjectsm title={caseStudies.title} serviceprovided={caseStudies.services} techprovided={caseStudies.tech} />
                    </div>

                    <div className="flex flex-col gap-5">

                        <PortableText
                            value={caseStudies.body}
                            components={RichText}
                        />
                    </div>
                </div>

                <div className="hidden md:flex h-fit">
                    <AboutProject title={caseStudies.title} serviceprovided={caseStudies.services} techprovided={caseStudies.tech} />
                </div>
            </div>
        </section>
    )
}

