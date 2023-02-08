import React from "react";
import {
  Table,
  Box,
  Thead,
  Tbody,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

function MentorList({ currentPosts, loading }) {

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <Box h={"fit-content"}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr color="grey">
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Status</Th>
              <Th> </Th>
            </Tr>
          </Thead>
          <Tbody>
            {currentPosts.map((item) => (
              <Tr key={item.id}>
                <Td>{item.name}</Td>
                <Td>{item.email}</Td>
                <Td>{item.status}</Td>
                <Td> 
                <Menu bg="primary">
                  <MenuButton as={Button} bg="transparent" _hover={{ bg: "transparent"}} >
                    <BsThreeDots className="cursor-pointerml-auto text-[grey]" />
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      onClick={() => alert("Kagebunshin")}
                      fontWeight="semi-bold"
                      color={"red"}
                    >
                      Remove mentor
                    </MenuItem>
                  </MenuList>
                </Menu>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default MentorList;
