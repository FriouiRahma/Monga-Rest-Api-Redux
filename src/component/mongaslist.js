import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMongalist, deletMonga, addMonga } from '../actions/mongaActions';
import ModalComp from './ModalInput';

class Mongaslist extends Component {

    componentDidMount() {
        this.props.getMongalist()
    }
    render() {
        return (
            <div>
                {this.props.Mongalist.map(el =>
                    <div>
                        <h1>{el.name}</h1>
                        <h1>{el.author}</h1>
                        <h1>{el.year}</h1>
                        <button
                            onClick={() => {
                                this.props.deletMonga(el._id)
                               
                            }}>Delete Monga</button>
                           < ModalComp edit={true} MongaToupdate={el}  />
                    </div>

                )}
               

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        Mongalist: state.MongReducers
    }
}



export default connect(mapStateToProps,
    {
        getMongalist,
        deletMonga,
        addMonga,
    })(Mongaslist);