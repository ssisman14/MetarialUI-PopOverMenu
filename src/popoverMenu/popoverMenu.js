import React, {useState} from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import {Popper} from "@material-ui/core";
import SubMenu from "./SubMenu";
import ListItem from './listItem'
import {makeStyles} from "@material-ui/core/styles";

const PopOverMenu = ({text, icon, title}) => {
    const classes = useStyles();
    const [open , setOpen] = useState(false);
    const [anchorEl , setAnchorEl] = useState(null);
    const [arrowRef, setArrowRef] =  useState(null);


    const handleToggle =  (event) => {
        setOpen( !open);
        setAnchorEl( anchorEl ? null : event.currentTarget)
    };

    const handleClose =  () => {
        setOpen(false);
        setAnchorEl( null)
    };


    return(
        <div>
            <div aria-controls={open ? "menu-list-grow" : null}
                 aria-haspopup="true"
                 onClick={handleToggle} >
                <ListItem
                    icon={icon}
                    title={title}
                />
            </div>

            <Popper
                placement="bottom-start"
                anchorEl={anchorEl}
                open={open}
                role={undefined}
                transition
                disablePortal={false}
                className={classes.popper}
                modifiers={{
                    preventOverflow: {
                        enabled: true,
                        boundariesElement: "window"
                    },
                    arrow: {
                        enabled: true,
                        element: arrowRef
                    },
                    offset: {
                        enabled: true,
                        offset: '0,16',
                    },
                }}
            >
                {({ TransitionProps }) => (
                    <Grow
                        {...TransitionProps}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <Paper className={classes.popoverRoot}>
                                    <span className={classes.arrow} ref={setArrowRef} />
                                    <SubMenu
                                        onClick={open}
                                        id="menu-list-grow"
                                        text = {text}
                                    >
                                    </SubMenu>
                                </Paper>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    )
}

const useStyles = makeStyles((theme) => {
    const color = theme.palette.background.paper; // Feel free to customise this like they do in Tooltip
    return {
        popoverRoot: {
            backgroundColor: color,
            maxWidth: 1000
        },
        content: {
            padding: theme.spacing(2)
        },
         popper: {
            zIndex: 2000,
            '&[x-placement*="bottom"] $arrow': {
                top: 0,
                left: 0,
                marginTop: "-0.71em",
                marginLeft: 4,
                marginRight: 4,
                "&::before": {
                    transformOrigin: "0 100%"
                }
            },
            '&[x-placement*="top"] $arrow': {
                bottom: 0,
                left: 0,
                marginBottom: "-0.71em",
                marginLeft: 4,
                marginRight: 4,
                "&::before": {
                    transformOrigin: "100% 0"
                }
            },
            '&[x-placement*="right"] $arrow': {
                left: 0,
                marginLeft: "-0.71em",
                height: "1em",
                width: "0.71em",
                marginTop: 4,
                marginBottom: 4,
                "&::before": {
                    transformOrigin: "100% 100%"
                }
            },
            '&[x-placement*="left"] $arrow': {
                right: 0,
                marginRight: "-0.71em",
                height: "1em",
                width: "0.71em",
                marginTop: 4,
                marginBottom: 4,
                "&::before": {
                    transformOrigin: "0 0"
                }
            }
        },

        arrow: {
            overflow: "hidden",
            position: "absolute",
            width: "1em",
            height: "0.71em" ,
            boxSizing: "border-box",
            color,
            "&::before": {
                content: '""',
                margin: "auto",
                display: "block",
                width: "100%",
                height: "100%",
                boxShadow: theme.shadows[1],
                backgroundColor: "currentColor",
                transform: "rotate(45deg)"
            }
        }
    };
});



export default PopOverMenu
