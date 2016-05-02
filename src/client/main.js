System.register(['@angular/core', '@angular/platform-browser-dynamic', './app/app.component', './app/environment'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_dynamic_1, app_component_1, environment_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            }],
        execute: function() {
            if (environment_1.environment.production) {
                core_1.enableProdMode();
            }
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [])
                .then(function (success) { return console.log("Bootstrap success"); })
                .catch(function (error) { return console.log(error); });
        }
    }
});
//# sourceMappingURL=main.js.map