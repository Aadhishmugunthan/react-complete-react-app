import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const UserList = ({
  users,
  onDelete,
  onEdit
}) => {

  if (users.length === 0) {

    return (

      <p
        style={{
          textAlign: "center",
          marginTop: "20px"
        }}
      >
        No users found
      </p>

    );

  }

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

              <IconButton
                color="primary"
                onClick={() =>
                  onEdit(user)
                }
              >
                <EditIcon />
              </IconButton>

              <IconButton
                color="error"
                onClick={() =>
                  onDelete(user.id)
                }
              >
                <DeleteIcon />
              </IconButton>

            </TableCell>

          </TableRow>

        ))}

      </TableBody>

    </Table>

  );

};

export default UserList;