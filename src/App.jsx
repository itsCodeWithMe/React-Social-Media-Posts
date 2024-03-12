import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Sidebars from './Components/Sidebars'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Posts from './Components/Posts'
import CreatePosts from './Components/CreatePosts'
import { useState } from 'react';

function App() {

  const [activeTab, setactiveTab] = useState("Home");


  return <div className='sectionArea'>
    <Sidebars selectedTab={activeTab} setactiveTab={setactiveTab}></Sidebars>
    <div className="contentContainer">
      <Header></Header>
      {activeTab === "Home" ?
        <Posts></Posts> :
        <CreatePosts></CreatePosts>
      }


      <Footer></Footer>
    </div>
  </div>


}

export default App;
