"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationalSubscription = void 0;
var Subsciption_1 = require("./Subsciption");
var EducationalSubscription = /** @class */ (function (_super) {
    __extends(EducationalSubscription, _super);
    function EducationalSubscription() {
        return _super.call(this, 149, 3, ['Discovery', 'History', 'National Geographic', 'Science+'], ['Перегляд на 1 пристрої', 'HD якість', 'Офлайн перегляд']) || this;
    }
    EducationalSubscription.prototype.getType = function () {
        return 'Освітня';
    };
    return EducationalSubscription;
}(Subsciption_1.Subscription));
exports.EducationalSubscription = EducationalSubscription;
