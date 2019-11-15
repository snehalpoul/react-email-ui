import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';



  const styles = theme => ({
    '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  
});

class PasswordChange extends React.Component{

  constructor(props) {
		super(props);

		this.state = {
     
			password: '',
			passerror:'',
			submitted:false
		
		};


		this.displayLogin = this.displayLogin.bind(this);
	}

 
  validate = () => {
    
		
		let passerror = "";
    

		if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
			passerror = "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.";
		  }

	
	
		if ( passerror  ) {
		  this.setState({  passerror });
		  return false;
		}
	
		return true;
	  };  
  

    
  
    displayLogin(e) {
      e.preventDefault();
  
      const isValid = this.validate();
          if (isValid) {
        console.log(this.state);
        this.setState({submitted:true});
        }
  }

  render(){
  const {classes} = this.props;
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        
        <Typography component="h1" variant="h4">
          Password Change
        </Typography>
        <form className={classes.form}                 
              onSubmit={this.displayLogin} >
          <Grid container spacing={2}>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                // helperText="Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character."
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}              />
              	
              
              {this.state.passerror ? (
								<div style={{ fontSize: 12, color: "red" }}>
								{this.state.passerror}
						    </div>				
							):null}
						
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                id="confirmpassword"
                autoComplete="retype-password"
              />
            </Grid>
            
          
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
          >
            Password Change
          </Button>
          
        </form>
      </div>
      
    </Container>
  );
}
}

PasswordChange.proptype ={
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(PasswordChange);
