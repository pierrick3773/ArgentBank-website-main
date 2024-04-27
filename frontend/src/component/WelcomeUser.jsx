export const firstName = "tom ";
export const lastName = "Fifrelin"

export function Welcome() {
  return (
    <div className="header">
      <p>
        Welcome back
        <br />
        {firstName} {lastName} !
      </p>
    </div>
  );
}
