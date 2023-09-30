import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";
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
import { useAppStateContent } from "./context/AppStateContext";
import ProtectedRoute from "./routes/ProtectedRoute";
const App = () => {
  const { token } = useAppStateContent();
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route
          path="registration"
          element={
            <ProtectedRoute token={token}>
              <CreateAccount />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<SignIn />} />
        <Route
          path="changepassword"
          element={
            <ProtectedRoute token={token}>
              <ChangePassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="passwordchanged"
          element={
            <ProtectedRoute token={token}>
              <ChangePassSuccess />
            </ProtectedRoute>
          }
        />
        <Route
          path="resetpassword"
          element={
            <ProtectedRoute token={token}>
              <RestPassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="paswordsuccess"
          element={
            <ProtectedRoute token={token}>
              <ResetPassSuccess />
            </ProtectedRoute>
          }
        />

        <Route
          path="registration"
          element={
            <ProtectedRoute token={token}>
              <CreateAccount />
            </ProtectedRoute>
          }
        />

        <Route
          path="dashboard"
          element={
            <ProtectedRoute token={token}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="projects"
          element={
            <ProtectedRoute token={token}>
              <Project />
            </ProtectedRoute>
          }
        />
        <Route
          path="grades"
          element={
            <ProtectedRoute token={token}>
              <Grades />
            </ProtectedRoute>
          }
        />

        <Route
          path="classroom"
          element={
            <ProtectedRoute token={token}>
              <Classroom />
            </ProtectedRoute>
          }
        />
        <Route
          path="classroom/:id"
          element={
            <ProtectedRoute token={token}>
              <ClassRsc />
            </ProtectedRoute>
          }
        />
        <Route
          path="classroom/assignment/:id"
          element={
            <ProtectedRoute token={token}>
              <AssignPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="assignments"
          element={
            <ProtectedRoute token={token}>
              <Assignment />
            </ProtectedRoute>
          }
        />
        <Route
          path="new/assignments"
          element={
            <ProtectedRoute token={token}>
              <NewAssig />
            </ProtectedRoute>
          }
        />
        <Route
          path="assignments/:assignmentId"
          element={
            <ProtectedRoute token={token}>
              <AssignmentList />
            </ProtectedRoute>
          }
        />

        <Route
          path="tracks"
          element={
            <ProtectedRoute token={token}>
              <Track />
            </ProtectedRoute>
          }
        />
        <Route
          path="tracks/:id"
          element={
            <ProtectedRoute token={token}>
              <TracksDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="modules"
          element={
            <ProtectedRoute token={token}>
              <Module />
            </ProtectedRoute>
          }
        />
        <Route
          path="new/module"
          element={
            <ProtectedRoute token={token}>
              <NewModule />
            </ProtectedRoute>
          }
        />

        <Route
          path="groups"
          element={
            <ProtectedRoute token={token}>
              <Group />
            </ProtectedRoute>
          }
        />
        <Route
          path="groups/:groupId"
          element={
            <ProtectedRoute token={token}>
              <SingleGroup />
            </ProtectedRoute>
          }
        />
        <Route
          path="notification"
          element={
            <ProtectedRoute token={token}>
              <Notification />
            </ProtectedRoute>
          }
        />

        <Route
          path="mentors"
          element={
            <ProtectedRoute token={token}>
              <Mentors />
            </ProtectedRoute>
          }
        />
        <Route
          path="mentees"
          element={
            <ProtectedRoute token={token}>
              <Mentees />
            </ProtectedRoute>
          }
        />
        <Route
          path="mentees-profile/:id"
          element={
            <ProtectedRoute token={token}>
              <MenteesProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="settings"
          element={
            <ProtectedRoute token={token}>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="cohort/:cohortId"
          element={
            <ProtectedRoute token={token}>
              <CohortClass />
            </ProtectedRoute>
          }
        />

        <Route
          path="cohort-bootcamp"
          element={
            <ProtectedRoute token={token}>
              <CohortBoot />
            </ProtectedRoute>
          }
        />
        <Route
          path="cohort-bootcamp/:id"
          element={
            <ProtectedRoute token={token}>
              <CohortDetails />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
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
