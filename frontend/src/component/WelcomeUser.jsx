
import { useSelector } from "react-redux"
export function Welcome() {
  const userDetails = useSelector((state) => state.auth.userDetails);

  const firstName = userDetails ? userDetails.firstName : '';
  const lastName = userDetails ? userDetails.lastName : '';

  return (
    <div className="header">
      <p>
        Welcome back
        <br />
        {firstName} {lastName}!
      </p>
    </div>
  );
}

