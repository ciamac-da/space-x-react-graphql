import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

 footer: {
   marginTop: 'auto',
   backgroundColor:"red",
   textAlign:"center",
   position:"fixed",
   bottom: 0,
   display:"block",
   width:"100vw",
   marginBottom:"0px",
 },
 typo:{
       color:"white",
       fontWeight: "bolder",
 }
}));
export default useStyles;