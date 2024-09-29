import { FaTrashAlt } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <>
      <div className="text-center p-10">
        <h1 className="text-2xl font-semibold">Chores ToDo List</h1>
      </div>

      <div>
        <div className="flex items-center mb-4">
          <input id="default-checkbox" type="checkbox" value="" className="mr-2 w-4 h-4 md:accent-green">
          </input>
            Create Guest Experience mobile check-in
            <button className="p-3 max-w-sm ml-auto bg-transparent text-pink border-pink border-2 hover:border-white rounded-lg shadow-lg flex items-center space-x-4"><FaTrashAlt /></button>
        </div>
        <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="mr-2 w-4 h-4 md:accent-green">
            </input>
            Document current CI/CD process
            <button className="p-3 max-w-sm ml-auto bg-transparent text-pink border-pink border-2 hover:border-white rounded-lg shadow-lg flex items-center space-x-4"><FaTrashAlt /></button>
        </div>
        <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="mr-2 w-4 h-4 md:accent-green">
            </input>
            Perform Code Review for final Pillow-Talk release
            <button className="p-3 max-w-sm ml-auto bg-transparent text-pink border-pink border-2 hover:border-white rounded-lg shadow-lg flex items-center space-x-4"><FaTrashAlt /></button>
        </div>
        <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="mr-2 w-4 h-4 md:accent-green">
            </input>
            Implement new Color Palette from Design Team
            <button className="p-3 max-w-sm ml-auto bg-transparent text-pink border-pink border-2 hover:border-white rounded-lg shadow-lg flex items-center space-x-4"><FaTrashAlt /></button>
        </div>
        <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="mr-2 w-4 h-4 md:accent-green">
            </input>
            Fix image uploading process for guest check-in
            <button className="p-3 max-w-sm ml-auto bg-transparent text-pink border-pink border-2 hover:border-white rounded-lg shadow-lg flex items-center space-x-4"><FaTrashAlt /></button>
        </div>
        <div className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="mr-2 w-4 h-4 md:accent-green">
            </input>
            Provide on-boarding documentation
            <button className="p-3 max-w-sm ml-auto bg-transparent text-pink border-pink border-2 hover:border-white rounded-lg shadow-lg flex items-center space-x-4"><FaTrashAlt /></button>
        </div>
      </div>
    
      <hr className="mt-8 mb-4"></hr>

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