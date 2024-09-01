import { RiDeleteBin6Fill } from "react-icons/ri";
import { Avatar, Card, IconButton, Tooltip, Typography } from "@material-tailwind/react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { PencilIcon } from "@heroicons/react/16/solid";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ManageItems = () => {

    const axiosSecure = useAxiosSecure();

    const { data: menu = [], refetch } = useQuery({
      queryKey: ["users"],
      queryFn: async () => {
        const result = await axiosSecure.get("/menu");
        return result.data;
      },
    });

    const handleUpdate = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, make admin!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.patch(`/menu/admin/${id}`).then((res) => {
              if (res.data.modifiedCount > 0) {
                Swal.fire({
                  title: "Updated!",
                  text: "Menu modified by admin.",
                  icon: "success",
                });
                refetch();
              }
            });
          }
        });
      };
    
      const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/menu/admin/${id}`).then((res) => {
              if (res.data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                refetch();
              }
            });
          }
        });
      };

    const TABLE_HEAD = ["","Item Image", "Item Name", "Price", "Update", "Delete"];

    return (
        <>
            <div className=" w-full text-center ">
        <SectionTitle heading={"how many??"} subHeading={"Manage All Users"} />

        <div className=" w-full text-center my-12 space-y-8">
          <h1 className=" text-xl text-left font-medium">
            Total Users: {menu.length}
          </h1>

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
                  {menu.map(({ _id,image, name, price = "user" }, index) => {
                    const isLast = index === menu.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={_id}>
                        
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
                        <div className="">
                        <Avatar
                          src={image}
                          alt={name}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                      </div>
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
                            {price}
                          </Typography>
                        </td>
                        <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton onClick={ () => handleUpdate(_id)} variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                        </td>
                        <td className={classes}>
                          <Tooltip content="Delete Item">
                            <IconButton
                              onClick={() => handleDelete(_id)}
                              variant="text"
                            >
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
      </div>
        </>
    );
};

export default ManageItems;