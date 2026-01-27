import React, { useState } from "react";
import { Menu } from "@headlessui/react";

export default function App() {
  const [message, setMessage] = useState(""); // state to show message

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-4">

      {/* ===== Simple Button ===== */}
      <button
        className="px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition"
        onClick={() => setMessage("Button clicked! ")} // click action
      >
        Click Me
      </button>

      {/* Show message when button is clicked */}
      {message && <p className="text-gray-700 font-semibold">{message}</p>}

      {/* ===== Dropdown / Menu ===== */}
      <Menu>
        <Menu.Button className="px-4 py-2 bg-blue-500 text-white rounded">
          Open Dropdown
        </Menu.Button>
        <Menu.Items className="mt-2 w-40 bg-white shadow rounded">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`w-full px-4 py-2 text-left ${
                  active ? "bg-blue-100" : ""
                }`}
              >
                Option 1
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`w-full px-4 py-2 text-left ${
                  active ? "bg-blue-100" : ""
                }`}
              >
                Option 2
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}