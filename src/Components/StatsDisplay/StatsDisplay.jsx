import './StatsDisplayStyle.css'
import statsContext from '../../Context/StatsContext'
import { useContext } from 'react'


function StatsDisplay(){
    const {globalAverage, globalQuantity} = useContext(statsContext)

    return(
        <div className='stats-display-container'>
            <h1>ESTADISTICAS</h1>
            <p>Porros por semana: {globalQuantity}</p>
            <p>Porros por día: {globalAverage}</p>
        </div>
    )
}

export default StatsDisplay