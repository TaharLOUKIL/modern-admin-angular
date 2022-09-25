import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { number } from './validator';
var NUMBER_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return NumberValidator; }),
    multi: true
};
var NumberValidator = /** @class */ (function () {
    function NumberValidator() {
    }
    NumberValidator.prototype.validate = function (c) {
        return number(c);
    };
    NumberValidator = tslib_1.__decorate([
        Directive({
            selector: '[number][formControlName],[number][formControl],[number][ngModel]',
            providers: [NUMBER_VALIDATOR]
        })
    ], NumberValidator);
    return NumberValidator;
}());
export { NumberValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9udW1iZXIvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUE4QixNQUFNLGdCQUFnQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFckMsSUFBTSxnQkFBZ0IsR0FBUTtJQUM1QixPQUFPLEVBQUUsYUFBYTtJQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLEVBQWYsQ0FBZSxDQUFDO0lBQzlDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQU1GO0lBQUE7SUFJQSxDQUFDO0lBSEMsa0NBQVEsR0FBUixVQUFTLENBQWtCO1FBQ3pCLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFIVSxlQUFlO1FBSjNCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtRUFBbUU7WUFDN0UsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLGVBQWUsQ0FJM0I7SUFBRCxzQkFBQztDQUFBLEFBSkQsSUFJQztTQUpZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBudW1iZXIgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IE5VTUJFUl9WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnVtYmVyVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tudW1iZXJdW2Zvcm1Db250cm9sTmFtZV0sW251bWJlcl1bZm9ybUNvbnRyb2xdLFtudW1iZXJdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbTlVNQkVSX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiBudW1iZXIoYyk7XG4gIH1cbn1cbiJdfQ==