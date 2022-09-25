import { Validators } from '@angular/forms';
import { isPresent } from '../util/lang';
export const email = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const v = control.value;
    /* tslint:disable */
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : { 'email': true };
    /* tslint:enable */
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9lbWFpbC92YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFrRCxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXpDLE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBZ0IsQ0FBQyxPQUF3QixFQUFvQixFQUFFO0lBQy9FLElBQUksU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRTtRQUMzQyxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsTUFBTSxDQUFDLEdBQVcsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNoQyxvQkFBb0I7SUFDcEIsT0FBTyx3SkFBd0osQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDbk0sbUJBQW1CO0FBQ3JCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4sIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc1ByZXNlbnQgfSBmcm9tICcuLi91dGlsL2xhbmcnO1xuXG5leHBvcnQgY29uc3QgZW1haWw6IFZhbGlkYXRvckZuID0gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgPT4ge1xuICBpZiAoaXNQcmVzZW50KFZhbGlkYXRvcnMucmVxdWlyZWQoY29udHJvbCkpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB2OiBzdHJpbmcgPSBjb250cm9sLnZhbHVlO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuICByZXR1cm4gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8udGVzdCh2KSA/IG51bGwgOiB7ICdlbWFpbCc6IHRydWUgfTtcbiAgLyogdHNsaW50OmVuYWJsZSAqL1xufTtcbiJdfQ==