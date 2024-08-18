import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  const handleTaskDelete = (text) => {
    setTasks(tasks.filter(task => task.text !== text));
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onCategoryClick={handleCategoryClick}
      />
      <NewTaskForm
        categories={CATEGORIES.filter(cat => cat !== "All")}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={filteredTasks} onTaskDelete={handleTaskDelete} />
    </div>
  );
}
export default App;
