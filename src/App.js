import {useState} from 'react';
import './App.css';


function App() {
  const [tareas, actualizarTareas] =useState([]);
  const [contador, actualizarContador]=useState(0);
  const [tareasCompletadas, actualizarTareasCompletadas]=useState([]);
  const [contadorCompletadas, actualizarContadorCompletadas]=useState(0);

  
/* ----- AÑADIR TAREA  ----- */
function anyadirTarea(nuevaTarea){
  actualizarTareas([...tareas, nuevaTarea]); //actualizo las tareas del estado
  actualizarContador(contador+1);
}

/* ----- COMPLETAR TAREA  ----- */
function completarTarea(tareaCompletada){
  //let index = tareasCompletadas.indexOf(tareaCompletada);
  //tareaCompletada.splice(index,1);
  actualizarTareasCompletadas([...tareasCompletadas,tareaCompletada]);
  actualizarContadorCompletadas(contadorCompletadas+1);
}

/* ----- ELIMINAR TAREA  ----- */
function eliminarTarea(tarea){
  let index = tareas.indexOf(tarea);
  tareas.splice(index,1);
  actualizarTareas([...tareas]);

}

/* ----- MODIFICAR TAREA  ----- */
function modificarTarea(tarea){
  let index = tareas.indexOf(tarea);
  let prompt = window.prompt("Modifica esta tarea:");
  tareas[index]=prompt;
  actualizarTareas([...tareas]);
}


  return (
    <div className="App">
      
      <h1>LISTA DE TAREAS</h1> 
      <p>Has añadido {contador} tareas en total ... ánimo</p>
      <input type="text" id="nuevaTarea" placeholder="Introduce tu nueva tarea"></input>
      <button className="btnTarea" onClick={()=>anyadirTarea(document.getElementById('nuevaTarea').value)}> Añadir Tarea </button>
      {
        // esto recorre el array de tareas y en cada vuelta añade la tarea
        tareas.map(tarea=>
          <div className='tarea'>
            
            <li id="liTarea" key={tarea}> {tarea} 
                  <button onClick={()=>modificarTarea(tarea)} className="btn"> Modificar </button>
                  <button onClick={()=>completarTarea(tarea)} className="btn"> Completar </button>
                  <button onClick={()=>eliminarTarea(tarea)} className="btn" > Eliminar </button> 
            </li>
            {/* <p onClick={()=>eliminarTarea(tarea)}>eliminar</p> */}
          </div>
          )
      }
      {console.log("CORTADOR COMLETADASssssss: "+tareas.length)}
      <p> Has completado {contadorCompletadas+tareasCompletadas.length} tareas de {contador}. </p>
      <p> Ohh!! has eliminado {contador-tareas.length} tareas de {contador}. </p>
    </div>
  );
}

export default App;
