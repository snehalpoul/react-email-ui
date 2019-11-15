import React from 'react';
import InstituteIcon from '@material-ui/icons/AccountBalance';
import Link from '@material-ui/core/Link';
import StudentIcon from '@material-ui/icons/AccountBox';
import StaffIcon from '@material-ui/icons/SupervisorAccount';
import Card from '@material-ui/core/Card';
import VideoIcon from '@material-ui/icons/VoiceChat';
import EmailIcon from '@material-ui/icons/Email';
import DriveIcon from '@material-ui/icons/CloudUpload'
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';


const styles = theme =>  ({
  root:{
    padding: theme.spacing(8),
    marin: theme.spacing(0),

  },
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  card: {
    border:'none',
    boxShadow:'none',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56%', // 16:9
    
  },
  cardContent: {
    flexGrow: 1,
  },
 
  
});

class InstituteDash extends React.Component  {
  render(){
  const {classes} = this.props;

  return (
    
      
      <Grid
        container
        spacing={6}
        className={classes.root}
      >
       
        <Grid
          item
          lg={4}
          md={4}
          sm={6}
          xl={3}
          xs={12}
        >          
        <Link href="/Drive" style={{textDecorationLine:'none'}}>

           <Card className={classes.card}>
                  <CardMedia>
                    <DriveIcon style={{fontSize:100}} color="primary"/>
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom  variant="h5" component="h2">
                      Drive
                    </Typography>
                    <Typography >
                      Upload files and folder on cloud
                    </Typography>
                  </CardContent>
                  
                </Card></Link>

        </Grid>
        
        <Grid
          item
          lg={4}
          md={4}
          sm={6}
          xl={3}
          xs={12}
        >
        <Link href="/Email" style={{textDecorationLine:'none'}}>
           <Card className={classes.card}>
                  <CardMedia>
                    <EmailIcon style={{fontSize:100}} color="primary"/>
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Email
                    </Typography>
                    <Typography >
                    Send and receive message to and from anyone with an email address, anywhere in the world.

                    </Typography>
                  </CardContent>
                  
                </Card>
          </Link>

        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={6}
          xl={3}
          xs={12}
        >
           <Card className={classes.card}>
                  <CardMedia>
                    <VideoIcon style={{fontSize:100}} color="primary"/>
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5"  component="h2">
                      Video Chat
                    </Typography>
                    <Typography >
                      Allows one-to-one visual communication between two or more internet users.
                    </Typography>
                  </CardContent>
                  
                </Card>

        </Grid>
         <Grid
          item
          lg={4}
          md={4}
          sm={6}
          xl={3}
          xs={12}
        >
          <Link href="" style={{textDecorationLine:'none'}}>
            <Card className={classes.card}>
                  <CardMedia>
                    <StaffIcon style={{fontSize:100}} color="primary"/>
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5"  component="h2">
                      Teacher
                    </Typography>
                    <Typography >
                      See relevant insights about your Teacher.
                    </Typography>
                  </CardContent>
                                   
                    
                </Card>
                </Link>
        </Grid>
        <Grid
          item
          lg={4}
          md={4}
          sm={6}
          xl={3}
          xs={12}
        >
           <Card className={classes.card}>
                  <CardMedia>
                    <StudentIcon style={{fontSize:100}} color="primary"/>
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5"  component="h2">
                      Student
                    </Typography>
                    <Typography >
                      See relevant insights about your Teacher.
                    </Typography>
                  </CardContent>
                  
                </Card>

        </Grid>
       
        
       
      </Grid>
     
  );
  }
}
export default withStyles(styles) (InstituteDash);