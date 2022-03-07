import React from 'react';
import '../styles/sidebar.css';
import { NavLink } from 'react-router-dom';
import mini from '../images/mini.jpg'

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const SideBar = () => {
  return (
    <div className="sidebar">
      <CDBSidebar>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}></CDBSidebarHeader>
        <CDBSidebarHeader>
        <img src={mini} alt="profile" className='img-thumbnail rounded-circle'/>
        </CDBSidebarHeader>

        <CDBSidebarContent  className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact="true" to="/" activeclassname="activeClicked">
            <CDBSidebarMenuItem className="sidebar-item" icon="th-large">Home</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/profile" activeclassname="activeClicked">
            <CDBSidebarMenuItem className="sidebar-item" icon="sticky-note">Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/opps" activeclassname="activeClicked">
            <CDBSidebarMenuItem className="sidebar-item" icon="columns">Opportunities</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/roles" activeclassname="activeClicked">
            <CDBSidebarMenuItem className="sidebar-item" icon="book">Roles</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/events" activeclassname="activeClicked">
            <CDBSidebarMenuItem className="sidebar-item" icon="credit-card">Events</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/calendar" activeclassname="activeClicked">
            <CDBSidebarMenuItem className="sidebar-item" icon="calendar">Calendar</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;

