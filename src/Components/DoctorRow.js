import React from "react";
import Swal from "sweetalert2";

const DoctorRow = ({ doctor, index, refetch }) => {
  const { name, email, specialty, img } = doctor;

  const handleDelete = (email) => {
    Swal.fire({
      title: "Sure to remove doctor?",
      text: `Are you sure to remove ${name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#218838",
      confirmButtonText: "Yes, Remove!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://young-thicket-64286.herokuapp.com/doctor/${email}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Doctor Removed",
                html: "You removed a doctor",
                icon: "info",
                showConfirmButton: false,
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="avatar">
          <div className="w-12 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{specialty}</td>
      <td>
        <button
          onClick={() => handleDelete(email)}
          className="btn btn-xs btn-error"
        >
          Remove Dr.
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
