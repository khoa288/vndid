import React from "react";
import Navbar from "./Navbar";

function User() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <div className="w-full h-full flex flex-col justify-center items-center mx-6">
        {/* Todo: User Information */}
        <div className="flex flex-col w-1/2 px-8 py-5 border-2 rounded-2xl">
          <span className="text-xl font-bold">User Profile</span>
          {/* UID: */}
          <div>
            <span className="font-bold">UID: </span>
            <span>12938910283120938</span>
          </div>

          <div>
            <span className="font-bold">DOB Hash: </span>
            <span>
              0d71f8e92754c98a79b9a3a6e9f8511208916948ac704b4fc09375ed3dcfa31f
            </span>
          </div>
        </div>

        {/* Claims List */}
        <div className="w-full px-6">
          <span className="text-xl font-bold">Claims List</span>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Issuer</th>
                  <th>Time Stampt</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>John Doe</td>
                  <td>Issuer A</td>
                  <td>2024-04-13 09:00:00</td>
                  <th>
                    <button className="btn btn-error">Remove</button>
                  </th>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jane Smith</td>
                  <td>Issuer B</td>
                  <td>2024-04-13 09:15:00</td>
                  <th>
                    <button className="btn btn-error">Remove</button>
                  </th>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Michael Johnson</td>
                  <td>Issuer C</td>
                  <td>2024-04-13 09:30:00</td>
                  <th>
                    <button className="btn btn-error">Remove</button>
                  </th>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Alice Brown</td>
                  <td>Issuer D</td>
                  <td>2024-04-13 09:45:00</td>
                  <th>
                    <button className="btn btn-error">Remove</button>
                  </th>
                </tr>
                <tr>
                  <td>5</td>
                  <td>David White</td>
                  <td>Issuer E</td>
                  <td>2024-04-13 10:00:00</td>
                  <th>
                    <button className="btn btn-error">Remove</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
