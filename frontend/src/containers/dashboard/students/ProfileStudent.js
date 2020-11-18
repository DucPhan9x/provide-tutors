import React from "react";
import { Switch, Route } from "react-router-dom";
import DashboardProfileParentLayout from "../../../components/layout/DashboardProfileStudentLayout";
import {
  GeneralInfo,
  Password,
} from "../../../components/dashboard/student/profile";
import { ModalUpdatePicture } from "../../../components/common";

const ProfileStudent = () => {
  return (
    <div>
      <DashboardProfileParentLayout>
        <Switch>
          <Route path="/dashboard/student/profile" exact>
            <GeneralInfo />
          </Route>
          <Route path="/dashboard/student/profile/password" exact>
            <Password />
          </Route>
        </Switch>
      </DashboardProfileParentLayout>
      <ModalUpdatePicture />
    </div>
  );
};
export default ProfileStudent;
