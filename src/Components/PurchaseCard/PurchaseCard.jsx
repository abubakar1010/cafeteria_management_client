import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import useAuth from "../../Hooks/UseAuth/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import useCart from "../../Hooks/useCart/useCart";

// eslint-disable-next-line react/prop-types
const PurchaseCard = ({ item }) => {


  // eslint-disable-next-line react/prop-types
  const { image, name, recipe,_id, price } = item;

  const axiosSecure = useAxiosSecure()
  const [, refetch] = useCart()

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handlePurchase = () => {

    if (!user?.email) {
      Swal.fire({
        title: "You are not login!",
        text: "Please login to add item to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: location.pathname });
        }
      });
    } else {
      
      const cartInfo = {menuId: _id, name: name , price: price, email: user.email}

    axiosSecure.post('/carts', cartInfo ) 
    .then( (res) => {
      if(res.data.insertedId){
        Swal.fire({
          position: "center-center",
          icon: "success",
          title: "Item Added Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        refetch()
      }
    })
    .catch( () => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: 'Please try again'
      });
    })


    }

  };

  return (
    <>
      <Card className="mt-6 ">
        <CardHeader color="blue-gray" className="relative h-56">
          <img src={image} alt="card-image" />
        </CardHeader>
        <CardBody className=" text-center">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-2xl text-[#151515] "
          >
            {name}
          </Typography>
          <Typography className=" text-[#151515]">{recipe}</Typography>
        </CardBody>
        <CardFooter className=" text-center">
          <Button
            onClick={() => handlePurchase()}
            className=" text-[#BB8506] uppercase text-xl rounded-md border-b-2 border-[#BB8506] bg-[#E8E8E8] "
          >
            Add To Cart
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default PurchaseCard;
