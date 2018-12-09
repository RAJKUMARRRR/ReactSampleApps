import axios from 'axios';

const instance = axios.create({
    baseURL:'http://starlord.hackerearth.com/insta',
	headers:{"Access-Control-Allow-Origin": "*"}
});

instance.interceptors.request.use((request)=>{
	console.log(request);
	return request;
});
instance.interceptors.response.use((response)=>{
	console.log("response:",response);
	return response;
});

export default instance;