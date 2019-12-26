import React, { Component} from 'react';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import LoginPage from './login_page';
import Navigation from '../components/navigation';
class PageContainer extends Component {
  renderChildren() {
    if (this.props.isLoggedIn) {
      return (
        <div>
          <Navigation />
          <div className="container">
            {this.props.children}
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        <LoginPage />
      </div>
    );
  }

  render() {
    return (
      <DocumentTitle title="Prototype">
        {this.renderChildren()}
      </DocumentTitle>
    );
  }
}


function mapStateToProps(state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
  };
}

export default connect(
  mapStateToProps,
  { }
)(PageContainer);
