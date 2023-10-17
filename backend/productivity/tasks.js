/*
    Task object: this is the most basic object for Ophelus that encaupsulates the task that the user will do. 
    It is the most basic building block of the app.
    The goal of the task obejct design is to make it as simple as possible but at the same time provide enough functionality for most people.
    ATTRIBUTES for TASK
        name of task
        description (optional)
        estimated duration of task (optional) (defaults to 15 minutes)
        estimated difficulty for the task (from 1 - 5 with the default being 3) (optional) (10% increase per difficulty level)
        priority for tasks (from 1 - 5 with default being 3) 
            (there is an important constraint here, you can only have 3 priority 5, 5 4s, and 12 3s) 
            (users can upgrade for more tasks as they level up or set future tasks into a bank)
    ATTRIBUTE CONSTRAINTS for TASK
        In total, a new user should be limited to 20 tasks, any other tasks shall be sent to storage (this is to prevent overloading the user)
        The user can upgrade their task limit by 5 every 5 levels for a maximum of 120 tasks
    HELPER FUNCTION
        autoPopulate: this is a function that automatically set up the indirect variables for this task such as the percentage completion and total time commitment 
            (this is to make it easier for the user to see how much time they are committing to)

*/

class Task {
  constructor(name, description, duration, difficulty, priority) {
    // name attributes
    this.name = name;
    this.description = description;

    // time attributes
    this.duration = duration || 15; // this will be defined by the number of minutes per task (15 minutes for example)
    this.difficulty = difficulty || 3; // this will be defined 1 - 5 (1 being the easiest and 5 being the hardest)
    this.priority = priority || 3; // this will be defined 1 - 5 (1 being the lowest and 5 being the highest)

    // parent attributes
    this.parentHabit = null;
  }

  // this is a function that automatically set up the indirect variables for this task such as the percentage completion and total time commitment
  autoPopulate() {
    this.completed = 0; // a percentage value between 0 and 100
  }
}
