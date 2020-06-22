import React from "react";

class App extends React.Component {
  /**
   * constructor
   *
   * @object  @props  parent props
   * @object  @state  component state
   */
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */
  componentDidMount() {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          isLoaded: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) return <div>Loading Data...</div>;
    let a = 0;
    return (
      <div className="App">
        <h1 id="title">Coronavirus Global Live Data</h1>
        <h4 id="global"><span role="img" aria-label="sheep">🥺 New Confirmed : {items.Global.NewConfirmed} | 🥺 Total Confirmed : {items.Global.TotalConfirmed} | 😭 New Deaths : {items.Global.NewDeaths} | 😭 Total Deaths : {items.Global.TotalDeaths} | 😃 New Recoverd : {items.Global.NewRecovered} | 😃 Total Recoverd : {items.Global.TotalRecovered} </span></h4>
        <div id ="table">
        <table id="data">
          <thead>
            <th>No.</th>
            <th>Country</th>
            <th>Country Code</th>
            <th>New Confirmed</th>
            <th>Confirmed</th>
            <th>New Deaths</th>
            <th>Total Deaths</th>
            <th>New Recoverd</th>
            <th>Total Recoverd</th>
            <th>Date</th>
          </thead>
          <tbody>
            {items.Countries.map((item) => (
              <tr key={item.id =a}>
                <td>{a=a+1}</td>
                <td>{item.Country}</td>
                <td>{item.CountryCode}</td>
                <td>{item.NewConfirmed}</td>
                <td>{item.TotalConfirmed}</td>
                <td>{item.NewDeaths}</td>
                <td>{item.TotalDeaths}</td>
                <td>{item.NewRecovered}</td>
                <td>{item.TotalRecovered}</td>
                <td>{new Date(item.Date).toUTCString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default App;
