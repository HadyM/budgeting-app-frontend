import budgeting from "../Assets/budgeting.png";

function Home() {
  return (
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
      <img
        src={budgeting}
        alt="budgeting"
        style={{ height: "600px", width: "400px" }}
      />
    </div>
  );
}

export default Home;
