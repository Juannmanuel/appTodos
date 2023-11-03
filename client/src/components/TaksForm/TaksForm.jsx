import { useDispatch, useSelector } from "react-redux";
import "./TaksForm.css"
import { useState } from "react";
import { createTaks, getAllTaks } from "../../redux/actions";

export default function TaksForm() {
    const IdUser = useSelector((state) => state.IdUser)
    
    const dispatch = useDispatch()
    // State for handling task creation
    const [taks, setTaks] = useState({title: "", priority: "Regular", description: "", UserId: IdUser })
    // Handler function for input changes
    const handlerChange = (event) => {
        const { name, value } = event.target
        setTaks({
            ...taks,
           [name]: value
        })
    }
    // Handler function for creating a task
    const handlerCreateTaks = (event) => {
        event.preventDefault()
        if(taks.title == "" || taks.description == "" ) return alert(`Debe completar todos los campos`)
        dispatch(createTaks(taks))

        //coloque un setTime por que al llamar nuevemente todas las tareas, por un proble de sincronizacion aun no se cargaba la nueva tarea,
        //no está bien echo
        setTimeout(()=> {
            dispatch(getAllTaks(IdUser))
        }, 500)
        setTaks({title: "", priority: "Regular", description: "", UserId: IdUser });


    }
    return (
        <form className="main_form">
        <div>
            <label>Title</label>
            <br />
            <input type="text" id="titulo" name="title" onChange={handlerChange} />
        </div>
        <div>
            <label>Description</label>
            <br />
            <textarea onChange={handlerChange} className="limited-textarea" type="text" id="description" name="description" />
        </div>
        <div className="Priority_form">
            <span>Priority</span>
            <div>
                <input onChange={handlerChange} type="radio" id="urgente" name="priority" value="Urgent" />
                <label>Urgent</label>
            </div>
            <div>
                <input onChange={handlerChange} type="radio" id="medio" name="priority" value="Important" />
                <label >Medium</label>
            </div>
            <div>
                <input defaultChecked onChange={handlerChange} type="radio" id="regular" name="priority" value= "Regular" />
                <label>Regular</label>
            </div>
        </div>
        <div className="btn_add">
            <button onClick={handlerCreateTaks}>Add</button>
        </div>
    </form>
    )
}
