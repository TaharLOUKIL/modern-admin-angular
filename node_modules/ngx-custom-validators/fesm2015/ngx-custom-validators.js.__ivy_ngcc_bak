import { __decorate, __metadata } from 'tslib';
import { forwardRef, Input, Directive, NgModule } from '@angular/core';
import { Validators, FormControl, NgModel, NG_VALIDATORS } from '@angular/forms';

function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
function isDate(obj) {
    try {
        const date = new Date(obj);
        return !isNaN(date.getTime());
    }
    catch (e) {
        return false;
    }
}
function parseDate(obj) {
    try {
        // Moment.js
        if (obj._d instanceof Date) {
            const d = obj._d;
            const month = +d.getMonth() + 1;
            const day = +d.getDate();
            return `${d.getFullYear()}-${formatDayOrMonth(month)}-${formatDayOrMonth(day)}`;
        }
        // NgbDateStruct
        if (typeof obj === 'object' && obj.year != null && obj.month != null && obj.day != null) {
            const month = +obj.month;
            const day = +obj.day;
            return `${obj.year}-${formatDayOrMonth(month)}-${formatDayOrMonth(day)}`;
        }
    }
    catch (e) { }
    return obj;
}
function formatDayOrMonth(month) {
    return month < 10 ? `0${month}` : month;
}

const arrayLength = (value) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const obj = control.value;
        return Array.isArray(obj) && obj.length >= +value ? null : { arrayLength: { minLength: value } };
    };
};

const base64 = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : { base64: true };
};

const creditCard = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    const sanitized = v.replace(/[^0-9]+/g, '');
    // problem with chrome
    /* tslint:disable */
    if (!(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|(?:9792)\d{12})$/.test(sanitized))) {
        return { creditCard: true };
    }
    /* tslint:enable */
    let sum = 0;
    let digit;
    let tmpNum;
    let shouldDouble;
    for (let i = sanitized.length - 1; i >= 0; i--) {
        digit = sanitized.substring(i, (i + 1));
        tmpNum = parseInt(digit, 10);
        if (shouldDouble) {
            tmpNum *= 2;
            if (tmpNum >= 10) {
                sum += ((tmpNum % 10) + 1);
            }
            else {
                sum += tmpNum;
            }
        }
        else {
            sum += tmpNum;
        }
        shouldDouble = !shouldDouble;
    }
    if (Boolean((sum % 10) === 0 ? sanitized : false)) {
        return null;
    }
    return { creditCard: true };
};

const date = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    let v = control.value;
    v = parseDate(v);
    return isDate(v) ? null : { date: true };
};

const dateISO = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : { dateISO: true };
};

const digits = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    return /^\d+$/.test(v) ? null : { digits: true };
};

const email = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    /* tslint:disable */
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : { 'email': true };
    /* tslint:enable */
};

const equal = (val) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = control.value;
        return val === v ? null : { equal: { value: val } };
    };
};

const equalTo = (equalControl) => {
    let subscribe = false;
    return (control) => {
        if (!subscribe) {
            subscribe = true;
            equalControl.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        const v = control.value;
        return equalControl.value === v ? null : { equalTo: { control: equalControl, value: equalControl.value } };
    };
};

const gt = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v > +value ? null : { gt: { value: value } };
    };
};

const gte = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v >= +value ? null : { gte: { value: value } };
    };
};

const json = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    try {
        const obj = JSON.parse(v);
        if (Boolean(obj) && typeof obj === 'object') {
            return null;
        }
    }
    catch (e) { }
    return { json: true };
};

const lt = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v < +value ? null : { lt: { value: value } };
    };
};

const lte = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v <= +value ? null : { lte: { value: value } };
    };
};

const max = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v <= +value ? null : { max: { value: value } };
    };
};

const maxDate = (maxInput) => {
    let value;
    let subscribe = false;
    let maxValue = maxInput;
    const isForm = maxInput instanceof FormControl || maxInput instanceof NgModel;
    return (control) => {
        if (!subscribe && isForm) {
            subscribe = true;
            maxInput.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        if (isForm) {
            maxValue = maxInput.value;
        }
        value = parseDate(maxValue);
        if (!isDate(value) && !(value instanceof Function)) {
            if (value == null) {
                return null;
            }
            else if (isForm) {
                return { maxDate: { error: 'maxDate is invalid' } };
            }
            else {
                throw Error('maxDate value must be or return a formatted date');
            }
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const d = new Date(parseDate(control.value)).getTime();
        if (!isDate(d)) {
            return { value: true };
        }
        if (value instanceof Function) {
            value = value();
        }
        return d <= new Date(value).getTime() ? null : (isForm ? { maxDate: { control: maxInput, value: maxInput.value } } : { maxDate: { value: maxValue, control: undefined } });
    };
};

const min = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v >= +value ? null : { min: { value: value } };
    };
};

const minDate = (minInput) => {
    let value;
    let subscribe = false;
    let minValue = minInput;
    const isForm = minInput instanceof FormControl || minInput instanceof NgModel;
    return (control) => {
        if (!subscribe && isForm) {
            subscribe = true;
            minInput.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        if (isForm) {
            minValue = minInput.value;
        }
        value = parseDate(minValue);
        if (!isDate(value) && !(value instanceof Function)) {
            if (value == null) {
                return null;
            }
            else if (isForm) {
                return { minDate: { error: 'minDate is invalid' } };
            }
            else {
                throw Error('minDate value must be or return a formatted date');
            }
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const d = new Date(parseDate(control.value)).getTime();
        if (!isDate(d)) {
            return { value: true };
        }
        if (value instanceof Function) {
            value = value();
        }
        return d >= new Date(value).getTime() ? null : (isForm ? { minDate: { control: minInput, value: minInput.value } } : { minDate: { value: minValue, control: undefined } });
    };
};

const notEqual = (val) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = control.value;
        return val !== v ? null : { notEqual: { value: val } };
    };
};

const notEqualTo = (notEqualControl) => {
    let subscribe = false;
    return (control) => {
        if (!subscribe) {
            subscribe = true;
            notEqualControl.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        const v = control.value;
        if (notEqualControl.value == null && v == null) {
            return null;
        }
        return notEqualControl.value !== v ? null : { notEqualTo: { control: notEqualControl, value: notEqualControl.value } };
    };
};

const number = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : { 'number': true };
};

const property = (value) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const properties = value.split(',');
        const obj = control.value;
        let isValid = true;
        for (const prop of properties) {
            if (obj[prop] == null) {
                isValid = false;
                break;
            }
        }
        return isValid ? null : { hasProperty: { value: value } };
    };
};

const range = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = +control.value;
        return v >= value[0] && v <= value[1] ? null : { range: { value: value } };
    };
};

const rangeLength = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = control.value;
        return v.length >= value[0] && v.length <= value[1] ? null : { rangeLength: { value: value } };
    };
};

const uuids = {
    '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};
const uuid = (version) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const v = control.value;
        const pattern = uuids[version] || uuids.all;
        return (new RegExp(pattern)).test(v) ? null : { uuid: true };
    };
};

const url = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    /* tslint:disable */
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { 'url': true };
    /* tslint:enable */
};

const ARRAY_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => ArrayLengthValidator),
    multi: true
};
let ArrayLengthValidator = class ArrayLengthValidator {
    ngOnInit() {
        this.validator = arrayLength(this.arrayLength);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'arrayLength') {
                this.validator = arrayLength(changes[key].currentValue);
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
__decorate([
    Input(),
    __metadata("design:type", Number)
], ArrayLengthValidator.prototype, "arrayLength", void 0);
ArrayLengthValidator = __decorate([
    Directive({
        selector: '[arrayLength][formControlName],[arrayLength][formControl],[arrayLength][ngModel]',
        providers: [ARRAY_LENGTH_VALIDATOR]
    })
], ArrayLengthValidator);

const BASE64_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => Base64Validator),
    multi: true
};
let Base64Validator = class Base64Validator {
    validate(c) {
        return base64(c);
    }
};
Base64Validator = __decorate([
    Directive({
        selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
        providers: [BASE64_VALIDATOR]
    })
], Base64Validator);

const CREDIT_CARD_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CreditCardValidator),
    multi: true
};
let CreditCardValidator = class CreditCardValidator {
    validate(c) {
        return creditCard(c);
    }
};
CreditCardValidator = __decorate([
    Directive({
        selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
        providers: [CREDIT_CARD_VALIDATOR]
    })
], CreditCardValidator);

const DATE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateValidator),
    multi: true
};
let DateValidator = class DateValidator {
    validate(c) {
        return date(c);
    }
};
DateValidator = __decorate([
    Directive({
        selector: '[date][formControlName],[date][formControl],[date][ngModel]',
        providers: [DATE_VALIDATOR]
    })
], DateValidator);

const DATE_ISO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateISOValidator),
    multi: true
};
let DateISOValidator = class DateISOValidator {
    validate(c) {
        return dateISO(c);
    }
};
DateISOValidator = __decorate([
    Directive({
        selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
        providers: [DATE_ISO_VALIDATOR]
    })
], DateISOValidator);

const DIGITS_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DigitsValidator),
    multi: true
};
let DigitsValidator = class DigitsValidator {
    validate(c) {
        return digits(c);
    }
};
DigitsValidator = __decorate([
    Directive({
        selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
        providers: [DIGITS_VALIDATOR]
    })
], DigitsValidator);

const EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EmailValidator),
    multi: true
};
let EmailValidator = class EmailValidator {
    validate(c) {
        return email(c);
    }
};
EmailValidator = __decorate([
    Directive({
        selector: '[ngvemail][formControlName],[ngvemail][formControl],[ngvemail][ngModel]',
        providers: [EMAIL_VALIDATOR]
    })
], EmailValidator);

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
__decorate([
    Input(),
    __metadata("design:type", Object)
], EqualValidator.prototype, "equal", void 0);
EqualValidator = __decorate([
    Directive({
        selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
        providers: [EQUAL_VALIDATOR]
    })
], EqualValidator);

const EQUAL_TO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualToValidator),
    multi: true
};
let EqualToValidator = class EqualToValidator {
    ngOnInit() {
        this.validator = equalTo(this.equalTo);
    }
    validate(c) {
        return this.validator(c);
    }
};
__decorate([
    Input(),
    __metadata("design:type", FormControl)
], EqualToValidator.prototype, "equalTo", void 0);
EqualToValidator = __decorate([
    Directive({
        selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
        providers: [EQUAL_TO_VALIDATOR]
    })
], EqualToValidator);

const GREATER_THAN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => GreaterThanValidator),
    multi: true
};
let GreaterThanValidator = class GreaterThanValidator {
    ngOnInit() {
        this.validator = gt(this.gt);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'gt') {
                this.validator = gt(changes[key].currentValue);
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
__decorate([
    Input(),
    __metadata("design:type", Number)
], GreaterThanValidator.prototype, "gt", void 0);
GreaterThanValidator = __decorate([
    Directive({
        selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
        providers: [GREATER_THAN_VALIDATOR]
    })
], GreaterThanValidator);

const GREATER_THAN_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => GreaterThanEqualValidator),
    multi: true
};
let GreaterThanEqualValidator = class GreaterThanEqualValidator {
    ngOnInit() {
        this.validator = gte(this.gte);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'gte') {
                this.validator = gte(changes[key].currentValue);
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
__decorate([
    Input(),
    __metadata("design:type", Number)
], GreaterThanEqualValidator.prototype, "gte", void 0);
GreaterThanEqualValidator = __decorate([
    Directive({
        selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
        providers: [GREATER_THAN_EQUAL_VALIDATOR]
    })
], GreaterThanEqualValidator);

const JSON_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => JSONValidator),
    multi: true
};
let JSONValidator = class JSONValidator {
    validate(c) {
        return json(c);
    }
};
JSONValidator = __decorate([
    Directive({
        selector: '[json][formControlName],[json][formControl],[json][ngModel]',
        providers: [JSON_VALIDATOR]
    })
], JSONValidator);

const LESS_THAN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => LessThanValidator),
    multi: true
};
let LessThanValidator = class LessThanValidator {
    ngOnInit() {
        this.validator = lt(this.lt);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'lt') {
                this.validator = lt(changes[key].currentValue);
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
__decorate([
    Input(),
    __metadata("design:type", Number)
], LessThanValidator.prototype, "lt", void 0);
LessThanValidator = __decorate([
    Directive({
        selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
        providers: [LESS_THAN_VALIDATOR]
    })
], LessThanValidator);

const LESS_THAN_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => LessThanEqualValidator),
    multi: true
};
let LessThanEqualValidator = class LessThanEqualValidator {
    ngOnInit() {
        this.validator = lte(this.lte);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'lte') {
                this.validator = lte(changes[key].currentValue);
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
__decorate([
    Input(),
    __metadata("design:type", Number)
], LessThanEqualValidator.prototype, "lte", void 0);
LessThanEqualValidator = __decorate([
    Directive({
        selector: '[lte][formControlName],[lte][formControl],[lte][ngModel]',
        providers: [LESS_THAN_EQUAL_VALIDATOR]
    })
], LessThanEqualValidator);

const MAX_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MaxValidator),
    multi: true
};
let MaxValidator = class MaxValidator {
    ngOnInit() {
        this.validator = max(this.max);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'max') {
                this.validator = max(changes[key].currentValue);
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
__decorate([
    Input(),
    __metadata("design:type", Number)
], MaxValidator.prototype, "max", void 0);
MaxValidator = __decorate([
    Directive({
        selector: '[max][formControlName],[max][formControl],[max][ngModel]',
        providers: [MAX_VALIDATOR]
    })
], MaxValidator);

const MAX_DATE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MaxDateValidator),
    multi: true
};
let MaxDateValidator = class MaxDateValidator {
    ngOnInit() {
        this.validator = maxDate(this.maxDate);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'maxDate') {
                this.validator = maxDate(changes[key].currentValue);
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
__decorate([
    Input(),
    __metadata("design:type", Object)
], MaxDateValidator.prototype, "maxDate", void 0);
MaxDateValidator = __decorate([
    Directive({
        selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
        providers: [MAX_DATE_VALIDATOR]
    })
], MaxDateValidator);

const MIN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MinValidator),
    multi: true
};
let MinValidator = class MinValidator {
    ngOnInit() {
        this.validator = min(this.min);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'min') {
                this.validator = min(changes[key].currentValue);
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
__decorate([
    Input(),
    __metadata("design:type", Number)
], MinValidator.prototype, "min", void 0);
MinValidator = __decorate([
    Directive({
        selector: '[min][formControlName],[min][formControl],[min][ngModel]',
        providers: [MIN_VALIDATOR]
    })
], MinValidator);

const MIN_DATE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MinDateValidator),
    multi: true
};
let MinDateValidator = class MinDateValidator {
    ngOnInit() {
        this.validator = minDate(this.minDate);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'minDate') {
                this.validator = minDate(changes[key].currentValue);
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
__decorate([
    Input(),
    __metadata("design:type", Object)
], MinDateValidator.prototype, "minDate", void 0);
MinDateValidator = __decorate([
    Directive({
        selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
        providers: [MIN_DATE_VALIDATOR]
    })
], MinDateValidator);

const NOT_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NotEqualValidator),
    multi: true
};
let NotEqualValidator = class NotEqualValidator {
    ngOnInit() {
        this.validator = notEqual(this.notEqual);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'notEqual') {
                this.validator = notEqual(changes[key].currentValue);
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
__decorate([
    Input(),
    __metadata("design:type", Object)
], NotEqualValidator.prototype, "notEqual", void 0);
NotEqualValidator = __decorate([
    Directive({
        selector: '[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]',
        providers: [NOT_EQUAL_VALIDATOR]
    })
], NotEqualValidator);

const NOT_EQUAL_TO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NotEqualToValidator),
    multi: true
};
let NotEqualToValidator = class NotEqualToValidator {
    ngOnInit() {
        this.validator = notEqualTo(this.notEqualTo);
    }
    validate(c) {
        return this.validator(c);
    }
};
__decorate([
    Input(),
    __metadata("design:type", FormControl)
], NotEqualToValidator.prototype, "notEqualTo", void 0);
NotEqualToValidator = __decorate([
    Directive({
        selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
        providers: [NOT_EQUAL_TO_VALIDATOR]
    })
], NotEqualToValidator);

const NUMBER_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NumberValidator),
    multi: true
};
let NumberValidator = class NumberValidator {
    validate(c) {
        return number(c);
    }
};
NumberValidator = __decorate([
    Directive({
        selector: '[number][formControlName],[number][formControl],[number][ngModel]',
        providers: [NUMBER_VALIDATOR]
    })
], NumberValidator);

const PROPERTY_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => PropertyValidator),
    multi: true
};
let PropertyValidator = class PropertyValidator {
    ngOnInit() {
        this.validator = property(this.property);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'property') {
                this.validator = property(changes[key].currentValue);
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
__decorate([
    Input(),
    __metadata("design:type", String)
], PropertyValidator.prototype, "property", void 0);
PropertyValidator = __decorate([
    Directive({
        selector: '[property][formControlName],[property][formControl],[property][ngModel]',
        providers: [PROPERTY_VALIDATOR]
    })
], PropertyValidator);

const RANGE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RangeValidator),
    multi: true
};
let RangeValidator = class RangeValidator {
    ngOnInit() {
        this.validator = range(this.range);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'range') {
                this.validator = range(changes[key].currentValue);
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
__decorate([
    Input(),
    __metadata("design:type", Array)
], RangeValidator.prototype, "range", void 0);
RangeValidator = __decorate([
    Directive({
        selector: '[range][formControlName],[range][formControl],[range][ngModel]',
        providers: [RANGE_VALIDATOR]
    })
], RangeValidator);

const RANGE_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RangeLengthValidator),
    multi: true
};
let RangeLengthValidator = class RangeLengthValidator {
    ngOnInit() {
        this.validator = rangeLength(this.rangeLength);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'rangeLength') {
                this.validator = rangeLength(changes[key].currentValue);
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
__decorate([
    Input(),
    __metadata("design:type", Array)
], RangeLengthValidator.prototype, "rangeLength", void 0);
RangeLengthValidator = __decorate([
    Directive({
        selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
        providers: [RANGE_LENGTH_VALIDATOR]
    })
], RangeLengthValidator);

const URL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UrlValidator),
    multi: true
};
let UrlValidator = class UrlValidator {
    validate(c) {
        return url(c);
    }
};
UrlValidator = __decorate([
    Directive({
        selector: '[url][formControlName],[url][formControl],[url][ngModel]',
        providers: [URL_VALIDATOR]
    })
], UrlValidator);

const UUID_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UUIDValidator),
    multi: true
};
let UUIDValidator = class UUIDValidator {
    ngOnInit() {
        this.validator = uuid(this.uuid);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'uuid') {
                this.validator = uuid(changes[key].currentValue);
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
__decorate([
    Input(),
    __metadata("design:type", Object)
], UUIDValidator.prototype, "uuid", void 0);
UUIDValidator = __decorate([
    Directive({
        selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
        providers: [UUID_VALIDATOR]
    })
], UUIDValidator);

const CustomValidators = {
    arrayLength,
    base64,
    creditCard,
    date,
    dateISO,
    digits,
    email,
    equal,
    equalTo,
    gt,
    gte,
    json,
    lt,
    lte,
    max,
    maxDate,
    min,
    minDate,
    notEqual,
    notEqualTo,
    number,
    property,
    range,
    rangeLength,
    url,
    uuid
};
const CustomDirectives = [
    ArrayLengthValidator,
    Base64Validator,
    CreditCardValidator,
    DateValidator,
    DateISOValidator,
    DigitsValidator,
    EmailValidator,
    EqualValidator,
    EqualToValidator,
    GreaterThanValidator,
    GreaterThanEqualValidator,
    JSONValidator,
    LessThanValidator,
    LessThanEqualValidator,
    MaxValidator,
    MaxDateValidator,
    MinValidator,
    MinDateValidator,
    NotEqualValidator,
    NotEqualToValidator,
    NumberValidator,
    PropertyValidator,
    RangeValidator,
    RangeLengthValidator,
    UrlValidator,
    UUIDValidator
];
let CustomFormsModule = class CustomFormsModule {
};
CustomFormsModule = __decorate([
    NgModule({
        declarations: [CustomDirectives],
        exports: [CustomDirectives]
    })
], CustomFormsModule);

/**
 * Generated bundle index. Do not edit.
 */

export { CustomFormsModule, CustomValidators, arrayLength as ɵa, base64 as ɵb, ArrayLengthValidator as ɵba, Base64Validator as ɵbb, CreditCardValidator as ɵbc, DateValidator as ɵbd, DateISOValidator as ɵbe, DigitsValidator as ɵbf, EmailValidator as ɵbg, EqualValidator as ɵbh, EqualToValidator as ɵbi, GreaterThanValidator as ɵbj, GreaterThanEqualValidator as ɵbk, JSONValidator as ɵbl, LessThanValidator as ɵbm, LessThanEqualValidator as ɵbn, MaxValidator as ɵbo, MaxDateValidator as ɵbp, MinValidator as ɵbq, MinDateValidator as ɵbr, NotEqualValidator as ɵbs, NotEqualToValidator as ɵbt, NumberValidator as ɵbu, PropertyValidator as ɵbv, RangeValidator as ɵbw, RangeLengthValidator as ɵbx, UrlValidator as ɵby, UUIDValidator as ɵbz, creditCard as ɵc, date as ɵd, dateISO as ɵe, digits as ɵf, email as ɵg, equal as ɵh, equalTo as ɵi, gt as ɵj, gte as ɵk, json as ɵl, lt as ɵm, lte as ɵn, max as ɵo, maxDate as ɵp, min as ɵq, minDate as ɵr, notEqual as ɵs, notEqualTo as ɵt, number as ɵu, property as ɵv, range as ɵw, rangeLength as ɵx, url as ɵy, uuid as ɵz };
//# sourceMappingURL=ngx-custom-validators.js.map
