import { render, screen } from "@testing-library/react";
import NewsCard from "@/components/NewsCard";
import type { NewsArticle } from "@/types";

const mockArticle: NewsArticle = {
  id: "test-news",
  title: "Patch 3.25 Released",
  category: "patch-notes",
  date: "2024-07-26",
  summary: "Big changes in this patch.",
  content: "Full content here.",
  tags: ["patch", "balance"],
};

describe("NewsCard", () => {
  it("renders article title", () => {
    render(<NewsCard article={mockArticle} />);
    expect(screen.getByText("Patch 3.25 Released")).toBeInTheDocument();
  });

  it("renders category label", () => {
    render(<NewsCard article={mockArticle} />);
    expect(screen.getByText("Patch Notes")).toBeInTheDocument();
  });

  it("renders formatted date", () => {
    render(<NewsCard article={mockArticle} />);
    expect(screen.getByText(/July 26, 2024/)).toBeInTheDocument();
  });

  it("renders summary when not compact", () => {
    render(<NewsCard article={mockArticle} compact={false} />);
    expect(screen.getByText("Big changes in this patch.")).toBeInTheDocument();
  });

  it("does not render summary when compact", () => {
    render(<NewsCard article={mockArticle} compact />);
    expect(screen.queryByText("Big changes in this patch.")).not.toBeInTheDocument();
  });

  it("renders tags", () => {
    render(<NewsCard article={mockArticle} />);
    expect(screen.getByText("patch")).toBeInTheDocument();
    expect(screen.getByText("balance")).toBeInTheDocument();
  });
});
