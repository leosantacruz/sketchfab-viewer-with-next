
import Script from "next/script"
import { useEffect, useState } from "react"
export default function Viewer({ apiRef, modelId, setIsModelLoaded }) {
    useEffect(
        () => {
            let iframe = document.getElementById("api-frame");
            let client = new window.Sketchfab(iframe);
            client.init(modelId, {
                autostart: 1,
                navigation: 0,
                ui_controls: 0,
                ui_animations: 0,
                ui_general_controls: 0,
                ui_infos: 0,
                ui_loading: 0,
                ui_watermark: 0,
                success: callback => {
                    apiRef.current = callback
                    callback.addEventListener('viewerready', function () {
                        setIsModelLoaded(true)
                    });

                },
            });
        },
        []
    );

    return (
        <>
            <Script src="https://static.sketchfab.com/api/sketchfab-viewer-1.10.1.js" strategy="beforeInteractive"></Script>
            <iframe title="Sketchfab Viewer" src="" id="api-frame" width="100%"></iframe>
        </>
    )
}