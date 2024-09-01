import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";

import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

  const image_hoisting_key =  import.meta.env.VITE_IMAGE_HOISTING_KEY
  const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`

const AddItems = () => {

  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()

  const {
    register,
    handleSubmit,
    reset
    // formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const itemInfo = data;
    console.log(itemInfo)

    const imgFile = {image: itemInfo.image[0]}

    const result = await axiosPublic.post(image_upload_api, imgFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })

    console.log(result.data);

    if(result.data.success){
        const menuItem = {
        name: itemInfo.name,
        price: parseFloat(itemInfo.price),
        category: itemInfo.category,
        recipe: itemInfo.recipe,
        image: result.data.data.display_url
      }
      console.log(menuItem);

        const menuResponse = await axiosPublic.post("/menu", menuItem)

      console.log(menuResponse.data);
      
      if(menuResponse.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Item has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        reset()
      }

      
    }
    // if(result.data.success){
    //   //post item in menu

    //   const menuItem = {
    //     name: data.name,
    //     price: parseFloat(data.price),
    //     category: data.category,
    //     recipe: data.recipe,
    //     image: result.data.data.display_url
    //   }

    //   const menuResponse = await axiosPublic.post("/menu", menuItem)

    //   console.log(menuResponse.data);
      
    //   if(menuResponse.data.insertedId){
    //     Swal.fire({
    //       position: "top-end",
    //       icon: "success",
    //       title: "Item has been saved",
    //       showConfirmButton: false,
    //       timer: 1500
    //     });
    //     reset()
    //   }

    // }
    

  };

  return (
    <>
    <div className="flex justify-center items-center mb-12 flex-col w-full">
      <div className="">
        <SectionTitle  heading={"Add An Item"} subHeading={"What's New"}></SectionTitle>
      </div>
    <div className=" w-full  bg-[#F3F3F3] px-12 py-8 ">
      <Card color="transparent" className=" w-full" shadow={false}>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
          <div className="mb-1 flex flex-col gap-6 !w-full">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Recipe name
            </Typography>
            <Input
              {...register("name", { required: true })}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 !w-full focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

            <div className=" flex justify-center items-center gap-8 w-full">
              <div className="w-full  ">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Category
                </Typography>
                <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  {...register("category", { required: true })}
                  label="Select Food Category"
                >
                  <option value="salad">salad</option>
                  <option value="dessert">dessert</option>
                  <option value="pizza">pizza</option>
                  <option value="soup">soup</option>
                  <option value="drinks">drinks</option>
                </select>
              </div>
              <div className=" w-full">
                <Typography variant="h6" color="blue-gray" className="mb-3">
                  Price
                </Typography>
                <Input
                  {...register("price", { required: true })}
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 !w-full focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
            </div>

            <div>
              <Textarea
                {...register("recipe", { required: true })}
                label="Message"
                rows={9}
              />
            </div>
            <div>
                  
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Upload file</label>
              <input {...register("image", { required: true })} className="block  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />

            </div>
          </div>
          <Button  type="submit" className="mt-6">
            Add Item
          </Button>
            
          
        </form>
      </Card>
    </div>
    </div>
    </>
  );
};

export default AddItems;
