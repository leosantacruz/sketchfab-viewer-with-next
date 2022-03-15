
import { useRef, useEffect, useState } from "react"
import Viewer from "../../components/Viewer"
import Navbar from "../../components/Navbar";
import Controls from "../../components/Controls";
export default function Home() {
    const apiRef = useRef(null);
    const modelId = "18b03038a2e640cf99281e283236d614"
    const [isModelLoaded, setIsModelLoaded] = useState(false)
    const [materialList, setMaterialList] = useState()
    const nodeList = [17]
    const colorList = [
        [29, 30, 51],
        [8, 57, 113],
        [59, 131, 189],
        [152, 164, 206],
        [98, 148, 173],
        [165, 33, 25],
        [252, 211, 52],
        [44, 87, 44],
        [137, 172, 118],
    ]

    const cameraPositions = [{
        position: [-6.479316418908903, 8.257803363439916, 3.7598917102511296],
        target: [0.48703698821616737, -2.829148325604316, 0.050734239302838935]
    }, {
        position: [0.5569744776430917, -5.61205831791317, 2.2990418434542024],
        target: [0.49913122014370975, -2.4880026219073805, 0.7291715825276761]
    }]


    useEffect(() => {
        //Load the list of materials once the model is ready to be used
        if (isModelLoaded) {
            apiRef.current.getMaterialList(function (err, materials) {
                if (!err) {
                    setMaterialList(materials);
                }
            });
        }
    }, [isModelLoaded])

    return (
        <>
            <Navbar />
            <div className="bg-gray-900 min-h-screen flex flex-col">

                <div className="grid grid-cols-4 gap-6 row-auto p-5">
                    <div className="md:col-span-1 col-span-4 bg-gray-800 p-3 rounded">
                        <Controls apiRef={apiRef} materialList={materialList} nodeList={nodeList} colorList={colorList} cameraPositions={cameraPositions} />
                    </div>
                    <div className="md:col-span-3 col-span-4 bg-gray-800 p-3 rounded">
                        <Viewer apiRef={apiRef} modelId={modelId} setIsModelLoaded={setIsModelLoaded} />
                    </div>
                </div>

            </div>
        </>
    )
}