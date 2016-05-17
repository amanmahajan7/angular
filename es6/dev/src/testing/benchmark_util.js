import { BrowserDomAdapter } from 'angular2/src/platform/browser/browser_adapter';
import { document, window } from 'angular2/src/facade/browser';
import { NumberWrapper, isBlank } from 'angular2/src/facade/lang';
import { BaseException } from 'angular2/src/facade/exceptions';
var DOM = new BrowserDomAdapter();
export function getIntParameter(name) {
    return NumberWrapper.parseInt(getStringParameter(name), 10);
}
export function getStringParameter(name) {
    var els = DOM.querySelectorAll(document, `input[name="${name}"]`);
    var value;
    var el;
    for (var i = 0; i < els.length; i++) {
        el = els[i];
        var type = DOM.type(el);
        if ((type != 'radio' && type != 'checkbox') || DOM.getChecked(el)) {
            value = DOM.getValue(el);
            break;
        }
    }
    if (isBlank(value)) {
        throw new BaseException(`Could not find and input field with name ${name}`);
    }
    return value;
}
export function bindAction(selector, callback) {
    var el = DOM.querySelector(document, selector);
    DOM.on(el, 'click', function (_) { callback(); });
}
export function microBenchmark(name, iterationCount, callback) {
    var durationName = `${name}/${iterationCount}`;
    window.console.time(durationName);
    callback();
    window.console.timeEnd(durationName);
}
export function windowProfile(name) {
    window.console.profile(name);
}
export function windowProfileEnd(name) {
    window.console.profileEnd(name);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmVuY2htYXJrX3V0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLVJKSGtXU1pYLnRtcC9hbmd1bGFyMi9zcmMvdGVzdGluZy9iZW5jaG1hcmtfdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sK0NBQStDO09BQ3hFLEVBQUMsUUFBUSxFQUFFLE1BQU0sRUFBQyxNQUFNLDZCQUE2QjtPQUNyRCxFQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUMsTUFBTSwwQkFBMEI7T0FDeEQsRUFBQyxhQUFhLEVBQW1CLE1BQU0sZ0NBQWdDO0FBRTlFLElBQUksR0FBRyxHQUFHLElBQUksaUJBQWlCLEVBQUUsQ0FBQztBQUVsQyxnQ0FBZ0MsSUFBWTtJQUMxQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBRUQsbUNBQW1DLElBQVk7SUFDN0MsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxlQUFlLElBQUksSUFBSSxDQUFDLENBQUM7SUFDbEUsSUFBSSxLQUFLLENBQUM7SUFDVixJQUFJLEVBQUUsQ0FBQztJQUVQLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3BDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDWixJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEUsS0FBSyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekIsS0FBSyxDQUFDO1FBQ1IsQ0FBQztJQUNILENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sSUFBSSxhQUFhLENBQUMsNENBQTRDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsMkJBQTJCLFFBQWdCLEVBQUUsUUFBa0I7SUFDN0QsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDL0MsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUVELCtCQUErQixJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVE7SUFDM0QsSUFBSSxZQUFZLEdBQUcsR0FBRyxJQUFJLElBQUksY0FBYyxFQUFFLENBQUM7SUFDL0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEMsUUFBUSxFQUFFLENBQUM7SUFDWCxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxDQUFDO0FBRUQsOEJBQThCLElBQVk7SUFDbEMsTUFBTSxDQUFDLE9BQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUVELGlDQUFpQyxJQUFZO0lBQ3JDLE1BQU0sQ0FBQyxPQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Jyb3dzZXJEb21BZGFwdGVyfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vYnJvd3Nlci9icm93c2VyX2FkYXB0ZXInO1xuaW1wb3J0IHtkb2N1bWVudCwgd2luZG93fSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2Jyb3dzZXInO1xuaW1wb3J0IHtOdW1iZXJXcmFwcGVyLCBpc0JsYW5rfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtCYXNlRXhjZXB0aW9uLCBXcmFwcGVkRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbnMnO1xuXG52YXIgRE9NID0gbmV3IEJyb3dzZXJEb21BZGFwdGVyKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnRQYXJhbWV0ZXIobmFtZTogc3RyaW5nKSB7XG4gIHJldHVybiBOdW1iZXJXcmFwcGVyLnBhcnNlSW50KGdldFN0cmluZ1BhcmFtZXRlcihuYW1lKSwgMTApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyaW5nUGFyYW1ldGVyKG5hbWU6IHN0cmluZykge1xuICB2YXIgZWxzID0gRE9NLnF1ZXJ5U2VsZWN0b3JBbGwoZG9jdW1lbnQsIGBpbnB1dFtuYW1lPVwiJHtuYW1lfVwiXWApO1xuICB2YXIgdmFsdWU7XG4gIHZhciBlbDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKykge1xuICAgIGVsID0gZWxzW2ldO1xuICAgIHZhciB0eXBlID0gRE9NLnR5cGUoZWwpO1xuICAgIGlmICgodHlwZSAhPSAncmFkaW8nICYmIHR5cGUgIT0gJ2NoZWNrYm94JykgfHwgRE9NLmdldENoZWNrZWQoZWwpKSB7XG4gICAgICB2YWx1ZSA9IERPTS5nZXRWYWx1ZShlbCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoaXNCbGFuayh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgQmFzZUV4Y2VwdGlvbihgQ291bGQgbm90IGZpbmQgYW5kIGlucHV0IGZpZWxkIHdpdGggbmFtZSAke25hbWV9YCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kQWN0aW9uKHNlbGVjdG9yOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICB2YXIgZWwgPSBET00ucXVlcnlTZWxlY3Rvcihkb2N1bWVudCwgc2VsZWN0b3IpO1xuICBET00ub24oZWwsICdjbGljaycsIGZ1bmN0aW9uKF8pIHsgY2FsbGJhY2soKTsgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaWNyb0JlbmNobWFyayhuYW1lLCBpdGVyYXRpb25Db3VudCwgY2FsbGJhY2spIHtcbiAgdmFyIGR1cmF0aW9uTmFtZSA9IGAke25hbWV9LyR7aXRlcmF0aW9uQ291bnR9YDtcbiAgd2luZG93LmNvbnNvbGUudGltZShkdXJhdGlvbk5hbWUpO1xuICBjYWxsYmFjaygpO1xuICB3aW5kb3cuY29uc29sZS50aW1lRW5kKGR1cmF0aW9uTmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3aW5kb3dQcm9maWxlKG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAoPGFueT53aW5kb3cuY29uc29sZSkucHJvZmlsZShuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdpbmRvd1Byb2ZpbGVFbmQobmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICg8YW55PndpbmRvdy5jb25zb2xlKS5wcm9maWxlRW5kKG5hbWUpO1xufVxuIl19