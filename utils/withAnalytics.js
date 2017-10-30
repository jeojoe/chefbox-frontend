import React, { Component } from 'react';
import { Analytics } from '../utils';

function withAnalytics(WrappedComponent) {
  return class AnalyzedComponent extends Component {
    componentDidMount() {
      if (!window.GA_INITIALIZED) {
        Analytics.GA.init();
        window.GA_INITIALIZED = true;
      }
      Analytics.GA.pageview(window.location.pathname);
    }

    render() {
      return (
        <WrappedComponent />
      );
    }
  };
}

export default withAnalytics;
