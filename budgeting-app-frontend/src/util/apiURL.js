export const apiURL = () => {
  return window.location.hostname === "localhost"
    ? "http://localhost:3003"
    : "https://budgeting-app-backend-api.herokuapp.com/";
};
