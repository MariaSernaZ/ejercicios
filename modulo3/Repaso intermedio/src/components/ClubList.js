import React from "react";
import Club from "./Club";

function ClubList(props) {
  //Lo guardamos en una const para poder usarlo. Con map vamos sacando cada item
  const clubItems = props.list.map((item, index) => {
    //console.log(item, index);
    return (
      <li key={index}>
        {/*<Club name={item.name} icon={item.fa} />*/}
        <Club item={item} />
      </li>
    );
  });
  return <ul>{clubItems}</ul>;
}

export default ClubList;
