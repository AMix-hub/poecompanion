import { render, screen } from "@testing-library/react";
import BuildCard from "@/components/BuildCard";
import type { Build } from "@/types";

const mockBuild: Build = {
  id: "test-build",
  name: "Cyclone Slayer",
  characterClass: "Duelist",
  ascendancy: "Slayer",
  league: "Current",
  difficulty: "beginner",
  playstyle: "Melee / Spin",
  mainSkill: "Cyclone",
  strengths: ["Great clear speed", "Tanky with leech"],
  weaknesses: ["Reflect maps", "Single-target lower"],
  author: "Community",
  source: "maxroll.gg",
  popularity: 95,
  patchVersion: "3.25",
  description: "Spin to win build.",
  keyItems: ["Starforge"],
  tags: ["melee", "physical", "beginner-friendly"],
};

describe("BuildCard", () => {
  it("renders build name", () => {
    render(<BuildCard build={mockBuild} />);
    expect(screen.getByText("Cyclone Slayer")).toBeInTheDocument();
  });

  it("renders ascendancy", () => {
    render(<BuildCard build={mockBuild} />);
    expect(screen.getAllByText(/Slayer/).length).toBeGreaterThan(0);
  });

  it("renders main skill", () => {
    render(<BuildCard build={mockBuild} />);
    expect(screen.getAllByText(/Cyclone/).length).toBeGreaterThan(0);
  });

  it("renders difficulty badge", () => {
    render(<BuildCard build={mockBuild} />);
    expect(screen.getByText("Beginner")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<BuildCard build={mockBuild} />);
    expect(screen.getByText("Spin to win build.")).toBeInTheDocument();
  });

  it("renders strengths", () => {
    render(<BuildCard build={mockBuild} />);
    expect(screen.getByText("Great clear speed")).toBeInTheDocument();
  });

  it("renders weaknesses", () => {
    render(<BuildCard build={mockBuild} />);
    expect(screen.getByText("Reflect maps")).toBeInTheDocument();
  });

  it("renders popularity", () => {
    render(<BuildCard build={mockBuild} />);
    expect(screen.getByText(/95%/)).toBeInTheDocument();
  });

  it("renders patch version", () => {
    render(<BuildCard build={mockBuild} />);
    // The version is rendered as "v3.25" with the "v" being separate text
    expect(screen.getByText(/3\.25/)).toBeInTheDocument();
  });

  it("renders source", () => {
    render(<BuildCard build={mockBuild} />);
    expect(screen.getByText(/maxroll.gg/)).toBeInTheDocument();
  });

  it("card is a link to the build detail page", () => {
    render(<BuildCard build={mockBuild} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/builds/test-build");
  });
});
