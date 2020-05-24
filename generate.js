const fs = require('fs');

const generateUser = require('./DB/user/generateUser');
const generateUserPosts = require('./DB/user/generateUserPosts');
fs.writeFile('./db-user.json', JSON.stringify(generateUser()),()=>console.log('Arquivo DB-user criado com sucesso!'));
fs.writeFile('./db-userPosts.json',JSON.stringify(generateUserPosts()),()=>console.log('Arquivo DB-userPosts criado com sucesso!'));