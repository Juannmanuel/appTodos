import "./SelectFilter.css"

export default function SelectFilter () {

    return (
        <div class="checkbox_container">
            <span>FILTER BY</span>
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