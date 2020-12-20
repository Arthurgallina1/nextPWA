import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        left: 0,
        bottom: 0,
    },
});

const navigationObject = {
    0: "/",
    1: "/productlist",
    2: "/outro",
};

export default function SimpleBottomNavigation() {
    const router = useRouter();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
                // router.push("/");
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label='Home' icon={<RestoreIcon />} />
            <BottomNavigationAction label='Loja' icon={<FavoriteIcon />} />
            <BottomNavigationAction label='Outro' icon={<LocationOnIcon />} />
        </BottomNavigation>
    );
}
