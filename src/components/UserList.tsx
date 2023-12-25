import { useEffect, useState } from "react";
import { deleteUser, getUserPost } from "../utils/api";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Loading from "./Loading";
import { Edit2, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
interface UserType {
  id: string;
  email: string;
  username: string;
  city: string;
}

export default function UserList() {
  const [user, setUser] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = (id: string) => {
    deleteUser(id).then(() => {
      alert("User is deleted");
    });
  };

  useEffect(() => {
    setTimeout(() => {
      getUserPost().then((res) => {
        setUser(res);
        setLoading(false);
      });
    }, 2000);
  }, []);

  if (loading) return <Loading />;

  return (
    <Box px="9">
      <Flex align="center" justify="center" wrap="wrap" gap="3">
        {user.map((user) => (
          <Box className="my-5 bg-gray-100 p-4 w-96" key={user.id}>
            <Flex direction="column" gap="2">
              <Heading size="5">Username:{user.username}</Heading>
              <Text>Email:{user.email}</Text>
              <Flex justify="between" align="center">
                <Text>City:{user.city}</Text>
                <Box>
                  <Flex gap="2">
                    <Link to={`/edit/${user.id}`}>
                      <Edit2 size={16} className=" cursor-pointer" />
                    </Link>
                    <Trash2
                      size={16}
                      className=" cursor-pointer"
                      onClick={() => handleDelete(user.id)}
                    />
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
