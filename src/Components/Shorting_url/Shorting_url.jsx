
import Subcomponent from "./Subcomponent"
import { useLocalStore } from "../../Store/useStore"
import { useEffect } from "react"

function Shorting_url(){

    const {shortlyStorage,fetchLocalShortlyData} = useLocalStore()

    useEffect(() =>{
        fetchLocalShortlyData()
    },[])

    return(
        <>
            <div className=" bg-light_blue w-full flex flex-col justify-center items-center min-h-[0px] p-10 max-h-[400px]">
                <div className=" w-[100%] md:w-[60%] mt-10 max-h-[220px] min-h-[0px] overflow-y-auto flex flex-col-reverse">
                    {
                       shortlyStorage.map((urlData, index) =>(
                        <Subcomponent key={index} destination_url = {urlData.destination_url} short_url={urlData.short_url} />
                       )) 
                    }
                </div>
            </div>
        </>
    )
}

export default Shorting_url
