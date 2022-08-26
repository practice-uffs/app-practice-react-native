import axios from "axios";
import Storage from "./storage";
import {
	APP_ENV,
	API_PROD_URL,
	API_DEV_URL
} from '@env';

const API = {};
API.url = APP_ENV == "prod" ? API_PROD_URL : API_DEV_URL;

API.req = axios.create({
	baseURL: this.url,
});

API.requestLogin = async function (username, password) {
	return await this.req.post(this.url + "auth", {
		"user": username,
		"password": password,
		"app_id": "1"
	}).then((res) => {
		console.log(res);
		let data = JSON.parse(res.data);
		Storage.setUserData(data.user);
		if (data.passport) {
			Storage.setUserToken(data.passport);
			Storage.setIsSignedIn(true);
			this.req.defaults.headers.common['Authorization'] = 'Bearer ' + data.passport
			return true;
		} else {
			return false;
		}
	}).catch((err) => {
		return false;
	});
};

export default API;