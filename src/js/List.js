import { CurrentModule, React, useApp } from "./CurrentModule";
const users = {
  user1: { name: "user1", status: "connected" },
  user2: { name: "user1", status: "ready" },
  user3: { name: "user1", status: "connected" }
};
export default function List() {
  return (
    <div id="menu" className="p-6">
      <div className="max-w-md grid gap-1 pt p-3 border border-gray-500 divide-y-4 divide-blue-200">
        {Object.keys(users).map((key) => {
          const user = users[key];
          const statusColor = user.status === 'ready' ? ' bg-green-800 text-white' : ''
          return (
            <React.Fragment>
              <div className="flex py-1 pt-2">
                <span className={"w-1/3 border mx-3 px-3 bg-white" + statusColor}>
                  {" "}
                  {user.status}
                </span>
                <span className="w-full border mx-1 px-3 bg-white">
                  {user.name}
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
