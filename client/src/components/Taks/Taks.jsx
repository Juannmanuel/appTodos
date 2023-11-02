import "./Taks.css";
import {
  AiFillDelete,
  AiFillCheckCircle,
  AiTwotoneEdit,
  AiOutlineCheck,
} from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { deleteTaks, getAllTaks, updateTaks } from "../../redux/actions";
import { useState } from "react";

export default function Taks() {
  const [showInputs, setShowInputs] = useState(false)
  const taks = useSelector((state) =>
    state.taks.filter((item) => item.completed === false)
  );
  const completedTaks = useSelector((state) =>
    state.taks.filter((item) => item.completed === true)
  );
  

  const IdUser = useSelector((state) => state.IdUser);
  const dispatch = useDispatch();
  const DinamiClassName = (priority) => {
    if (priority === "Urgent") {
      return "info_urgent";
    } else if (priority === "Important") {
      return "info_medium";
    } else if (priority === "Regular") {
      return "info_regular";
    }
  };
  const handleCompletTodo = (id) => {
    const body = taks.find((item) => item.id == id);
    body.completed = true;
    console.log(body, "body antes de mandarlo");
    dispatch(updateTaks(id, body));
    setTimeout(() => {
      dispatch(getAllTaks(IdUser));
    }, 500);
  };
  const handleUpdateTodo = (index) => {

  };
  const handleDeleteTodo = (id) => {
    dispatch(deleteTaks(id))
    setTimeout(()=> {
      dispatch(getAllTaks(IdUser))

    },250)
  }
  return (
    <div className="main_tarjeta">
      {!taks.length ? (
        <div className="tarjeta">No hay tareas pendientes</div>
      ) : (
        taks?.map((item, index) => {
          return (
            <div className="tarjeta" key={index}>
              <div className={DinamiClassName(item.priority)}>
                <h3 style={{ margin: "0px", padding: "0px" }}>{item.title}</h3>
                <p style={{ margin: "1px", padding: "0px" }}>
                  {item.description}
                </p>
              </div>
              <div className="acciones">
                <AiFillDelete
                  title="Delete"
                  onClick={() => handleDeleteTodo(item.id)}
                  className="icon_delete"
                />
                <AiTwotoneEdit
                  title="Edit"
                  className="icon_edit"
                  onClick={() => handleUpdateTodo(index)}
                />
                <AiFillCheckCircle
                  title="Completed"
                  onClick={() => handleCompletTodo(item.id)}
                  className="icon_check"
                />
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
