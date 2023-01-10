import apiInstance from './api'

export const apiCrearUsuario = (params) => {
    return apiInstance.post('/api/login', params)
    .then(res =>{
            return res.data;
    })
    .catch(error => {
        console.error(error.response);
        throw error.response
    });
}