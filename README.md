# Discord JS - Documentation Example
This is my implementation of the discord.js getting started bot example. I created this bot to help better understand folder structure for creating bots in Discord as well as how to use TypeScript in Discord bot development. 

Here is the link to the example: 

https://discordjs.guide/#before-you-begin

## What have I learnt?
1. Source files (TypeScript files in this case) should be stored inside of a src folder and compiled files for deployment should be stored in a dist folder.
2. Within your src folder, there are four main files/folders to have. A commands folder, an events folder, app.ts/index.ts, and a deploy-commands.ts file.
3. The commands folder contains all of your commands for your bot.
4. The events folder contains all of the events that your bot should respond to.
5. App.ts/index.ts is your bot's main code that will start it up.
6. deploy-commands.ts is a file that updates your commands in your Discord server.
7. Use .env files for storing important information like bot tokens and app id's.
8. Update your tsconfig files so that you can run commands to speed up the development process.
9. Update your package.json file for your development needs. 

Builds all of your src files and compiles them in dst
```
npm run build
```

Runs the main application or point of entry
```
npm run start 
```

