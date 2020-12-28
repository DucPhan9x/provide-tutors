import React, { useState } from "react";
import {
  TutorStudent,
  TutorManagement,
  StudentManagement,
  Statistic,
  Feedback,
} from "../../../components/dashboard/admin";

import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

const HomeAdmin = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="home_admin">
      <div className="nav_bg">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Tutor - Student
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Tutor management
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Student management
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              Statistic
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "5" })}
              onClick={() => {
                toggle("5");
              }}
            >
              Feedback
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <TutorStudent />
          </TabPane>
          <TabPane tabId="2">
            <TutorManagement />
          </TabPane>
          <TabPane tabId="3">
            <StudentManagement />
          </TabPane>
          <TabPane tabId="4">
            <Statistic />
          </TabPane>
          <TabPane tabId="5">
            <Feedback />
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};
export default HomeAdmin;
