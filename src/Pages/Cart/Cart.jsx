import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import useCart from "../../Hooks/useCart/useCart";

const Cart = () => {

    const [cart] = useCart()

    const totalAmount = cart.reduce( (totalPrice, item) => totalPrice + item.price,0)
    

       
      const TABLE_HEAD = ["ITEM IMAGE", "ITEM NAME", "PRICE", "ACTION"];
       
      const TABLE_ROWS = [
        {
          img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
          name: "John Michael",
          email: "john@creative-tim.com",
          job: "Manager",
          org: "Organization",
          online: true,
          date: "23/04/18",
        },
        {
          img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
          name: "Alexa Liras",
          email: "alexa@creative-tim.com",
          job: "Programator",
          org: "Developer",
          online: false,
          date: "23/04/18",
        },
        {
          img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
          name: "Laurent Perrier",
          email: "laurent@creative-tim.com",
          job: "Executive",
          org: "Projects",
          online: false,
          date: "19/09/17",
        },
        {
          img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
          name: "Michael Levi",
          email: "michael@creative-tim.com",
          job: "Programator",
          org: "Developer",
          online: true,
          date: "24/12/08",
        },
        {
          img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
          name: "Richard Gran",
          email: "richard@creative-tim.com",
          job: "Manager",
          org: "Executive",
          online: false,
          date: "04/10/21",
        },
      ];
       

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
              ({ image, name, price }, index) => {
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
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
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



 
