import React from "react";

class Spinner extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui active dimmer">
          <div className="ui big text loader">
            Wait while the page is Loading
          </div>
        </div>
      </div>
    );
  }
}

export default Spinner;
