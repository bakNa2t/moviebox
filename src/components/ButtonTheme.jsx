import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useThemeToggle } from "../context/themeLightDarkToggle";

import Button from "./Button";

function ButtonTheme() {
  const { isLightTheme, handleToggleTheme } = useThemeToggle();

  return (
    <Button className="btn-mode" onClick={handleToggleTheme}>
      {isLightTheme ? <HiOutlineMoon /> : <HiOutlineSun />}
    </Button>
  );
}

export default ButtonTheme;
