import React from "react";

const TableView = ({ users = [] }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="w-full  text-sm">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 ">Name</th>
            <th className="p-2 ">Email</th>
            <th className="p-2 ">Gender</th>
            <th className="p-2 ">Languages</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((u, i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50 text-center">
                <td className="p-2 ">{u.name}</td>
                <td className="p-2 ">{u.email}</td>
                <td className="p-2 ">{u.gender}</td>
                <td className="p-2 ">{u.languages.join(", ")}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="p-4 text-gray-500 text-center">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
