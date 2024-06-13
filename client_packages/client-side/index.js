let browser;

mp.events.add('showLoginScreen', () => {
    browser = mp.browsers.new('package://client-side/login-screen/index.html');
    mp.gui.cursor.show(true, true);
    mp.players.local.freezePosition(true);
    mp.game.ui.setMinimapVisible(true);
    mp.game.ui.displayRadar(false);
    mp.gui.chat.activate(false);
    mp.gui.chat.show(false);
});

mp.events.add('hideLoginScreen', () => {
    browser.destroy();
    mp.gui.cursor.show(false, false);
    mp.players.local.freezePosition(false);
    mp.game.ui.setMinimapVisible(false);
    mp.game.ui.displayRadar(true);
    mp.gui.chat.activate(true);
    mp.gui.chat.show(true);
});

mp.events.add('client:regData', (data) => {
    mp.events.callRemote ('regData', data);
});

mp.events.add('client:logData', (data) => {
    mp.events.callRemote ('logData', data);
});