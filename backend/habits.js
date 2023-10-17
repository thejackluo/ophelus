/*
    Habits are the simplest form of a productivity object in ophelus. They are the most basic building block of the app.
    SET UP for HABIT
        name of habit: what is this habit about
        description of habit: what is your goal with this habit
        frequency of habit: how often do you want to do this habit
        duration of habit: what is the time frame of the habit
        time per frequncy: how much time you will spend per frequncy
    CONSTRAINT for HABIT
        Minimum 3 characters for name
        Minimum 10 characters for description
        Minimum duration: 2 weeks
        Minimum time per frequency: 15 minutes
    Analytics for HABIT
        Percentage completion, total time commitment on the habit
*/

class Habit {
  // SET UP constructor
  constructor(name, description, frequency, timeCommitment, duration) {
    // name attributes
    this.name = name;
    this.description = description;

    // frequency attributes
    this.frequency = frequency; // this will be defined by the number of days per habit (14 days for 2 weeks for example)
    this.timeCommitment = timeCommitment; // this will be defined by the number of minutes per habit (15 minutes for example)
    this.duration = duration; // this will be defined by the number of weeks (2 weeks for example)
  }

  // this is a function that automatically set up the indirect variables for this habit such as the percentage completion and total time commitment
  autoPopulate() {
    this.completed = 0; // a value between 0 and 100
    this.totalTimeCommitment =
      (this.duration / this.frequency) * this.timeCommitment; // a value in minutes
    this.tasks = []; // an array of tasks per completion of the habit
  }

  // FUNCTION specific variable
  addTask(task) {
    // TODO: first valid that the task is a valid task
    this.tasks.push(task);
  }
}
