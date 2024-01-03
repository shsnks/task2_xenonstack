import React from 'react';
// import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import Blog from './Blog';
import Shop from './Shop';
import About from './About';
import Signin from './Signin';
import Userportal from "./userportal";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Chatbot from './Chatbot';

const rootElement = document.getElementById("root");

render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
          <App />
          </div>
        } />
        <Route path="/articles" element={
          <div>
          <Blog />
          </div>
        } />
        <Route path="/service" element={
          <div>
          <Shop />
          </div>
        } />
        <Route path="/about" element={
          <div>
          <About />
          </div>
        } />
        <Route path="/signin" element={
          <div>
          <Signin />
          </div>
        } />
        <Route path="/chatbot" element={
          <div>
          <Chatbot />
          </div>
        } />
        <Route path="/userportal" element={
          <div>
          <Userportal />
          </div>
        } />
        
      </Routes>
    </BrowserRouter>,
    rootElement
  );

