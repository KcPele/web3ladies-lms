import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Select,
  ModalFooter,
  Button,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";

const GroupSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newGroup, setNewGroup] = useState({ groupName: "", groupMembers: [] });
  const [groupMemberName, setGroupMemberName] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  let navigate = useNavigate();
  const handleGroupName = (event) => {
    setNewGroup({ ...newGroup, groupName: event.target.value });
  };
  const handleGroupMembersName = (event) => {
    setGroupMemberName(event.target.value);
  };
  const handleAddMember = () => {
    setNewGroup({
      ...newGroup,
      groupMembers: [
        ...newGroup.groupMembers,
        { id: 1, name: groupMemberName },
      ],
    });
    setGroupMemberName("");
  };

  const handleSubmit = () => {
    console.log(newGroup);
    setIsSuccess(true);
  };
  return (
    <div className="max-w-[1140px] ">
      <Modal
        size={isSuccess ? "sm" : "4xl"}
        isCentered={true}
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setIsSuccess(false);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          {!isSuccess && <ModalCloseButton />}
          <ModalBody>
            {isSuccess ? (
              <div className="flex py-8 justify-center items-center flex-col gap-8">
                <div className="bg-[#D9D9D9] rounded-full w-[74px] h-[74px]"></div>
                <p className="font-bold text-center ">
                  Group created <br /> successfully
                </p>
                <button
                  className=" bg-[#7D0BFE] text-white px-[63px] py-[15px] rounded "
                  onClick={() => {
                    onClose();
                    setIsSuccess(false);
                  }}
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="  px-2 py-[48px] bg-white rounded-2xl">
                <h4 className="font-bold text-xl">Create Group</h4>
                <div className="max-w-[350px] mt-[34px]">
                  <p className="">Group name</p>
                  <Input
                    value={newGroup.groupName}
                    onChange={handleGroupName}
                    placeholder="Enter group name"
                    size="lg"
                  />
                </div>

                <div className="mt-[29px] max-w-[525px]">
                  <p>Add members</p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <Input
                      value={groupMemberName}
                      onChange={handleGroupMembersName}
                      placeholder="Enter mentee name or email address"
                      size="lg"
                    />
                    <button
                      className={`${
                        groupMemberName.length > 20
                          ? "bg-[#7D0BFE]"
                          : "bg-[#9f62e6]"
                      } px-8 py-[10px] rounded text-white`}
                      disabled={!(groupMemberName.length > 20)}
                      onClick={() => {
                        handleAddMember();
                      }}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )}
          </ModalBody>

          {!isSuccess && (
            <ModalFooter>
              <Button
                onClick={handleSubmit}
                backgroundColor="#7D0BFE"
                color="white"
              >
                Create group
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">Group</h3>
        <button
          onClick={onOpen}
          className="flex justify-center text-[#7D0BFE] items-center"
        >
          {" "}
          <span className="text-3xl mr-1">+</span>Create group
        </button>
      </div>
      <div className="bg-white mt-5">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className=" text-[#AAA3B1] border-b-[1px] border-[#ECECEC]">
              <th className=" py-[22px] font-thin px-2 md:px-8">Group Name</th>
              <th className="md:px-4 py-[22px] font-thin">No of Members</th>
              <th className="md:px-4 py-[22px] font-thin">No of Tasks Done</th>
              <th className="md:px-4 py-[22px] font-thin text-center">Grade</th>
              <th className="px-2 md:px-8 py-[22px] font-thin text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-[#AAA3B1] border-b-[1px] border-[#ECECEC]">
              <td
                onClick={() => {
                  navigate("1");
                }}
                className=" px-2 md:px-8 py-[20px] cursor-pointer"
              >
                Dragonfiles{" "}
              </td>
              <td className=" md:px-4 py-[20px]">5</td>
              <td className=" md:px-4 py-[20px]">10</td>
              <td className=" md:px-4 py-[20px] text-center">A</td>
              <td className=" group relative px-2 md:px-8 py-[20px] text-right flex justify-end">
                <BsThreeDots size={24} className="" />
                <div className="absolute hidden group-hover:flex w-[146px] rounded right-10 bottom-10 px-4 drop-shadow py-[25px] bg-white  flex-col items-start gap-2">
                  <button className="text-[#858585]">Change role</button>
                  <button className="text-[#FF2F2F]">Delete member</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupSection;
