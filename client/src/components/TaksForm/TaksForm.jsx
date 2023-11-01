import "./TaksForm.css"

export default function TaksForm() {
    return (
        <form className="main_form">
            <div>
                <label for="titulo">Título</label>
                <br />
                <input type="text" id="titulo" name="titulo" />
            </div>
            <div>
                <label for="descripcion">Descripción</label>
                <br />
                <textarea className="limited-textarea" type="text" id="descripcion" name="descripcion" />
            </div>
            <div className="Priority_form">
                <span>Prioridad</span>
                <div>
                    <input type="radio" id="urgente" name="prioridad" value="urgente" />
                    <label for="urgente">Urgente</label>
                </div>
                <div>
                    <input type="radio" id="medio" name="prioridad" value="medio" />
                    <label for="medio">Medio</label>
                </div>
                <div>
                    <input type="radio" id="regular" name="prioridad" value="regular" />
                    <label for="regular">Regular</label>
                </div>
            </div>
            <div className="btn_add">
            <button>Add</button>
            </div>
                
        </form>
    )
}