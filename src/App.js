import React from "react";

import { Routes, Route } from "react-router-dom";
import Registration from "./Pages/Registration";
import CreateAccount from "./Pages/CreateAccount";

import SignIn from "./Pages/Signin";
import ChangePassword from "./Pages/Mentees/ChangePassword";
import ChangePassSuccess from "./Pages/Mentees/ChangePassSuccess";
import RestPassword from "./Pages/ResetPassword";
import ResetPassSuccess from "./Pages/ResetPassSuccess";

import {
  Settings,
  Classroom,
  Dashboard,
  Grades,
  Project,
  CohortClass,
  Assignment,
  Track,
  Module,
  Group,
  Notification,
  SingleGroup,
  Mentors,
  Mentees,
  MenteesProfile,
} from "./Pages";
import ClassRsc from "./Pages/ClassRsc";
import TracksDetails from "./Pages/Admin/TracksDetails";
import NewAssig from "./Pages/Admin/NewAssig";
import AssignmentList from "./Pages/Admin/AssignmentList";
import NewModule from "./Pages/Admin/NewModule";
import AssignPage from "./Components/Curriculum/AssignPage";
import CohortBoot from "./Pages/Admin/CohortBoot";
import CohortDetails from "./Pages/Admin/CohortDetails";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="registration" element={<CreateAccount />} />
        <Route path="login" element={<SignIn />} />
        <Route path="changepassword" element={<ChangePassword />} />
        <Route path="passwordchanged" element={<ChangePassSuccess />} />
        <Route path="resetpassword" element={<RestPassword />} />
        <Route path="paswordsuccess" element={<ResetPassSuccess />} />

        <Route path="registration" element={<CreateAccount />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<Project />} />
        <Route path="grades" element={<Grades />} />

        <Route path="classroom" element={<Classroom />} />
        <Route path="classroom/:id" element={<ClassRsc />} />
        <Route path="classroom/assignment/:id" element={<AssignPage />} />

        <Route path="assignments" element={<Assignment />} />
        <Route path="new/assignments" element={<NewAssig />} />
        <Route path="assignments/:assignmentId" element={<AssignmentList />} />

        <Route path="tracks" element={<Track />} />
        <Route path="tracks/:id" element={<TracksDetails />} />

        <Route path="modules" element={<Module />} />
        <Route path="new/module" element={<NewModule />} />

        <Route path="groups" element={<Group />} />
        <Route path="groups/:groupId" element={<SingleGroup />} />
        <Route path="notification" element={<Notification />} />

        <Route path="mentors" element={<Mentors />} />
        <Route path="mentees" element={<Mentees />} />
        <Route path="mentees-profile/:id" element={<MenteesProfile />} />

        <Route path="settings" element={<Settings />} />
        <Route path="cohort/:cohortId" element={<CohortClass />} />

        <Route path="cohort-bootcamp" element={<CohortBoot />} />
        <Route path="cohort-bootcamp/:id" element={<CohortDetails />} />
      </Routes>
    </div>
  );
};

export default App;


// <TableContainer>
// <Table variant="simple">
//   <Thead>
//     <Tr color="grey">
//       {grades.header.map((item) => (
//         <Th key={item.id}>{item.type}</Th>
//       ))}
//     </Tr>
//   </Thead>
//   <Tbody w="600px">
//     {grades.list.map((item) => (
//       <Tr key={item.id}>
//         <Td bg="primary">{item.item}</Td>
//         <Td color="grey">
//           <span
//             className={`m-auto w-fit px-3 py-2 rounded-md  ${
//               item.status === "Completed"
//                 ? "text-primary bg-[#F2E7FF]"
//                 : "text-[#FF5F2D] bg-[#F2E7FF]"
//             }`}
//           >
//             {item.status}
//           </span>
//         </Td>
//         <Td>{item.due}</Td>
//         <Td color="grey">{item.weight}</Td>
//         <Td>{item.grade}</Td>
//       </Tr>
//     ))}
//   </Tbody>
// </Table>
// </TableContainer>