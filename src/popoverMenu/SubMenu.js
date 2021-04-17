import React from "react";
import { makeStyles} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Logo from '../uydu.png'


import CardActionArea from '@material-ui/core/CardActionArea';
const Layers = () => {
    const classes = useStyle();
    return(
        <div className={classes.area}>
            <CardActionArea className={classes.actionArea}>
                <CardMedia
                    component="img"
                    className={classes.media}
                    image={Logo}
                    title="Contemplative Reptile"
                />
                <Typography className={classes.title}>
                    UYDU
                </Typography>
            </CardActionArea>
            <CardActionArea className={classes.actionArea}>
                <CardMedia
                    component="img"
                    className={classes.media}
                    image={Logo}
                    title="Contemplative Reptile"
                />
                <Typography className={classes.title}>
                    UYDU
                </Typography>
            </CardActionArea>
        </div>
    )
};

const SubMenu = ({ props,text }, ref) => {
    const classes = useStyle();
    return (
        <Card ref={ref} className={classes.card}>
            <Layers/>
        </Card>
    )
};
const useStyle = makeStyles(theme=>{
    return {
        card: {
            width: 326,
            height: 222
        },
        actionArea: {
            height: 63,
            width: 88,
            margin : '16px 8px 8px'
        },
        media: {
            height: 63,
            width: 88,
        },
        area: {
            display: 'flex',
            width: '%100',
            flexWrap: 'wrap'
        },
        title :{
            textAlign:"center",
            fontSize: 11,
            fontWeight: 'bold',
            fontStretch: 'normal',
            color: theme.palette.secondary.main
        }
    }});
const SubMenuForward = React.forwardRef(SubMenu);

export default SubMenuForward;