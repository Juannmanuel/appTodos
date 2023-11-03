import { useDispatch, useSelector } from "react-redux";
import "./SelectFilter.css";
import { filterTaks } from "../../redux/actions";

export default function SelectFilter() {
  const dispatch = useDispatch();
  const taks = useSelector((state) => state.taks);
  const IdUser = useSelector((state) => state.IdUser)
  // Filtering completed and pending tasks
  const completed = taks.filter((item) => item.completed === true);
  const pending = taks.filter((item) => item.completed === false);
  // Function to handle the change in the filter criteria

  const handleChange = (event) => {
    dispatch(filterTaks(event.target.value, IdUser))
  };

  return (
    <div class="checkbox_container">
      <span>FILTER BY</span>
      <div>
        <spam style={{ color: "black" }}>Complets: {completed.length}</spam>
        <br />
        <span style={{ color: "black" }}>Pending: {pending.length}</span>
      </div>
      <div class="custom_checkbox_urgent">
        <input
          onChange={handleChange}
          type="radio"
          id="urgente"
          name="urgencia"
          value="Urgent"
        />
        <label for="urgente">Urgente</label>
      </div>
      <div class="custom_checkbox_medium">
        <input
          onChange={handleChange}
          type="radio"
          id="medio"
          name="urgencia"
          value="Important"
        />
        <label for="medio">Importante</label>
      </div>
      <div class="custom_checkbox_ligth">
        <input
          onChange={handleChange}
          type="radio"
          id="regular"
          name="urgencia"
          value="Regular"
        />
        <label for="regular">Regular</label>
      </div>
      <div class="custom_checkbox_ligth">
        <input
          onChange={handleChange}
          type="radio"
          id="todos"
          name="urgencia"
          value="all"
        />
        <label for="todos">All taks</label>
      </div>
    </div>
  );
}
