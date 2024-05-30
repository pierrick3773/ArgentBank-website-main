import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { EditButton } from "../component/EditButton";
import { Transaction } from "../component/TransactionCard";
import { Welcome } from "../component/WelcomeUser";

export function User() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="main bg-dark">
      <Welcome />
      <EditButton />
      <Transaction />
    </div>
  );
}
