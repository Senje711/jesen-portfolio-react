import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const Contact = () => {
  const ref = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(''); // 'success', 'error', or ''

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validate form
    if (!validateForm()) {
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
      return;
    }

    const formDataToSend = new FormData(event.target);
    formDataToSend.append('access_key', '89413302-3d30-4143-be83-89e171bb6d82');

    const object = Object.fromEntries(formDataToSend);
    const json = JSON.stringify(object);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
        // Clear success message after 5 seconds
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (err) {
      console.error('Error:', err);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <div id="contact" className="contact scroll-animate" ref={ref}>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm actively seeking junior developer opportunities and
            collaborations. Feel free to reach out for project opportunities,
            technical discussions, or just to connect. I'm available for
            freelance work and full-time positions.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>jesenhowernachor26@gmail.com</p>
            </div>

            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>09460633855</p>
            </div>

            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Cavite, Philippines</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} action="" className="contact-right">
          {status === 'success' && (
            <div className="form-message success">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}
          {status === 'error' && (
            <div className="form-message error">
              ✗{' '}
              {Object.values(errors).length > 0
                ? 'Please fix the errors below.'
                : 'Something went wrong. Please try again.'}
            </div>
          )}

          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={errors.name ? 'input-error' : ''}
            autoComplete="name"
          />
          {errors.name && <span className="error-text">{errors.name}</span>}

          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={errors.email ? 'input-error' : ''}
            autoComplete="email"
          />
          {errors.email && <span className="error-text">{errors.email}</span>}

          <label htmlFor="message">Write Your Message Here</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter your message (minimum 10 characters)"
            value={formData.message}
            onChange={handleInputChange}
            className={errors.message ? 'input-error' : ''}
            autoComplete="off"
          ></textarea>
          {errors.message && (
            <span className="error-text">{errors.message}</span>
          )}

          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
