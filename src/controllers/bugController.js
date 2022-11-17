import bugModel from "./models/bugModel";

export const retrieveBugs = () => {
  let data = [];
  data.push(
    new bugModel({
      _id: 123456789,
      name: "Won't Load",
      details: "Crashes after 3 seconds",
      steps: "Open application and it will crash",
      version: "V1",
      assigned: "Drew Dobson",
      creator: "John Doe",
      priority: 4,
      time: "17:59",
    })
  );
  let sorted = data.sort((a, b) => a.priority - b.priority);
  return sorted;
};
