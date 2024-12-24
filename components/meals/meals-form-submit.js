"use client";

import { useFormStatus } from "react-dom";

export default function MealsFormSubmit({ invalidInput }) {
  const { pending } = useFormStatus();

  let buttoneMessage;

  if (invalidInput) {
    buttoneMessage = invalidInput;
  } else if (pending) {
    buttoneMessage = "Submiting...";
  } else {
    buttoneMessage = "Share Meal";
  }
  return <button disabled={pending || invalidInput}>{buttoneMessage}</button>;
}
