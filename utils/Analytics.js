import ReactGA from 'react-ga';
import config from '../config';

export default {
  GA: {
    init() {
      ReactGA.initialize(config.prod.GA.TRACKING_ID);
    },
    pageview(page) {
      ReactGA.set({ page });
      ReactGA.pageview(page);
    },
    event(category, action) {
      if (category && action) {
        ReactGA.event({ category, action });
      }
    },
    exception(description, fatal = false) {
      if (description) {
        ReactGA.exception({ description, fatal });
      }
    },
  },
};
