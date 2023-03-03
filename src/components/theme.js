/** @jsx jsx */
import { jsx } from "theme-ui"
import { useColorMode } from "theme-ui"
import { FiMoon, FiSun } from "react-icons/fi"

const Theme = () => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <div className="carto" sx={themeStyles.modeOption}>
      <button
        onClick={e => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
        aria-label="Theme Color"
      >
        <div sx={themeStyles.modeIcons}>
          <div>{colorMode === "default" ? <FiMoon /> : <FiSun />}</div>
          <div className="themetext" sx={themeStyles.modeText}>
            {colorMode === "default" ? "Dark Mode" : "Light Mode"}
          </div>
        </div>
      </button>
    </div>
  )
}
export default Theme

const themeStyles = {
  modeOption: {
    button: {
      fontSize: "clamp(1.2rem, 2.8vw, 1.8rem)",
      bg: "transparent",
      border: "none",
      // color:"var(--theme-ui-colors-text)",
      color:"#fff",
      cursor: "pointer",
      mt: "-2px",
      p: "0 0 0 0",
      // "&:hover": {
      //   color: "var(--theme-ui-colors-background)",
      // },
    },
  },
  modeIcons: {
    display: "flex",
    alignItems: "center",
    mt: "10px",
    // "&:hover": {
    //   color: "color:var(--theme-ui-colors-text)",
    // },
  },
  modeText: {
    fontSize: "1vw",
    display: ["block", "block", "block", "block"],
    p: " 0 10px",
    mt: "-5px",
    letterSpacing: "1px",
  },
}
