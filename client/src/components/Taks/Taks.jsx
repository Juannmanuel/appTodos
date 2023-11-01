import "./Taks.css";

export default function Taks() {
  Taks = [
    {
      title: "Titulo de la tarea",
      description: "Descripción de la tarea",
      active: false,
    },
    {
      title: "Titulo de la tarea",
      description: "Descripción de la tarea",
      active: false,
    },
    {
        title: "Titulo de la tarea",
        description: "Descripción de la tarea",
        active: false,
      },
  ];
  return (
    <div className="main_tarjeta">
      {Taks.map((item) => {
        return  <div className="tarjeta">
        <div className="info">
        <h3 style={{ margin: "0px", padding: "0px" }}>{item.title}</h3>
        <p style={{ margin: "1px", padding: "0px" }}>{item.description}</p>
      </div>
      <div className="acciones">
        <span className="icono">E</span>
        <span className="icono">E</span>
        <span className="icono">C</span>
      </div>
      </div>
      })}
     </div>
  );
}
