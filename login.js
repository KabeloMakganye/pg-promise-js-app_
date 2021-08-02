import Api from './services/Api'
export default {
    clockin (credentials){
       return Api().post('clockin',credentials)
    }
}