// const API_BASE_URL = 'http://192.168.99.194:8002';
// const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
// export const LOGIN = getApiUrl('/user/loginUser');
// export const SIGNUP = getApiUrl('/user/registerUser');
// export const UPLOAD_IMAGE = getApiUrl('/common/uploadFile')


const API_BASE_URL = 'https://api.talktier.com';
const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const SEND_OTP = getApiUrl('/user/v1/loginSignupOtp'); 
export const OTP_VERIFY=getApiUrl('/user/v1/verifyOtp')

export const USER_POSTS=getApiUrl('/user/v1/getUserSearch');
export const SEARCH = getApiUrl('/user/v1/getUserNearMe');