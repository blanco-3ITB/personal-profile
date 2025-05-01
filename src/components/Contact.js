import React from 'react';

function Contact() {
  return (
    <div className="container mt-5">
      <div className="row g-4">
        {/* Contact Form */}
        <div className="col-md-6">
          <div className="p-4 shadow bg-white rounded">
            <h2 className="mb-4 text-primary">Contact Form</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="fullName" name="fullName" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-md-6">
          <div className="p-4 shadow bg-white rounded">
            <h2 className="mb-4 text-primary">Contact Information</h2>
            <p><strong>Email:</strong> blancojohncedric89@gmail.com</p>
            <p><strong>Phone:</strong> 09759616054</p>
            <p>
              <strong>Facebook:</strong>{' '}
              <a href="https://web.facebook.com/johncedric.blanco.5" target="_blank" rel="noopener noreferrer">
                John Cedric Blanco II
              </a>
              <br />
              <strong>Instagram:</strong>{' '}
              <a href="https://www.instagram.com/_blancoo.o/" target="_blank" rel="noopener noreferrer">
                @_blancoo.o
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
