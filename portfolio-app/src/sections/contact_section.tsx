import React, { useState, FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./contact_section.css";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection: React.FC = () => {
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.error(
        "EmailJS public key is not defined in environment variables"
      );
      return;
    }
    emailjs.init(publicKey);
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Add public key here too
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      console.error("Failed to send message:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="contact-section">
      <div className="content-wrapper">
        <h2>Contact Me</h2>
        <p className="contact-description">
          Have a question or want to work together? Feel free to reach out!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              autoComplete="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              rows={5}
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="success-message">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="error-message">
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
