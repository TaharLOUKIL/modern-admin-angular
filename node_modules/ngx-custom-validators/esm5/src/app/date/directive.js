import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { date } from './validator';
var DATE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return DateValidator; }),
    multi: true
};
var DateValidator = /** @class */ (function () {
    function DateValidator() {
    }
    DateValidator.prototype.validate = function (c) {
        return date(c);
    };
    DateValidator = tslib_1.__decorate([
        Directive({
            selector: '[date][formControlName],[date][formControl],[date][ngModel]',
            providers: [DATE_VALIDATOR]
        })
    ], DateValidator);
    return DateValidator;
}());
export { DateValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9kYXRlL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBOEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRW5DLElBQU0sY0FBYyxHQUFRO0lBQzFCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGFBQWEsRUFBYixDQUFhLENBQUM7SUFDNUMsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBTUY7SUFBQTtJQUlBLENBQUM7SUFIQyxnQ0FBUSxHQUFSLFVBQVMsQ0FBa0I7UUFDekIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUhVLGFBQWE7UUFKekIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDZEQUE2RDtZQUN2RSxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7U0FDNUIsQ0FBQztPQUNXLGFBQWEsQ0FJekI7SUFBRCxvQkFBQztDQUFBLEFBSkQsSUFJQztTQUpZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBkYXRlIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBEQVRFX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRlVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tkYXRlXVtmb3JtQ29udHJvbE5hbWVdLFtkYXRlXVtmb3JtQ29udHJvbF0sW2RhdGVdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbREFURV9WQUxJREFUT1JdXG59KVxuZXhwb3J0IGNsYXNzIERhdGVWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIGRhdGUoYyk7XG4gIH1cbn1cbiJdfQ==