import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';
import { notEqualTo } from './validator';
var NOT_EQUAL_TO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return NotEqualToValidator; }),
    multi: true
};
var NotEqualToValidator = /** @class */ (function () {
    function NotEqualToValidator() {
    }
    NotEqualToValidator.prototype.ngOnInit = function () {
        this.validator = notEqualTo(this.notEqualTo);
    };
    NotEqualToValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", FormControl)
    ], NotEqualToValidator.prototype, "notEqualTo", void 0);
    NotEqualToValidator = tslib_1.__decorate([
        Directive({
            selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
            providers: [NOT_EQUAL_TO_VALIDATOR]
        })
    ], NotEqualToValidator);
    return NotEqualToValidator;
}());
export { NotEqualToValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9ub3QtZXF1YWwtdG8vZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDckUsT0FBTyxFQUFFLGFBQWEsRUFBYSxXQUFXLEVBQWdDLE1BQU0sZ0JBQWdCLENBQUM7QUFFckcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUV6QyxJQUFNLHNCQUFzQixHQUFRO0lBQ2xDLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLG1CQUFtQixFQUFuQixDQUFtQixDQUFDO0lBQ2xELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQU1GO0lBQUE7SUFZQSxDQUFDO0lBUEMsc0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsc0NBQVEsR0FBUixVQUFTLENBQWtCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBVlE7UUFBUixLQUFLLEVBQUU7MENBQWEsV0FBVzsyREFBQztJQUR0QixtQkFBbUI7UUFKL0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLCtFQUErRTtZQUN6RixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csbUJBQW1CLENBWS9CO0lBQUQsMEJBQUM7Q0FBQSxBQVpELElBWUM7U0FaWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBmb3J3YXJkUmVmLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvciwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IG5vdEVxdWFsVG8gfSBmcm9tICcuL3ZhbGlkYXRvcic7XG5cbmNvbnN0IE5PVF9FUVVBTF9UT19WQUxJREFUT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTm90RXF1YWxUb1ZhbGlkYXRvciksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbm90RXF1YWxUb11bZm9ybUNvbnRyb2xOYW1lXSxbbm90RXF1YWxUb11bZm9ybUNvbnRyb2xdLFtub3RFcXVhbFRvXVtuZ01vZGVsXScsXG4gIHByb3ZpZGVyczogW05PVF9FUVVBTF9UT19WQUxJREFUT1JdXG59KVxuZXhwb3J0IGNsYXNzIE5vdEVxdWFsVG9WYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG5vdEVxdWFsVG86IEZvcm1Db250cm9sO1xuXG4gIHByaXZhdGUgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IG5vdEVxdWFsVG8odGhpcy5ub3RFcXVhbFRvKTtcbiAgfVxuXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoYyk7XG4gIH1cbn1cbiJdfQ==