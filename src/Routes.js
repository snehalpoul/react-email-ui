import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from './Components/RouteWithLayout/index';
import { EmailLayout as EmailLayout, MinimalLayout as MinimalLayout } from './Layout/index';

import {
  Inbox as MyInboxView,
  Sent as SentView,
  Drafts as DraftsView,
  //Favourite as FavouriteView,
  // Trash as TrashView,
  SignUp as SignUpView,
  SignIn as SignInView,
} from './Views/index';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/signin"
      />
      <RouteWithLayout
        component={MyInboxView}
        exact
        layout={EmailLayout}
        path="/inbox"
      />
       <RouteWithLayout
        component={SentView}
        exact
        layout={EmailLayout}
        path="/sent"
      />
      <RouteWithLayout
        component={DraftsView}
        exact
        layout={EmailLayout}
        path="/drafts"
      />
      {/* <RouteWithLayout
        component={FavouriteView}
        exact
        layout={DriveLayout}
        path="/favourite"
      /> */}
      {/* <RouteWithLayout
        component={TrashView}
        exact
        layout={EmailLayout}
        path="/trash"
      />  */}
      <RouteWithLayout
        component={SignUpView}
        exact
        layout={MinimalLayout}
        path="/signup"
      />
       <RouteWithLayout
        component={SignInView}
        exact
        layout={MinimalLayout}
        path="/signin"
      /> 
      
      </Switch>
  ); 
  
};

export default Routes;