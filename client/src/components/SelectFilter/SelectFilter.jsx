import { useDispatch, useSelector } from "react-redux"
import "./SelectFilter.css"
import { filtroPorEstadoCompleto, filtroPorMedia, filtroPorRegular, filtroPorUrgencia } from "../../redux/actions"

export default function SelectFilter () {
    const dispatch = useDispatch()
    const taks = useSelector((state) => state.taks)
    const completed = taks.filter((item) => item.completed === true)
    const pending = taks.filter((item) => item.completed === false)



    return (
        <div class="checkbox_container">
            <span>FILTER BY</span>
        <div><button onClick={filterComplets} style={{color: "black"}}>Complets{" "} {completed.length}</button><button style={{color: "black"}}>Pending{" "} {pending.length}</button></div>
        <div class="custom_checkbox_urgent">
            <input type="radio" id="urgente" name="urgencia" value="urgente"/>
            <label for="urgente">Urgente</label>
        </div>
        <div class="custom_checkbox_medium">
            <input type="radio" id="medio" name="urgencia" value="medio"/>
            <label for="medio">Medio</label>
        </div>
        <div class="custom_checkbox_ligth">
            <input type="radio" id="regular" name="urgencia" value="regular"/>
            <label for="regular">Regular</label>
        </div>
    </div>
    )
}