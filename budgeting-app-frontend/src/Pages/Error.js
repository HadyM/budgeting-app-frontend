import budgetingErrorTransparent from "../Assets/budgetingErrorTransparent.png";

export default function Error() {
  return (
    <div className="Error">
      <h1>Sorry, this page is not found! Please try again!</h1>
      <img src={budgetingErrorTransparent} alt="Error" />
    </div>
  );
}
