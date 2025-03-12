import react from "react";
import { Box, Image } from "@chakra-ui/react";
import LogoSVG from "../assets/logo.svg";
import styles from "./Logo.module.css";

/*************  ✨ Codeium Command ⭐  *************/
/**
 * A functional React component that renders a logo.
 * 
 * @param {string} width - The width of the logo. Default is "100px".
 * @param {string} height - The height of the logo. Default is "auto".
 * @param {string} [color] - The color to fill the logo. Uses "currentColor" if not specified.
 * 
 * @returns {JSX.Element} The logo component wrapped in a Box.
 */

/******  35f4e84b-c61d-40fa-9abc-fac6cdafe982  *******/
const Logo = ({ width = "120px", height="auto", color}) => {
  return (
    <Box width={width} height={height} ml={2} mt={1}>
      <Image src={LogoSVG} alt="Logo" width="100%" height="100%" className={styles.logo} />
    </Box>
  );
};

export default Logo;