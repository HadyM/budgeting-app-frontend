import budgetingError from "../Assets/budgetingError.jpg";

export default function Error() {
  return (
    <div>
      <h1>Sorry, this page is not found! Please try again!</h1>
      <img src={budgetingError} alt="Error" />
    </div>
  );
}
