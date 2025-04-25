import useTransformAnalyses from './hooks/useTransformAnalyses';
import './App.css';
import {useState, useEffect} from 'react';


const Analyses = ({ analyses }) => {
  const transformedAnalyses = useTransformAnalyses(analyses);

  return (
    <div>
      {transformedAnalyses.map((analysis, index) => (
        <div key={index}>
          Analysis {analysis}
        </div>
      ))}
    </div>
  );
}

function App() {
  const [analyses, setAnalyses] = useState([1, 3, 5]);
  const [unrelated, setUnrelated] = useState("");
  console.log('unrelated', unrelated)
  useEffect(() => {
    const interval = setInterval(() => {
      // setAnalyses(currentAnalyses => 
      //   currentAnalyses.map(value => value)
      // );
      setUnrelated((unrelated) => unrelated + "a");
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Analyses analyses={analyses} />
      </header>
    </div>
  );
}

export default App;
