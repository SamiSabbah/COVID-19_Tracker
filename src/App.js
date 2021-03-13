import React from "react";

import { Cards, Charts, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

import coronaImage from "./images/covid-19-coronavirus.jpg";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handelCountryChange = async (country) => {
    const fetchedCountryData = await fetchData(country);

    this.setState({ data: fetchedCountryData, country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="CoronaVirues" />
        <Cards data={data} />
        <CountryPicker handelCountryChange={this.handelCountryChange} />
        <Charts data={data} country={country} />
      </div>
    );
  }
}

export default App;
