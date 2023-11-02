import axios from "axios"
export const LOGIN = "LOGIN"
export const DELETETAKS = "DELETETAKS"
export const UPDATETAKS = "UPDATETAKS"
export const GETALLTAKS = "GETALLTAKS"
export const CREATETAKS = "CREATETAKS"



//actions login register
export const loginUser = (body) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`/user/login`, body)
            console.log(response.data);
            dispatch({ type: LOGIN, payload: response.data })
        } catch (error) {
            console.log(error.message)
        }
    }
}
export const newUser = (body) => {
    console.log(body, "body");
    return async (dispatch) => {
        try {
            console.log("arriba de data");
            const { data } = await axios.post(`/user/create`, body)
            console.log(data);
            dispatch({ type: LOGIN, payload: data })
        } catch (error) {
            console.log(error.message)
        }
    }
}

// actions Taks
export const getAllTaks = (UserId) => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`/taks/${UserId}`)
            console.log("entre al all taks", data);
            dispatch({ type: GETALLTAKS, payload: data })
        } catch (error) {
            console.log(error.message);
        }
    }
}
export const createTaks = (body) => {
    return async () => {
        try {
            await axios.post(`/taks/create`, body)
            console.log("entre al create", body);
        } catch (error) {
            console.log(error.message);
        }
    }
}
export const deleteTaks = (id) => {
    return async () => {
        try {
            await axios.delete(`/taks/delete/${id}`)
        } catch (error) {
            console.log(error.message)
        }
    }
}
export const updateTaks = (id, body) => {
    return async () => {
        try {
            await axios.put(`/taks/update/${id}`, body)
        } catch (error) {
            console.log(error.message)
        }
    }
}
export const filtroPorEstadoCompleto = () => {
    return (dispatch) => {
     dispatch({ type: 'FILTRO_COMPLETO'})
    };
  };
  
  export const filtroPorEstadoPendiente = () => {
    return (dispatch) => {
      dispatch({type: 'FILTRO_PENDIENTE'})
    };
  };
  
  export const filtroPorUrgencia = () => {
    return (dispatch) => {
      dispatch({type: 'FILTRO_URGENCIA'})
    };
  };
  
  export const filtroPorMedia = () => {
    return (dispatch) => {
        dispatch({type: `FILTRO_MEDIA`})

    }
  }
export const filtroPorRegular = () => {
    return (dispatch) => {
       dispatch({ type: "FILTRO_REGULAR"})
    }
}
  // Otras acciones para otros filtros...
  









