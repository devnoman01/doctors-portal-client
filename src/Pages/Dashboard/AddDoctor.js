import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import Loading from "../../Components/Loading";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("https://young-thicket-64286.herokuapp.com/service").then((res) =>
      res.json()
    )
  );

  const imgStorageKey = "e960507a63d81acc213a340731263b30";

  /**
   * 3 ways to store images
   *
   * 1. Third party storage
   * 2. Your own storage in your own server (file system)
   * 3. Database: MongoDB
   *
   * YUP: to validate file (search: Yup file validation for react hook form)
   */

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            img: img,
          };
          // send to database
          fetch("https://young-thicket-64286.herokuapp.com/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                Swal.fire({
                  title: "Doctor Added",
                  html: `You added ${data.name} as a doctor`,
                  icon: "success",
                  showConfirmButton: false,
                });
                reset();
              } else {
                Swal.fire({
                  title: "Failed to add doctor",
                  html: "Request to add new doctor failed",
                  icon: "error",
                  showConfirmButton: false,
                });
              }
            });
        }
        // console.log("imgbb result: ", result);
      });

    // console.log("data", data);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="my-6 text-xl font-medium">Add New Doctor</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm">
        <div className="form-control w-full">
          <label className="label">
            <span className="text-sm">Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name Required",
              },
            })}
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
          {errors.name?.type === "required" && (
            <span className="text-sm text-left text-red-500">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="text-sm">Email</span>
          </label>
          <input
            {...register("email", {
              required: {
                value: true,
                message: "Email required",
              },
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Provide Valid Email",
              },
            })}
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
          {errors.email?.type === "required" && (
            <span className="text-sm text-left text-red-500">
              {errors.email.message}
            </span>
          )}
          {errors.email?.type === "pattern" && (
            <span className="text-sm text-left text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="text-sm">Specialty</span>
          </label>
          <select
            {...register("specialty", {
              required: {
                value: true,
                message: "Specialization required",
              },
            })}
            className="select select-bordered w-full"
          >
            {services.map((service) => (
              <option key={service._id} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
          {errors.specialty?.type === "required" && (
            <span className="text-sm text-left text-red-500">
              {errors.specialty.message}
            </span>
          )}
        </div>

        <div className="form-control w-full mb-5">
          <label className="label">
            <span className="text-sm">Profile Image</span>
          </label>
          <input
            {...register("image", {
              required: {
                value: true,
                message: "Image required",
              },
            })}
            type="file"
            className="input input-bordered w-full pl-2 pt-1"
          />
          {errors.image?.type === "required" && (
            <span className="text-sm text-left text-red-500">
              {errors.image.message}
            </span>
          )}
        </div>

        <input
          value="Add Doctor"
          type="submit"
          className="input input-bordered w-full bg-accent text-white uppercase font-medium"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
