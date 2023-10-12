// Level class: a way to track the level of a user through surrounding attributes to track progress in a gamification productivity software
/* 
1. level: the level of the user from 1 - 100 something that is exponentially harder (100 levels is 250 hours of effort)
2. xp: the amount of experience a user accumlates over the course of the project, the maximum amount of xp is 1000000 divided exponentially by 100 levels (4000 xp per hour on average)\ 
the factors of xp is determined by a few things
a. number of hours worked (1000xp) (one hour has a flat rate of 1000 xp)
b. consistency (2000xp): bonus xp for keeping up streaks (100 xp per day, with a maximum streak of 20 days)
c. deep quality work (to be continued)
d. accountabillity (500xp): 250xp for daily check in with a partner, 250xp daily for posting on social media

*/
const MIN_LEVEL = 1;
const MAX_LEVEL = 100;

class Level {}
