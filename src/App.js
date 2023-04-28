import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import NavigationBar from './components/Navbar';
import LandingPage from './components/LandingPage';
import InterviewSimulation from './components/InterviewSimulation';



function App() {
    return (
        <div className="App">
            <NavigationBar />
            <LandingPage />
            <InterviewSimulation />
            {/* Add other components here */}
        </div>
    );
}

export default App;


