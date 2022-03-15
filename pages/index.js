
import { useRef, useEffect, useState } from "react"
import Viewer from "../components/Viewer"
import Navbar from "../components/Navbar";
import Controls from "../components/Controls";
export default function Home() {
  const apiRef = useRef(null);
  const modelId = "1c70b7e316454891a1fa38e74287f366"
  const [isModelLoaded, setIsModelLoaded] = useState(false)
  const [materialList, setMaterialList] = useState()
  const nodeList = [1, 8, 10, 0]
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
    position: [0.22250781095063338, -0.089308370416265, 2.8638240139298756],
    target: [0.2221558569363637, -0.04370469737132048, -0.03924365014719243]
  }, {
    position: [-0.0829414044011472, -0.8557563391063111, 0.6134755575423791],
    target: [0.22215585693636378, -0.043704697371320364, -0.039243650147192354]
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