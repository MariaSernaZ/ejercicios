import React from "react";
import Ejercicio1Loader from "./Ejercicio1Loader";
import getDataFromApi from "./ejercicio1api";

class Ejercicio1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      filterCity: "",
      filterGender: "",
      isLoading: true,
    };

    getDataFromApi().then((data) => {
      //console.log(data);
      this.setState({
        //guardamos los datos que hemos recogido del API
        users: data,
        loading: false,
      });
    });

    this.handleFilterCity = this.handleFilterCity.bind(this);
    this.handleFilterGender = this.handleFilterGender.bind(this);
  }

  handleFilterCity(ev) {
    this.setState({
      filterCity: ev.target.value,
    });
  }

  handleFilterGender(ev) {
    this.setState({
      filterGender: ev.target.value,
    });
  }

  renderSeries() {
    return this.state.users
      .filter((user) => {
        return user.city
          .toLowerCase()
          .includes(this.state.filterCity.toLowerCase());
      })
      .filter((user) => {
        return user.gender
          .toLowerCase()
          .includes(this.state.filterGender.toLowerCase());
      })
      .map((user) => {
        return (
          <li key={user.name}>
            <section>
              <h3>Nombre: {user.name}</h3>
              <img src={user.image} alt={user.name} />
              <ul>
                <li>Género: {user.gender}</li>
                <li>Email: {user.email}</li>
                <li>Nick: {user.username}</li>
                <li>Ciudad: {user.city}</li>
                <li>País: {user.country}</li>
                <li>Edad: {user.age}</li>
              </ul>
            </section>
          </li>
        );
      });
  }

  render() {
    return (
      <section className="section-loading">
        {/*this.state.loading ? (
          <Ejercicio1Loader />
        ) : (
          <>
            <input
              type="text"
              onChange={this.handleFilterCity}
              placeholder="filter by city"
            />
            <input
              type="text"
              onChange={this.handleFilterGender}
              placeholder="filter by gender"
            />
            <ul className="section-location">{this.renderSeries}</ul>
          </>
        )*/}
      </section>
    );
  }
}

export default Ejercicio1;
