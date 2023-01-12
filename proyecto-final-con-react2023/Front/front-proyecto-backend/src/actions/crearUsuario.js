
    import { actionTypes } from "../Constantes/actionTypes.js"

    export const setCrearUsuario = (data) => {
        return {
            type: actionTypes.CREAR_USUARIO,
            data
        }
    }