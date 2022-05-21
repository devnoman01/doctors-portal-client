import React from "react";
import Swal from "sweetalert2";

const UserRow = ({ user, index, refetch }) => {
  const { email, role } = user;

  const handleMakeAdmin = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          Swal.fire({
            title: "No Permission",
            html: `You can't make ${email} an admin`,
            icon: "error",
            showConfirmButton: false,
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Added As Admin",
            html: `${email} is now an admin`,
            icon: "success",
            showConfirmButton: false,
          });
        }
      });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button onClick={handleMakeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        ) : (
          ""
        )}
      </td>
      <td>
        <button className="btn btn-xs">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
