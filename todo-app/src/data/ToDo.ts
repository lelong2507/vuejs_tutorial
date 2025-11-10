export interface ToDoType {
  title: string;
  toDoItem: { title: string }[];
  completed: boolean;
  show?: boolean;
  showAddInput?: boolean;
}

export const data: ToDoType[] = [
  {
    title: "Học lập trình",
    toDoItem: [{ title: "Học Vue 3" }, { title: "Học TypeScript" }],
    completed: false,
  },
  {
    title: "Giải trí",
    toDoItem: [{ title: "Nghe nhạc" }, { title: "Xem phim" }],
    completed: true,
  },
];
