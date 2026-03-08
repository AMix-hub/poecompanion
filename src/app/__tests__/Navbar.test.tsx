import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Mock Next.js usePathname
jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

import Navbar from "@/components/Navbar";

describe("Navbar", () => {
  it("renders the brand name", () => {
    render(<Navbar />);
    expect(screen.getByText("PoE Companion")).toBeInTheDocument();
  });

  it("renders all nav links", () => {
    render(<Navbar />);
    expect(screen.getAllByText("Home").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Leveling Guide").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Items").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Crafting").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Builds").length).toBeGreaterThan(0);
    expect(screen.getAllByText("News").length).toBeGreaterThan(0);
  });

  it("marks the Home link as active when on /", () => {
    render(<Navbar />);
    // The Home link should have the active class
    const homeLinks = screen.getAllByRole("link", { name: /home/i });
    // At least one should have the active styling (bg-poe-card)
    const activeLink = homeLinks.find((l) => l.className.includes("text-poe-gold"));
    expect(activeLink).toBeTruthy();
  });

  it("has a hamburger button for mobile", () => {
    render(<Navbar />);
    expect(
      screen.getByRole("button", { name: /toggle navigation menu/i })
    ).toBeInTheDocument();
  });

  it("toggles mobile menu on button click", async () => {
    render(<Navbar />);
    const toggleBtn = screen.getByRole("button", { name: /toggle navigation menu/i });
    await userEvent.click(toggleBtn);
    expect(toggleBtn).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(toggleBtn);
    expect(toggleBtn).toHaveAttribute("aria-expanded", "false");
  });
});
