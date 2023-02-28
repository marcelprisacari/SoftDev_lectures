import "./App.css";
import Presidents from "./components/presidets/Presidents";

/* 
- Create a boiler plate for all three components
- Return "fragments"
- Set each component with an <h2> that states Hello from [COMPONENT]
- Import/Mount each component as to how they should be in regards to parent/child relationsip.
*/

function App() {
    return (
        <div className="App">
            <h1>List of Presidents</h1>
            <Presidents />
        </div>
    );
}

export default App;
