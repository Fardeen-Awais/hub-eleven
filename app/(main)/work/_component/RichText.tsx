import React from "react"

const RichText = {
    list: {
        // Ex. 1: customizing common list types
        bullet: ({ children }: any) => <ul className="mt-xl list-disc px-5">{children}</ul>,
        number: ({ children }: any) => <ol className="mt-lg">{children}</ol>,

        // Ex. 2: rendering custom lists
        checkmarks: ({ children }: any) => <ol className="m-auto text-lg">{children}</ol>,
    },
}

export default RichText