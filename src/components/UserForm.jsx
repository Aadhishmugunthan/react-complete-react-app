import { useForm } from "react-hook-form";
import { createUser, updateUser } from "../services/api";
import { useEffect } from "react";

const UserForm = ({
  onUserAdded,
  editingUser,
  onUpdateUser,
  clearEdit
}) => {

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors }
  } = useForm();

  // Load data into form when editing

  useEffect(() => {

    if (editingUser) {

      setValue("name", editingUser.name);
      setValue("email", editingUser.email);
      setValue("age", editingUser.age);
      setValue("nationality", editingUser.nationality);

    }

  }, [editingUser]);

  const onSubmit = async (data) => {

    try {

      // UPDATE

      if (editingUser) {

        const response =
          await updateUser(
            editingUser.id,
            data
          );

        onUpdateUser(response.data);

        alert("User Updated");

        clearEdit();

      }

      // CREATE

      else {

        const response =
          await createUser(data);

        onUserAdded(response.data);

        alert("User Created");

      }

      reset();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div>

      <h2 className="title">

        {editingUser
          ? "Update User"
          : "Add User"}

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

        <input
          type="number"
          placeholder="Age"
          {...register("age", {
            required: "Age required"
          })}
        />

        <input
          placeholder="Nationality"
          {...register("nationality", {
            required: "Nationality required"
          })}
        />

        <button type="submit">

          {editingUser
            ? "Update User"
            : "Add User"}

        </button>

      </form>

      {errors.name && (
        <p>{errors.name.message}</p>
      )}

      {errors.email && (
        <p>{errors.email.message}</p>
      )}

      {errors.age && (
        <p>{errors.age.message}</p>
      )}

      {errors.nationality && (
        <p>{errors.nationality.message}</p>
      )}

    </div>
  );
};

export default UserForm;