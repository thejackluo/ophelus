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
        Percentage completion, based on the milestone, there 
*/

class Habit {
  // constructor
  constructor(name, description, frequency, timeCommitment) {
    this.name = name;
    this.description = description;
    this.frequency = frequency;
    this.timeCommitment = timeCommitment;
    this.completed = false;
  }

  // getters and setters
  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getFrequency() {
    return this.frequency;
  }

  getTimeCommitment() {
    return this.timeCommitment;
  }

  getCompleted() {
    return this.completed;
  }
}
