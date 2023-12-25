import React, { useEffect, useReducer } from "react";
import { initialState, reducers } from "../utils/reducers";
import { Button, Flex } from "@radix-ui/themes";
import { USER_API, editUserDetail } from "../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function CreateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducers, initialState);
  useEffect(() => {
    editUserDetail(`${id}`).then((res) => {
      const { city, email, username } = res;
      dispatch({
        type: "INPUT",
        payload: { name: "username", value: username },
      });
      dispatch({
        type: "INPUT",
        payload: { name: "email", value: email },
      });
      dispatch({
        type: "INPUT",
        payload: { name: "city", value: city },
      });
    });
  }, [id]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .put(`${USER_API}/${id}`, {
        username: state.username,
        email: state.email,
        city: state.city,
      })
      .then(() => {
        alert("User details updated successfully");
        navigate("/");
      })
      .catch(() => {
        alert("Failed to update user details");
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  return (
    <form className="w-[500px] mx-auto block p-4" onSubmit={handleSubmit}>
      <Flex
        direction="column"
        align="center"
        gap="4"
        justify="center"
        className="h-[80vh]"
      >
        <input
          onChange={handleChange}
          value={state.username}
          className="px-2 py-4 border-2 w-96 rounded"
          type="text"
          name="username"
          placeholder="Enter your username"
        />
        <input
          onChange={handleChange}
          value={state.email}
          className="px-2 py-4 border-2 w-96 rounded"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <input
          onChange={handleChange}
          value={state.city}
          className="px-2 py-4 border-2 w-96 rounded"
          type="text"
          name="city"
          placeholder="Enter your city"
        />
        <Button color="blue" className="w-96 cursor-pointer px-2 py-4" size="3">
          Update user
        </Button>
      </Flex>
    </form>
  );
}
