import axios from 'axios';

export const FETCH_QR_START = 'FETCH_QR_START';
export const FETCH_QR_SUCCESS = 'FETCH_QR_SUCCESS';
export const FETCH_QR_FAIL = 'FETCH_QR_FAIL';

//find a way to get the URL value from App.js to this file
// const URL =

export const getQR = () => {
  dispatchEvent({ type: FETCH_QR_START });
  axios
    .get(`https://api.qrserver.com/v1/create-qr-code/?data=${URL}&size=300x300`)
    .then((res) => {
      console.log(res);
      //read this log data to find out how to label the QR image (res.data.QR_img  <-- something like that?)
    })
    .catch((error) => {
      console.log(error);
    });
};
