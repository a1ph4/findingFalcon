import { GET_FINAL } from "./types";
import axios from "axios";

export const getFinal = (planets, vehicles) => dispatch => {
  const headers={
    'Accept':'application/json'
  }
  axios.post("https://ﬁndfalcone.herokuapp.com/token",{}, {headers:headers}).then(res => {
    let token = res.data.token;
    let data={
      token:token,
      planet_names:planets,
      vehicle_names:vehicles
    }
    axios.post("https://ﬁndfalcone.herokuapp.com/find",data, {headers:headers}).then(res=>{
      dispatch({
        type:GET_FINAL,
        data:res.data
      })
    })
  });
};
