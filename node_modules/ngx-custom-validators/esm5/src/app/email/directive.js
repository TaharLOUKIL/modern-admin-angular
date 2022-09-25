import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { email } from './validator';
var EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return EmailValidator; }),
    multi: true
};
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.prototype.validate = function (c) {
        return email(c);
    };
    EmailValidator = tslib_1.__decorate([
        Directive({
            selector: '[ngvemail][formControlName],[ngvemail][formControl],[ngvemail][ngModel]',
            providers: [EMAIL_VALIDATOR]
        })
    ], EmailValidator);
    return EmailValidator;
}());
export { EmailValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9lbWFpbC9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQThCLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0UsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUVwQyxJQUFNLGVBQWUsR0FBUTtJQUMzQixPQUFPLEVBQUUsYUFBYTtJQUN0QixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxjQUFjLEVBQWQsQ0FBYyxDQUFDO0lBQzdDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQU1GO0lBQUE7SUFJQSxDQUFDO0lBSEMsaUNBQVEsR0FBUixVQUFTLENBQWtCO1FBQ3pCLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xCLENBQUM7SUFIVSxjQUFjO1FBSjFCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx5RUFBeUU7WUFDbkYsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO1NBQzdCLENBQUM7T0FDVyxjQUFjLENBSTFCO0lBQUQscUJBQUM7Q0FBQSxBQUpELElBSUM7U0FKWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgZW1haWwgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IEVNQUlMX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFbWFpbFZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd2ZW1haWxdW2Zvcm1Db250cm9sTmFtZV0sW25ndmVtYWlsXVtmb3JtQ29udHJvbF0sW25ndmVtYWlsXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW0VNQUlMX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgRW1haWxWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIGVtYWlsKGMpO1xuICB9XG59XG4iXX0=