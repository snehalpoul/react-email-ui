import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Sidebar from '../../Components/SideBar/index';
import Topbar from '../../Components/TopBar/index';
import Searchicon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import DriveIcon from '@material-ui/icons/CloudOutlined';
import SettingIcon from '@material-ui/icons/Settings';
import VideoIcon from '@material-ui/icons/VoiceChat';
import RecentIcon from '@material-ui/icons/AccessTime';
import SharedIcon from '@material-ui/icons/SupervisorAccount';
import TrashIcon from '@material-ui/icons/DeleteOutline';
import StarIcon from '@material-ui/icons/StarBorderOutlined';


const styles = theme => ({
    root: {
    height: '100%',        
      },      
      content: {
        paddingTop:'0px',
        marginLeft:240,  
        height: '100%'
      },
      toolbar: theme.mixins.toolbar,
  });

class DriveLayout extends React.Component { 
  render(){
    const { classes} = this.props;
    const { children } = this.props;
    
  return (

    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
            <Topbar 
            navtitle="Drive" 
            SearchIcon={Searchicon} 
            MailIcon={MailIcon}
            NotificationsIcon={NotificationsIcon}
            DriveIcon={DriveIcon}
            SettingIcon={SettingIcon}
            VideoIcon={VideoIcon}
            />      
            <Sidebar

            Icon1 = {DriveIcon} title1="My Drive" 
            Icon2 = {SharedIcon} title2="Shared with me"
            Icon3 = {RecentIcon} title3="Recent"
            Icon4 = {StarIcon} title4="Favourite"
            Icon5 = {TrashIcon} title5="Trash"
            />
      <main className={classes.content}>
        <div className={classes.toolbar}/>  
        {children}
      </main>
    </div>



    
  );
}
}


DriveLayout.propTypes = {
  children: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,

};
export default withStyles(styles) (DriveLayout);
