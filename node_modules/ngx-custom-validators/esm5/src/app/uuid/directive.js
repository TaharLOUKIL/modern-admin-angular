import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { uuid } from './validator';
var UUID_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return UUIDValidator; }),
    multi: true
};
var UUIDValidator = /** @class */ (function () {
    function UUIDValidator() {
    }
    UUIDValidator.prototype.ngOnInit = function () {
        this.validator = uuid(this.uuid);
    };
    UUIDValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'uuid') {
                this.validator = uuid(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    UUIDValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    UUIDValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], UUIDValidator.prototype, "uuid", void 0);
    UUIDValidator = tslib_1.__decorate([
        Directive({
            selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
            providers: [UUID_VALIDATOR]
        })
    ], UUIDValidator);
    return UUIDValidator;
}());
export { UUIDValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC91dWlkL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFvQyxNQUFNLGVBQWUsQ0FBQztBQUMvRixPQUFPLEVBQUUsYUFBYSxFQUEyQyxNQUFNLGdCQUFnQixDQUFDO0FBRXhGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFbkMsSUFBTSxjQUFjLEdBQVE7SUFDMUIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsYUFBYSxFQUFiLENBQWEsQ0FBQztJQUM1QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFNRjtJQUFBO0lBNEJBLENBQUM7SUF0QkMsZ0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLEtBQUssSUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO1lBQ3pCLElBQUksR0FBRyxLQUFLLE1BQU0sRUFBRTtnQkFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDakI7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVELGdDQUFRLEdBQVIsVUFBUyxDQUFrQjtRQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGlEQUF5QixHQUF6QixVQUEwQixFQUFjO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUExQlE7UUFBUixLQUFLLEVBQUU7OytDQUFNO0lBREgsYUFBYTtRQUp6QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsNkRBQTZEO1lBQ3ZFLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztTQUM1QixDQUFDO09BQ1csYUFBYSxDQTRCekI7SUFBRCxvQkFBQztDQUFBLEFBNUJELElBNEJDO1NBNUJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBmb3J3YXJkUmVmLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBVVUlEX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBVVUlEVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1t1dWlkXVtmb3JtQ29udHJvbE5hbWVdLFt1dWlkXVtmb3JtQ29udHJvbF0sW3V1aWRdW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbVVVJRF9WQUxJREFUT1JdXG59KVxuZXhwb3J0IGNsYXNzIFVVSURWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdXVpZDtcblxuICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG4gIHByaXZhdGUgb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSB1dWlkKHRoaXMudXVpZCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKGtleSA9PT0gJ3V1aWQnKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gdXVpZChjaGFuZ2VzW2tleV0uY3VycmVudFZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMub25DaGFuZ2UpIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yKGMpO1xuICB9XG5cbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxufVxuIl19