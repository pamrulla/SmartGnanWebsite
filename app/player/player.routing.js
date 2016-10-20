"use strict";
var router_1 = require('@angular/router');
var player_component_1 = require('./player.component');
var routes = [
    { path: 'player/:cid/:chid/:lid', component: player_component_1.PlayerComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=player.routing.js.map