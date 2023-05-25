/// <reference types="cypress" />
import React from "react";

import App from "./App.jsx";

describe("App", () => {
  beforeEach(() => localStorage.clear("users"));

  it("uses cart from localStorage", () => {
    const items = ["user1", "user2", "user3"];

    localStorage.setItem("users", JSON.stringify(items));

    cy.mount(<App />);

    cy.get(".item").should("have.length", 3);
    cy.contains(".item", "user3").should("be.visible");
  });

  it("updates localStorage after adding an item to the cart", () => {
    cy.mount(<App />);
    cy.contains(".item", "default user").should("be.visible");
    cy.contains("Add user").click();
    cy.contains(".item", "new user");

    cy.wrap(localStorage)
      .invoke("getItem", "users")
      .should("equal", JSON.stringify(["default user", "new user"]));
  });
});
