import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from './componets/Table';

import fetchData from './componets/store/actions';

class App extends Component {
	componentDidMount() {
		this.props.getData();
	}

	render() {
		return <Table data={this.props.data} />;
	}
}

const mapStateToProps = state => {
	return {
		data: state.data
	};
};

const mapDispatchToProps = fetchData();

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
