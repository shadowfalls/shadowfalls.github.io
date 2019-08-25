import React from "react";
import ReactDOM from "react-dom";


window.addEventListener('beforeinstallprompt', (e) => {
    // Stash the event so it can be triggered later.
    let deferredPrompt = e;
    // Update UI notify the user they can add to home screen
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
  
  window.addEventListener('appinstalled', (evt) => {
    console.log('a2hs installed');
  });

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
