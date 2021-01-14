export const BASE_URL = "/api";

const createUrl = (base, route) => `${base}${route}`;

export const getLinks = () => [
  createUrl(BASE_URL, "/link"),
  {
    method: "GET",
  }
];

export const filterLinks = (tag) => [
  createUrl(BASE_URL, `/link/?tag=${tag}`),
  {
    method: "GET",
  }
]

export const createLink = (payload) => [
  createUrl(BASE_URL, "/link"),
  {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify(payload)
  }
];

export const patchLink = (linkId, payload) => [
  createUrl(BASE_URL, `/link/?id=${linkId}`),
  {
    method: "PATCH",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify(payload)
  }
]

export const removeLink = (linkId) => [
  createUrl(BASE_URL, `/link/?id=${linkId}`),
  {
    method: "DELETE",
  }
]