import React from "react";
import DashboardPage from "../../components/DashboardPage";
import { shallow } from "enzyme";

test("should render dashboard page correctly", () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
