import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexGrow:1,
    },
    root1:{
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '30%',   }
   
    },


    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '10ch',
    },
    
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    }));
    
  export default useStyles;