import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { creditCard } from './validator';
var CREDIT_CARD_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return CreditCardValidator; }),
    multi: true
};
var CreditCardValidator = /** @class */ (function () {
    function CreditCardValidator() {
    }
    CreditCardValidator.prototype.validate = function (c) {
        return creditCard(c);
    };
    CreditCardValidator = tslib_1.__decorate([
        Directive({
            selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
            providers: [CREDIT_CARD_VALIDATOR]
        })
    ], CreditCardValidator);
    return CreditCardValidator;
}());
export { CreditCardValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9jcmVkaXQtY2FyZC9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQThCLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV6QyxJQUFNLHFCQUFxQixHQUFRO0lBQ2pDLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFDO0lBQ2xELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQU1GO0lBQUE7SUFJQSxDQUFDO0lBSEMsc0NBQVEsR0FBUixVQUFTLENBQWtCO1FBQ3pCLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFIVSxtQkFBbUI7UUFKL0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLCtFQUErRTtZQUN6RixTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNuQyxDQUFDO09BQ1csbUJBQW1CLENBSS9CO0lBQUQsMEJBQUM7Q0FBQSxBQUpELElBSUM7U0FKWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBjcmVkaXRDYXJkIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBDUkVESVRfQ0FSRF9WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ3JlZGl0Q2FyZFZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3JlZGl0Q2FyZF1bZm9ybUNvbnRyb2xOYW1lXSxbY3JlZGl0Q2FyZF1bZm9ybUNvbnRyb2xdLFtjcmVkaXRDYXJkXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW0NSRURJVF9DQVJEX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgQ3JlZGl0Q2FyZFZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciB7XG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gY3JlZGl0Q2FyZChjKTtcbiAgfVxufVxuIl19