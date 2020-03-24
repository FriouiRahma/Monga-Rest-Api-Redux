import {Get_MONGAS} from './type';
import axios from 'axios';


export const getMongalist=()=>dispatch=>{
    axios.get("/getmonga").then(res=>{
        dispatch({
            type:Get_MONGAS,
            payload:res.data
        });
    });
};

export const deletMonga=(id)=>dispatch=>{
    axios.delete(`/delemonga/${id}`).then(()=>{
        dispatch(getMongalist())
    });
};

export const addMonga=(newmonga)=>dispatch=>{
    axios.post("/addmMonga",newmonga).then(()=>{
        dispatch(getMongalist())

    })
}
export const updateMonga=(id,MongaUpdate)=>dispatch=>{
    axios.put(`updatemonga/${id}`,MongaUpdate).then(()=>{
        dispatch(getMongalist())
    })
}