import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { base64 } from './validator';
var BASE64_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return Base64Validator; }),
    multi: true
};
var Base64Validator = /** @class */ (function () {
    function Base64Validator() {
    }
    Base64Validator.prototype.validate = function (c) {
        return base64(c);
    };
    Base64Validator = tslib_1.__decorate([
        Directive({
            selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
            providers: [BASE64_VALIDATOR]
        })
    ], Base64Validator);
    return Base64Validator;
}());
export { Base64Validator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9iYXNlNjQvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUE4QixNQUFNLGdCQUFnQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFckMsSUFBTSxnQkFBZ0IsR0FBUTtJQUM1QixPQUFPLEVBQUUsYUFBYTtJQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLEVBQWYsQ0FBZSxDQUFDO0lBQzlDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQU1GO0lBQUE7SUFJQSxDQUFDO0lBSEMsa0NBQVEsR0FBUixVQUFTLENBQWtCO1FBQ3pCLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFIVSxlQUFlO1FBSjNCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtRUFBbUU7WUFDN0UsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLGVBQWUsQ0FJM0I7SUFBRCxzQkFBQztDQUFBLEFBSkQsSUFJQztTQUpZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBiYXNlNjQgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IEJBU0U2NF9WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQmFzZTY0VmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tiYXNlNjRdW2Zvcm1Db250cm9sTmFtZV0sW2Jhc2U2NF1bZm9ybUNvbnRyb2xdLFtiYXNlNjRdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbQkFTRTY0X1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgQmFzZTY0VmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yIHtcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiBiYXNlNjQoYyk7XG4gIH1cbn1cbiJdfQ==