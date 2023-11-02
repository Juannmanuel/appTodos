import "./Taks.css";
import {
  AiFillDelete,
  AiFillCheckCircle,
  AiTwotoneEdit,
  AiOutlineCheck,
} from "react-icons/ai";
import { useSelector } from "react-redux";

export default function Taks() {
  const taks = useSelector((state) => state.taks)

  const DinamiClass = (priority) => {
    if (priority === "Urgent") {
      return "info_urgent";
    } else if (priority === "Important") {
      return "info_medium";
    } else if (priority === "Regular") {
      return "info_regular";
    }
  };

  return (
    <div className="main_tarjeta">
      { !taks.length ? <div className="tarjeta" >No hay tareas pendientes</div> : taks?.map((item, index) => {
        return (
          <div className="tarjeta" key={index}>
            <div className={DinamiClass(item.priority)}>
              <h3 style={{ margin: "0px", padding: "0px" }}>{item.title}</h3>
              <p style={{ margin: "1px", padding: "0px" }}>
                {item.description}
              </p>
            </div>
            <div className="acciones">
              <AiFillDelete
                title="Delete"
                onClick={() => handleDeleteTodo(index)}
                className="icon_delete"
              />
              <AiTwotoneEdit
                title="Edit"
                className="icon_edit"
                onClick={() => handleUpdateTodo(index)}
              />
              <AiFillCheckCircle
                title="Completed"
                onClick={() => handleCompletTodo(index)}
                className="icon_check"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
