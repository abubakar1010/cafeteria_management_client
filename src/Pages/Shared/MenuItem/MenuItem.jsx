import {
    Card,
    CardHeader,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
   

// eslint-disable-next-line react/prop-types
const MenuItem = ({item}) => {


    // eslint-disable-next-line react/prop-types
    const {image, price, name, recipe} = item;
    return (
        <>
        <Card color="transparent" shadow={true} className="w-full h-[200px] ">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className=" flex items-center gap-4 p-4"
        >
          <Avatar
            size="xl"
            variant="circular"
            src={image}
            alt="tania andrew"
            className=" !rounded-tl-[200px] "
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between">
              <p className=" text-[#151515] text-xl ">
                {name} - - - - - - - - - -
              </p>
              <div className=" text-[#D99904] flex items-center gap-0">
                ${price}
              </div>
            </div>
            <Typography color="blue-gray" className=" max-w-sm mt-3">{recipe}</Typography>
          </div>
        </CardHeader>

      </Card>
        </>
    );
};

export default MenuItem;



   
