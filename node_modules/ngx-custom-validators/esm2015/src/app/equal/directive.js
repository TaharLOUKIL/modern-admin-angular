import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { equal } from './validator';
const EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualValidator),
    multi: true
};
let EqualValidator = class EqualValidator {
    ngOnInit() {
        this.validator = equal(this.equal);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'equal') {
                this.validator = equal(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], EqualValidator.prototype, "equal", void 0);
EqualValidator = tslib_1.__decorate([
    Directive({
        selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
        providers: [EQUAL_VALIDATOR]
    })
], EqualValidator);
export { EqualValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9lcXVhbC9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLGFBQWEsRUFBMkMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLE1BQU0sZUFBZSxHQUFRO0lBQzNCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO0lBQzdDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQU1GLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFNekIsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEtBQUssTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFO1lBQ3pCLElBQUksR0FBRyxLQUFLLE9BQU8sRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztpQkFDakI7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxDQUFrQjtRQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHlCQUF5QixDQUFDLEVBQWM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztDQUNGLENBQUE7QUEzQlU7SUFBUixLQUFLLEVBQUU7OzZDQUFZO0FBRFQsY0FBYztJQUoxQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0VBQWdFO1FBQzFFLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztLQUM3QixDQUFDO0dBQ1csY0FBYyxDQTRCMUI7U0E1QlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIGZvcndhcmRSZWYsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxJREFUT1JTLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGVxdWFsIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBFUVVBTF9WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXF1YWxWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2VxdWFsXVtmb3JtQ29udHJvbE5hbWVdLFtlcXVhbF1bZm9ybUNvbnRyb2xdLFtlcXVhbF1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtFUVVBTF9WQUxJREFUT1JdXG59KVxuZXhwb3J0IGNsYXNzIEVxdWFsVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLCBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGVxdWFsOiBhbnk7XG5cbiAgcHJpdmF0ZSB2YWxpZGF0b3I6IFZhbGlkYXRvckZuO1xuICBwcml2YXRlIG9uQ2hhbmdlOiAoKSA9PiB2b2lkO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gZXF1YWwodGhpcy5lcXVhbCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKGtleSA9PT0gJ2VxdWFsJykge1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IGVxdWFsKGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xuICAgICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoYyk7XG4gIH1cblxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG59XG4iXX0=