import { actionTypes } from "../Constantes/actionTypes";
import { takeEvery, call, put } from'redux-saga/effects';
import { apiCrearUsuario } from "../api/crearUsuario";

export const watchCrearUsuario  = function * (){
    yield takeEvery(actionTypes.CREAR_USUARIO, fetchCrearUsuario)
}

function* fetchCrearUsuario (action){
    try{
        const data = yield call(apiCrearUsuario, action.data)
        if(data){          
            //CREAR USUARIO
        }
    }catch(err){
        console.log(err)
    }
}