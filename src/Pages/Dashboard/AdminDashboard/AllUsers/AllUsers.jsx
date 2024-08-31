import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { Card, IconButton, Tooltip, Typography } from "@material-tailwind/react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa6";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosSecure.get("/users",{
        headers:{
            authorization: `Bearer ${localStorage.getItem("access-token")}`
        }
      });
      return result.data;
    },
  });

  const TABLE_HEAD = ["", "Name", "Email", "Role", "Action"];


  const handleMakeAdmin = (id) => {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, make admin!"
      }).then((result) => {
        if (result.isConfirmed) {
        
        axiosSecure.patch(`/users/admin/${id}`)
        .then( res => {
            if(res.data.modifiedCount > 0) {
                   Swal.fire({
                        title: "Updated!",
                        text: "User has been modified to admin.",
                        icon: "success"
                      });
                      refetch()
            }
        })
        
        }
  })
  }


  const handleDelete = (id) => {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
        
        axiosSecure.delete(`/users/${id}`)
        .then( res => {
            if (res.data.deletedCount > 0) {
                   Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      refetch()
            }
        })
        
        }
  })
}

  return (
    <>
      <div className=" w-full text-center my-12 space-y-8">
        <h1 className=" text-xl font-medium">Total Users: {users.length}</h1>

        <div>
          <Card className="h-full w-full">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users.map(({ _id, name, email, role = "user" }, index) => {
                  const isLast = index === users.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {index + 1}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {email}
                        </Typography>
                      </td>
                      <td className={classes}>
                      <Tooltip content="User">
                        {role === 'admin'? "admin" : <><IconButton className=" bg-purple-600 p-3" onClick={ () => handleMakeAdmin(_id)} variant="text">
                          <FaUsers className="!text-white text-xl  " />
                        </IconButton></>}
                      </Tooltip>
                    </td>
                      <td className={classes}>
                      <Tooltip content="Delete Item">
                        <IconButton onClick={ () => handleDelete(_id)} variant="text">
                          <RiDeleteBin6Fill className="!text-red-600 text-xl  " />
                        </IconButton>
                      </Tooltip>
                    </td>
                      
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AllUsers;
