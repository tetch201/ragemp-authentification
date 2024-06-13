mp.events.addCommand('veh', (player, args) => {
    mp.vehicles.new(args, player.position);
});

mp.events.addCommand('weapon', (player, fullText, weapon, ammo) => {
    let hash = mp.joaat(weapon);
    player.giveWeapon(hash, parseInt(ammo));
});

mp.events.addCommand('clothes', (player, args) => {
    let arg = args.split(' ');
    player.setClothes(parseInt(arg[0]), parseInt(arg[1]), parseInt(arg[2]), parseInt(arg[3]));
});