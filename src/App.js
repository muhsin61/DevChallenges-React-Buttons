import React from 'react';
import './buttons.css';
import Buttons from './Buttons.js';

function App() {
  return (
    <div className="App">
      <div><p>&lt;Buttons /&gt;</p><Buttons /></div>
      <div><p>&lt;Buttons text="click me" /&gt;</p><Buttons text="click me"></Buttons></div>
      <div><p>&lt;Buttons variant="outline" /&gt;</p><Buttons variant="outline"></Buttons></div>
      <div><p>&lt;Buttons variant="text" /&gt;</p><Buttons variant="text"></Buttons></div>
      <div><p>&lt;Buttons size="sm" /&gt;</p><Buttons size="sm"></Buttons></div>
      <div><p>&lt;Buttons size="md" /&gt;</p><Buttons size="md"></Buttons></div>
      <div><p>&lt;Buttons size="lg" /&gt;</p><Buttons size="lg"></Buttons></div>
      <div><p>&lt;Buttons size="lg" variant="outline" /&gt;</p><Buttons size="lg" variant="outline" ></Buttons></div>
      <div><p>&lt;Buttons size="lg" color="danger" /&gt;</p><Buttons size="lg" color="danger" ></Buttons></div>
      <div><p>&lt;Buttons disabled /&gt;</p><Buttons disabled></Buttons></div>
      <div><p>&lt;Buttons disableShadow /&gt;</p><Buttons disableShadow></Buttons></div>
      <div><p>&lt;Buttons color="primary" /&gt;</p><Buttons color="primary"></Buttons></div>
      <div><p>&lt;Buttonscolor="secondary" /&gt;</p><Buttons color="secondary" text="secondary"></Buttons></div>
      <div><p>&lt;Buttons color="danger" /&gt;</p><Buttons color="danger"></Buttons></div>
      <div><p>&lt;Buttons color="danger" startIcon="build" text="hover me" /&gt;</p><Buttons color="danger" startIcon="build" text="hover me" ></Buttons></div>
      <div><p>&lt;Buttons endIcon="anchor" /&gt;</p><Buttons endIcon="anchor">naber</Buttons></div>
      <Buttons endIcon="anchor" disableShadow>naber</Buttons><Buttons endIcon="anchor" >naber</Buttons>
      <p>muhsin61@DevChallenges.io</p>
    </div>
  );
}

export default App;
