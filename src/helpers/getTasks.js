export const getTasks = async (quantity = 3) => {
  const url = `http://localhost:4000/api/v1/tasks?numberTask=${quantity}`;
 
  try {
    const resp = await fetch(url);
    return await resp.json();
  } catch (error) {
    console.error(error);
  }
};
