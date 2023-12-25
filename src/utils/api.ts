import axios from "axios";
export const USER_API =
  "https://655310e65449cfda0f2e0f1d.mockapi.io/blog/users";

// get user post  =>GET

export const getUserPost = async () => {
  try {
    const res = await axios.get(USER_API);
    return res.data;
  } catch (error) {
    alert(error);
  }
};

// create new user  => POST

export const createUser = async (
  username: string,
  email: string,
  city: string
) => {
  try {
    const res = await axios.post(`${USER_API}`, { username, email, city });
    return res.data;
  } catch (error) {
    alert(error);
  }
};

// delete user  => DELETE

export const deleteUser = async (id: string) => {
  try {
    const res = await axios.delete(`${USER_API}/${id}`);
    return res.data;
  } catch (error) {
    alert(error);
  }
};

// get a single edit user details => PUT

export const editUserDetail = async (id: string) => {
  try {
    const res = await axios.get(`${USER_API}/${id}`);
    return res.data;
  } catch (error) {
    alert(error);
  }
};
