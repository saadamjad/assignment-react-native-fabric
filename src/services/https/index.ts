import axios from 'axios';

export class HttpService {
	getTimeOutDuration() {
		const timeOutDuration = 15000;
		return timeOutDuration;
	}

	// we get headers and other dynamic parameters but no need for this applications thats why I didn't add those
	async get(url: string): Promise<any> {
		const headers: any = {};
		return axios.get(url);
	}
}