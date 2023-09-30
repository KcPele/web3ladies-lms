import axios from "axios";
const appUrl = "https://web3ladies-backend.herokuapp.com";
export const getAllRequest = (url, token) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${appUrl}/${url}`, {
        headers: {
          Authorization: `Bearer ${
            token ? token : JSON.parse(localStorage.getItem("tokenUser"))
          }`,
        },
      })

      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

export const getRequest = (url, id, token) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${appUrl}/${url}/${id}`, {
        headers: {
          Authorization: `Bearer ${
            token ? token : JSON.parse(localStorage.getItem("tokenUser"))
          }`,
        },
      })

      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
