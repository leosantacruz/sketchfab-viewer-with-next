
import { useRef, useEffect, useState } from "react"
import Viewer from "../components/Viewer"
import Navbar from "../components/Navbar";
import Controls from "../components/Controls";
export default function Home() {
  const apiRef = useRef(null);
  const modelId = "1c70b7e316454891a1fa38e74287f366"
  const [isModelLoaded, setIsModelLoaded] = useState(false)
  const [materialList, setMaterialList] = useState()

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
          <div className="col-span-1 bg-gray-800 p-3 rounded">
            <Controls apiRef={apiRef} materialList={materialList} />
          </div>
          <div className="col-span-3 bg-gray-800 p-3 rounded">
            <Viewer apiRef={apiRef} modelId={modelId} setIsModelLoaded={setIsModelLoaded} />
          </div>
        </div>

      </div>




    </>
  )
}