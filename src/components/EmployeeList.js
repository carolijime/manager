import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
    componentDidMount() {
        this.props.employeesFetch();
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.employees.length !== this.props.employees.length) {
            this.props.employeesFetch();
        }
    }

    render() {
        return (
            <FlatList data={this.props.employees} renderItem={({item}) => <ListItem employee={item}/>}/>
        );
    };
}

const mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid} //{ shift: 'Monday', name: 'S', id: '1j2j34};
    });

    return { employees };
};

export default connect(mapStateToProps, { employeesFetch }) (EmployeeList);
