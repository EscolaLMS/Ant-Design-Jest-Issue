import React from "react";

import ReactDOM from "react-dom";
import Component from "./index";

describe("Component with ant", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Component />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
