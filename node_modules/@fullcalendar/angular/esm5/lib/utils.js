/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * @param {?} input
 * @return {?}
 */
export function deepCopy(input) {
    if (Array.isArray(input)) {
        return input.map(deepCopy);
    }
    else if (input instanceof Date) {
        return new Date(input.valueOf());
    }
    else if (typeof input === 'object' && input) { // non-null object
        // non-null object
        return mapHash(input, deepCopy);
    }
    else { // everything else (null, function, etc)
        // everything else (null, function, etc)
        return input;
    }
}
/**
 * @param {?} input
 * @param {?} func
 * @return {?}
 */
function mapHash(input, func) {
    /** @type {?} */
    var output = {};
    for (var key in input) {
        if (hasOwnProperty.call(input, key)) {
            output[key] = func(input[key], key);
        }
    }
    return output;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZnVsbGNhbGVuZGFyL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxJQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQzs7Ozs7QUFNdkQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFLO0lBRTVCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUN4QixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7S0FFNUI7U0FBTSxJQUFJLEtBQUssWUFBWSxJQUFJLEVBQUU7UUFDaEMsT0FBTyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztLQUVsQztTQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssRUFBRSxFQUFFLGtCQUFrQjs7UUFDakUsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBRWpDO1NBQU0sRUFBRSx3Q0FBd0M7O1FBQy9DLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Q0FDRjs7Ozs7O0FBRUQsU0FBUyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUk7O0lBQzFCLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUVsQixLQUFLLElBQU0sR0FBRyxJQUFJLEtBQUssRUFBRTtRQUN2QixJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ25DLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDO0tBQ0Y7SUFFRCxPQUFPLE1BQU0sQ0FBQztDQUNmIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qXG5SZWFsbHkgc2ltcGxlIGNsb25lIHV0aWxpdHkuIE9ubHkgY29waWVzIHBsYWluIGFycmF5cywgb2JqZWN0cywgYW5kIERhdGVzLiBUcmFuc2ZlcnMgZXZlcnl0aGluZyBlbHNlIGFzLWlzLlxuV2FudGVkIHRvIHVzZSBhIHRoaXJkLXBhcnR5IGxpYiwgYnV0IG5vbmUgZGlkIGV4YWN0bHkgdGhpcy5cbiovXG5leHBvcnQgZnVuY3Rpb24gZGVlcENvcHkoaW5wdXQpIHtcblxuICBpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICByZXR1cm4gaW5wdXQubWFwKGRlZXBDb3B5KTtcblxuICB9IGVsc2UgaWYgKGlucHV0IGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShpbnB1dC52YWx1ZU9mKCkpO1xuXG4gIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAnb2JqZWN0JyAmJiBpbnB1dCkgeyAvLyBub24tbnVsbCBvYmplY3RcbiAgICByZXR1cm4gbWFwSGFzaChpbnB1dCwgZGVlcENvcHkpO1xuXG4gIH0gZWxzZSB7IC8vIGV2ZXJ5dGhpbmcgZWxzZSAobnVsbCwgZnVuY3Rpb24sIGV0YylcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwSGFzaChpbnB1dCwgZnVuYykge1xuICBjb25zdCBvdXRwdXQgPSB7fTtcblxuICBmb3IgKGNvbnN0IGtleSBpbiBpbnB1dCkge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGlucHV0LCBrZXkpKSB7XG4gICAgICBvdXRwdXRba2V5XSA9IGZ1bmMoaW5wdXRba2V5XSwga2V5KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0cHV0O1xufVxuIl19