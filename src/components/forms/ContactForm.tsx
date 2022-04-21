import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 rounded"
    >
      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="Navn"
          {...register("name", {
            required: { value: true, message: "Du skal skrive dit navn" },
          })}
          className={`form-input ${errors.name && "error-border"}`}
        />
        <span className="error-text">{errors?.name?.message}</span>
      </div>

      <div className="flex flex-col gap-1">
        <input
          type="email"
          placeholder="Email"
          {...register("email", {
            required: {
              value: true,
              message: "Du skal angive en email",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Du har angivet en ugyldig email",
            },
          })}
          className={`form-input ${errors.email && "error-border"}`}
        />
        <span className="error-text">{errors?.email?.message}</span>
      </div>

      <div className="flex flex-col gap-1">
        <textarea
          placeholder="Besked"
          {...register("message", {
            required: { value: true, message: "Du skal skrive en besked" },
            minLength: {
              value: 51,
              message: "Beskeden skal være over 50 tegn",
            },
            maxLength: {
              value: 1000,
              message: "Beskeden er over 1000 tegn",
            },
          })}
          className={`form-input min-h-[100px] ${
            errors.message && "error-border"
          }`}
        />
        <span className="error-text">{errors?.message?.message}</span>
      </div>

      <button type="submit" className="btn-primary max-w-max">
        Send besked
      </button>
    </form>
  );
};

export default ContactForm;
