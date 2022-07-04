System.register("h1", [], function (exports_1, context_1) {
    "use strict";
    var hi;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("hi", hi = "你好");
        }
    };
});
System.register("app", ["h1"], function (exports_2, context_2) {
    "use strict";
    var h1_1, a1;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (h1_1_1) {
                h1_1 = h1_1_1;
            }
        ],
        execute: function () {
            a1 = 'a1';
            console.log(h1_1.hi);
        }
    };
});
