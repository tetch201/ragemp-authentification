function createAccount() {
    const regName = document.getElementById('reg-name').value;
    const regMail = document.getElementById('reg-mail').value;
    const regPass = document.getElementById('reg-pass').value;

    mp.trigger('client:regData', JSON.stringify({regName, regMail, regPass}));
}

function logIn() {
    const logName = document.getElementById('log-name').value;
    const logPass = document.getElementById('log-pass').value;

    mp.trigger('client:logData', JSON.stringify({logName, logPass}));
}

function showLog() {
    document.querySelector('.reg-form').style.display = 'none';
    document.querySelector('.log-form').style.display = 'block';
}

function showReg() {
    document.querySelector('.log-form').style.display = 'none';
    document.querySelector('.reg-form').style.display = 'block';
}