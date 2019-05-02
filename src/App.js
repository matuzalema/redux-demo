import React from 'react';
import './App.css';
import CommentsListContainer from './CommentsListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          List of comments:
       <CommentsListContainer />
      </header>
    </div>
  );
}

export default App;
