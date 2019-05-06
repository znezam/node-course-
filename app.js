const fs = require('fs');
const request = require('request');
const _ = require('yargs');
const cookie = `SSSS`;
let xcsrf;

const username = _.argv._[0];
let user = {

}

 request({
     url: `https://auth.roblox.com/v2/logout`,
     json:true,
     method: 'POST',
     form: {
       username
     },
     headers:  {
       "Content-Type" : "text/json",
       "X-CSRF-Token" : xcsrf,
       "Cookie": `.ROBLOSECURITY=${cookie}`
     }
 }, (err, res, body) => {
   console.log(body);
  // console.log(res.headers);
 });

 request({
   url: `https://roblox.com`,
   json: true
 }, (err, res, body) => {
   // console.log(res);
 });


   // request(`https://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&userId=1`).pipe(fs.createWriteStream('avatar.png'));