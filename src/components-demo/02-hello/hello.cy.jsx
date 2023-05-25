// example from https://reactjs.org/docs/testing-recipes.html
import React from "react";
import { Hello } from "../demo/Hello";

// shows multiple mount commands
it("renders with or without a name", () => {
  cy.mount(<Hello />);
  cy.contains("Hey, stranger").should("be.visible");

  cy.mount(<Hello name="Juan" />);
  cy.contains("h1", "Hello, Juan!").should("be.visible");

  cy.mount(<Hello name="Dani" />);
  cy.contains("h1", "Hello, Dani!").should("be.visible");
});

// data-driven testing
const names = ["Jenny", "Margaret"];

names.forEach((name) => {
  it(`greets ${name}`, () => {
    cy.mount(<Hello name={name} />);
    cy.contains("h1", `Hello, ${name}!`).should("be.visible");
  });
});
