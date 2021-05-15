// import logo from './logo.svg';
import Styles from './App.module.scss';
import Header from './header/Header';
import RecommendedVideos from './recommended-videos/RecommendedVideos';
import Sidebar from './sidebar/Sidebar';

function App() {
  return (
    // BEM class naming convention 
    <div className={Styles.main}>

      <Header/>

      <div className={Styles.pageLayout}>
        <div className={Styles.left}>
          <Sidebar/>
        </div>
        <div className={Styles.right}> 
          <RecommendedVideos/>
        </div>
      </div>
      

    </div>
  );
}

export default App;
