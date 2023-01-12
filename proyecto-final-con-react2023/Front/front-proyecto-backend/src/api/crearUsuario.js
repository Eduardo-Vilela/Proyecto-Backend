import apiInstance from './api'

export const apiCrearUsuario = (params) => {
    return apiInstance.post('/signup', params,{ headers: { "Content-Type": "multipart/form-data" } })
    .then(res =>{
            return res.data;
    })
    .catch(error => {
        console.error(error.response);
        throw error.response
    });
}