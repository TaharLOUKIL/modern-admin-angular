import * as tslib_1 from "tslib";
import { Validators } from '@angular/forms';
import { isPresent } from '../util/lang';
export var property = function (value) {
    return function (control) {
        var e_1, _a;
        if (isPresent(Validators.required(control))) {
            return null;
        }
        var properties = value.split(',');
        var obj = control.value;
        var isValid = true;
        try {
            for (var properties_1 = tslib_1.__values(properties), properties_1_1 = properties_1.next(); !properties_1_1.done; properties_1_1 = properties_1.next()) {
                var prop = properties_1_1.value;
                if (obj[prop] == null) {
                    isValid = false;
                    break;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (properties_1_1 && !properties_1_1.done && (_a = properties_1.return)) _a.call(properties_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return isValid ? null : { hasProperty: { value: value } };
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9wcm9wZXJ0eS92YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBa0QsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QyxNQUFNLENBQUMsSUFBTSxRQUFRLEdBQUcsVUFBQyxLQUFhO0lBQ3BDLE9BQU8sVUFBQyxPQUF3Qjs7UUFFOUIsSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFO1lBQzNDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXBDLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDMUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDOztZQUNuQixLQUFtQixJQUFBLGVBQUEsaUJBQUEsVUFBVSxDQUFBLHNDQUFBLDhEQUFFO2dCQUExQixJQUFNLElBQUksdUJBQUE7Z0JBQ2IsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO29CQUNyQixPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNoQixNQUFNO2lCQUNQO2FBQ0Y7Ozs7Ozs7OztRQUNELE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUM7SUFDNUQsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGlzUHJlc2VudCB9IGZyb20gJy4uL3V0aWwvbGFuZyc7XG5cbmV4cG9ydCBjb25zdCBwcm9wZXJ0eSA9ICh2YWx1ZTogc3RyaW5nKTogVmFsaWRhdG9yRm4gPT4ge1xuICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgPT4ge1xuXG4gICAgaWYgKGlzUHJlc2VudChWYWxpZGF0b3JzLnJlcXVpcmVkKGNvbnRyb2wpKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvcGVydGllcyA9IHZhbHVlLnNwbGl0KCcsJyk7XG5cbiAgICBjb25zdCBvYmogPSBjb250cm9sLnZhbHVlO1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcbiAgICBmb3IgKGNvbnN0IHByb3Agb2YgcHJvcGVydGllcykge1xuICAgICAgaWYgKG9ialtwcm9wXSA9PSBudWxsKSB7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkID8gbnVsbCA6IHsgaGFzUHJvcGVydHk6IHsgdmFsdWU6IHZhbHVlIH0gfTtcbiAgfTtcbn07XG4iXX0=