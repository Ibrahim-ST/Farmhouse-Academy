import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserGraduate, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";

const AllUsers = () => {
   
  const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

  const handleMakeAdmin = user =>{
    fetch(`https://farmhouse-academy-server.vercel.app/users/admin/${user._id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}

const handleMakeInstructor = user =>{
  fetch(`https://farmhouse-academy-server.vercel.app/users/instructor/${user._id}`, {
      method: 'PATCH'
  })
  .then(res => res.json())
  .then(data => {
      console.log(data)
      if(data.modifiedCount){
          refetch();
          Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: `${user.name} is an Instructor Now!`,
              showConfirmButton: false,
              timer: 1500
            })
      }
  })
}

const handleDelete = user => {

}
  return (
    <div className="w-full">
      <Helmet>
        <title>All users | Farmhouse Academy</title>
      </Helmet>
      
      <h3 className="text-3xl font-semibold my-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{                                 
                                    user.role === 'admin' ? 'Admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-emerald-950  text-white"><FaUserShield></FaUserShield></button> }
                                    
                                </td>
                                <td>
                                {
                                    user.role === 'instructor' ? 'Instructor' :
                                    <button onClick={() => handleMakeInstructor(user)} className="btn btn-ghost bg-rose-700  text-white"><FaUserGraduate></FaUserGraduate></button> 

                                    }
                                  {/* <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button> */}
                                </td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
    </div>
  );
};

export default AllUsers;
