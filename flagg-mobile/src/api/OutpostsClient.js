import RNFetchBlob from 'rn-fetch-blob';

const BASE_URL = 'http://10.0.2.2:3500';

export const getAllOutposts = async () => {
  const url = `${BASE_URL}/api/outposts/all`;

  const objectFromUrl = await fetch(url);
  const data = await objectFromUrl.json();

  return { data };
};

export const getOutpostsFor = async (uuid) => {
  const url = `${BASE_URL}/api/outposts`;
  const options = {
    method: 'GET',
    headers: {
      Authorization: uuid
    }
  };

  const objectFromUrl = await fetch(url, options);
  const data = await objectFromUrl.json();

  return { data };
};

export const editOutpost = async (uuid, body) => {
  const url = `${BASE_URL}/api/update`;
  const options = {
    method: 'PUT',
    headers: {
      Authorization: uuid,
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(body)
  };

  const objectFromUrl = await fetch(url, options);
  const data = await objectFromUrl.json();

  return { data };
};

export const getBeach = async (uuid) => {
  const url = `${BASE_URL}/api/beaches/${uuid}`;

  const objectFromUrl = await fetch(url);
  const data = await objectFromUrl.json();

  return { data };
};

export const login = async (body) => {
  const url = `${BASE_URL}/api/login`;
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };

  const objectFromUrl = await fetch(url, options);
  const data = await objectFromUrl.json();

  return { data };
};
