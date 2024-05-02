import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { LocalizationProvider } from "@mui/x-date-pickers/localizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const Task = () => {
  const tasks = [
    {
      id: 1,
      title: "Task 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200", // Sample image URL
      startDate: "2024-04-19",
      endDate: "2024-04-30",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200", // Sample image URL
      startDate: "2024-04-20",
      endDate: "2024-05-01",
    },
    {
      id: 3,
      title: "Task 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://picsum.photos/200", // Sample image URL
      startDate: "2024-04-20",
      endDate: "2024-05-01",
    },
  ];

  const [showOptions, setShowOptions] = useState({});
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const toggleOptions = (taskId) => {
    setShowOptions((prevOptions) => ({
      ...prevOptions,
      [taskId]: !prevOptions[taskId],
    }));
    setSelectedTaskId(taskId);
  };

  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  const handleEditClick = (taskId) => {
    setSelectedTaskId(taskId);
    setShowEditForm(true);
  };

  const handleAddClick = (taskId) => {
    setSelectedTaskId(taskId);
    setShowForm(true);
  };
  const handleDeleteClick = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="h-full w-full">
      <div className=" h-[25%] w-full">
        <div className="flex justify-between">
          <div className=" p-4 m-2">
            <h2 className=" text-xl pl-3 mb-[10px] font-bold">Start date: </h2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker className="h-[30px]" label="Select Date " />
            </LocalizationProvider>
          </div>
          <div className=" p-4 m-2">
            <h2 className=" text-xl pl-3 mb-[10px] font-bold">End date: </h2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker className="h-[30px]" label="Select Date " />
            </LocalizationProvider>
          </div>
          <div className=" p-4   mt-[60px] ml-auto">
            <button className="bg-white  text-green-500 font-bold py-2 px-9 mr-[60px] rounded-full">
              + Add Task
            </button>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col pl-8">
        <div className="mb-4">
          <h4 className="text-xl pl-1 font-bold">Enter Tittle</h4>
          <input
            type="text"
            placeholder="search"
            className="border-2 border-gray-300 rounded-l-lg border-r-0  pt-1 pl-[134px] pb-[0.36rem] focus:outline-none"
          />
          <button className="bg-blue-500 h-[25%] pt-[6px] px-10 py-2 rounded-r-lg text-white">
            Search
          </button>
        </div>
      </div>

      <div className=" w-full h-full pl-5 ">
        <div className=" bg-white p-2 grid  grid-cols-3 gap-4">
          {tasks.map((task) => (
            <div key={task.id} className=" rounded-lg p-4 shadow-md relative">
              <h1 className="text-lg font-bold">Title</h1>
              <h3>{task.title}</h3>
              <h1 className="text-lg font-bold">Description</h1>
              <p className="text-gray-500">{task.description}</p>
              <div className="mt-4">
                <h4 className="text-lg font-bold">Attachment:</h4>
                <img
                  src={task.image}
                  alt="Attachment"
                  className="mt-2 w-full"
                />
                <div className="flex  mt-3 space-x-[100px]">
                  <div className="flex flex-col">
                    <div className="mb-2">
                      <p className=" text-[20px] font-bold ">Start Date</p>
                      <p className=" text-[16px] ">{task.startDate}</p>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="mb-2">
                      <p className=" text-[20px] font-bold ">Start Date</p>
                      <p className=" text-[16px] ">{task.startDate}</p>
                    </div>
                  </div>
                </div>
              </div>
              <span
                className="text-[#4BCBEB] hover:bg-gray-50 cursor-pointer absolute top-2 right-2"
                onClick={() => toggleOptions(task.id)}
              >
                <FontAwesomeIcon icon={faEllipsisV} />
                {showOptions[task.id] && selectedTaskId === task.id && (
                  <div
                    className="absolute right-0 mt-2 w-[100px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="py-1 font-bold" role="none">
                      <button
                        className=" px-4 py-2 text-[12px] text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full flex justify-between items-center"
                        role="menuitem"
                        onClick={() => handleDeleteClick(task.id)}
                      >
                        <img src="delete.png" alt="delete" />
                        <span>Delete</span>
                      </button>

                      <button
                        className=" px-4 py-2 text-[12px] text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full flex"
                        role="menuitem"
                        onClick={() => handleViewClick(task.id)}
                      >
                        <img src="eye.png" alt="delete" />
                        <span className="ml-[15px]">View</span>
                      </button>

                      <button
                        className=" px-4 py-2 text-[12px] text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full flex "
                        role="menuitem"
                        onClick={() => handleEditClick(task.id)}
                      >
                        <img src="edit.png" alt="delete" />
                        <span className="ml-[15px]">Edit</span>
                      </button>
                    </div>
                  </div>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
