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
	baseURL: API.url,
});

API.requestLogin = async function (username, password) {
	return await this.req.post(this.url + "auth", {
		"user": username,
		"password": password,
		"app_id": "4"
	}).then((res) => {
		let data = res.data;
		if (data.passport) {
			//add data to Storage
			Storage.setUserToken(data.passport);
			Storage.setUserData(data.user);

			this.req.defaults.headers.common['Authorization'] = 'Bearer ' + data.passport
			return data;
		} else {
			return false;
		}
	}).catch((err) => {
		console.log(err);
		return false;
	});
};

API.requestLogout = function () {
	Storage.setUserToken("");
	Storage.setUserData({});
	this.req.defaults.headers.common['Authorization'] = '';
};

API.ping = async function () {
	return await this.req.get(this.url + "ping").then((res) => {
		if (res.status != 200) {
			this.requestLogout();
			return false;
		}
		return true;
	}).catch((err) => {
		return false;
	})
}

export default API;