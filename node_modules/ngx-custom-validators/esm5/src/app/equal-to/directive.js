import * as tslib_1 from "tslib";
import { Directive, Input, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';
import { equalTo } from './validator';
var EQUAL_TO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return EqualToValidator; }),
    multi: true
};
var EqualToValidator = /** @class */ (function () {
    function EqualToValidator() {
    }
    EqualToValidator.prototype.ngOnInit = function () {
        this.validator = equalTo(this.equalTo);
    };
    EqualToValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", FormControl)
    ], EqualToValidator.prototype, "equalTo", void 0);
    EqualToValidator = tslib_1.__decorate([
        Directive({
            selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
            providers: [EQUAL_TO_VALIDATOR]
        })
    ], EqualToValidator);
    return EqualToValidator;
}());
export { EqualToValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9lcXVhbC10by9kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFhLFdBQVcsRUFBZ0MsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXRDLElBQU0sa0JBQWtCLEdBQVE7SUFDOUIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLENBQUM7SUFDL0MsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBTUY7SUFBQTtJQVlBLENBQUM7SUFQQyxtQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxtQ0FBUSxHQUFSLFVBQVMsQ0FBa0I7UUFDekIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFWUTtRQUFSLEtBQUssRUFBRTswQ0FBVSxXQUFXO3FEQUFDO0lBRG5CLGdCQUFnQjtRQUo1QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0VBQXNFO1lBQ2hGLFNBQVMsRUFBRSxDQUFDLGtCQUFrQixDQUFDO1NBQ2hDLENBQUM7T0FDVyxnQkFBZ0IsQ0FZNUI7SUFBRCx1QkFBQztDQUFBLEFBWkQsSUFZQztTQVpZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIGZvcndhcmRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgZXF1YWxUbyB9IGZyb20gJy4vdmFsaWRhdG9yJztcblxuY29uc3QgRVFVQUxfVE9fVkFMSURBVE9SOiBhbnkgPSB7XG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEVxdWFsVG9WYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2VxdWFsVG9dW2Zvcm1Db250cm9sTmFtZV0sW2VxdWFsVG9dW2Zvcm1Db250cm9sXSxbZXF1YWxUb11bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtFUVVBTF9UT19WQUxJREFUT1JdXG59KVxuZXhwb3J0IGNsYXNzIEVxdWFsVG9WYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3IsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGVxdWFsVG86IEZvcm1Db250cm9sO1xuXG4gIHByaXZhdGUgdmFsaWRhdG9yOiBWYWxpZGF0b3JGbjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZhbGlkYXRvciA9IGVxdWFsVG8odGhpcy5lcXVhbFRvKTtcbiAgfVxuXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IHtba2V5OiBzdHJpbmddOiBhbnl9IHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IoYyk7XG4gIH1cbn1cbiJdfQ==