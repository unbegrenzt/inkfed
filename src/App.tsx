import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/inkfed.svg'
import './App.css'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

function App() {
  const [count, setCount] = useState(0)
// const firebaseConfig = {
//   apiKey: "AIzaSyD9r0VsaTFQ1MFQIDGYvXAfI-HFeScWM6Y",
//   authDomain: "inkfed-f18a9.firebaseapp.com",
//   projectId: "inkfed-f18a9",
//   storageBucket: "inkfed-f18a9.appspot.com",
//   messagingSenderId: "652348663875",
//   appId: "1:652348663875:web:9aaad37e7b0bb4e7c2ccf6",
//   measurementId: "G-S4P8ZRS9VX"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
