import { render, screen } from "@testing-library/react";
import RestaurantCard from "../ResCard";
import { withPromotedLabel } from "../ResCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { waitFor } from "@testing-library/react";

it("Should render ResCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("McDonald's");

  expect(name).toBeInTheDocument();
});

it("Should render ResCard component with promoted label", () => {
  const PromotedRestaurant = withPromotedLabel(RestaurantCard);
  render(<PromotedRestaurant resData={MOCK_DATA} />);

  const label = screen.getByText("Promoted");

  expect(label).toBeInTheDocument();
});
