const basic_url = "http://localhost:5000/furniture";

export const GetAllFurniture = async () => {
  return await fetch(`${basic_url}`, {
    headers: {
      Authorization: `bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .catch((error) => console.log({ error: "the method get isnt work" }));
};
export const GetFurnitureById = async () => {
  try {
    return await fetch(`${basic_url}`, {
      headers: {
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .catch((error) => console.log({ error: "the method getById isnt work" }));
  } catch (error) {
    console.log("error in method getById");
  }
};
export const PostFurniture = async (userData) => {
  try {
    return await fetch(`${basic_url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(userData),
    });
  } catch (error) {
    console.log("error in method post");
  }
};
export const PutFurniture = async (userData) => {
  try {
    return await fetch(`${basic_url}/id`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(userData),
    });
  } catch (error) {
    console.log("error in method put");
  }
};
export const DeleteFurniture = async (userData) => {
  try {
    return await fetch(`${basic_url}/id`, {
      method: "DELETE",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
  } catch (error) {
    console.log("error in method delete");
  }
};
