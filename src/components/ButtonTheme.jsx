import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import Button from "./Button";

function ButtonTheme() {
  const [isLightMode, setIsLightMode] = useThemeToggle();

  return (
    <Button className="btn-mode">
      {isLightMode ? <HiOutlineMoon /> : <HiOutlineSun />}
    </Button>
  );
}

export default ButtonTheme;
