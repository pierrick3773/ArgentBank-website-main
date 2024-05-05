
import { useSelector } from "react-redux"
export function Welcome() {
  const userDetails = useSelector((state) => state.auth.userDetails);
  return (
    <div className="header">
      <p>
        Welcome back
        <br />
        {userDetails?.payload[0].firstName} {userDetails?.payload[0].lastName}!
      </p>
    </div>
  );
}
