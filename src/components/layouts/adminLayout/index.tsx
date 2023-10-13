"use client";

import AppLogo from "@components/logo";
import { Navbar } from "flowbite-react";
import { FC, ReactNode } from "react";
import i18next from "i18next";
import { Sidebar } from "flowbite-react";

import useAuth from "@hooks/useAuth";
import AdminSidebar from "./sidebar";

const AdminLayout: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const { isAuthenticated, handleLogout } = useAuth();

  return (
    <main className="">
      <Navbar className="nav-bar " fluid={true} rounded={true}>
        <Navbar.Brand href="#"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            {i18next.t("home")}
          </Navbar.Link>
          <Navbar.Link href="/navbars">{i18next.t("about_us")}</Navbar.Link>
          <Navbar.Link href="/navbars">{i18next.t("resources")}</Navbar.Link>
          {!isAuthenticated ? (
            <Navbar.Link href="/auth/signup">
              {i18next.t("login_signup")}
            </Navbar.Link>
          ) : (
            <Navbar.Link onClick={handleLogout} href="#">
              {i18next.t("logout")}
            </Navbar.Link>
          )}
        </Navbar.Collapse>
      </Navbar>

      <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="basis-1/12">
          <AdminSidebar />
        </div>

        <div className="col-span-4" >
          {children}
        </div>
      </div>
    </main>
  );
};

export default AdminLayout;
