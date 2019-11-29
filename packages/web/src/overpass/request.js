export const request = async () => {
  try {
    const response = await fetch('');

    return await response.json();
  } catch (e) {
    console.error(e);
  }
};
