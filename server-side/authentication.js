const database = require('./database');
const bcrypt = require('bcrypt');

mp.events.add('regData', async(player, data) => {
    try {
        data = await JSON.parse(data);
        console.log(data);

        const [checkName] = await database.pool.query('SELECT * FROM `accounts` WHERE `name` = ?', [data.regName]);
        if(checkName.length !== 0) return console.log('Аккаунт с таким именем существует!');

        const hash = await bcrypt.hash(data.regPass, 10);
        console.log(hash);

        await database.pool.query('INSERT INTO `accounts` SET `name` = ?, `mail` = ?, `password` = ?', [data.regName, data.regMail, hash]);
        
        player.call('hideLoginScreen');

    } catch(err) {
        console.error(err);
    }
});

mp.events.add('logData', async(player, data) => {
    try {
        data = await JSON.parse(data);
        console.log(data);
        
        const [searchName] = await database.pool.query('SELECT * FROM `accounts` WHERE `name` = ?', [data.logName]);
        if(searchName.length === 0) return console.log('Аккаунт не найден!');
        console.log(searchName);

        const checkPass = await bcrypt.compare(data.logPass, searchName[0].password);
        if(checkPass) {
            player.call('hideLoginScreen');
        }
        console.log(checkPass);
        
    } catch(err) {
        console.error(err);
    }
});