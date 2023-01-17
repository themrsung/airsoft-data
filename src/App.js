import logo from "./logo.svg"
import "./App.css"
import { addRifle } from "./api/riflesApi"

function App() {
    async function dd() {
        console.log(await addRifle({}))
    }
    return (
        <div className="App">
            <div>
                test
                <button
                    onClick={() => {
                        dd()
                    }}
                >
                    add new rifle
                </button>
            </div>
        </div>
    )
}

export default App
