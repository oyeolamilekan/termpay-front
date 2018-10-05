import React, { Component } from 'react';
import Axios from 'axios';
import url from './url';
import Loading from './loading';

class FeedBack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: '',
            email:'',
            message: '',
            loading:false,
            error:false,
            sent:false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            loading:true
        })
        const {score} = this.state;
        const {email} = this.state;
        const {message} = this.state;
        if (score && email && message){
            Axios.post(`${url}/api/create/`,{
                score:score,
                email:email,
                message:message,
            }).then(res => {
                this.setState({
                    sent:true,
                    loading:false,
                })
            }).catch(error => {
                this.setState({
                    error:true,
                    loading:false,
                })
            })
        }
    }
    render() {
        const {sent} = this.state;
        const {error} = this.state;
        const {loading} = this.state;
        return (
            <div className='modal-container'>
                <a href="/#" className="float" data-toggle="modal" data-target="#exampleModal">
                    <i className="fa fa-envelope my-float"></i>
                </a>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Send us feedback</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                            {loading ? <div className='text-center'>
                                    <Loading/>
                                    </div> :
                            sent ? 
                                <div className='text-center'>
                                    <h1>
                                        <i className='fa fa-check text-danger'></i>
                                    </h1>
                                    <h3 className='font-weight-light'>Thanks for the feedback.</h3>
                                    <p className='font-weight-light'>We promise to work on it.</p>
                                </div>
                             : error ? 
                                <div className='text-center'>
                                    <h1>
                                        <i className='fa fa-times text-danger'></i>
                                    </h1>
                                    <h5 className='font-weight-light'>Something bad happened</h5>
                                </div>
                             : 
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">How was the service?</label>
                                        <select required className="form-control" onChange={this.handleChange} name='score'>
                                            <option defaultValue value=''>Choose ......</option>
                                            <option>Bad</option>
                                            <option>Fair</option>
                                            <option>Good</option>
                                            <option>Very Good</option>
                                            <option>Excellent</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} name='email' required='true'/>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlTextarea1">Message</label>
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Please say nice things.' onChange={this.handleChange} name='message' required='true'></textarea>
                                    </div>
                                    <div className='float-right'>
                                        <button type="button" className="btn btn-dark mr-2" data-dismiss="modal"><i className="fa fa-times"></i> Close</button>
                                        <button type="submit" className="btn btn-primary"><i className="fa fa-paper-plane"></i> Send</button>
                                    </div>
                                </form>
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeedBack;