// Profile class: a way to track the level of a user through surrounding attributes to track progress in a gamification productivity software
/* 
1. level: the level of the user from 1 - 100 something that is exponentially harder (100 levels is 250 hours of effort)
2. xp: the amount of experience a user accumlates over the course of the project, the maximum amount of xp is 1000000 divided exponentially by 100 levels (4000 xp per hour on average)\ 
the factors of xp is determined by a few things
    a. number of hours worked (1000xp) (one hour has a flat rate of 1000 xp)
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

class Level {}
