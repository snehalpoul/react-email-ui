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
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(1, 0, 1),
  },
  
});

class AddStudent extends React.Component{

  constructor(props) {
		super(props);

		this.state = {
      firstname: '',
      lastname: '',
			email: '',
			mobile:'',
			address:'',
			password: '',
			accounttype:'',
      nameerror:'',
      lastnameerror:'',
			emailerror:'',
			mobileerror:'',
			passerror:'',
			submitted:false
		
		};


		this.displayLogin = this.displayLogin.bind(this);
	}

 
  validate = () => {
    
		let emailerror = "";
		let passerror = "";
		let mobileerror ="";
	
		if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ){
		  emailerror = "Invalid email";
    }
    

		if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
			passerror = "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.";
		  }

		if (!this.state.mobile.match(/^[0-9]{10}$/)) {
			mobileerror = "Invalid mobile number";
		  }	
  
	
		if (emailerror || passerror || mobileerror ) {
		  this.setState({ emailerror, passerror , mobileerror});
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
          Add Student
        </Typography>
        <form className={classes.form}                 
              onSubmit={this.displayLogin} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="firstname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={this.state.firstname}
                onChange={e => this.setState({ firstname: e.target.value })}             
                 />
              	
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastname"
                value={this.state.surname}
                onChange={e => this.setState({ surname: e.target.value })}              />
              	                
              
            </Grid>
            
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="Username"
                // autoComplete="department"
                value={this.state.department}
                onChange={e => this.setState({ department: e.target.value })}              />
              	                
              
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="department"
                label="Department"
                name="Department"
                // autoComplete="department"
                value={this.state.department}
                onChange={e => this.setState({ department: e.target.value })}              />
              	                
              
            </Grid>
            
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="division"
                label="Division"
                name="Division"
                // autoComplete="subject"
                value={this.state.division}
                onChange={e => this.setState({ division: e.target.value })}              />
              	                
              
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="class"
                label="Class"
                name="Class"
                // autoComplete="class"
                value={this.state.division}
                onChange={e => this.setState({ division: e.target.value })}              />
              	                
              
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Contact Email id"
                name="email"
                // autoComplete="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}              />
              	
              
              {this.state.emailerror ? (
								<div style={{ fontSize: 12, color: "red" }}>
								{this.state.emailerror}
						    </div>				
							):null}
            </Grid>
            
            
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="otp"
                label="OTP"
                type="password"
                id="password"
               
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}              />
              	
              
              {this.state.passerror ? (
								<div style={{ fontSize: 12, color: "red" }}>
								{this.state.passerror}
						    </div>				
							):null}
						
            </Grid>
             
            
            <Grid item xs={12}>
             
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            
          >
            Add Student
          </Button>
          
        </form>
      </div>
      
    </Container>
  );
}
}

AddStudent.proptype ={
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AddStudent);
