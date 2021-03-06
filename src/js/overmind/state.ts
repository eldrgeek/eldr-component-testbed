import { derived } from "overmind";

export enum Filter {
  ALL = "all",
  ACTIVE = "active",
  COMPLETED = "completed"
}

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};
type User = string;
type Users = Array<User>;
type Rooms = {
  [id: string]: Users;
};

export type State = {
  mediaDevices: Array<any>;
  attrs: any;
  _message: {
    text: string;
    delay: number;
  };
  _server: {
    rooms: Rooms;
    users: Array<User>;
  };
  title: string;
  another: string;
};

export const state: State = {
  mediaDevices: [
    { label: "audio 1 ", kind: "audioinput", deviceId: 1244 },
    { label: "audio 2", kind: "audioinput", deviceId: 1244 },
    { label: "audio 3", kind: "audioinput", deviceId: 1244 },
    { label: "video 1", kind: "videoinput", deviceId: 1244 },
    { label: "video 2", kind: "videoinput", deviceId: 1244 },
    { label: "video 3", kind: "videoinput", deviceId: 1244 }
  ],
  attrs: {
    id: "id",
    name: "name"
  },
  title: "this is the title",
  another: "this is another thing",
  _message: {
    text: "",
    delay: 1000
  },
  _server: {
    rooms: {
      room1: ["sess-1", "sess-2"],
      room2: ["sess-4", "sess-5"]
    },
    users: ["sess=1", "sess-2", "sess-3", "sess-4"]
  }
  // filter: Filter.ALL,
  // newTodoTitle: "",
  // todos: {},
  // editingTodoId: null,
  // editingTodoTitle: "",
  // currentTodos: derived(({ todos, filter }: State) => {
  //   return Object.values(todos).filter(todo => {
  //     switch (filter) {
  //       case "active":
  //         return !todo.completed;
  //       case "completed":
  //         return todo.completed;
  //       default:
  //         return true;
  //     }
  //   });
  // }),
  // activeTodoCount: derived(({ todos }: State) => {
  //   return Object.values(todos).filter(todo => !todo.completed).length;
  // }),
  // hasCompletedTodos: derived(({ todos }: State) => {
  //   return Object.values(todos).some(todo => todo.completed);
  // }),
  // isAllTodosChecked: derived(({ currentTodos }: State) => {
  //   return currentTodos.every(todo => todo.completed);
  // })
};
