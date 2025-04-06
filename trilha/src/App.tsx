import "./App.css";
import { About } from "./pages/about";
import { Animal } from "./pages/animal";
import { BookingSuccess } from "./pages/booking-success";
import { Contact } from "./pages/contact";
import { Home } from "./pages/home";
import { RoomDetails } from "./pages/room-details";
import { Rooms } from "./pages/rooms";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Trilha2 } from "./trilhas/Trilha2";

const App: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> | <Link to="/rooms">Rooms</Link> |{" "}
        <Link to="/trilha2">trilha 2</Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/animal/:name" element={<Animal />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room/:id" element={<RoomDetails />} />
        <Route path="/booking-success" element={<BookingSuccess />} />
        <Route path="/trilha2" element={<Trilha2 />} />
      </Routes>
    </div>
  );
};

export default App;
