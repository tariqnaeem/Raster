import Moment from 'moment';
import { extendMoment } from 'moment-range';

// adds moment-range to moment.js and set some defaults
const moment = extendMoment(Moment);
moment.defaultFormat = 'YYYY-MM-DD';

moment.updateLocale('en', {
    relativeTime : {
        past:   "%s ago",
        s:  "a few seconds",
        m:  "a minute",
        mm: "%d minutes",
        h:  "an hour",
        hh: "%d hours",
        d:  "a day",
        dd: "%d days",
        M:  "a month",
        MM: "%d months",
        y:  "a year",
        yy: "%d years"
    }
});

export default moment;
