import React  from 'react'; 
import {Route, Switch } from 'react-router-dom'; 
import Home from './components/Home/home';
import Layout from './hoc/Layout/layout';
import VideoArticle from './components/Articles/Videos/Video/index'; 
import NewsArticle from './components/Articles/News/Post/index';
import NewsMain from './components/Articles/News/Main/index';
import VideosMain from './components/Articles/Videos/Main/index';
import SignIn from './components/signin/signin'; 
import Dashboard from './components/Dashboard/dashboard';

import PrivateRoutes from './components/AuthRoutes/privateRoutes';
import PublicRoutes from './components/AuthRoutes/publicRoutes';
 
const Routes = (props) =>  { 
        return(
            <Layout user={props.user}>
            <Switch> 
                <PublicRoutes {...props} restricted={false} path ="/" exact component={Home} />
                <PublicRoutes {...props} restricted={false} path ="/news" exact component={NewsMain} />
                <PublicRoutes {...props} restricted={true} path ="/sign-in" exact component={SignIn} />
                <PrivateRoutes {...props} path ="/dashboard" exact component={Dashboard} />
                <Route path ="/articles/:id" exact component={NewsArticle} />
                <PublicRoutes {...props} restricted={false} path ="/videos/:id" exact component={VideoArticle} />
                <PublicRoutes {...props} restricted={false} path ="/videos" exact component={VideosMain} />
            </Switch>
            </Layout>
        )
    }
 
export default Routes; 