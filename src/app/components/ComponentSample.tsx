import * as React from 'react';
import Hello from './Hello';
import ReactDOM from 'react-dom';


function App() {
    const element = (
    <div className='App'>
      <div className='App-header'>
        <h2>Welcome to React</h2>
      </div>
      <p className='App-intro'>
        To get started, edit <code>src/App.tsx</code> and save to reload.
      </p>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <Hello name='TypeScript' />
    </div>
  );
  ReactDOM.render(element, document.getElementById('reactExample'));
}

export default App;