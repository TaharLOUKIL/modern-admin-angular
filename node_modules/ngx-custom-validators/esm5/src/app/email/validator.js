import { Validators } from '@angular/forms';
import { isPresent } from '../util/lang';
export var email = function (control) {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    var v = control.value;
    /* tslint:disable */
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : { 'email': true };
    /* tslint:enable */
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWN1c3RvbS12YWxpZGF0b3JzLyIsInNvdXJjZXMiOlsic3JjL2FwcC9lbWFpbC92YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFrRCxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXpDLE1BQU0sQ0FBQyxJQUFNLEtBQUssR0FBZ0IsVUFBQyxPQUF3QjtJQUN6RCxJQUFJLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7UUFDM0MsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQU0sQ0FBQyxHQUFXLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDaEMsb0JBQW9CO0lBQ3BCLE9BQU8sd0pBQXdKLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0lBQ25NLG1CQUFtQjtBQUNyQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgaXNQcmVzZW50IH0gZnJvbSAnLi4vdXRpbC9sYW5nJztcblxuZXhwb3J0IGNvbnN0IGVtYWlsOiBWYWxpZGF0b3JGbiA9IChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzID0+IHtcbiAgaWYgKGlzUHJlc2VudChWYWxpZGF0b3JzLnJlcXVpcmVkKGNvbnRyb2wpKSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgdjogc3RyaW5nID0gY29udHJvbC52YWx1ZTtcbiAgLyogdHNsaW50OmRpc2FibGUgKi9cbiAgcmV0dXJuIC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvLnRlc3QodikgPyBudWxsIDogeyAnZW1haWwnOiB0cnVlIH07XG4gIC8qIHRzbGludDplbmFibGUgKi9cbn07XG4iXX0=