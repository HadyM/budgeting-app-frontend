import budgeting from "../Assets/budgeting.png";
import budgetingTwo from "../Assets/budgetingTwo.png";

function Home() {
  return (
    <div>
      <div className="Home">
        <h2>Welcome to the Budget App!</h2>
        <h3>
          Don't tell me what you value, show me your budget, and I'll tell you
          what you value.
          <br />
          It isn't what you earn but how spend it that fixes your class.
          <br />
          A Debt Problem Is, At Its Core, a Budgeting Problem.
          <br />
          We must consult our means rather than our wishes.
          <br />
        </h3>
      </div>
      <div className="Image">
        <img
          className="top"
          src={budgeting}
          alt="budgeting"
          style={{ height: "800px", width: "400px" }}
        />
        <img
          className="bottom"
          src={budgetingTwo}
          alt="budgetingTwo"
          style={{ height: "800px", width: "400px" }}
        />
      </div>
    </div>
  );
}

export default Home;
