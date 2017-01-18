import { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import AccountDetails from './AccountDetails';
import Topics from './Topics';
import Location from './Location';

const styles = {
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 20 // TODO: How to get -> context.muiTheme.spacing.desktopGutter / 2
  },
  button: {
    height: 68
  },
  card: {
      margin: 20, // TODO: How to get -> context.muiTheme.spacing.desktopGutter / 2,
      flex: 1,
      flexBasis: '450px',
      maxWidth: '650px'
  }
};

class HorizontalTransition extends Component {
  state = {
    loading: false,
    finished: false,
    stepIndex: 0
  };

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2
      }));
    }
  };

  handlePrev = () => {
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: this.state.stepIndex - 1
      }));
    }
  };

  getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <AccountDetails handlePrev={this.props.cancel} onSubmit={(values) => {
            console.log(values);
            this.handleNext();
          }}/>
        );
      case 1:
        return (
          <Topics handlePrev={this.handlePrev} onSubmit={(values) => {
            console.log(values);
            this.handleNext();
          }}/>
        );
      case 2:
        return (
          <Location handlePrev={this.handlePrev} onSubmit={async (values) => {
            const res = await this.props.register(values);
            console.log(res);
          }}/>
        );
    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        </div>
      );
    }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
      </div>
    );
  }

  render() {
    const {loading, stepIndex} = this.state;

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Basic info</StepLabel>
          </Step>
          <Step>
            <StepLabel>Topics</StepLabel>
          </Step>
          <Step>
            <StepLabel>Location</StepLabel>
          </Step>
        </Stepper>
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
      </div>
    );
  }
}

class RegisterExpert extends Component {
  render() {
    console.log(this.props);
    return(
      <div style={styles.wrapper}>
        <Card style={styles.card}>
          <CardText>
            <HorizontalTransition cancel={ this.props.cancel } register={ this.props.register } />
          </CardText>
        </Card>
      </div>
    );
  }
}

RegisterExpert.contextTypes = {
  muiTheme: PropTypes.object.isRequired
};

export default RegisterExpert;
