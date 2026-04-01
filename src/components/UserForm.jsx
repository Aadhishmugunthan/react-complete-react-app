import { useForm } from "react-hook-form";
import { createUser } from "../services/api";

const UserForm = ({ onUserAdded }) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {

    try {

      const response =
        await createUser(data);

      alert("User Created");

      if (onUserAdded) {
        onUserAdded(response.data);
      }

      reset();

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div>

      <h2 className="title">
        Add User
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          placeholder="Name"
          {...register("name", {
            required: "Name required"
          })}
        />

        <input
          placeholder="Email"
          {...register("email", {
            required: "Email required"
          })}
        />

        <button type="submit">
          Add User
        </button>

      </form>

      {errors.name && (
        <p>{errors.name.message}</p>
      )}

      {errors.email && (
        <p>{errors.email.message}</p>
      )}

    </div>
  );
};

export default UserForm;