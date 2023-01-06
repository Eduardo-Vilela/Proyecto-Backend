import {all} from 'redux-saga/effects'

//IMPORTAR WATCHS
import { watchCrearUsuario } from './watchCrearUsuario'

export default function * rootSaga(){
    yield all([
        //DECLARO WATCHS
        watchCrearUsuario(),

    ])
}