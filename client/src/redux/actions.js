import axios from "axios"
export const LOGIN = "LOGIN"
export const DELETETAKS = "DELETETAKS"
export const UPDATETAKS = "UPDATETAKS"
export const GETALLTAKS = "GETALLTAKS"
export const CREATETAKS = "CREATETAKS"
export const FILTERTAKS = "FILTERTAKS"



//actions login register
export const loginUser = (body) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`/user/login`, body)
            dispatch({ type: LOGIN, payload: response.data })
        } catch (error) {
            console.log(error.message)
        }
    }
}
export const newUser = (body) => {

    return async (dispatch) => {
        try {
            const { data } = await axios.post(`/user/signin`, body)
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
export const filterTaks = (category, UserId) => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`/taks/${UserId}`)
            dispatch({ type: FILTERTAKS, payload: category == "all" ? data :  data.filter((item) => item.priority === category) })
        } catch (error) {
            console.log(error.message);
        }
    }
}

  









