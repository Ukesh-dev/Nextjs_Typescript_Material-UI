import { FC, useEffect, useState } from "react";
import { Button, MenuItem, Select, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeUpdater: FC<{}> = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  console.log(resolvedTheme);
  console.log(theme);
  const [mounted, setMounted] = useState(false);

  //   When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div
        css={css`
          background-color: hotpink;
          &:hover {
            color: red;
          }
        `}
      >
        This has a hotpink background.
      </div>
    );

  return (
    <div
      css={css`
        display: grid;
        grid-gap: 8px;
      `}
    >
      <Typography variant="h4" gutterBottom>
        Persisted{" "}
        {resolvedTheme !== theme ? `${theme} (${resolvedTheme})` : theme} mode
      </Typography>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={theme}
        onChange={(a) => setTheme(a.target.value)}
      >
        <MenuItem value="system">System</MenuItem>
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </Select>
      <Button
        css={css`
          background: linear-gradient(to top right, #2a48f3 0%, #c32cc2 100%);
        `}
        variant="contained"
        endIcon={
          resolvedTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />
        }
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      >
        Toggle {resolvedTheme === "light" ? "dark" : "light"} mode
      </Button>
    </div>
  );
};

export default ThemeUpdater;
