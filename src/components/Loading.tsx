import { useEffect, useState } from "react";
import { getUserPost } from "../utils/api";
import { Box, Flex, Heading, Text } from "@radix-ui/themes";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { Edit2, Trash2 } from "lucide-react";
interface UserType {
  id: string;
  email: string;
  username: string;
  city: string;
}

export default function Loading() {
  const [user, setUser] = useState<UserType[]>([]);
  useEffect(() => {
    getUserPost().then((res) => {
      setUser(res);
    });
  }, []);
  return (
    <Box px="9">
      <Flex align="center" justify="center" wrap="wrap" gap="3">
        {user.map((user) => (
          <Box className="my-5 bg-gray-100 p-4 w-96" key={user.id}>
            <Flex direction="column" gap="2">
              <Skeleton width={300} height={20} className="my-2" />
              <Skeleton width={300} height={20} className="my-2" />
              <Flex justify="between" align="center">
                <Skeleton width={300} height={20} className="my-2" />
                <Box>
                  <Flex gap="2">
                    <Skeleton width={300} height={20} className="my-2" />
                    <Skeleton width={300} height={20} className="my-2" />
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
