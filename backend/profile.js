// Profile class: a way to track the level of a user through surrounding attributes to track progress in a gamification productivity software
/* 
1. level: the level of the user from 1 - 100 something that is exponentially harder (100 levels is 250 hours of effort)
2. xp: the amount of experience a user accumlates over the course of the project, the maximum amount of xp is 1000000 divided exponentially by 100 levels (4000 xp per hour on average)\ 
the factors of xp is determined by a few things
    a. number of hours worked (1000xp) (one hour has a flat rate of 1000 xp) (this will be reduced by 25% if you quit early with your goals)
    b. consistency (2000xp): bonus xp for keeping up streaks (100 xp per day, with a maximum streak of 20 days)
    c. deep quality work (this is a holistic measure of the quality of the work 1500xp) based on a few factors
        i. wellbeing: completion of daily routines 0.25
        ii. ontrack progress: completion of significant time trackable tasks 0.25
        iii. pernament upgrades: completion of different tiers that will help per hour work :)
    d. accountabillity (500xp): 250xp for daily check in with a partner, 250xp daily for posting on social media
    e. milestone (5000xp): for completing a mile stone
3. coins: the amount of coins a user accumlates over the course of the project, coin earning is slightly different than xp earning
    a. hourly flat rate: the number of coins you earn per hour is 100 coins
    b. purchasable multiplier: a multiplier that is applied to the # coins you earn per hour, however, these have to be purchased with existing coins
        for example: you purchase a 4 hour 2x multiplier for 250 coins, you can earn up to 400 coins as an investment provided you have productive work
    c. prestige upgrades will yield a 50% production in coins (there are two current prestige upgrades)
    d. challenges: you can earn coins through competitions with other people
4. why does xp and coins matter in the first point
    a. xp is a measure of how much you have worked and how much you have grown, it will unlock certain things in the game side of things
    b. coins are used for purchasing both real life rewards and in game rewards (to flex your city or whatever)
*/
const MIN_LEVEL = 1;
const MAX_LEVEL = 100;
const MIN_XP = 0;
const MAX_XP = 1000000;

class Profile {
  constructor() {
    // basic profile  attributes
    this.level = MIN_LEVEL;
    this.xp = MIN_XP;
    this.coins = 0;

    // productivity stats attributes
    this.lifetimeHours = 0;
    this.prestigeXP = 0;
  }
  // getters and setters
  getLevel() {
    return this.level;
  }
  getXp() {
    return this.xp;
  }
  getCoins() {
    return this.coins;
  }

  // work session methods
  workSession(goal, hour) {
    switch (hour) {
      case hour < 0:
        throw new Error("Invalid hour input");
      case hour === 0:
        return;
      case hour < goal:
        this.xp += 750 * hour;
        this.coins += 100;
        break;
      default:
        this.xp += 1000 * hour;
        this.coins += 100;
        break;
    }
    this.lifetimeHours += hour;
  }

  // level up methods
  levelUp() {
    if (this.level === MAX_LEVEL) {
      throw new Error("Max level reached");
    }
    this.level += 1;
  }

  // xp methods
  addXp(xp) {
    this.xp += xp;
    if (this.xp + xp > MAX_XP) {
      this.prestigeXP += this.xp + xp - MAX_XP;
      this.xp = MAX_XP;
    }
  }
}
