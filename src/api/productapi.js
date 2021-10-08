import instance from "./instance";

export const getAll = () => {
  const url = `/productlist`;
  return instance.get(url);
};

export const get = (id) => {
  const url = `/productlist/${id}`;
  return instance.get(url);
};

export const add = (product) => {
  const url = `/productlist`;
  return instance.post(url, product);
};

export const remove = (id) => {
  const url = `/productlist/${id}`;
  return instance.delete(url);
};

export const update = (product) => {
  const url = `/productlist/${product.id}`;
  return instance.put(url, product);
};
