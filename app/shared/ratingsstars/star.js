"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Star = (function () {
    function Star() {
        this.rate = new core_1.EventEmitter();
    }
    Star.prototype.handleRate = function () {
        if (!this.disabled) {
            this.rate.emit(this.position);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Star.prototype, "active", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Star.prototype, "position", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Star.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Star.prototype, "rate", void 0);
    Star = __decorate([
        core_1.Component({
            selector: 'star',
            template: "<span class=\"star\" [class.active]=\"active\" [class.disable]=\"disabled\" (click)=\"handleRate($event)\">&#9733;</span>",
            styles: ["\n    .star {\n      color: #efefef;\n      cursor: pointer;\n      font-size: 2rem;\n      transition: color .4s ease-in-out;\n    }\n    .star.active {\n      color: #FFD600;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], Star);
    return Star;
}());
exports.Star = Star;
//# sourceMappingURL=star.js.map