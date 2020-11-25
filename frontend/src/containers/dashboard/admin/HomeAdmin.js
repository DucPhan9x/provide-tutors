import React, { useState } from "react";
import {
  TutorStudent,
  UserAccount,
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
              User account
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Statistic
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
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
            <UserAccount />
          </TabPane>
          <TabPane tabId="3">
            <Statistic />
          </TabPane>
          <TabPane tabId="4">
            <Feedback />
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};
export default HomeAdmin;
