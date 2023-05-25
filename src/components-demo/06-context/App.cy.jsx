import React from "react";
import { ThemeContext } from "./context";
import { Toolbar } from "./Toolbar.jsx";

it("does not provide the context", () => {
  cy.mount(<Toolbar />);
  cy.contains("button", "light").should("be.visible");
});

it("Mock Context passes given value", () => {
  cy.mount(
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );

  cy.contains("button", "dark").should("be.visible");
});
