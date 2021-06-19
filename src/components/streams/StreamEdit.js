import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    render() {
        // console.log(this.props);
        if (!this.props.stream) {
            return <div>Loading...</div>
        };
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm
                    onSubmit={this.onSubmit}
                    // _.pick is a function that let you select a property from an object
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    // or this method initialValues={{title: this.props.stream.title, description:this.props.stream.description}}
                />
            </div>
            
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps);
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);