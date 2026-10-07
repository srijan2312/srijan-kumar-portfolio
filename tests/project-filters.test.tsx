// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProjectFilters } from "@/components/projects/project-filters";

afterEach(cleanup);

const counts = {
  all: 2,
  frontend: 0,
  "full-stack": 2,
  backend: 0,
  blockchain: 0,
} as const;

describe("ProjectFilters", () => {
  it("renders one button per category with aria-pressed state", () => {
    render(<ProjectFilters value="all" onChange={() => {}} counts={counts} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(5);

    const all = screen.getByRole("button", { name: /all/i });
    expect(all).toHaveAttribute("aria-pressed", "true");
    const backend = screen.getByRole("button", { name: /backend/i });
    expect(backend).toHaveAttribute("aria-pressed", "false");
  });

  it("notifies the parent with the chosen category on click", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<ProjectFilters value="all" onChange={onChange} counts={counts} />);

    await user.click(screen.getByRole("button", { name: /full stack/i }));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("full-stack");
  });

  it("is operable from the keyboard", async () => {
    const onChange = vi.fn();
    const user = userEvent.setup();
    render(<ProjectFilters value="all" onChange={onChange} counts={counts} />);

    const blockchain = screen.getByRole("button", { name: /blockchain/i });
    blockchain.focus();
    expect(blockchain).toHaveFocus();
    await user.keyboard("{Enter}");
    expect(onChange).toHaveBeenCalledWith("blockchain");
  });
});
