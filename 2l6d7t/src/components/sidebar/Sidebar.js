//import useState hook to create menu collapse state
import React from "react";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import SearchIcon from "@mui/icons-material/Search";

//import react pro sidebar components
import { ProSidebar, Menu, MenuItem, SidebarContent } from "react-pro-sidebar";

//import icons from react icons
import { FiHome } from "react-icons/fi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "./sidebar.css";
import AddOperator from "./AddOperator";
import { Style } from "@material-ui/icons";

const Sidebar = () => {
  return (
    <div id="header">
      <ProSidebar>
        <SidebarContent>
          <Menu iconShape="square">
            <MenuItem icon={<FiHome />}>Fr Muller</MenuItem>
            <MenuItem active={true} icon={<SearchIcon />}>
              Search
            </MenuItem>

            <MenuItem active={true} icon={<PlaylistAddIcon />}>
              <span>
                <AddOperator />
              </span>
            </MenuItem>
          </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
