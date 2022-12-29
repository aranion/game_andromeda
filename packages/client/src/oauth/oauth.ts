import { BASE_URL } from 'src/constants/vars';

const REDIRECT_URI = 'http://localhost:3000/';

type GetServiceIdRespons = {
  service_id: string;
};

export async function getServiceId() {
  return await fetch(
    `${BASE_URL}/oauth/yandex/service-id?redirect_uri=${REDIRECT_URI}`
  )
    .then(resp => resp.json())
    .then((ans: GetServiceIdRespons) => ans.service_id)

    .catch(error => console.log(error));
}

export function routeYandexOauth() {
  getServiceId().then(clientId => {
    window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}&redirect_uri=${REDIRECT_URI}`;
  });
}

export function createOauthProfile(code: string) {
  return fetch(`${BASE_URL}/oauth/yandex`, {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code: code,
      redirect_uri: REDIRECT_URI,
    }),
  });
}
