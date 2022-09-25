import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { equal } from './validator';
var EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return EqualValidator; }),
    multi: true
};
var EqualValidator = /** @class */ (function () {
    function EqualValidator() {
    }
    EqualValidator.prototype.ngOnInit = function () {
        this.validator = equal(this.equal);
    };
    EqualValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'equal') {
                this.validator = equal(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    EqualValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    EqualValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
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
    return EqualValidator;
}());
export { EqualValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9lcXVhbC9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDL0YsT0FBTyxFQUFFLGFBQWEsRUFBMkMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXBDLElBQU0sZUFBZSxHQUFRO0lBQzNCLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGNBQWMsRUFBZCxDQUFjLENBQUM7SUFDN0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBTUY7SUFBQTtJQTRCQSxDQUFDO0lBdEJDLGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxLQUFLLElBQU0sR0FBRyxJQUFJLE9BQU8sRUFBRTtZQUN6QixJQUFJLEdBQUcsS0FBSyxPQUFPLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7aUJBQ2pCO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsQ0FBa0I7UUFDekIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxrREFBeUIsR0FBekIsVUFBMEIsRUFBYztRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBMUJRO1FBQVIsS0FBSyxFQUFFOztpREFBWTtJQURULGNBQWM7UUFKMUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdFQUFnRTtZQUMxRSxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7U0FDN0IsQ0FBQztPQUNXLGNBQWMsQ0E0QjFCO0lBQUQscUJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQTVCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgZm9yd2FyZFJlZiwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgZXF1YWwgfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IEVRVUFMX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFcXVhbFZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZXF1YWxdW2Zvcm1Db250cm9sTmFtZV0sW2VxdWFsXVtmb3JtQ29udHJvbF0sW2VxdWFsXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW0VRVUFMX1ZBTElEQVRPUl1cbn0pXG5leHBvcnQgY2xhc3MgRXF1YWxWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgZXF1YWw6IGFueTtcblxuICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG4gIHByaXZhdGUgb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSBlcXVhbCh0aGlzLmVxdWFsKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoa2V5ID09PSAnZXF1YWwnKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gZXF1YWwoY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihjKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbn1cbiJdfQ==