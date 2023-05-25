import { Button } from "./Button";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

describe("Button.cy.ts", () => {
  it("Renders", () => {
    cy.mount(<Button>Test</Button>);
  });

  it("Should support onClick", () => {
    cy.mount(<Button onClick={cy.spy().as("onClick")}>Click Me</Button>);

    cy.get("button").click();

    cy.get("@onClick").should("have.been.called");
  });
});
