import PurchaseCard from "../PurchaseCard/PurchaseCard";


// eslint-disable-next-line react/prop-types
const OrderTab = ({item}) => {
    return (
        <>
            
            <div className=" grid grid-cols-3 justify-center items-center gap-20 my-28">
                {
                    // eslint-disable-next-line react/prop-types
                    item.map( item => <PurchaseCard key={item._id} item={item} />)
                }
            </div>
        </>
    );
};

export default OrderTab;