import React, { useState} from 'react';

function App() {
  const [tasks] = useState([
    'Go to gym',

    'Walk dog',

    'Do laundry'
  ]);

  return (
    <div className="App">
      <ToDoList tasks={tasks} />
    </div>
  );
}

export default App;