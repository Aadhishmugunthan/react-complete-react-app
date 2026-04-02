import { useForm } from "react-hook-form";
import { createUser, updateUser } from "../services/api";
import { useEffect } from "react";
import { TextField, Button, Stack } from "@mui/material";

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
    setValue
  } = useForm();

  // Fill form when editing

  useEffect(() => {

    if (editingUser) {

      setValue("name", editingUser.name);
      setValue("email", editingUser.email);
      setValue("age", editingUser.age);
      setValue("nationality", editingUser.nationality);

    }

  }, [editingUser, setValue]);

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

        clearEdit();

      }

      // CREATE

      else {

        const response =
          await createUser(data);

        onUserAdded(response.data);

      }

      reset();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <Stack
      spacing={2}
      direction="row"
      marginBottom={3}
    >

      <TextField
        label="Name"
        {...register("name")}
      />

      <TextField
        label="Email"
        {...register("email")}
      />

      <TextField
        label="Age"
        type="number"
        {...register("age")}
      />

      <TextField
        label="Nationality"
        {...register("nationality")}
      />

      <Button
        variant="contained"
        onClick={handleSubmit(onSubmit)}
      >
        {editingUser
          ? "Update"
          : "Add"}
      </Button>

    </Stack>

  );

};

export default UserForm;