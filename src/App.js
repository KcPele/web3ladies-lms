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
} from "./Pages";
import ClassRsc from "./Pages/ClassRsc";
import TracksDetails from "./Pages/Admin/TracksDetails";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="registration" element={<CreateAccount />} />
        <Route path="login" element={<SignIn />} />
        <Route path="changepassword" element={<ChangePassword />} />
        <Route path="passwordchanged" element={<ChangePassSuccess />} />
        <Route path="resources" element={<ClassRsc />} />
        <Route path="resetpassword" element={<RestPassword />} />
        <Route path="paswordsuccess" element={<ResetPassSuccess />} />

        <Route path="registration" element={<CreateAccount />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<Project />} />
        <Route path="grades" element={<Grades />} />
        <Route path="classroom" element={<Classroom />} />

        <Route path="assignments" element={<Assignment />} />
        <Route path="tracks" element={<Track />} />
        <Route path="tracks/:id" element={<TracksDetails />} />
        <Route path="modules" element={<Module />} />
        <Route path="groups" element={<Group />} />
        <Route path="groups/:groupId" element={<SingleGroup />} />
        <Route path="notification" element={<Notification />} />

        <Route path="mentors" element={<Mentors />} />
        <Route path="mentees" element={<Mentees />} />

        <Route path="settings" element={<Settings />} />
        <Route path="cohort/:cohortId" element={<CohortClass />} />
      </Routes>
    </div>
  );
};

export default App;
