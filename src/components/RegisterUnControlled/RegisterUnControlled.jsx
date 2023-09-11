import React from "react";

export const RegisterUnControlled = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password } = form.elements;
    if (!name.value) {
      alert("field ... is ampty");
      return;
    }
    console.log({
      name: name.value,
      email: email.value,
      password: password.value,
    });

    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" />
      <input name="email" />
      <input name="password" />
      <button>send</button>
    </form>
  );
};
