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
var Stars = (function () {
    function Stars() {
        this.rate = new core_1.EventEmitter();
        this.stars = [1, 2, 3, 4, 5];
        this.ratinga = this.rating;
        var count = this.starCount < 0 ? 5 : this.starCount;
    }
    Stars.prototype.ngOnInit = function () {
        this.ratinga = this.rating;
        console.log(this.disabled);
    };
    Stars.prototype.onRate = function (star) {
        if (!this.disabled) {
            this.rate.emit(star);
            this.ratinga = star;
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Stars.prototype, "starCount", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Stars.prototype, "rating", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Stars.prototype, "disabled", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Stars.prototype, "rate", void 0);
    Stars = __decorate([
        core_1.Component({
            selector: 'stars',
            template: "\n    <div class=\"stars\">\n      <star\n        *ngFor=\"let star of stars\"\n        [active]=\"star <= ratinga\"\n        (rate)=\"onRate($event)\"\n        [position]=\"star\"\n        [disabled]=\"disabled\"\n      >\n      </star>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], Stars);
    return Stars;
}());
exports.Stars = Stars;
//# sourceMappingURL=stars.js.map