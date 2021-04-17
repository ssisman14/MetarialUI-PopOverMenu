import {
    ListItem as MuiListItem,
    ListItemIcon,
    ListItemText,
    makeStyles
} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';


const ListItem =({title,icon}) => {
    const classes = useStyle();

    return (
        <div>
            <MuiListItem className={classes.listItem}>
                <ListItemIcon className={classes.listItemIcon}><Icon>{icon}</Icon></ListItemIcon>
                <ListItemText  primary={title} classes={{
                    primary: classes.listItemText
                }}/>
            </MuiListItem>

        </div>
    )

};

const useStyle = makeStyles(theme=>({
    listItem : {
        display: 'flex',
        alignItems : 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: 0,
    },
    listItemIcon: {
        justifyContent: 'center',
        color: '#292961',
    },
    listItemText: {
        fontSize: 10,
        color:'#292961',
        fontWeight: 600,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.1,
        textAlign: 'center'
    },

}));

export default ListItem;
