import { makeStyles } from "@mui/styles";

const drawerWidth = 240;

export default makeStyles ((theme) => ({
    toolbar: {
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '240px',
        // devices that are mobile devices
        [theme.breakpoints.down('sm')] : {
            marginLeft: '0',
            flexWrap: 'wrap',
        }
    },

    menuButton: {
        marginRight: theme.spacing(2),
        // devices that are not mobile devices
        [theme.breakpoints.up('sm')] : {
            display: 'none',
        },
    },

    drawer: {
        // devices that are not mobile devices
        [theme.breakpoints.up('sm')] : {
            // this is set as static because its going to be one specific width
            width: drawerWidth,
            fleshrink: 0,
        },
    },

    drawerPaper: {
        width: drawerWidth,
    },

    linkButton: {
        '&:hover': {
            color: 'white !important',
            textDecoration: 'none',
        },
    },
}));