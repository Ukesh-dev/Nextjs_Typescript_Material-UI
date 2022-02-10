import { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Switch } from "@mui/material";
import { css } from "@emotion/react";
import { useTheme } from "next-themes";
import { useGlobalContext } from "../context";

const ThemeUpdater: FC<{}> = () => {
  const {
    state: { darkmode },
    dispatch,
  } = useGlobalContext();

  //   When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const handleChange = () => {
    setTheme(darkmode ? "light" : "dark");
    // dispatch({ type: darkmode ? "DARKMODE_OFF" : "DARKMODE_ON" });
  };
  // const loadCurrentTheme = useCallback(() => {
  //   if (
  //     window.matchMedia("(prefers-color-shceme:dark") ||
  //     resolvedTheme === "dark"
  //   ) {
  //     dispatch({ type: "DARKMODE_ON" });
  //   }
  //   if (resolvedTheme === "light") {
  //     dispatch({ type: "DARKMODE_OFF" });
  //   }
  // }, [resolvedTheme]);
  useEffect(() => {
    // () => loadCurrentTheme();
    console.log("in the useEffect");
    if (
      window.matchMedia("(prefers-color-shceme:dark") ||
      resolvedTheme === "dark"
    ) {
      dispatch({ type: "DARKMODE_ON" });
    }
    if (resolvedTheme === "light") {
      dispatch({ type: "DARKMODE_OFF" });
    }
  }, [resolvedTheme, dispatch]);
  if (!mounted) return null;
  // <div
  //   css={css`
  //     min-height: 160px;
  //   `}
  // ></div>
  // );

  return (
    // <div
    //   css={css`
    //     display: grid;
    //     grid-gap: 8px;
    //   `}
    // >
    //   <Typography variant="h4" gutterBottom>
    //     Persisted{" "}
    //     {resolvedTheme !== theme ? `${theme} (${resolvedTheme})` : theme} mode
    //   </Typography>
    //   <Select
    //     labelId="demo-simple-select-helper-label"
    //     id="demo-simple-select-helper"
    //     value={theme}
    //     onChange={(a) => setTheme(a.target.value)}
    //   >
    //     <MenuItem value="system">System</MenuItem>
    //     <MenuItem value="light">Light</MenuItem>
    //     <MenuItem value="dark">Dark</MenuItem>
    //   </Select>
    //   <Button
    //     css={css`
    //       background: linear-gradient(to top right, #2a48f3 0%, #c32cc2 100%);
    //     `}
    //     variant="contained"
    //     endIcon={
    //       resolvedTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />
    //     }
    //     onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    //   >
    //     Toggle {resolvedTheme === "light" ? "dark" : "light"} mode
    //   </Button>
    //   <Button color="primary">My Button</Button>
    // </div>

    // );
    <>
      <Switch
        checked={darkmode}
        onChange={handleChange}
        color="secondary"
      ></Switch>
    </>
  );
};

export default ThemeUpdater;
