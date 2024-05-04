import React from "react";

const data = [
  {
    CustomerName: "John Doe",
    ProjectName: "Alpha",
    startDate: "05-01-24",
    endDate: "07-01-24",
    overDue: "1 day",
    customerImage: "https://picsum.photos/50",
  },
  {
    CustomerName: "Jane Smith",
    ProjectName: "Beta",
    startDate: "10-02-24",
    endDate: "15-02-24",
    overDue: "1 days",
    customerImage: "https://picsum.photos/50",
  },
  {
    CustomerName: "Alice Johnson",
    ProjectName: "Gamma",
    startDate: "20-03-24",
    endDate: "25-03-24",
    overDue: "1 days",
    customerImage: "https://picsum.photos/50",
  },
  {
    CustomerName: "John Doe",
    ProjectName: "Alpha",
    startDate: "05-01-24",
    endDate: "07-01-24",
    overDue: "1 day",
    customerImage: "https://picsum.photos/50",
  },
  {
    CustomerName: "Jane Smith",
    ProjectName: "Beta",
    startDate: "10-02-24",
    endDate: "15-02-24",
    overDue: "2 days",
    customerImage: "https://picsum.photos/50",
  },
  {
    CustomerName: "Alice Johnson",
    ProjectName: "Gamma",
    startDate: "20-03-24",
    endDate: "25-03-24",
    overDue: "3 days",
    customerImage: "https://picsum.photos/50",
  },
  {
    CustomerName: "Alice Johnson",
    ProjectName: "Gamma",
    startDate: "20-03-24",
    endDate: "25-03-24",
    overDue: "3 days",
    customerImage: "https://picsum.photos/50",
  },
  {
    CustomerName: "Alice Johnson",
    ProjectName: "Gamma",
    startDate: "20-03-24",
    endDate: "25-03-24",
    overDue: "3 days",
    customerImage: "https://picsum.photos/50",
  },
  {
    CustomerName: "Alice Johnson",
    ProjectName: "Gamma",
    startDate: "20-03-24",
    endDate: "25-03-24",
    overDue: "3 days",
    customerImage: "https://picsum.photos/50",
  },
];

const Users = () => {
  return (
    <div className="m-6 p-5 w-[950px] h-full bg-white rounded-xl border-[1.45px] border-[#4BCBEB] drop-shadow-md truncate">
      <h1 className="m-4 font-bold text-2xl">Online User</h1>

      <div className="ml-5 mb-5 flex space-x-20">
        <h1 className="text-lg font-medium">Customer Name</h1>
        <h1 className="text-lg font-medium">Project Name</h1>
        <h1 className="text-lg font-medium">Start Date</h1>
        <h1 className="text-lg font-medium">End Date</h1>
        <h1 className="text-lg font-medium">Overdue day</h1>
      </div>
      {data.map((item, index) => {
        return (
          <div key={index} className="mb-3 py-3 flex border-b space-x-16">
            <div className="ml-5 flex items-center space-x-2 w-[9rem]">
              <img
                src={item.customerImage}
                alt="Customer"
                className="w-10 rounded-full h-10"
              />
              <div className="text-[#0B3B95]">{item.CustomerName}</div>
            </div>
            <div className="px-5 w-32">{item.ProjectName}</div>
            <div className="px-5 w-30">{item.startDate}</div>
            <div className="px-5 w-30">{item.endDate}</div>
            <div className="w-32 flex items-center">
              {item.overDue}
              <svg
                className="ml-5"
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 16C13 17.654 14.346 19 16 19C17.654 19 19 17.654 19 16C19 14.346 17.654 13 16 13C14.346 13 13 14.346 13 16ZM13 26C13 27.654 14.346 29 16 29C17.654 29 19 27.654 19 26C19 24.346 17.654 23 16 23C14.346 23 13 24.346 13 26ZM13 6C13 7.654 14.346 9 16 9C17.654 9 19 7.654 19 6C19 4.346 17.654 3 16 3C14.346 3 13 4.346 13 6Z"
                  fill="#4BCBEB"
                />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
