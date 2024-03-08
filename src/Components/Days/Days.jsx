import './Daystyle.css'
import DaysButton from '../DaysButtton/DaysButton'
import DaysMenu from '../DaysMenu/DaysMenu'
import { useState } from 'react'
import Button from '../Commons/Button/Button'


function Days(){
    const [showMenuLunes, setShowMenuLunes] = useState(false)
    const [showMenuMartes, setShowMenuMartes] = useState(false)
    const [showMenuMiercoles, setShowMenuMiercoles] = useState(false)
    const [showMenuJueves, setShowMenuJueves] = useState(false)
    const [showMenuViernes, setShowMenuViernes] = useState(false)
    const [showMenuSabado, setShowMenuSabado] = useState(false)
    const [showMenuDomingo, setShowMenuDomingo] = useState(false)


    return(
        
        <div className='days-container'>
            <div className='days-left'>
                <div className='monday-container'>
                    <DaysButton handleClick={()=> {setShowMenuLunes(true)}}>LUNES</DaysButton>
                    
                </div>

                <div className='tuesday-container'>
                    <DaysButton handleClick={()=> {setShowMenuMartes(true)}}>MARTES</DaysButton>
                    
                </div>

                <div className='wensday-container'>
                    <DaysButton handleClick={()=> {setShowMenuMiercoles(true)}}>MIERCOLES</DaysButton>
                    
                </div>

                <div className='thursday-container'>
                    <DaysButton handleClick={()=> {setShowMenuJueves(true)}}>JUEVES</DaysButton>
                    
                </div>

                <div className='friday-container'>
                    <DaysButton handleClick={()=> {setShowMenuViernes(true)}}>VIERNES</DaysButton>
                    
                </div>

                <div className='saturday-container'>
                    <DaysButton handleClick={()=> {setShowMenuSabado(true)}}>SABADO</DaysButton>
                    
                </div>

                <div className='sunday-container'>
                    <DaysButton handleClick={()=> {setShowMenuDomingo(true)}}>DOMINGO</DaysButton>
                    
                </div>
            </div>
            

            <div className='days-right'>
                {
                showMenuLunes && <DaysMenu nameDay={"LUNES"} dayID={"monday"}/>
                }
                        {showMenuLunes && <Button onClick={()=>{setShowMenuLunes(false)}}>CERRAR</Button>}

                {
                        showMenuMartes && <DaysMenu nameDay={"MARTES"} dayID={"tuesday"}/>
                }
                    {showMenuMartes && <Button onClick={()=>{setShowMenuMartes(false)}}>CERRAR</Button>}

                {
                        showMenuMiercoles && <DaysMenu nameDay={"MIERCOLES"} dayID={"wensday"}/>
                }
                    {showMenuMiercoles && <Button onClick={()=>{setShowMenuMiercoles(false)}}>CERRAR</Button>}
                {
                        showMenuJueves && <DaysMenu nameDay={"JUEVES"} dayID={"thursday"}/>
                }
                    {showMenuJueves && <Button onClick={()=>{setShowMenuJueves(false)}}>CERRAR</Button>}
                {
                        showMenuViernes && <DaysMenu nameDay={"VIERNES"} dayID={"friday"}/>
                }
                    {showMenuViernes && <Button onClick={()=>{setShowMenuViernes(false)}}>CERRAR</Button>}
                {
                        showMenuSabado && <DaysMenu nameDay={"SABADO"} dayID={"saturday"}/>
                }
                    {showMenuSabado && <Button onClick={()=>{setShowMenuSabado(false)}}>CERRAR</Button>}
                {
                        showMenuDomingo && <DaysMenu nameDay={"DOMINGO"} dayID={"sunday"}/>
                }
                    {showMenuDomingo && <Button onClick={()=>{setShowMenuDomingo(false)}}>CERRAR</Button>}
                
            </div>

        </div>
    )
}

export default Days