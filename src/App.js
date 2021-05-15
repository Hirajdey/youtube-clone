import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Styles from './App.module.scss';
import Header from './header/Header';
import RecommendedVideos from './recommended-videos/RecommendedVideos';
import Sidebar from './sidebar/Sidebar';
import SearchPage from './search-page/SearchPage';


function App() {
  return (
    <div className={Styles.main}>
      <Router>
        <Header/>
        
        <Switch>
          <Route path="/search/:searchTerm">
            <div className={Styles.pageLayout}>
              <div className={Styles.left}>
                <Sidebar/>
              </div>
              <div className={Styles.right}> 
                <SearchPage/>
              </div>
            </div>
          </Route>

          <Route path="/">
            <div className={Styles.pageLayout}>
              <div className={Styles.left}>
                <Sidebar/>
              </div>
              <div className={Styles.right}> 
                <RecommendedVideos/>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
