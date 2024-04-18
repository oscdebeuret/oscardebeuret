import { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        message: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Email envoyé avec succès !');
                setFormData({
                    name: '',
                    subject: '',
                    email: '',
                    message: ''
                });
            } else {
                console.error('Erreur lors de l\'envoi de l\'e-mail');
            }
        } catch (error) {
            console.error('Erreur lors de la tentative d\'envoi de l\'e-mail:', error);
        }
    };


    return (
        <form onSubmit={handleSubmit} className="flex flex-col px-8 py-5 rounded-2xl bg-white w-[600px] gap-5">
            <div className="flex flex-row gap-4">
                <div className="flex flex-col w-full">
                    <label htmlFor="name" className="poppins text-l font-semibold mb-1">Votre nom</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-md h-8 px-2 py-4 border-2"
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="email" className="poppins text-l font-semibold mb-1">Votre email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="rounded-md h-8 px-2 py-4 border-2"
                    />
                </div>

            </div>
            <div className="flex flex-col">
                <label htmlFor="subject" className="poppins text-l font-semibold mb-1">Objet</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="rounded-md h-8 px-2 py-4 border-2"
                />
            </div>
            <div className="flex flex-col justify-between gap-5 items-end">
                <div className="flex flex-col w-full">
                    <label htmlFor="message" className="poppins text-l font-semibold mb-1">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="border-2 rounded-lg resize-none w-full px-2 py-2"
                    ></textarea>
                </div>
                <div className="flex flex-row gap-5 items-center w-full">
                    <a href="https://www.linkedin.com/in/oscar-debeuret-35113b215/">
                        <FaLinkedin className="text-3xl" />
                    </a>
                    <a href="mailto:debeuret.oscar@gmail.com" className="poppins flex-grow text-gray-400">
                        debeuret.oscar@gmail.com
                    </a>
                    <button type="submit" className="flex flex-row items-center gap-2 montserrat text-white font-semibold bg-black rounded-xl px-5 py-3">Envoyer <IoMdSend />
                    </button>
                </div>
            </div>
        </form >
    );
};

export default ContactForm;
