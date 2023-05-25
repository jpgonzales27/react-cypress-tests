/// <reference types="cypress" />
import React from "react";

import { SimpleContext } from "./simple-context";
import { SimpleComponent } from "./simple-component.jsx";

// testing components that use Context React API
// https://reactjs.org/docs/context.html
describe("Enzyme", () => {
  context("setContext", () => {
    it("does not provide the context", () => {
      cy.mount(<SimpleComponent />);
      cy.contains("context not set").should("be.visible");
    });

    it("surround the component with the real provider but set the value prop to whatever the test requires", () => {
      // surround the component with the real provider but
      // set the value prop to whatever the test requires
      cy.mount(
        <SimpleContext.Provider value={{ name: "test context" }}>
          <SimpleComponent />
        </SimpleContext.Provider>
      );

      cy.contains("test context").should("be.visible");
    });
  });
});
