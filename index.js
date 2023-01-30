import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }
  renderContent() {
    if (this.state.lat && !this.state.errorMessage) {
      return <SeasonDisplay />;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Error : {this.state.errorMessage}</div>;
    }
    return (
      <div>
        <Spinner />{" "}
      </div>
    );
  }
  render() {
    return <div> {this.renderContent()} </div>;
  }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
