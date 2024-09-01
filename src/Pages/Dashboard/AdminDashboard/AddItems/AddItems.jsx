import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className=" w-full flex justify-center items-center my-12 bg-[#F3F3F3] px-12 py-8 ">
      <Card color="transparent" className=" w-full" shadow={false}>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-full">
          <div className="mb-1 flex flex-col gap-6 !w-full">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Recipe name
            </Typography>
            <Input
              {...register("recipeName", { required: true })}
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
                <Select
                  {...register("category", { required: true })}
                  label="Select Food Category"
                  className=" "
                >
                  <Option value="salad">salad</Option>
                  <Option value="dessert">dessert</Option>
                  <Option value="pizza">pizza</Option>
                  <Option value="soup">soup</Option>
                  <Option value="drinks">drinks</Option>
                </Select>
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
                {...register("message", { required: true })}
                label="Message"
                rows={9}
              />
            </div>
          </div>
          <Button type="submit" className="mt-6">
            Add Item
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddItems;
