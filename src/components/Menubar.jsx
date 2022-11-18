import { useState } from "react";
import {
  DropDownIcon,
  BugIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  ProfileIcon,
  BellIcon,
} from "../assets/faIcons";

import appLogo from "../assets/images/appLogo.png";

const Menubar = () => {
  const [profileHover, setProfileHover] = useState(false);

  return (
    <div className="flex bg-darkBlueGrey text-light p-4">
      {/* LEFT SIDE WITH LOGO AND SELECTOR */}
      <div className="flex">
        <BugIcon twClass="w-6" fill="#fff" />
        <div className="flex items-center">
          <p className="text-2xl px-2">Tickets</p>
          <DropDownIcon twClass="w-4" fill="#fff" />
        </div>
      </div>
      {/* MIDDLE SEARCH FUNCTION */}
      {/* <div className="hidden flex-1">
        <div className="flex">
          <MagnifyingGlassIcon twClass="w-4" />
          <input
            className="bg-blueGrey px-6 w-[500px]"
            name="search"
            placeholder="Search Tickets and Contacts"
          />
        </div>
        <PlusIcon twClass="w-4" />
      </div> */}

      {/* RIGHT SIDE PROFILE AND NOTIFICATIONS */}
      <div className="flex gap-2">
        <div
          onMouseEnter={() => setProfileHover(true)}
          onMouseOut={() => setProfileHover(false)}>
          <ProfileIcon
            twClass="w-4 cursor-pointer hover:fill-blue-500"
            fill=""
          />
        </div>
        <BellIcon twClass="w-4 cursor-pointer" fill="#fff" />
      </div>
    </div>
  );
};

export default Menubar;
