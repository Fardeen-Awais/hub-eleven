'use client'
import { useEffect } from "react";

import Cal, { getCalApi } from "@calcom/embed-react";

export default function Meeting({MeetingLink}:any) {
    useEffect(() => {
        (async function () {
            const Cal = await getCalApi();
            Cal("ui", {
                theme: "light",
                hideEventTypeDetails: false,
                // cssVarsPerTheme: {
                //     light: {
                //         "cal-brand": "#a5f3fc",
                //         "cal-text": "#78350f",
                //         "cal-text-emphasis": "#52525b",
                //         "cal-border-emphasis": "#d946ef",
                //         "cal-text-error": "red",
                //         "cal-border": "#bef264",
                //         "cal-border-default": "#059669",
                //         "cal-border-subtle": "#86198f",
                //         "cal-border-booker": "#f43f5e",
                //         "cal-text-muted": "#0369a1",
                //         "cal-bg-emphasis": "#5b21b6"
                //         // More CSS variables are defined here
                //         // https://github.com/calcom/cal.com/blob/b0ca7dae1a17f897e34b83c990f30ab65f615ee0/packages/config/tailwind-preset.js#L69
                //     },
                //     dark: {
                //         // Set the similar variables as in light theme but for dark mode.
                //     }
                // }
            });
        })();
    }, []);
    return (
        <Cal calLink={MeetingLink} style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: 'month_view' }}
        />
    );
}
