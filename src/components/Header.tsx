import { Flex, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Flex justify="center" align="center" className="my-2" gap="4">
        <Link to={"/"}>Home</Link>
        <Link to={"/create"}>Create</Link>
      </Flex>
    </header>
  );
}
