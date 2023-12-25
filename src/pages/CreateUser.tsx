import React, { useReducer } from "react";
import { initialState, reducers } from "../utils/reducers";
import { Button, Flex } from "@radix-ui/themes";
import { createUser } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
  const [state, dispatch] = useReducer(reducers, initialState);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUser(state.username, state.email, state.city).then((res) => {
      console.log(res);
      alert("New user is created");
      navigate("/");
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
          Create User
        </Button>
      </Flex>
    </form>
  );
}
