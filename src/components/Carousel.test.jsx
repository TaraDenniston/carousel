import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import { describe, it, expect } from "vitest";

describe('Carousel', () => {
  it("renders without crashing", function() {
    render(<Carousel />);
  });

  it("matches snapshot", function() {
    const { asFragment } = render(<Carousel />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("works when you click on the right arrow", function() {
    const { queryByTestId, queryByAltText } = render(<Carousel />);

    // expect the first image to show, but not the second
    expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
    expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

    // move forward in the carousel
    const rightArrow = queryByTestId("right-arrow");
    fireEvent.click(rightArrow);

    // expect the second image to show, but not the first
    expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
    expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
  });

  it("works when you click on the left arrow", function() {
    const { queryByTestId, queryByAltText } = render(<Carousel />);
    const rightArrow = queryByTestId("right-arrow");
    const leftArrow = queryByTestId("left-arrow");

    // move forward and then backward in the carousel
    fireEvent.click(rightArrow);
    fireEvent.click(leftArrow);

    // expect the first image to show, but not the second
    expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
    expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
  });
  
  it("hides and shows arrows appropriately", function() {
    const { queryByTestId } = render(<Carousel />);
    const leftArrow = queryByTestId("left-arrow");
    const rightArrow = queryByTestId("right-arrow");

    // when the first image is showing, expect the left arrow to be hidden and the right arrow to not be hidden 
    expect(queryByTestId("left-arrow")).toHaveClass("hidden");
    expect(queryByTestId("right-arrow")).not.toHaveClass("hidden");

    // move to the second image
    fireEvent.click(rightArrow);

    // when the second image is showing, expect both arrows to not be hidden
    expect(queryByTestId("left-arrow")).not.toHaveClass("hidden");
    expect(queryByTestId("right-arrow")).not.toHaveClass("hidden");

    // move to the last image
    fireEvent.click(rightArrow);

    // when the last image is showing, expect the left arrow to not be hidden and the right arrow to be hidden
    expect(queryByTestId("left-arrow")).not.toHaveClass("hidden");
    expect(queryByTestId("right-arrow")).toHaveClass("hidden");
  });
});