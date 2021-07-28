import React from "react";
import Mediacard from './Mediacard'
import '../stylesheets/App.css';
import foto from '../images/teambuilding.png';
//import icon from '';

function App(props) {
    console.log(props);
  
  return (
    <Mediacard 
    name= 'María'
    date= '01 de junio 2021'
    foto= {foto}
    text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    likes= '37'
    />
    
  );
}

export default App;
