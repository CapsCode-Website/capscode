import React from "react";
import "./style.css";
import { SpinnerRoundOutlined } from "spinners-react";

class Loader extends React.Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <SpinnerRoundOutlined
          size={90}
          thickness={78}
          speed={131}
          color="orange"
        />
      </div>
    );
  }
}

export default Loader;
