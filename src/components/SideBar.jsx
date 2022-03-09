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

const SideBar = ({t}) => {
  return (
    <div className="sidebar">
      <CDBSidebar>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}></CDBSidebarHeader>
        <CDBSidebarHeader>
        <img src={mini} alt="profile" className='img-thumbnail rounded-circle' size="sm"/>
        </CDBSidebarHeader>

        <CDBSidebarContent  className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact="true" to="/" activeclassname="activeClicked">
            <CDBSidebarMenuItem className="sidebar-item" icon="th-large">{t('sidebar.home')}</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/profile" activeclassname="activeClicked">
            <CDBSidebarMenuItem className="sidebar-item" icon="sticky-note">{t('sidebar.profile')}</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/opps" activeclassname="activeClicked">
            <CDBSidebarMenuItem className="sidebar-item" icon="columns">{t('sidebar.opps')}</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/roles" activeclassname="activeClicked">
            <CDBSidebarMenuItem className="sidebar-item" icon="book">{t('sidebar.roles')}</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/events" activeclassname="activeClicked">
            <CDBSidebarMenuItem className="sidebar-item" icon="credit-card">{t('sidebar.events')}</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact="true" to="/calendar" activeclassname="activeClicked">
            <CDBSidebarMenuItem className="sidebar-item" icon="calendar">{t('sidebar.calendar')}</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;

