import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/* ---- Yup Validation Schema ---- */
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .required("Age is required")
    .min(18, "Must be 18 or above"),
});

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Hook Form + Yup Demo</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div>
          <input placeholder="Name" {...register("name")} />
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </div>

        {/* Email */}
        <div>
          <input placeholder="Email" {...register("email")} />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>

        {/* Age */}
        <div>
          <input placeholder="Age" {...register("age")} />
          <p style={{ color: "red" }}>{errors.age?.message}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
