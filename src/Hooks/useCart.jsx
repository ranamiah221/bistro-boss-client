import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {
    const {user}= useAuth()
    const axiosSecure = useAxiosSecure();
    const {data: carts =[], refetch } = useQuery({
        queryKey:['cart', user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/carts?email=${user?.email}`)
            return res.data;
        }
    })
     return [carts, refetch];
};

export default useCart;