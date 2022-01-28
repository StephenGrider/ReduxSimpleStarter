import { renderComponent, expect } from "../test_helper";
import App from "../../src/components/app";

describe("Ap", () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it("renders something", () => {
    expect(component).to.exist;
  });
});
