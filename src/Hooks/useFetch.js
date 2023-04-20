import { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url, customParams = {}) =>{

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const options = {
        method: "get",
        baseURL: "https://api.themoviedb.org/3/",
        url,
        params : {
            api_key: "e3ef60114f3455d412ea55db83f798b2",
            ...customParams
        }
    }

    let page = customParams.page;

    useEffect(()=>{
        const fetchData = async () => {
            try {
                let {data} = await axios(options);
                setData(data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    },[page]);

    return [data, loading, error]
}