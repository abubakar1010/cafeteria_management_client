import { Button } from "@material-tailwind/react";


const DiscoverCafe = () => {
    return (
        <div className="bg-[url('https://i.postimg.cc/C14MJLz4/chef-service.jpg')] w-full h-[520px] bg-cover bg-center bg-no-repeat my-28 flex
         items-center ">
            <div className=" bg-[#272f3c] text-center text-white max-w-5xl px-40 py-28 mx-auto ">
                <h1 className=" text-3xl font-bold text-center mb-4 ">Bistro Boss</h1>
            <p className=" text-center">It{`'`}s official: our doors are finally open! Bistro is the name we{`'`}ve carefully chosen for our new restaurant, with the aim of offering you an emotionally rich experience when tasting each of our dishes. Find us at 17 Rue Bergère, in the 9th arrondissement of Paris, just a few minutes from the Comptoir National d{`'`}Escompte de Paris monument.</p>
            <Button variant="text" className=" mt-8 text-[#BB8506] uppercase text-xl rounded-md border-b-2 border-[#FFF]  " >Discover</Button>

            </div>
            
        </div>
    );
};

export default DiscoverCafe;