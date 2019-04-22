import React from 'react';
import { Route, Redirect, Switch } from 'react-router';

import SearchLine from '../MainComponent/SearchLine/SearchLine';

class MainComponent extends React.Component {
    render() {
        return(
            <>
                <Switch>
                        <Route exact path="/all_songs/" component={SearchLine} />
                        {/* <Route exact path="/albums/" component={CheckComponent} /> */}
                        <Route path="/">
                            <Redirect to="/all_songs/" />
                        </Route>
                 </Switch> 
            </>
        );
    }
}
export default MainComponent;