import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Dashboard = lazy(() => import("../Pages/Dashboard"));
const Project = lazy(() => import("../Pages/Project"));
const Grades = lazy(() => import("../Pages/Mentees/Grades"));
const Classroom = lazy(() => import("../Pages/Classroom"));
const ClassRsc = lazy(() => import("../Pages/ClassRsc"));
const AssignPage = lazy(() => import("../Components/Curriculum/AssignPage"));
const Settings = lazy(() => import("../Pages/Settings"));
const CohortClass = lazy(() => import("../Pages/CohortClass"));
const Assignment = lazy(() => import("../Pages/Admin/Assignment"));
const Track = lazy(() => import("../Pages/Admin/Track"));
const Module = lazy(() => import("../Pages/Module"));
const Group = lazy(() => import("../Pages/Group"));
const Notification = lazy(() => import("../Pages/Admin/Notification"));
const SingleGroup = lazy(() => import("../Pages/Admin/SingleGroup"));
const Mentors = lazy(() => import("../Pages/Mentors"));
const Mentees = lazy(() => import("../Pages/Mentees"));
const MenteesProfile = lazy(() => import("../Pages/Mentees/MenteesProfile"));
const TracksDetails = lazy(() => import("../Pages/Admin/TracksDetails"));
const NewAssig = lazy(() => import("../Pages/Admin/NewAssig"));
const AssignmentList = lazy(() => import("../Pages/Admin/AssignmentList"));
const NewModule = lazy(() => import("../Pages/Admin/NewModule"));
const CohortBoot = lazy(() => import("../Pages/Admin/CohortBoot"));
const CohortDetails = lazy(() => import("../Pages/Admin/CohortDetails"));
const ChangePassSuccess = lazy(() =>
  import("../Pages/Mentees/ChangePassSuccess")
);
const ChangePassword = lazy(() => import("../Pages/Mentees/ChangePassword"));
const ResetPassword = lazy(() => import("../Pages/ResetPassword"));
const ResetPassSuccess = lazy(() => import("../Pages/ResetPassSuccess"));
const CreateAccount = lazy(() => import("../Pages/CreateAccount"));
const PrivateRoute = () => {
  return [
    { path: "changepassword", element: <ChangePassword /> },
    { path: "passwordchanged", element: <ChangePassSuccess /> },
    { path: "resetpassword", element: <ResetPassword /> },
    { path: "paswordsuccess", element: <ResetPassSuccess /> },

    { path: "registration", element: <CreateAccount /> },

    { path: "dashboard", element: <Dashboard /> },
    { path: "projects", element: <Project /> },
    { path: "grades", element: <Grades /> },

    { path: "classroom", element: <Classroom /> },
    { path: "classroom/:id", element: <ClassRsc /> },
    { path: "classroom/assignment/:id", element: <AssignPage /> },

    { path: "assignments", element: <Assignment /> },
    { path: "new/assignments", element: <NewAssig /> },
    { path: "assignments/:assignmentId", element: <AssignmentList /> },

    { path: "tracks", element: <Track /> },
    { path: "tracks/:id", element: <TracksDetails /> },

    { path: "modules", element: <Module /> },
    { path: "new/module", element: <NewModule /> },

    { path: "groups", element: <Group /> },
    { path: "groups/:groupId", element: <SingleGroup /> },
    { path: "notification", element: <Notification /> },

    { path: "mentors", element: <Mentors /> },
    { path: "mentees", element: <Mentees /> },
    { path: "mentees-profile/:id", element: <MenteesProfile /> },

    { path: "settings", element: <Settings /> },
    { path: "cohort/:cohortId", element: <CohortClass /> },

    { path: "cohort-bootcamp", element: <CohortBoot /> },
    { path: "cohort-bootcamp/:id", element: <CohortDetails /> },
    { path: "*", element: <Navigate to="/dashboard" replace /> },
  ];
};

export default PrivateRoute;
