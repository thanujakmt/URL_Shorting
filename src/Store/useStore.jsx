
import { create } from 'zustand'

const useLocalStore = create((set) =>({
    shortlyStorage:[],
    
    setLocalShortlyData : (data) => {
        localStorage.setItem("shortly",JSON.stringify(data))
        set({shortlyStorage:data})
    },

    fetchLocalShortlyData : () =>{
        let localShortlyData = localStorage.getItem('shortly') 
      
        if(localShortlyData === null){
            set({shortlyStorage:[]})
        }
        else{
            set({shortlyStorage:JSON.parse(localShortlyData)})
        }

    }
}))

export { useLocalStore }
