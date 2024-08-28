

// eslint-disable-next-line react/prop-types
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=" text-center mt-24 mb-12">
            <p className="  text-[#D99904] font-medium text-lg mb-8">-  -  -  {subHeading}  -  -  -</p>
            <h1 className=" text-4xl uppercase border-y-4 py-5 max-w-screen-sm mx-auto ">{heading}</h1>
        </div>
    );
};

export default SectionTitle;