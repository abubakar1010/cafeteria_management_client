import {
    Drawer,
    Button,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
import { useState } from "react";
import { TbBrandBooking } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCcAmazonPay } from "react-icons/fa6";
import { IoIosHome, IoMdCart } from "react-icons/io";
import { MdOutlineRateReview } from "react-icons/md";
import { NavLink } from "react-router-dom";
// import { TbBrandBooking } from "react-icons/tb";

const DashboardDrawer = () => {

    // const [open, setOpen] = useState(true);
    // const openDrawer = () => setOpen(true);
    // const closeDrawer = () => setOpen(false);


    return (
        <>
      {/* <Button onClick={openDrawer}>Open Drawer</Button> */}
      <Drawer overlay={false} open={open} >
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Material Tailwind
          </Typography>
          {/* <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton> */}
        </div>
        <List>
          <NavLink to={"/"}>
          <ListItem>
            <ListItemPrefix>
            <IoIosHome className=" text-xl" />
            </ListItemPrefix>
            Home
          </ListItem>
          </NavLink>
          <NavLink to={"/dashboard/reservation"}>
          <ListItem>
            <ListItemPrefix>
            <FaCalendarAlt className=" text-xl" />
            </ListItemPrefix>
            RESERVATION
          </ListItem>
          </NavLink>
          <NavLink to={"/dashboard/paymentHistory"}>
          <ListItem>
            <ListItemPrefix>
            <FaCcAmazonPay className=" text-xl" />
            </ListItemPrefix>
            PAYMENT HISTORY
          </ListItem>
          </NavLink>
          <NavLink to={"/dashboard/cart"}>
          <ListItem>
            <ListItemPrefix>
            <IoMdCart className=" text-xl" />
            </ListItemPrefix>
            MY CART
          </ListItem>
          </NavLink>
          <NavLink to={"/dashboard/addReview"}>
          <ListItem>
            <ListItemPrefix>
            <MdOutlineRateReview className=" text-xl" />
            </ListItemPrefix>
            ADD REVIEW
          </ListItem>
          </NavLink>
          <NavLink to={"/dashboard/myBooking"}>
          <ListItem>
            <ListItemPrefix>
            <TbBrandBooking className=" text-xl" />
            </ListItemPrefix>
            MY BOOKING
          </ListItem>
          </NavLink>
          
        </List>
        <Button className="mt-3 ml-5" size="sm">
          Documentation
        </Button>
      </Drawer>
    </>
    );
};

export default DashboardDrawer;


 

 
