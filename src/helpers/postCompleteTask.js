export const postCompleteTask = async (id) => {
  const urlencoded = new URLSearchParams();

  const requestOptions = {
    method: "PUT",
    body: urlencoded,
    redirect: "follow",
  };

  fetch(`http://localhost:4000/api/v1/tasks/${id}`, requestOptions)
    .then((response) => response.text())
    .catch((error) => console.log("error", error));
};
