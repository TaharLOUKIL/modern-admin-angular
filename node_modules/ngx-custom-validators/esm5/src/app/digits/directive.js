import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { digits } from './validator';
var DIGITS_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return DigitsValidator; }),
    multi: true
};
var DigitsValidator = /** @class */ (function () {
    function DigitsValidator() {
    }
    DigitsValidator.prototype.validate = function (c) {
        return digits(c);
    };
    DigitsValidator = tslib_1.__decorate([
        Directive({
            selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
            providers: [DIGITS_VALIDATOR]
        })
    ], DigitsValidator);
    return DigitsValidator;
}());
export { DigitsValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9kaWdpdHMvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUE4QixNQUFNLGdCQUFnQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFckMsSUFBTSxnQkFBZ0IsR0FBUTtJQUM1QixPQUFPLEVBQUUsYUFBYTtJQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLEVBQWYsQ0FBZSxDQUFDO0lBQzlDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQU1GO0lBQUE7SUFJQSxDQUFDO0lBSEMsa0NBQVEsR0FBUixVQUFTLENBQWtCO1FBQ3pCLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFIVSxlQUFlO1FBSjNCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtRUFBbUU7WUFDN0UsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLGVBQWUsQ0FJM0I7SUFBRCxzQkFBQztDQUFBLEFBSkQsSUFJQztTQUpZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBkaWdpdHMgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IERJR0lUU19WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGlnaXRzVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkaWdpdHNdW2Zvcm1Db250cm9sTmFtZV0sW2RpZ2l0c11bZm9ybUNvbnRyb2xdLFtkaWdpdHNdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbRElHSVRTX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgRGlnaXRzVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiBkaWdpdHMoYyk7XG4gIH1cbn1cbiJdfQ==