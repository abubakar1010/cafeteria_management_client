
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import useCart from "../../Hooks/useCart/useCart";
import { RiDeleteBin6Fill } from "react-icons/ri";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const Cart = () => {

    const [cart, refetch] = useCart()
    const axiosSecure = useAxiosSecure()

    const totalAmount = cart.reduce( (totalPrice, item) => totalPrice + item.price,0)
    

       
      const TABLE_HEAD = ["ITEM IMAGE", "ITEM NAME", "PRICE", "ACTION"];
       
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
            
            axiosSecure.delete(`/carts/${id}`)
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
            <Card className="h-full w-full my-12 border-t-2 border-gray-600">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row px-12 !py-0">
          <div className=" flex gap-4">
            <p className=" text-xl font-medium">Total Orders:</p>
            <p className=" text-xl font-medium" >{cart.length}</p>
          </div>
          <div className=" flex gap-4">
          <p className=" text-xl font-medium">Total Price:</p>
          <p className=" text-xl font-medium" >$ {totalAmount}</p>

          </div>
          <div>
            <Button className=" text-lg !py-2 !px-8 font-medium" >Pay</Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className=" px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
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
            {cart.map(
              ({ _id,image, name, price }, index) => {
                const isLast = index === cart.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={image} alt={name} size="sm" />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {name}
                        </Typography>
                      </div>
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
                      <Tooltip content="Delete Item">
                        <IconButton onClick={ () => handleDelete(_id)} variant="text">
                          <RiDeleteBin6Fill className="!text-red-600 text-xl  " />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
        </>
    );
};

export default Cart;



 
