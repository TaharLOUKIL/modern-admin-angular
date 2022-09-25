import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { lt } from './validator';
var LESS_THAN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return LessThanValidator; }),
    multi: true
};
var LessThanValidator = /** @class */ (function () {
    function LessThanValidator() {
    }
    LessThanValidator.prototype.ngOnInit = function () {
        this.validator = lt(this.lt);
    };
    LessThanValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'lt') {
                this.validator = lt(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    LessThanValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    LessThanValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], LessThanValidator.prototype, "lt", void 0);
    LessThanValidator = tslib_1.__decorate([
        Directive({
            selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
            providers: [LESS_THAN_VALIDATOR]
        })
    ], LessThanValidator);
    return LessThanValidator;
}());
export { LessThanValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9sZXNzLXRoYW4vZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxhQUFhLEVBQTJDLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEYsT0FBTyxFQUFFLEVBQUUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVqQyxJQUFNLG1CQUFtQixHQUFRO0lBQy9CLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGlCQUFpQixFQUFqQixDQUFpQixDQUFDO0lBQ2hELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQU1GO0lBQUE7SUE0QkEsQ0FBQztJQXRCQyxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsS0FBSyxJQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDekIsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQy9DLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNqQjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsb0NBQVEsR0FBUixVQUFTLENBQWtCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQscURBQXlCLEdBQXpCLFVBQTBCLEVBQWM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQTFCUTtRQUFSLEtBQUssRUFBRTs7aURBQVk7SUFEVCxpQkFBaUI7UUFKN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVEQUF1RDtZQUNqRSxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNqQyxDQUFDO09BQ1csaUJBQWlCLENBNEI3QjtJQUFELHdCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0E1QlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgZm9yd2FyZFJlZiwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgbHQgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IExFU1NfVEhBTl9WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTGVzc1RoYW5WYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2x0XVtmb3JtQ29udHJvbE5hbWVdLFtsdF1bZm9ybUNvbnRyb2xdLFtsdF1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtMRVNTX1RIQU5fVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBMZXNzVGhhblZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBsdDogbnVtYmVyO1xuXG4gIHByaXZhdGUgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKCkgPT4gdm9pZDtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IGx0KHRoaXMubHQpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZXMpIHtcbiAgICAgIGlmIChrZXkgPT09ICdsdCcpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBsdChjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yKGMpO1xuICB9XG5cbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxufVxuIl19