/* eslint-disable react/no-unescaped-entities */
import Container from "../../Components/Container/Container";
import { MdOutlineMail, MdPhoneInTalk } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Tooltip } from "@chakra-ui/react";
import emailjs from "@emailjs/browser"
import { useRef } from "react";

const Contact = () => {

    const form = useRef(); // useRef দিয়ে ফর্ম রেফারেন্স করা

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
            })
            .catch((error) => {
                console.error('Email sending error:', error.text);
            });

        // ফর্ম রিসেট করা
        e.target.reset();
    };

    return (
        <div className="py-9 lg:px-0 px-5" id="contact">
            <Container>
                <div className="text-center py-6 mb-10">
                    <p className="mt-8 text-white text-4xl font-kanit font-medium">"Let's collaborate and build something amazing!_"</p>
                </div>
                <div className="flex lg:flex-row gap-10  flex-col-reverse  justify-between items-center">
                    <div className="space-y-10">
                        <div className="space-y-8">
                            <h1 className="text-center lg:text-4xl text-3xl py-3 font-medium mb-6">Mohammad Mehedi Hasan</h1>
                            <div className="flex items-center gap-5">
                                <div className=" border-t border-x border-[#B800FF] rounded-md p-4 bg-gradient-to-t from-[#B800FF] cursor-pointer">
                                    <MdOutlineMail size={30} />
                                </div>
                                <p className="text-lg">mehediweb2023@gmail.co, <br /> mahedyhasan766584@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className=" border-t border-x border-[#B800FF] rounded-md p-4 bg-gradient-to-t from-[#B800FF] cursor-pointer">
                                    <MdPhoneInTalk size={30} />
                                </div>
                                <p className="text-lg">+8801783925140<br /> +8801753889885</p>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className=" border-t border-x border-[#B800FF] rounded-md p-4 bg-gradient-to-t from-[#B800FF] cursor-pointer">
                                    <IoLocationSharp size={30} />
                                </div>
                                <p className="text-lg">Chattogram, Sandwip<br /> Musapur-1,  4300</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-10">
                            <Tooltip hasArrow label='Facebook' className="bg-gradient-to-t from-[#B800FF] py-2 text-white px-4 rounded border-t border-x border-[#B800FF]">
                                <div className="hover:text-[#854CE6] duration-500"><a href="https://www.facebook.com/MehediWeb2023/" target="_blank"><FaFacebook size={30} /></a></div>
                            </Tooltip>
                            <Tooltip hasArrow label='Linkedin' className="bg-gradient-to-t from-[#B800FF] py-2 text-white px-4 rounded border-t border-x border-[#B800FF]">
                                <div className="hover:text-[#854CE6] duration-500"><a href="#"><FaLinkedin size={30} /></a></div>
                            </Tooltip>
                            <Tooltip hasArrow label='Twitter' className="bg-gradient-to-t from-[#B800FF] py-2 text-white px-4 rounded border-t border-x border-[#B800FF]">
                                <div className="hover:text-[#854CE6] duration-500"><a href="#"><FaTwitter size={30} /></a></div>
                            </Tooltip>
                            <Tooltip hasArrow label='Instagram' className="bg-gradient-to-t from-[#B800FF] py-2 text-white px-4 rounded border-t border-x border-[#B800FF]">
                                <div className="hover:text-[#854CE6] duration-500"><a href="#"><FaInstagram size={30} /></a></div>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="box lg:w-[550px] lg:h-[600px]  w-[450px] h-[600px]">
                        <div className="card-p">
                            <form onSubmit={sendEmail} id="my-form">
                                <div className="bg-transparent flex flex-col w-full px-6 py-6 gap-5 justify-center">
                                    <h1 className="text-center text-4xl py-3 font-medium">Contact Me 📱</h1>
                                    <input
                                        className="bg-transparent border rounded border-[#7909c8] outline-none px-4 py-3"
                                        type="email"
                                        name="user_email"
                                        placeholder="Your Email" />
                                    <input
                                        className="bg-transparent border rounded border-[#7909c8] outline-none px-4 py-3"
                                        type="text"
                                        name="user_name"
                                        placeholder="Your Name" />
                                    <textarea
                                        className="bg-transparent border rounded border-[#7909c8] outline-none px-4 py-3"
                                        name="message"
                                        placeholder="Massege"
                                        rows={8}></textarea>
                                    <div className="text-center w-full">
                                        <p></p>
                                        <input
                                            type="submit"
                                            value="Submite" className="submit-btn cursor-pointer w-full mt-4" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;