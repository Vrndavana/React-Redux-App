import React from "react";
import {connect} from 'react-redux';
import Loader from 'react-loader-snipper';
import logo from '../images/chucknorris.jpg';
import {fetchChucknorris} from '../actions';

const Chucknorris = (props) => {
    return(
        <div className="joke-container">

            {/* <img src={logo} alt="chucknorris"/> */}

            <div className="getyourjoke">

                <h2 className='getjoke'> Get your Joke! </h2>
                {props.isLoading && (

                    <Loader type='Puff' color="red" height={100} width={100} timeout={3000}/>
                )}
                <button className="button" onClick={props.fetchChucknorris}> <b>Get joke</b> </button>

            </div>

            <div>
               {props.chuckNorris && !props.isLoading && <h2>{props.chuckNorris.value.joke}</h2>}       
            </div>

        </div>
    )

};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        chuckNorris: state.chuckNorris,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchChucknorris })(Chucknorris);