import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { rangeLength } from './validator';
var RANGE_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return RangeLengthValidator; }),
    multi: true
};
var RangeLengthValidator = /** @class */ (function () {
    function RangeLengthValidator() {
    }
    RangeLengthValidator.prototype.ngOnInit = function () {
        this.validator = rangeLength(this.rangeLength);
    };
    RangeLengthValidator.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'rangeLength') {
                this.validator = rangeLength(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    RangeLengthValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    RangeLengthValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], RangeLengthValidator.prototype, "rangeLength", void 0);
    RangeLengthValidator = tslib_1.__decorate([
        Directive({
            selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
            providers: [RANGE_LENGTH_VALIDATOR]
        })
    ], RangeLengthValidator);
    return RangeLengthValidator;
}());
export { RangeLengthValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9yYW5nZS1sZW5ndGgvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxhQUFhLEVBQTJDLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUUxQyxJQUFNLHNCQUFzQixHQUFRO0lBQ2xDLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG9CQUFvQixFQUFwQixDQUFvQixDQUFDO0lBQ25ELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQU1GO0lBQUE7SUE0QkEsQ0FBQztJQXRCQyx1Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsS0FBSyxJQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7WUFDekIsSUFBSSxHQUFHLEtBQUssYUFBYSxFQUFFO2dCQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3hELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDakIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNqQjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsdUNBQVEsR0FBUixVQUFTLENBQWtCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsd0RBQXlCLEdBQXpCLFVBQTBCLEVBQWM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQTFCUTtRQUFSLEtBQUssRUFBRTs7NkRBQXVCO0lBRHBCLG9CQUFvQjtRQUpoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0ZBQWtGO1lBQzVGLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3BDLENBQUM7T0FDVyxvQkFBb0IsQ0E0QmhDO0lBQUQsMkJBQUM7Q0FBQSxBQTVCRCxJQTRCQztTQTVCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBmb3J3YXJkUmVmLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyByYW5nZUxlbmd0aCB9IGZyb20gJy4vdmFsaWRhdG9yJztcblxuY29uc3QgUkFOR0VfTEVOR1RIX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYW5nZUxlbmd0aFZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcmFuZ2VMZW5ndGhdW2Zvcm1Db250cm9sTmFtZV0sW3JhbmdlTGVuZ3RoXVtmb3JtQ29udHJvbF0sW3JhbmdlTGVuZ3RoXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW1JBTkdFX0xFTkdUSF9WQUxJREFUT1JdXG59KVxuZXhwb3J0IGNsYXNzIFJhbmdlTGVuZ3RoVmFsaWRhdG9yIGltcGxlbWVudHMgVmFsaWRhdG9yLCBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHJhbmdlTGVuZ3RoOiBbbnVtYmVyXTtcblxuICBwcml2YXRlIHZhbGlkYXRvcjogVmFsaWRhdG9yRm47XG4gIHByaXZhdGUgb25DaGFuZ2U6ICgpID0+IHZvaWQ7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52YWxpZGF0b3IgPSByYW5nZUxlbmd0aCh0aGlzLnJhbmdlTGVuZ3RoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoa2V5ID09PSAncmFuZ2VMZW5ndGgnKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gcmFuZ2VMZW5ndGgoY2hhbmdlc1trZXldLmN1cnJlbnRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgdGhpcy5vbkNoYW5nZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKToge1trZXk6IHN0cmluZ106IGFueX0ge1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcihjKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbn1cbiJdfQ==