import { EditButton } from "../component/EditButton";
import { Transaction } from "../component/TransactionCard";
import { Welcome } from "../component/WelcomeUser";

export function User() {
  return (
    <div className="main bg-dark">
      <Welcome />
      <EditButton />
      <Transaction />
    </div>
  );
}
