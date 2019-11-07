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


const accounttype = [
    {
      value: '1',
      label: '--- Select ---',
      
    },
    {
      value: '2',
      label: 'Staff',
    },
    {
      value:'3',
      label:'Student'
    }
    
  ];


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

class SignUp extends React.Component{

  constructor(props) {
		super(props);

		this.state = {
      firstname: '',
      surname: '',
			email: '',
			mobile:'',
			address:'',
			password: '',
			accounttype:'',
      nameerror:'',
      surnameerror:'',
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
          Sign up
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
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
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
                name="mobile"
                label="Mobile Number"
                id="mobile"
                autoComplete="mobile"
                value={this.state.mobile}
                onChange={e => this.setState({ mobile: e.target.value })}              />
              	
              
              {this.state.mobileerror ? (
								<div style={{ fontSize: 12, color: "red" }}>
								{this.state.mobileerror}
						    </div>				
							):null}	
            </Grid>
            <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                name="address"
                label="Address"
                multiline
                type="text"
                id="address"
                autoComplete="address"
                rows="2"
                value={this.state.address}
                onChange={e => this.setState({ address: e.target.value })}              />

            </Grid>
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
                helperText="Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character."
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}              />
              	
              
              {this.state.passerror ? (
								<div style={{ fontSize: 12, color: "red" }}>
								{this.state.passerror}
						    </div>				
							):null}
						
            </Grid>
            {/* <Grid item xs={12}>
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
            </Grid> */}
            <Grid item xs={12}>
            <TextField
                id="accounttype"
                select
                required
                fullWidth
                name="accountype"
                label="Account type"
                // value={accounttype}
                // onChange={this.handleChange('account')}
                SelectProps={{
                native: true,
                MenuProps: {
                    className: classes.menu,
                },
                }}
                helperText="Please select your account type"
                variant="outlined"
            >
                {accounttype.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
                ))}
            </TextField>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I accept the Terms of service and privacy policy"
                required
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
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to='/signin' >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}
}

SignUp.proptype ={
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SignUp);
