import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { json } from './validator';
var JSON_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return JSONValidator; }),
    multi: true
};
var JSONValidator = /** @class */ (function () {
    function JSONValidator() {
    }
    JSONValidator.prototype.validate = function (c) {
        return json(c);
    };
    JSONValidator = tslib_1.__decorate([
        Directive({
            selector: '[json][formControlName],[json][formControl],[json][ngModel]',
            providers: [JSON_VALIDATOR]
        })
    ], JSONValidator);
    return JSONValidator;
}());
export { JSONValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9qc29uL2RpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBOEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRW5DLElBQU0sY0FBYyxHQUFRO0lBQzFCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGFBQWEsRUFBYixDQUFhLENBQUM7SUFDNUMsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBTUY7SUFBQTtJQUlBLENBQUM7SUFIQyxnQ0FBUSxHQUFSLFVBQVMsQ0FBa0I7UUFDekIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUhVLGFBQWE7UUFKekIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDZEQUE2RDtZQUN2RSxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7U0FDNUIsQ0FBQztPQUNXLGFBQWEsQ0FJekI7SUFBRCxvQkFBQztDQUFBLEFBSkQsSUFJQztTQUpZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBqc29uIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBKU09OX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBKU09OVmFsaWRhdG9yKSxcbiAgbXVsdGk6IHRydWVcbn07XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tqc29uXVtmb3JtQ29udHJvbE5hbWVdLFtqc29uXVtmb3JtQ29udHJvbF0sW2pzb25dW25nTW9kZWxdJyxcbiAgcHJvdmlkZXJzOiBbSlNPTl9WQUxJREFUT1JdXG59KVxuZXhwb3J0IGNsYXNzIEpTT05WYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIGpzb24oYyk7XG4gIH1cbn1cbiJdfQ==