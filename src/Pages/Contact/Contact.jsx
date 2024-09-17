/* eslint-disable react/no-unescaped-entities */
import Container from "../../Components/Container/Container";

const Contact = () => {
    return (
        <div className="py-9" id="contact">
            <Container>
                <div className="text-center py-6 mb-10">
                    <p className="mt-8 text-white text-4xl font-kanit font-medium">"Let's collaborate and build something amazing!_"</p>
                </div>
                <div className="flex lg:flex-row gap-10  flex-col-reverse  justify-between items-center">
                    <div className="space-y-10">
                        <div className="space-y-4">
                            <div>Mohammad Mehedi Hasan</div>
                            <div>Email </div>
                            <div>Phone Nummber</div>
                            <div>Adress</div>
                        </div>
                        <div className="flex items-center gap-10">
                            <div>Facebook</div>
                            <div>Linkedin</div>
                            <div>Twitter</div>
                            <div>Instagram</div>
                        </div>
                    </div>
                    <div className="box lg:w-[550px] lg:h-[600px]  w-[450px] h-[600px]">
                        <div className="card-p">
                            <form>
                                <div className="bg-transparent flex flex-col w-full px-6 py-6 gap-5 justify-center">
                                    <h1 className="text-center text-4xl py-3 font-medium">Contact Me 📱</h1>
                                    <input
                                        className="bg-transparent border rounded border-[#7909c8] outline-none px-4 py-3"
                                        type="email"
                                        name="email"
                                        placeholder="Your Email" />
                                    <input
                                        className="bg-transparent border rounded border-[#7909c8] outline-none px-4 py-3"
                                        type="email"
                                        name="name"
                                        placeholder="Your Name" />
                                    <textarea
                                        className="bg-transparent border rounded border-[#7909c8] outline-none px-4 py-3"
                                        name="massege"
                                        placeholder="Massege"
                                        rows={8}></textarea>
                                    <div className="text-center w-full">
                                        <input
                                            type="submit"
                                            value="Submite" className="submit-btn w-full mt-4" />
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