const userName = "Charles-Édouard Fifrelin !";

export function Welcome() {
  return (
    <div className="header">
      <p>
        Welcome back
        <br />
        {userName}
      </p>
    </div>
  );
}
