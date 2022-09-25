import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { gte } from './validator';
var GREATER_THAN_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return GreaterThanEqualValidator; }),
    multi: true
};
var GreaterThanEqualValidator = /** @class */ (function () {
    function GreaterThanEqualValidator() {
    }
    GreaterThanEqualValidator.prototype.ngOnInit = function () {
        this.validator = gte(this.gte);
    };
    GreaterThanEqualValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'gte') {
                this.validator = gte(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    GreaterThanEqualValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    GreaterThanEqualValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], GreaterThanEqualValidator.prototype, "gte", void 0);
    GreaterThanEqualValidator = tslib_1.__decorate([
        Directive({
            selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
            providers: [GREATER_THAN_EQUAL_VALIDATOR]
        })
    ], GreaterThanEqualValidator);
    return GreaterThanEqualValidator;
}());
export { GreaterThanEqualValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9ncmVhdGVyLXRoYW4tZXF1YWwvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxhQUFhLEVBQTJDLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEYsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVsQyxJQUFNLDRCQUE0QixHQUFRO0lBQ3hDLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixDQUFDO0lBQ3hELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQU1GO0lBQUE7SUE0QkEsQ0FBQztJQXRCQyw0Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCwrQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsS0FBSyxJQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDekIsSUFBSSxHQUFHLEtBQUssS0FBSyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ2hELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNqQjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsNENBQVEsR0FBUixVQUFTLENBQWtCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsNkRBQXlCLEdBQXpCLFVBQTBCLEVBQWM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQTFCUTtRQUFSLEtBQUssRUFBRTs7MERBQWE7SUFEVix5QkFBeUI7UUFKckMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDBEQUEwRDtZQUNwRSxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDO09BQ1cseUJBQXlCLENBNEJyQztJQUFELGdDQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0E1QlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgZm9yd2FyZFJlZiwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgZ3RlIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBHUkVBVEVSX1RIQU5fRVFVQUxfVkFMSURBVE9SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEdyZWF0ZXJUaGFuRXF1YWxWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2d0ZV1bZm9ybUNvbnRyb2xOYW1lXSxbZ3RlXVtmb3JtQ29udHJvbF0sW2d0ZV1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtHUkVBVEVSX1RIQU5fRVFVQUxfVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBHcmVhdGVyVGhhbkVxdWFsVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLCBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGd0ZTogbnVtYmVyO1xuXG4gIHByaXZhdGUgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKCkgPT4gdm9pZDtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IGd0ZSh0aGlzLmd0ZSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKGtleSA9PT0gJ2d0ZScpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBndGUoY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihjKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbn1cbiJdfQ==