import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";


// eslint-disable-next-line react/prop-types
const PurchaseCard = ({item}) => {

    // eslint-disable-next-line react/prop-types
    const {image, name, recipe} = item;

    return (
        <>
            <Card className="mt-6 ">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={image}
            alt="card-image"
          />
        </CardHeader>
        <CardBody className=" text-center">
          <Typography variant="h5" color="blue-gray" className="mb-2 text-2xl text-[#151515] ">
            {name}
          </Typography>
          <Typography className=" text-[#151515]">
            {recipe}
          </Typography>
        </CardBody>
        <CardFooter className=" text-center">
          <Button className=" text-[#BB8506] uppercase text-xl rounded-md border-b-2 border-[#BB8506] bg-[#E8E8E8] " >Add To Cart</Button>
        </CardFooter>
      </Card>
        </>
    );
};

export default PurchaseCard;

