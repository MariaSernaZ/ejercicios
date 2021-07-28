import React from "react";

{
  /*Pintar el listado de estudiantes con su nombre y edad con React
Antes de pintar ¿sabrías filtrar las estudiantes por las que pertenezcan a la promo A? */
}

class App extends React.Component {
  render() {
    const students = [
      {
        promo: "A",
        name: "Sofía",
        age: 20,
      },
      {
        promo: "B",
        name: "María",
        age: 21,
      },
      {
        promo: "A",
        name: "Lucía",
        age: 22,
      },
    ];

    const filterStudents = students.filter((student) => {
      return student.promo === "A";
    });

    return (
      <div>
        <h1>Listado de estudiantes:</h1>
        {/* con este map iteramos el array de items */}
        {filterStudents.map((student) => {
          // cada return retorna un li
          return (
            <li key={student.name}>
              <h2>Nombre: {student.name}</h2>
              <p>Edad: {student.age}</p>
            </li>
          );
          // el map retorna un array de li, es decir, un listado de HTML
        })}
      </div>
    );
  }
}

export default App;
