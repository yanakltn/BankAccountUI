import {
  faHouse,
  faPaperPlane,
  faPiggyBank,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import Link from "../types/Link";

const links: Link[] = [
  { name: "Home", icon: faHouse, path: "/" },
  { name: "Send Money", icon: faPaperPlane, path: "/send" },
  { name: "Top Up", icon: faPiggyBank, path: "/topup" },
  { name: "Accounts", icon: faWallet, path: "/accounts" },
];

export default links;
