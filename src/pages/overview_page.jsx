import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchOverview } from '../actions/action_overview';
import DocumentTitle from 'react-document-title';
import Logger from '../utils/logger';
import { percent } from '../utils/formatting';
import Card from '../components/card';
import Container from '../components/container';


class OverviewPage extends Component {
  constructor(props) {
    super(props);
    this.logger = new Logger('OverviewPage');
    this.refresh = this.refresh.bind(this);
    this.chartstyle = {
      cutoutPercentage: 45, // This is 0 for Pie charts
      animation: {
        easing: 'easeOutBounce',
        steps: 100,
        rotate: true,
        scale: false,
      },
      responsive: true,
      circumference: Math.PI,
      rotation: 1.0 * Math.PI,
    };
  }

  componentWillMount() {
    this.refresh();
  }

  getChartData(active, inActive, activeTitle, inActiveTitle) {
    return {
      labels: [
        `${activeTitle}`,
        `${inActiveTitle}`,
      ],
      datasets: [
        {
          data: [active, inActive - active],
          backgroundColor: [
            '#5bc0de',
            '#f0ad4e',
          ],
          hoverBackgroundColor: [
            '#5bc0de',
            '#f0ad4e',
          ],
        }],
    };
  }

  refresh() {
    this.props.fetchOverview().catch((reason) => {
      const error = {
        status: reason.action.payload.status,
        statusText: reason.action.payload.statusText,
        serverError: reason.action.payload.data.error,
      };
      this.logger.error(error);
    });
  }

  render() {
    const { overview } = this.props;
    return (
      <DocumentTitle title="Overview">
        <div>
          <h1 className="page-header">Dashboard</h1>
          <Container>
            <Card
              title="Users"
              tools={
                <button
                  className="button button-neutral"
                  onClick={this.refresh}
                  type="button"
                >
                  <i className="fa fa-refresh" />
                </button>
              }
            >
              Active users: {percent(overview.usersActive, overview.users, 2)}
            </Card>
            <Card
              title="Users"
              tools={
                <button
                  className="button button-neutral"
                  onClick={this.refresh}
                  type="button"
                >
                  <i className="fa fa-refresh" />
                </button>
              }
            >
            Active companies: {percent(overview.companiesActive, overview.companies, 2)}
            </Card>
          </Container>
        </div>
      </DocumentTitle>
    );
  }
}


function mapStateToProps(state) {
  return {
    overview: state.overview,
  };
}

export default connect(
  mapStateToProps,
  { fetchOverview }
)(OverviewPage);
