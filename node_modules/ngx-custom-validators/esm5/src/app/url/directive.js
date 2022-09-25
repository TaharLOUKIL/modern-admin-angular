import * as tslib_1 from "tslib";
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import { url } from './validator';
var URL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(function () { return UrlValidator; }),
    multi: true
};
var UrlValidator = /** @class */ (function () {
    function UrlValidator() {
    }
    UrlValidator.prototype.validate = function (c) {
        return url(c);
    };
    UrlValidator = tslib_1.__decorate([
        Directive({
            selector: '[url][formControlName],[url][formControl],[url][ngModel]',
            providers: [URL_VALIDATOR]
        })
    ], UrlValidator);
    return UrlValidator;
}());
export { UrlValidator };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC91cmwvZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUE4QixNQUFNLGdCQUFnQixDQUFDO0FBRTNFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFbEMsSUFBTSxhQUFhLEdBQVE7SUFDekIsT0FBTyxFQUFFLGFBQWE7SUFDdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsWUFBWSxFQUFaLENBQVksQ0FBQztJQUMzQyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFNRjtJQUFBO0lBSUEsQ0FBQztJQUhDLCtCQUFRLEdBQVIsVUFBUyxDQUFrQjtRQUN6QixPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBSFUsWUFBWTtRQUp4QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMERBQTBEO1lBQ3BFLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQztTQUMzQixDQUFDO09BQ1csWUFBWSxDQUl4QjtJQUFELG1CQUFDO0NBQUEsQUFKRCxJQUlDO1NBSlksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMSURBVE9SUywgVmFsaWRhdG9yLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IHVybCB9IGZyb20gJy4vdmFsaWRhdG9yJztcblxuY29uc3QgVVJMX1ZBTElEQVRPUjogYW55ID0ge1xuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBVcmxWYWxpZGF0b3IpLFxuICBtdWx0aTogdHJ1ZVxufTtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3VybF1bZm9ybUNvbnRyb2xOYW1lXSxbdXJsXVtmb3JtQ29udHJvbF0sW3VybF1bbmdNb2RlbF0nLFxuICBwcm92aWRlcnM6IFtVUkxfVkFMSURBVE9SXVxufSlcbmV4cG9ydCBjbGFzcyBVcmxWYWxpZGF0b3IgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiB7W2tleTogc3RyaW5nXTogYW55fSB7XG4gICAgcmV0dXJuIHVybChjKTtcbiAgfVxufVxuIl19