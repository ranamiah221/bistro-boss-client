import axios from "axios";
import { useEffect, useState } from "react";


const useMenu = () => {
    const [items, setItems]=useState([])
    useEffect(()=>{
        const getData =async()=>{
            const {data} = await axios.get('http://localhost:5000/menus')
            setItems(data)
        } 
        getData()
    },[])
    return [items]
};

export default useMenu;