export const getTasks = async (quantity = 3) => {
  const url = `http://lorem-faker.vercel.app/api?quantity=${quantity}`;

  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};