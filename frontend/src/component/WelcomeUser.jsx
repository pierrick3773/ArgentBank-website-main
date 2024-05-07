
import { useSelector } from "react-redux"
export function Welcome() {
  const userDetails = useSelector((state) => state.auth.userDetails);

  const firstName = userDetails && userDetails.payload && userDetails.payload[0] ? userDetails.payload[0].firstName : '';
  const lastName = userDetails && userDetails.payload && userDetails.payload[0] ? userDetails.payload[0].lastName : '';

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

