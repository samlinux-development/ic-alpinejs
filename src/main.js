import './style.css'

import Alpine from 'alpinejs'
import { backend } from './declarations/backend';

Alpine.start()

document.querySelector('#app').innerHTML = `
  <div>
    <div x-data="appData()">
      <h1 x-text="title"></h1>
      <div x-text="intro"></div>
    
      <div class="scaling-svg-container" onclick="window.open('https://github.com/samlinux-development', '_blank')">
        <img src = "./github.svg" alt="Github Repo" title="Code on Github"/>
      </div>
      <form x-on:submit.prevent="post">
        <label for="name">Say hello to: </label>
        <input id="name" alt="Name" type="text"/>
        <button id="btn" type="submit" @click="getData">Click Me!</button>
        <div id="greeting"></div>

        <div x-show="loading">loading ...</div>      
      </form>
    </div>
  </div>
`

Alpine.data('appData', () => ({
  // some initial data
  loading: false,
  title: 'Hello Alpine.js + Internet Computer!',
  intro: 'This demo implements a simple form that sends a request to the backend to say hello to a user including a minimal spinner functionality.',
    
  async getData(evt) {
    evt.preventDefault();

    // enable spinner
    this.loading = true

    // get name from input and send to backend
    document.getElementById("greeting").innerText = "";
    const name = document.getElementById("name").value.toString();
    const greeting = await backend.sayHelloTo(name);

    // display greeting
    document.getElementById("greeting").innerText = greeting;

    //disable spinner and clear input
    this.loading = false
    document.getElementById("name").value = "";
  }
}))


