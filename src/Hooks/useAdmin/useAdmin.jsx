import { useQuery } from "@tanstack/react-query";
import useAuth from "../UseAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useAdmin = () => {

    const {user} = useAuth()
    const axiosSecure =  useAxiosSecure()

    const {data:isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async() => {
            const result = await axiosSecure.get(`/users/admin/${user?.email}`)
            console.log(result.data?.admin);
            
            return result.data?.admin
        }
    })

    return [isAdmin, isAdminLoading]
};

export default useAdmin;