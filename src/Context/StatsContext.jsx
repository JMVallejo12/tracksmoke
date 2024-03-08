import { createContext, useState } from "react";

const statsContext = createContext([])

export function StatsValueProvider({children}){
    const [globalQuantity, setGlobalQuantity] = useState(0)
    const [globalAverage, setGlobalAverage] = useState(0)

    return(
        <statsContext.Provider value={{setGlobalQuantity, setGlobalAverage, globalAverage, globalQuantity}}>
            {children}
        </statsContext.Provider>
    )
}

export default statsContext