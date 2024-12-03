/* eslint-disable react/no-unescaped-entities */
import emailjs from "@emailjs/browser"
import toast from "react-hot-toast";
import MainAnimation from "../../Components/MainAnimation";
import "./contact.css";

const Contact = () => {

    const sendEmail = (e) => {
        e.preventDefault();

        // sendForm এ সঠিকভাবে ফর্ম রেফারেন্স পাস করা
        emailjs.sendForm(
            'service_rzope8y',     // Service ID
            'template_ky07rbs',    // Template ID
            '#my-form',         // form.current দ্বারা রেফারেন্স পাস করা হচ্ছে
            'UF_Abnb3pej3eGPOc'         // Public Key (User ID)
        )
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                toast.success('Your message has been send successfully.')
            })
            .catch((error) => {
                console.error('Email sending error:', error.text);
            });

        // ফর্ম রিসেট করা
        e.target.reset();
    };

    return (
        <>
            <MainAnimation height={'lg:h-screen h-[850px]'}>
                <div>
                    <h1 className="title_contact">Contact</h1>

                    <div className="contact_main_box">
                        <h1 className="title_p_contact">"Let's collaborate and build something amazing!_"</h1>
                        <form onSubmit={sendEmail} id="my-form" className="contact_form">
                            <div className="contact_form_box">
                                <div className="contact_lin_box">
                                    <input
                                        type="text"
                                        name="user_name"
                                        className="contact_input"
                                        placeholder="Full Name"
                                    />
                                    <input
                                        type="text"
                                        name="user_email"
                                        className="contact_input"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div className="contact_lin_box">
                                    <input
                                        type="number"
                                        name="user_phone_number"
                                        className="contact_input"
                                        placeholder="Phone Number"
                                    />
                                    <input
                                        type="text"
                                        name="subject"
                                        className="contact_input"
                                        placeholder="Subject"
                                    />
                                </div>
                            </div>
                            <textarea
                                name="user_message"
                                className="contact_textarea"
                                placeholder="Your Message"
                            ></textarea>
                            <div className="contact_btn_box">
                                <button
                                    type="submit"
                                    className="contact_form_btn"
                                >Send Message</button>
                            </div>
                        </form>
                    </div>

                </div>
            </MainAnimation>
        </>
    );
};

export default Contact;