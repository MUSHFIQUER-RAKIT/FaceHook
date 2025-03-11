import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Field from "../common/Field";

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = FormData => {
    console.log(FormData);
    navigate("/");
  };
  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email ID Is Required" })}
          className={`auth-input ${
            errors.email ? "border-red-600" : "border-gray-200"
          }`}
          type="email"
          name="email"
          id="email"
        />
      </Field>
      <Field label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password Is Required",
            minLength: {
              value: 8,
              message: "Password must be 8 charecthers",
            },
          })}
          className={`auth-input ${
            errors.password ? "border-red-600" : "border-gray-200"
          }`}
          type="password"
          name="password"
          id="password"
        />
      </Field>

      <Field>
        <button className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-80">
          Login
        </button>
      </Field>
    </form>
  );
}
