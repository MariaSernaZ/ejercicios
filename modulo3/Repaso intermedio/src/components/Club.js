import React from "react";
import PropTypes from "prop-types";

function Club(props) {
  //console.log(props.item.fa);

  const renderMembers = () => {
    //console.log(props.item.members); //Nos devuelve un array con los miembros

    return props.item.members.map((member, index) => {
      //console.log(member);
      return <li key={index}>{member}</li>;
    });
  };

  return (
    <>
      <article>
        <i className={`club_icon ${props.item.fa}`}></i>
        <h2>{props.item.name}</h2>
        <h4>Members:</h4>
        {/*Tenemos que ejecutar la función*/}
        <ul>{renderMembers()}</ul>
      </article>
    </>
  );
}

//Definimos las propTypes
Club.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    fa: PropTypes.string,
    members: PropTypes.array,
  }),
};

export default Club;
