import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {

    const [menu, setMenu] = useState([]);
    const [loader, setLoader] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:5000/menu')
    .then( res =>{
      setMenu(res.data)
      setLoader(false)
    })
      .catch((error) => console.log(error));
  }, []);

  return [menu, loader]

}

export default useMenu;