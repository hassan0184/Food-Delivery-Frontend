import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load header with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying
  const loginButton = screen.getByRole("button", { name: "Login" });

  //Asserting
  expect(loginButton).toBeInTheDocument();
});

it("Should load header with a cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying
  const cartItems = screen.getByText("🛒 (0)");

  //Asserting
  expect(cartItems).toBeInTheDocument();
});

it("Should load header with a cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying
  const cartItems = screen.getByText("🛒 (0)");

  //Asserting
  expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //Querying
  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  //Asserting
  expect(logoutButton).toBeInTheDocument();
});
