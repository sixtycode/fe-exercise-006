import { FaTrashAlt } from "react-icons/fa";
import './App.css'

function App() {
  return (
    <>
      <div className="text-center p-6">
        <h1 className="text-2xl font-semibold">Chores ToDo List</h1>
      </div>
      <div className="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </input>
        Create Guest Experience mobile check-in
        <button><FaTrashAlt /></button>
      </div>
      <div className="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </input>
        Document current CI/CD process
        <button><FaTrashAlt /></button>
      </div>
      <div className="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </input>
        Perform Code Review for final Pillow-Talk release
        <button><FaTrashAlt /></button>
      </div>
      <div className="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </input>
        Implement new Color Palette from Design Team
        <button><FaTrashAlt /></button>
      </div>
      <div className="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </input>
        Fix image uploading process for guest check-in
        <button><FaTrashAlt /></button>
      </div>
      <div className="flex items-center mb-4">
        <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
        </input>
        Provide on-boarding documentation
        <button><FaTrashAlt /></button>
      </div>
      <p>-----------------------------------------------------------------------</p>
      <div className="text-center p-2">
        <h2 className="text-2xl font-semibold">Done : 0</h2>
      </div>
      <div className="text-left grid gap-3 grid-cols-1 grid-rows-1">
        <p>Add todo</p>
        <input type="text" id="small-input" className="block w-full p-2 border border-gray-300 rounded-lg bg-transparent focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </input>
      </div>
      <div className="text-left mt-4">
        <button>ADD TASK</button>
      </div>
    </>
  )
}

export default App;