import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NeonicHero from "./index";

describe("NeonicHero Component", () => {
  test("renders with default props", () => {
    render(<NeonicHero />);
    expect(screen.getByText("NEXT GENERATION")).toBeInTheDocument();
    expect(screen.getByText("Build the future with stunning UI")).toBeInTheDocument();
    expect(screen.getByText("Create immersive digital experiences with our futuristic component library. Perfect for modern web applications.")).toBeInTheDocument();
    expect(screen.getByText("Get Started")).toBeInTheDocument(); // check primary button
    expect(screen.getByText("Learn More")).toBeInTheDocument();   // check secondary button
  });

  test("renders with custom props", () => {
    render(
      <NeonicHero
        title="Hello World"
        subtitle="Test Subtitle"
        description="Custom description"
        primaryButtonText="Start"
        secondaryButtonText="Info"
      />
    );

    expect(screen.getByText("Hello World")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByText("Custom description")).toBeInTheDocument();
    expect(screen.getByText("Start")).toBeInTheDocument();
    expect(screen.getByText("Info")).toBeInTheDocument();
  });

  test("calls onPrimaryButtonClick", () => {
    const handleClick = jest.fn();

    render(<NeonicHero primaryButtonText="Click Me" onPrimaryButtonClick={handleClick} />);

    const button = screen.getByText("Click Me");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });

  test("calls onSecondaryButtonClick", () => {
    const handleClick = jest.fn();

    render(<NeonicHero secondaryButtonText="Click Info" onSecondaryButtonClick={handleClick} />);

    const button = screen.getByText("Click Info");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
