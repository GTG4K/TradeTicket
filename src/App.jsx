import { useState } from 'react';
import Header from './components/UI/Header/Header';
import Sidebar from './components/UI/Sidebar/Sidebar';
import './App.css';

// routes
import Home from './pages/Home/Home';
import Concert from './pages/Concert/Concert';

import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);
  const [events, setEvents] = useState([
    {
      title: 'VINI VICI - Powered by Mono Hall Tbilisi',
      route: 'vinivici',
      location: 'Tbilisi, Monohall',
      time: 'Saturday, 22:00',
      price: '70.00',
      day: '08',
      month: 'APR',
      img: './assets/images/VINIVICI.png',
      imgLarge: '../assets/images/fullvinivici.png',
      description: `On April 8 in Tbilisi, organized by MONO HALL, one of the largest events of VINI VICI, one of the most popular duos in electronic music and especially in the Psytrance genre, the leader of practically all music charts and a permanent guest of the largest electronic music festivals, will be held.`,
      popular: true,
      today: false,
    },
    {
      title: 'Football | Georgia - Mongolia',
      route: 'football',
      location: 'Batumi, Adjarabet Arena',
      time: 'Saturday, 18:00',
      price: '10.00',
      day: '25',
      month: 'MAR',
      description: `On April 8 in Tbilisi, organized by MONO HALL, one of the largest events of VINI VICI, one of the most popular duos in electronic music and especially in the Psytrance genre, the leader of practically all music charts and a permanent guest of the largest electronic music festivals, will be held.`,
      img: './assets/images/football.png',
      imgLarge: '../assets/images/fullvinivici.png',
      popular: true,
      today: false,
    },
    {
      title: ',,I will swim over the sea”',
      route: 'swimsea',
      location: 'Tbilisi, Vaso Abashidze Theater',
      time: 'Thursday, 19:00',
      price: '10.00',
      day: '09',
      month: 'MAR',
      description: `On April 8 in Tbilisi, organized by MONO HALL, one of the largest events of VINI VICI, one of the most popular duos in electronic music and especially in the Psytrance genre, the leader of practically all music charts and a permanent guest of the largest electronic music festivals, will be held.`,
      img: './assets/images/swimsea.png',
      imgLarge: '../assets/images/fullvinivici.png',
      popular: true,
      today: false,
    },
    {
      title: 'Night Show Band',
      route: 'nightshow',
      location: 'Tbilisi,Monohall',
      time: 'Thursday, 19:00',
      price: '35.00',
      day: '10',
      month: 'MAR',
      description: `On April 8 in Tbilisi, organized by MONO HALL, one of the largest events of VINI VICI, one of the most popular duos in electronic music and especially in the Psytrance genre, the leader of practically all music charts and a permanent guest of the largest electronic music festivals, will be held.`,
      img: './assets/images/swimsea.png',
      imgLarge: '../assets/images/fullvinivici.png',
      popular: true,
      today: false,
    },
    {
      title: 'VINI VICI - Powered by Mono Hall Tbilisi',
      route: 'vinivici',
      location: 'Tbilisi, Monohall',
      time: 'Saturday, 22:00',
      price: '70.00',
      day: '08',
      month: 'APR',
      description: `On April 8 in Tbilisi, organized by MONO HALL, one of the largest events of VINI VICI, one of the most popular duos in electronic music and especially in the Psytrance genre, the leader of practically all music charts and a permanent guest of the largest electronic music festivals, will be held.`,
      img: './assets/images/VINIVICI.png',
      imgLarge: '../assets/images/fullvinivici.png',
      popular: true,
      today: true,
    },
    {
      title: 'Football | Georgia - Mongolia',
      route: 'football',
      location: 'Batumi, Adjarabet Arena',
      time: 'Saturday, 18:00',
      price: '10.00',
      day: '25',
      month: 'MAR',
      description: `On April 8 in Tbilisi, organized by MONO HALL, one of the largest events of VINI VICI, one of the most popular duos in electronic music and especially in the Psytrance genre, the leader of practically all music charts and a permanent guest of the largest electronic music festivals, will be held.`,
      imgLarge: '../assets/images/fullvinivici.png',
      img: './assets/images/football.png',
      popular: false,
      today: true,
    },
    {
      title: ',,I will swim over the sea”',
      route: 'swimsea',
      location: 'Tbilisi, Vaso Abashidze Theater',
      time: 'Thursday, 19:00',
      price: '10.00',
      day: '09',
      month: 'MAR',
      description: `On April 8 in Tbilisi, organized by MONO HALL, one of the largest events of VINI VICI, one of the most popular duos in electronic music and especially in the Psytrance genre, the leader of practically all music charts and a permanent guest of the largest electronic music festivals, will be held.`,
      imgLarge: '../assets/images/fullvinivici.png',
      img: './assets/images/swimsea.png',
      popular: false,
      today: true,
    },
    {
      title: 'Night Show Band',
      route: 'nightshow',
      location: 'Tbilisi,Monohall',
      time: 'Thursday, 19:00',
      price: '35.00',
      day: '10',
      month: 'MAR',
      description: `On April 8 in Tbilisi, organized by MONO HALL, one of the largest events of VINI VICI, one of the most popular duos in electronic music and especially in the Psytrance genre, the leader of practically all music charts and a permanent guest of the largest electronic music festivals, will be held.`,
      img: './assets/images/swimsea.png',
      imgLarge: '../assets/images/fullvinivici.png',
      popular: false,
      today: true,
    },
    {
      title: ',,I will swim over the sea”',
      route: 'swimsea',
      location: 'Tbilisi, Vaso Abashidze Theater',
      time: 'Thursday, 19:00',
      price: '10.00',
      day: '09',
      month: 'MAR',
      description: `On April 8 in Tbilisi, organized by MONO HALL, one of the largest events of VINI VICI, one of the most popular duos in electronic music and especially in the Psytrance genre, the leader of practically all music charts and a permanent guest of the largest electronic music festivals, will be held.`,
      img: './assets/images/swimsea.png',
      imgLarge: '../assets/images/fullvinivici.png',
      popular: false,
      today: true,
    },
  ]);

  return (
    <>
      <Header className="header-container" />
      <div className="content-container">
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<Home events={events} />} />
            <Route path="/concerts/:id" element={<Concert events={events} />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
