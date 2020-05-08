import React from 'react'
import SimpleReactValidator from "simple-react-validator"
import { navigateTo } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      telephone: ""
    };
    this.validator = new SimpleReactValidator({
      className: "absolute z-20 top-0 right-0 text-2xl text-white bg-red-800 rounded-full leading-none -mr-1 text-yellow-light p-1 px-2",
      messages: {
        default: '*'
      }
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  handleSubmit = e => {
    if (this.validator.allValid()) {
      const form = e.target;
      this.setState({
        submitting: true
      })

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state
        })
      })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
    e.preventDefault();
  };

  render() {
    return (
        <form
          className="mt-4 text-black form"
          name="quick-contact"
          method="post"
          action="/thank-you"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
            {/* <p hidden>
                Don't fill this out:{" "} */}
                <label className="hidden">Do not fill this in<input name="bot-field" /></label>
            {/* </p> */}
            <div className="flex flex-wrap justify-between">
              <label className="relative flex w-full p-1">
                <input className="flex-grow p-4 bg-gray-300 rounded-lg" placeholder="Name" type="text" name="name" onChange={this.handleChange} />
                {this.validator.message('name', this.state.name, 'required')}
              </label>
              <label className="relative flex w-full p-1">
                <input className="flex-grow p-4 bg-gray-300 rounded-lg" placeholder="Email or telephone" type="text" name="email_telephone" onChange={this.handleChange} />
                {this.validator.message('email_telephone', this.state.email, 'required')}
              </label>
              <label className="relative flex w-full p-1">
                <textarea className="flex-grow p-4 bg-gray-300 rounded-lg" placeholder="Details" type="text" name="details" onChange={this.handleChange} />
               {this.validator.message('details', this.state.telephone, 'required')}
              </label>
              <span className="w-full p-1">
                <button className="w-full p-0 rounded-lg btn bg-yellow text-orange-semidark" type="submit"><span className="block p-4 whitespace-no-wrap">Get in touch</span></button>
              </span>
            </div>
        </form>
    );
  }
}
