import { render, screen } from "@testing-library/react";
import ItemCard from "@/components/ItemCard";
import type { Item } from "@/types";

const mockItem: Item = {
  id: "test-item",
  name: "Doomsower",
  baseName: "Reaver Sword",
  type: "One Hand Sword",
  category: "weapon",
  rarity: "unique",
  levelRequirement: 65,
  stats: ["100% increased Physical Damage", "+30 to Strength"],
  description: "A test description.",
  flavourText: "Test flavour text.",
  tags: ["sword", "physical"],
};

describe("ItemCard", () => {
  it("renders item name", () => {
    render(<ItemCard item={mockItem} />);
    expect(screen.getByText("Doomsower")).toBeInTheDocument();
  });

  it("renders base name", () => {
    render(<ItemCard item={mockItem} />);
    expect(screen.getByText("Reaver Sword")).toBeInTheDocument();
  });

  it("renders item stats", () => {
    render(<ItemCard item={mockItem} />);
    expect(screen.getByText("100% increased Physical Damage")).toBeInTheDocument();
    expect(screen.getByText("+30 to Strength")).toBeInTheDocument();
  });

  it("renders rarity label", () => {
    render(<ItemCard item={mockItem} />);
    expect(screen.getByText("Unique")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<ItemCard item={mockItem} />);
    expect(screen.getByText("A test description.")).toBeInTheDocument();
  });

  it("renders flavour text", () => {
    render(<ItemCard item={mockItem} />);
    expect(screen.getByText(/Test flavour text./)).toBeInTheDocument();
  });

  it("renders level requirement", () => {
    render(<ItemCard item={mockItem} />);
    expect(screen.getByText(/65/)).toBeInTheDocument();
  });

  it("renders tags", () => {
    render(<ItemCard item={mockItem} />);
    expect(screen.getByText("sword")).toBeInTheDocument();
    expect(screen.getByText("physical")).toBeInTheDocument();
  });

  it("renders without optional fields", () => {
    const minimalItem: Item = {
      id: "minimal",
      name: "Normal Sword",
      baseName: "Short Sword",
      type: "One Hand Sword",
      category: "weapon",
      rarity: "normal",
      levelRequirement: 1,
      stats: ["Adds 1–3 Physical Damage"],
      tags: [],
    };
    render(<ItemCard item={minimalItem} />);
    expect(screen.getByText("Normal Sword")).toBeInTheDocument();
    expect(screen.getByText("Normal")).toBeInTheDocument();
  });
});
