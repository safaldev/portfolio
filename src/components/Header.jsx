import React from "react";
import { Home, User, NotebookPen, FolderCheck, Mail } from "lucide-react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="fixed z-20 bottom-8 w-full">
        <Dock >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive ? `text-orange-600` : ``}`
            }
          >
            <DockIcon>
              <Home />
            </DockIcon>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? `text-orange-600` : ``}`
            }
          >
            <DockIcon>
              <User />
            </DockIcon>
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${isActive ? `text-orange-600` : ``}`
            }
          >
            <DockIcon>
              <FolderCheck />
            </DockIcon>
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              `${isActive ? `text-orange-600` : ``}`
            }
          >
            <DockIcon>
              <NotebookPen />
            </DockIcon>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${isActive ? `text-orange-600` : ``}`
            }
          >
            <DockIcon>
              <Mail />
            </DockIcon>
          </NavLink>
            <DockIcon>
              <AnimatedThemeToggler />
            </DockIcon>
        </Dock>
      </header>
    </>
  );
}

export default Header;
