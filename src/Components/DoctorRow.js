import React from "react";
import Swal from "sweetalert2";

const DoctorRow = ({ doctor, index, refetch }) => {
  const { name, email, specialty, img } = doctor;

  // const handleMakeAdmin = (e) => {
  //   e.preventDefault();
  //   fetch(`http://localhost:5000/doctor/admin/${email}`, {
  //     method: "PUT",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  //     .then((res) => {
  //       if (res.status === 403) {
  //         Swal.fire({
  //           title: "No Permission",
  //           html: `You can't make ${email} an admin`,
  //           icon: "error",
  //           showConfirmButton: false,
  //         });
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       if (data.modifiedCount > 0) {
  //         refetch();
  //         Swal.fire({
  //           title: "Added As Admin",
  //           html: `${email} is now an admin`,
  //           icon: "success",
  //           showConfirmButton: false,
  //         });
  //       }
  //     });
  // };

  return (
    <tr>
      <td>
        <img src={img} className="w-10" alt="" />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{specialty}</td>
    </tr>
  );
};

export default DoctorRow;
