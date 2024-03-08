import './DaysMenuStyle.css'
import {collection, doc,getFirestore,getDoc,getDocs, updateDoc, addDoc, deleteDoc, setDoc} from 'firebase/firestore'
import Button from '../Commons/Button/Button'
import { useContext, useEffect, useState } from 'react'
import Translate from '../../Utils/Translate'
import statsContext from '../../Context/StatsContext'

function DaysMenu({nameDay,dayID}){
    const {setGlobalQuantity, setGlobalAverage} = useContext(statsContext)

    const [makeJoint, setMakeJoint] = useState("false")
    const [smokeJoint, setSmokeJoint] = useState("false")
    const [finishJoint, setFinishJoint] = useState("false")
    const [jointNumber, setjointNumber] = useState(0)
    const [selectedJoint, setSelectedJoint] = useState('')
    const [jointMade, setJointMade] = useState([])

    const db = getFirestore()
    const colRef = collection(db, "joint")
    const docRef = doc(collection(db, "days"), dayID)
    const smoked_joint_collection = collection(db, "smoked_joints")
    const smoked_joints_doc_ref = doc(collection(db,"smoked_joints"), "smoked_joint_doc")

    // haciendo un useeffect para traer la informacion de los porros armados
    useEffect(()=>{
        async function fetchJoints(){
            const joint_response = await getDocs(colRef)
            const joint_data = joint_response.docs.map((doc) =>({
                id: doc.id,
                ...doc.data()
            }))
            setJointMade(joint_data)
        }
        fetchJoints()
    },[])

    function updateInfo(){
        
        // Para actualizar la informacion en la coleccion
        const newData = {
            finish: finishJoint,
            make: makeJoint,
            smoke: smokeJoint
        }
        // Aca agregar un condicional de que si fuma es true, se guarda en una coleccion la informacion del porro armado

        if (makeJoint === "true"){
            const jointData = {
                day: dayID,
                quantity: jointNumber
            }

            // inserta un documento con informacion del porro armado en la coleccion
            addDoc(colRef, {...jointData})
            .then(()=>{
                console.log("La información del porro se ha actualizado correctamente")
            })
            .catch(()=>{
                console.log("Error al actualizar la información")
            })
        }

        // actualiza la informacion de la coleccion
        updateDoc(docRef, newData)
        .then(()=>{
            console.log("Información actualizada")
        })
        .catch(()=>{
            console.log("Error al actualizar")
        })
        
        // si hay un porro seleccionado, esto tiene que borrar el porro de los porros armados
        if (selectedJoint) {
            // console.log(joint_to_delete_id)
            deleteDoc(doc(collection(db, "joint"), selectedJoint))
                .then(() => {
                    console.log("Porro eliminado con la ID " + selectedJoint)
                })
                .catch(() => {
                    console.error("Error al eliminar el porro");
                });

                getDoc(smoked_joints_doc_ref)
                    .then((response)=>{
                        if(response.exists()){
                            // Esto me trae el dato de quantity de mi documento
                            const currentQuantity = response.data().quantity

                            // Incrementar quantity
                            const newQuantity = currentQuantity + 1

                            const smoked_joint_data = {
                                quantity: newQuantity
                            }
                            setDoc(doc(smoked_joint_collection, "smoked_joint_doc"),smoked_joint_data)
                            .then(()=>{
                                setGlobalQuantity(newQuantity)
                                console.log("Información de los porros fumados actualizada correctamente")
                            })
                            .catch(()=>{
                                console.log("Error al actualizar la información de la cantidad de los porros fumados")
                            })
                        }
                    })
        }

        if(dayID === "sunday"){
            // Enviar un report de la semana
            
            // Contabilizar los porros fumados
            getDoc(smoked_joints_doc_ref)
            .then((response)=>{
                if(response.exists()){
                    // Cantidad de porros fumados en la semana
                    const currentQuantity = response.data().quantity
                    
                    console.log("La cantidad de porros fumados en la semana es de "+currentQuantity)

                    // hacer un promedio de cuanto se fuma por dia
                    const averageQuantity = (currentQuantity / 7).toFixed(1)
                    setGlobalAverage(averageQuantity)
                    console.log("El promedio de porros fumados en 7 días es de "+averageQuantity+" por día")
                }
            })
            .catch(()=>{
                console.log("Error al mostrar la cantidad de porros fumados en la semana")
            })
        }
    }

    return(
        <div className='menu-super-container'>
            <h2 className='h2-menu'>{nameDay}</h2>

            <div className='menu-container'>
                <p>¿Hoy armaste?</p>

                <select value={makeJoint} name="select" id="" onChange={(e) => setMakeJoint(e.target.value)}>
                    <option value="true">SÍ</option>
                    <option value="false">NO</option>
                </select>

                <p>¿Cuántos?</p>
                <input type="number" id="numero" name="numero" min="0" max="100" step="1" onChange={(e) => setjointNumber(e.target.value)}></input>

                <p>¿Hoy fumaste?</p>

                <select value={smokeJoint} name="select" id="" onChange={(e) => setSmokeJoint(e.target.value)}>
                    <option value="true">SÍ</option>
                    <option value="false">NO</option>
                </select>

                <p>¿Lo terminaste?</p>

                <select value={finishJoint} name="select" id="" onChange={(e) => setFinishJoint(e.target.value)}>
                    <option value="true">SÍ</option>
                    <option value="false">NO</option>
                </select>

                <p>¿Cual terminaste?</p>

                <select value={selectedJoint} name="select" onChange={(e) => setSelectedJoint(e.currentTarget.value)}>
                    <option value="">Seleccione un porro</option>
                    {   
                        jointMade.map((joint) => {
                            const translatedDay = Translate(joint.day);
                            return (
                                <option key={joint.id} value={joint.id}>
                                    {translatedDay}
                                </option>
                            );
                        })
                    }
                </select>
            </div>
            
            <Button onClick={updateInfo}>SUBIR</Button>

        </div>
    )
}

export default DaysMenu