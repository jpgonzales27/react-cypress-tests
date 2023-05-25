import Autocomplete from "./autocomplete";
import countries from "./countries";

describe("Test the autocomplete functionality", () => {
  beforeEach(() => {
    cy.mount(<Autocomplete countries={countries} />);
  });

  it("check everything is working in ui", () => {
    cy.get('[data-cy="heading"]').contains("Search your country:");
    cy.get('input[type="text"]').should("have.value", "");
    cy.get('[data-cy="suggestion-list"]').should("not.exist");
  });

  it("check filter is working", () => {
    cy.get('input[type="text"]').type("bo");
    cy.get('[data-cy="suggestion-list"]').should("be.visible").as("suggestList");
    cy.get("@suggestList").should("have.length", 1);
  });
});
