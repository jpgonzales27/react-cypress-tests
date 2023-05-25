import React from "react";
import Stepper from "./Stepper";

describe("<Stepper />", () => {
  /**
   * To mount a React component, import the component into your
   * spec and pass the component to the cy.mount command
   */
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Stepper />);
  });

  it("stepper should default to 0", () => {
    cy.mount(<Stepper />);
    // cy.get("span").should("have.text", "0");
    cy.get("[data-cy=counter]").should("have.text", "0");
  });

  /**
   * Passing Props to Components
   *
   * You can pass props to a component by setting them on the JSX passed into cy.mount()
   */
  it('supports an "initial" prop to set the value', () => {
    cy.mount(<Stepper initial={100} />);
    cy.get("[data-cy=counter]").should("have.text", "100");
  });

  /**
   * Testing Interactions
   */

  it("when the increment button is pressed, the counter is incremented", () => {
    cy.mount(<Stepper />);
    cy.get("[data-cy=increment]").click();
    cy.get("[data-cy=counter]").should("have.text", "1");
  });

  it("when the decrement button is pressed, the counter is decremented", () => {
    cy.mount(<Stepper />);
    cy.get("[data-cy=decrement]").click();
    cy.get("[data-cy=counter]").should("have.text", "-1");
  });

  /**
   * Testing React Components with Events
   *
   * A spy is a special function that keeps track of how many times it was called
   * and any parameters that it was called with.
   *
   * Pass a Cypress spy to an event prop and validate it was called
   */
  it("clicking + fires a change event with the incremented value", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");
    cy.mount(<Stepper onChange={onChangeSpy} />);
    cy.get("[data-cy=increment]").click();
    cy.get("@onChangeSpy").should("have.been.calledWith", 1);
  });
});
