import * as React from 'react';
import {Box, FormControlLabel, Switch} from "@mui/material";
import {useSelector} from "react-redux";
import {setThemeHandle} from "../features/utils";

function ThemeMode() {
    const {isDark, mode} = useSelector(state => state.theme);

    return (
        <Box sx={{position: 'fixed', right: 40}}>
            <FormControlLabel control={<Switch checked={isDark} onClick={() => setThemeHandle(!isDark)}/>}
                              label={mode[0].toUpperCase() + mode.substring(1)}
                              labelPlacement="start"/>

        </Box>
    );
}

export default ThemeMode;
