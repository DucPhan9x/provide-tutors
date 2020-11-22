import React, { useState } from "react";
import DashboardProfileStudentLayout from "../../../components/layout/DashboardProfileStudentLayout";
import {
  GeneralInfo,
  Password,
} from "../../../components/dashboard/student/profile";

import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

const ProfileStudent = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [openModalUpdatePicture, setOpenModalUpdatePicture] = React.useState(
    false
  );

  const handleModalUpdatePicture = (e) => {
    e.preventDefault();
    setOpenModalUpdatePicture(!openModalUpdatePicture);
  };

  return (
    <div>
      <DashboardProfileStudentLayout
        onOpenModalUpdateAvatar={handleModalUpdatePicture}
      >
        <div className="nav_bg">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                General Information
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Password
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <GeneralInfo />
            </TabPane>
            <TabPane tabId="2">
              <Password />
            </TabPane>
          </TabContent>
        </div>
      </DashboardProfileStudentLayout>
    </div>
  );
};
export default ProfileStudent;
