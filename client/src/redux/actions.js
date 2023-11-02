import axios from "axios"
export const LOGIN = "LOGIN"
export const DELETETAKS = "DELETETAKS"
export const UPDATETAKS = "UPDATETAKS"
export const GETALLTAKS = "GETALLTAKS"
export const CREATETAKS = "CREATETAKS"



//actions login register
export const login = (body) => {
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









