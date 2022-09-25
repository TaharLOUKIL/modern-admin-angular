import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { minDate } from './validator';
var MIN_DATE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return MinDateValidator; }),
    multi: true
};
var MinDateValidator = /** @class */ (function () {
    function MinDateValidator() {
    }
    MinDateValidator.prototype.ngOnInit = function () {
        this.validator = minDate(this.minDate);
    };
    MinDateValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'minDate') {
                this.validator = minDate(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    MinDateValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    MinDateValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], MinDateValidator.prototype, "minDate", void 0);
    MinDateValidator = tslib_1.__decorate([
        Directive({
            selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
            providers: [MIN_DATE_VALIDATOR]
        })
    ], MinDateValidator);
    return MinDateValidator;
}());
export { MinDateValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9taW4tZGF0ZS9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLGFBQWEsRUFBMkMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXRDLElBQU0sa0JBQWtCLEdBQVE7SUFDOUIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLENBQUM7SUFDL0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBTUY7SUFBQTtJQTRCQSxDQUFDO0lBdEJDLG1DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHNDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxLQUFLLElBQU0sR0FBRyxJQUFJLE9BQU8sRUFBRTtZQUN6QixJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDcEQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ2pCO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRCxtQ0FBUSxHQUFSLFVBQVMsQ0FBa0I7UUFDekIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxvREFBeUIsR0FBekIsVUFBMEIsRUFBYztRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBMUJRO1FBQVIsS0FBSyxFQUFFOztxREFBUztJQUROLGdCQUFnQjtRQUo1QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0VBQXNFO1lBQ2hGLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO1NBQ2hDLENBQUM7T0FDVyxnQkFBZ0IsQ0E0QjVCO0lBQUQsdUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQTVCWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBmb3J3YXJkUmVmLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBtaW5EYXRlIH0gZnJvbSAnLi92YWxpZGF0b3InO1xuXG5jb25zdCBNSU5fREFURV9WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTWluRGF0ZVZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWluRGF0ZV1bZm9ybUNvbnRyb2xOYW1lXSxbbWluRGF0ZV1bZm9ybUNvbnRyb2xdLFttaW5EYXRlXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW01JTl9EQVRFX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgTWluRGF0ZVZhbGlkYXRvciBpbXBsZW1lbnRzIFZhbGlkYXRvciwgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBtaW5EYXRlO1xuXG4gIHByaXZhdGUgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKCkgPT4gdm9pZDtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG1pbkRhdGUodGhpcy5taW5EYXRlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoa2V5ID09PSAnbWluRGF0ZScpIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBtaW5EYXRlKGNoYW5nZXNba2V5XS5jdXJyZW50VmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xuICAgICAgICAgIHRoaXMub25DaGFuZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoYyk7XG4gIH1cblxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG59XG4iXX0=