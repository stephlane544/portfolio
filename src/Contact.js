import React, { Component } from 'react';



class Contact extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         name: '',
    //         email: '',
    //         message:'',
    //         mailSent: false,
    //         error: null
    //     };
    // }

    // handleChange = e => {
    //     this.setState({[e.target.name]: e.target.value});
    // }

    // handleSubmit = e => {
    //     e.preventDefault();
      
    // }

    render() {
        return (
            <form className='contactPage form' action="https://formspree.io/stephlane544@gmail.com"  method="POST">
                <input type="text"
                    placeholder='First Name'
                    name='name'
                    // value={this.state.name}
                    // onChange={this.handleChange}
                    required
                />
                <input type="email"
                    placeholder='Email'
                    name='email'
                    // value={this.state.email}
                    // onChange={this.handleChange}
                    required
                />  
                <textarea type="text"
                    placeholder='Message'
                    name='message'
                    // value={this.state.message}
                    // onChange={this.handleChange}
                    required
                />     
                  <input type="submit" value="Send" placeholder='SendMessage'/>

            </form>
        );
    }
}

export default Contact;