import { render } from "@testing-library/react";
import Card from "./Card";
import { describe, it } from "vitest";

describe('Card', () => {
  it("renders without crashing", function() {
    render(<Card />);
  });

  it("matches snapshot", function() {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });
});