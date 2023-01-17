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

API.requestLogin = async function (username, password, campus) {
	return await this.req.post(this.url + "auth", {
		"user": username,
		"password": password,
		"app_id": "4"
	}).then((res) => {
		let data = res.data;
		if (data.passport) {
			//add data to Storage
			Storage.setUserToken(data.passport);
			Storage.setUserData(Object.assign(data.user, {campus: campus}));
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

API.getRequestedServices = async function (page = 1) {
	return await this.req.get(this.url + "mural/orders?page="+page).then(async (res) => {
		let data = res.data;
		if (res.status != 200) {
			return [];
		}
		let services = data.data;
		let meta = data.meta;
		let servicesToSave = [];
		
		for (let i = 0; i < services.length; i++) {
			servicesToSave[i] = {
				id: services[i].id,
				status: services[i].status,
				title: services[i].title,
				description: services[i].description,
				created_at: services[i].created_at
			};
		}

		if (meta.current_page != meta.last_page) {
			return servicesToSave.push(await API.getRequestedServices(page += 1));
		}
		
		return servicesToSave;
	});
};

API.getRuMenu = async function (campus) {
	return await this.req.get(this.url + `ru-menu/?campus=${campus}`).then((res) => {
		if (res.status != 200) {
			return false;
		}
		return res.data;
	}).catch((err) => {
		console.log(err);
		return false;
	})
}

API.getNews = async function () {
	return await axios.get('https:/practice.uffs.edu.br/feed.xml').then((response) => {
		const stateFeed = [];
		if (response.status != 200) {
			return false;
		}
		let feed = new XMLParser().parseFromString(response.data);
		feed.children[0].children.forEach(element => {
			if(element.name = 'item'){
			if(element.children.length == 8){
				stateFeed.push(element.children);
			}
			}
		});
		this.setUserData(stateFeed);
	}).catch((err) => {
		console.log(err);
		return false;
	})
}

export default API;