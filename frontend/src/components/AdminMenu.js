import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CategoryIcon from "@mui/icons-material/Category";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import PeopleIcon from "@mui/icons-material/People";
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const drawerWidth = 300;

const AdminMenu = () => {
  const linkStyles = {
    textDecoration: "none",
    color: "inherit",
    "&.active": {
      color: "red",
    },
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiPaper-root": {
          backgroundColor: "#004346",
        },
      }}
    >
      <div style={{ width: drawerWidth }}>
        <Typography variant="h6" m={5} style={{ color: "white" }}>
          Admin Panel
        </Typography>

        <List>
          <ListItem
            disablePadding
            style={{ paddingBottom: "3rem", color: "white" }}
          >
            <ListItemIcon>
              <AdminPanelSettingsIcon
                style={{ color: "white", marginLeft: "1.2rem" }}
              />
            </ListItemIcon>
            <Typography variant="h6">
              <NavLink to="/dashboard/admin-pannel" style={linkStyles}>
                Admin
              </NavLink>
            </Typography>
          </ListItem>
          <ListItem
            disablePadding
            style={{ paddingBottom: "3rem", color: "white" }}
          >
            <ListItemIcon>
              <CategoryIcon style={{ color: "white", marginLeft: "1.2rem" }} />
            </ListItemIcon>
            <Typography variant="h6">
              <NavLink to="/dashboard/admin/create-category" style={linkStyles}>
                Create Category
              </NavLink>
            </Typography>
          </ListItem>
          <ListItem
            disablePadding
            style={{ paddingBottom: "3rem", color: "white" }}
          >
            <ListItemIcon>
              <ProductionQuantityLimitsIcon
                style={{ color: "white", marginLeft: "1.2rem" }}
              />
            </ListItemIcon>
            <Typography variant="h6">
              <NavLink to="/dashboard/admin/create-product" style={linkStyles}>
                Create Product
              </NavLink>
            </Typography>
          </ListItem>
          <ListItem
            disablePadding
            style={{ paddingBottom: "3rem", color: "white" }}
          >
            <ListItemIcon>
              <ProductionQuantityLimitsIcon
                style={{ color: "white", marginLeft: "1.2rem" }}
              />
            </ListItemIcon>
            <Typography variant="h6">
              <NavLink to="/dashboard/admin/product" style={linkStyles}>
                Products
              </NavLink>
            </Typography>
          </ListItem>
          <ListItem
            disablePadding
            style={{ paddingBottom: "3rem", color: "white" }}
          >
            <ListItemIcon>
              <PeopleIcon style={{ color: "white", marginLeft: "1.2rem" }} />
            </ListItemIcon>
            <Typography variant="h6">
              <NavLink to="/dashboard/admin/users" style={linkStyles}>
                Users
              </NavLink>
            </Typography>
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
};

export default AdminMenu;
