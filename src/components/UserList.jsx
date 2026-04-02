import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from "@mui/material";

const UserList = ({
  users,
  onDelete,
  onEdit
}) => {

  return (

    <Table>

      <TableHead>

        <TableRow>

          <TableCell>
            Name
          </TableCell>

          <TableCell>
            Email
          </TableCell>

          <TableCell>
            Age
          </TableCell>

          <TableCell>
            Nationality
          </TableCell>

          <TableCell>
            Actions
          </TableCell>

        </TableRow>

      </TableHead>

      <TableBody>

        {users.map((user) => (

          <TableRow
            key={user.id}
          >

            <TableCell>
              {user.name}
            </TableCell>

            <TableCell>
              {user.email}
            </TableCell>

            <TableCell>
              {user.age}
            </TableCell>

            <TableCell>
              {user.nationality}
            </TableCell>

            <TableCell>

              <Button
                variant="outlined"
                onClick={() =>
                  onEdit(user)
                }
                style={{
                  marginRight: "10px"
                }}
              >
                Edit
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={() =>
                  onDelete(user.id)
                }
              >
                Delete
              </Button>

            </TableCell>

          </TableRow>

        ))}

      </TableBody>

    </Table>

  );

};

export default UserList;