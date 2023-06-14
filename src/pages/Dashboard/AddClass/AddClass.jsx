import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
console.log(img_hosting_token);

const AddClass = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [axiosSecure] = useAxiosSecure();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if(imgResponse.success){
            const imgURL = imgResponse.data.display_url;
            const {name, price, available_seat, instructor_name} = data;
            const newItem = {class_name:name, price: parseFloat(price), available_seat, image:imgURL, instructor_name}
            console.log(newItem)
            axiosSecure.post('/classes', newItem)
            .then(data => {
                console.log('after posting new class', data.data)
                if(data.data.insertedId){
                    reset();
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Class added successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        console.log(imgResponse);
      });
  };
  return (
    <div className="w-full px-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-semibold">Class Name*</span>
          </label>
          <input
            type="text"
            placeholder="Class Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex gap-2 my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Instructor name*</span>
            </label>
            <input
            {...register("instructor_name", { required: true, maxLength: 120 })}
              type="text"
              className="input input-bordered w-full text-black"
              defaultValue={user.displayName}
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">
                Instructor email*
              </span>
            </label>
            <input
              type="text"
              defaultValue={user.email}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="flex gap-2 my-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Available Seat*</span>
            </label>
            <input
              type="number"
              {...register("available_seat", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Class Image*</span>
          </label>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full "
          />
        </div>
        <div className="text-center">
          <input
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-[#28A745] mb-4"
            type="submit"
            value="Add Class"
          />
        </div>
      </form>
    </div>
  );
};

export default AddClass;
