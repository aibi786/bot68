const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_07_10_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDUyLFxuICAgICAgICA0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDg5LFxuICAgICAgICA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM1LFxuICAgICAgICA4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI3LFxuICAgICAgICAzOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU2LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY2LFxuICAgICAgICA0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI3LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjE4LFxuICAgICAgICA1LFxuICAgICAgICAxNixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDczLFxuICAgICAgICAwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDczLFxuICAgICAgICA2NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgOTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDM0LFxuICAgICAgICA2MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE5LFxuICAgICAgICA3MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA3OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTksXG4gICAgICAgIDU4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjksXG4gICAgICAgIDUwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDkyLFxuICAgICAgICA4MixcbiAgICAgICAgMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNTUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN0JscGl4MldUcVVTYktCU0R0aVpZajVYZU1BTGlzRTlteHBaRHJjcU96VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieFZWeDZQc2ZScHF2N0MwMzBwTkhnUVwiLFxuICBcInBob25lSWRcIjogXCJkZGQ1MTFmNi01OWQwLTRiODgtYjBhZS1jNzIwOWJjZTkxM2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA5LFxuICAgICAgMTQ0LFxuICAgICAgNjQsXG4gICAgICA0MSxcbiAgICAgIDY5LFxuICAgICAgMTEwLFxuICAgICAgMTE3LFxuICAgICAgMTA4LFxuICAgICAgMjE3LFxuICAgICAgOTksXG4gICAgICAxNjgsXG4gICAgICA1NSxcbiAgICAgIDI1MixcbiAgICAgIDE3OSxcbiAgICAgIDE1NSxcbiAgICAgIDEzMSxcbiAgICAgIDEwNCxcbiAgICAgIDM2LFxuICAgICAgNzUsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDEsXG4gICAgICAxNzksXG4gICAgICAwLFxuICAgICAgNjMsXG4gICAgICAyMjQsXG4gICAgICAyMTksXG4gICAgICA2NSxcbiAgICAgIDEzOCxcbiAgICAgIDIwNSxcbiAgICAgIDk5LFxuICAgICAgNSxcbiAgICAgIDcxLFxuICAgICAgMTY3LFxuICAgICAgMTExLFxuICAgICAgMjI4LFxuICAgICAgMTAxLFxuICAgICAgMjIsXG4gICAgICA0MixcbiAgICAgIDE2MixcbiAgICAgIDE0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJHQ1ZNUFhYMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDAzMzk3MDQ2OjI3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjI0NTQzNjYyNjUzNTc6MjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1d2KzhjQkVPM2I3YmdHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGeGlsTENtdXg3dks2cGkrRnZBNGJiS1EyTk1OUmI0ODJmd3RudUEwYldFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkpXUFRQazMwRWRXbm0vUExHdG9nS0RlaUg0UlRwMm5yK0ZQT0NoUGVrekpVeE1BTFNSQ25lcmRRS3A3cDZ2U2hrcEZDNm43Zk1QZExOUVYvaGJJd0JnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkE5YytsSDZLTkswNlpuOERSQzE3MzFuRjJnTll4TTZmQWRWNFFCSmprMWJ0V29kcGcreUsxcERRVXU2TXB1M3luY0xmZjVyb0tSQlJpRTFyTVlQWmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQwMzM5NzA0NjoyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTg1MDg2NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQURoVVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRGhVLmpzb24iOiAie1wia2V5RGF0YVwiOlwibDZUaXZWYnlrZXkyaHM1ZitmRXdaa2RZcWZ6a1owM2Nvd1EydWpkUFZ0UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0MTkzNTQ1OTcsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyOTY1OTc0OTQ2NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
