import React, { Component } from "react";
import './Contact.css'

export default class ContactPage extends Component {
  // Implement a form validation for the contact form
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
  }
  validate(event) {

    event.preventDefault();
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var comments = document.getElementById("comments").value;
    var error_message = document.getElementById("error_message");
    error_message.style.padding = "10px";

    var text;
    if (fName.length < 2) {
      text = "Please Enter First Name";
      error_message.innerHTML = text;
      return false;
    }
    if (lName.length < 1) {
      text = "Please Enter Last Name";
      error_message.innerHTML = text;
      return false;
    }
    if (email.indexOf("@") == -1 || email.length < 10) {
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    this.form.submit();
    return true;
  }


  // Using the method getElementById() returns an element object representing the ID property.
  // You can use querySelector() to find the element using any selector. No ID.
  // The indexOf() method returns the position of the first occurrence of a specified value in a string.

  render() {
    return (
      <div>
        <main id="contact-form">
          <form ref={(form => this.form = form)} onSubmit={this.validate}>
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your first name goes here." />

            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name goes here." />

            <label for="email">Email Address</label>
            <input type="text" id="email" name="email" placeholder="Your Email Address goes here." />

            <label for="comments">Message Us<i style={{ color: "grey" }}>(Optional)</i></label>
            <textarea id="comments" name="comments" placeholder="Please write here for any question.."></textarea>
            <div>
              <input class="btn" type="submit" value="Submit" />
            </div>
          </form>
          <div id="error_message"></div>
        </main>

        <div>
          <h2 className="contact-list">Contact Us!</h2>
          <dl className="contact-list">
            <dt>Address:</dt>
            <dd>798 South Park Avenue, Charlotte, NC</dd>
          </dl>

          <dl className="contact-list">
            <dt>Email:</dt>
            <dd><a href="mailto:#">avjerkies@gmail.com</a></dd>
          </dl>

          <dl className="contact-list">
            <dt>Phone:</dt>
            <dd>704-123-4450 <span>or</span> 704-222-1234
            </dd>
          </dl>
        </div>

      </div >
    );
  };

};
