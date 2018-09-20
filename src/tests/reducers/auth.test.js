import authReducer from "../../reducers/auth";

test("should set uid for login", () => {
  const action = {
    type: "LOGIN",
    uid: "abc123"
  };
  const state = authReducer({}, action);

  expect(state.uid).toBe(action.uid);
});

test("should clear uid for log out", () => {
  const action = {
    type: "LOGOUT"
  };
  const state = authReducer({ uid: "anthing" }, action);
  expect(state).toEqual({});
});
