import {
  ArrowRightFromLine,
  Bookmark,
  NotebookTabs,
  UserRound,
} from "lucide-react";

export const AUTH_TOKEN_KEY = "@AUTH_TOKEN";

export const navOptions = [
  {
    icon: UserRound,
    name: "My Profile",
    href: "/user/my-profile",
  },
  {
    icon: NotebookTabs,
    name: "Read Books",
    href: "/read-books",
  },
  {
    icon: Bookmark,
    name: "Saved Books",
    href: "/saved-books",
  },
  {
    icon: ArrowRightFromLine,
    name: "Logout",
    href: "/logout",
  },
];
