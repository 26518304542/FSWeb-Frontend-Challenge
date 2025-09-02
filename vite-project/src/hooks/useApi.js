import { useState, useEffect } from "react";
import api from "../api/axios";

export default function useApi(endpoint, method='get', body=null, dependencies=[]){

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        let cancel = false;

        const fetchData = async () =>{
            setLoading(true);
            try{
                const resp = await api[method](endpoint, body);
                if (!cancel) setData(resp.data);
            }catch(err){
                if (!cancel) setError(err);
            }finally{
                if (!cancel) setLoading(false);
            }
        };

        fetchData();
        return () => {cancel=true;};

    },dependencies)

    return {data, loading, error};
}