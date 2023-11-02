import { useDispatch, useSelector } from "react-redux";
import "./TaksForm.css"
import { useState } from "react";
import { createTaks, getAllTaks } from "../../redux/actions";

export default function TaksForm() {
    const IdUser = useSelector((state) => state.IdUser)
    const dispatch = useDispatch()
    const [taks, setTaks] = useState({title: "", priority: "", description: "", UserId: IdUser })
    console.log("taksform",taks);
    const handlerChange = (event) => {
        setTaks({
            ...taks,
            [event.target.name]: event.target.value
        })
    }
    const handlerCreateTaks = (event) => {
        event.preventDefault()
        if(taks.title == "" || taks.priority == "" || taks.description == "" ) return 
        console.log("entré al handlecreate");
        dispatch(createTaks(taks))
        setTaks({...taks, title: " ", priority: " ", description: " "})
        setTimeout(()=> {
            dispatch(getAllTaks(IdUser))
        }, 500)


    }
    return (
        <form className="main_form">
            <div>
                <label for="titulo">Título</label>
                <br />
                <input type="text" id="titulo" name="title" onChange={handlerChange} />
            </div>
            <div>
                <label for="descripcion">Descripción</label>
                <br />
                <textarea  onChange={handlerChange} className="limited-textarea" type="text" id="description" name="description" />
            </div>
            <div className="Priority_form">
                <span>Prioridad</span>
                <div>
                    <input  onChange={handlerChange} type="radio" id="urgente" name="priority" value="Urgent" />
                    <label for="urgente">Urgente</label>
                </div>
                <div>
                    <input  onChange={handlerChange} type="radio" id="medio" name="priority" value="Important" />
                    <label for="medio">Medio</label>
                </div>
                <div>
                    <input  onChange={handlerChange} type="radio" id="regular" name="priority" value= "Regular" />
                    <label for="regular">Regular</label>
                </div>
            </div>
            <div className="btn_add">
            <button onClick={handlerCreateTaks}>Add</button>
            </div>
                
        </form>
    )
}
