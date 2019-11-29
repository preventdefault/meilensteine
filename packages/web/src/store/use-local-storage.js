import { writable } from 'svelte/store';

export const useLocalStorage = (key, initialValue) => {
  let value = initialValue;

  const json = localStorage.getItem(key);
  if (json) {
    value = JSON.parse(json);
  }

  const { set, update, subscribe } = writable(value);

  subscribe(value => localStorage.setItem(key, JSON.stringify(value)));

  return {
    set,
    update,
    subscribe,
  };
};
