import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';
import Texturebg from '../assets/texture_bg2.jpg';
import { FaFacebookF, FaGithub, FaInstagram, FaXTwitter, FaTiktok, FaYoutube, FaEnvelope, FaMessage, FaWhatsapp, FaCircleCheck, FaCircleExclamation, FaCircleXmark } from 'react-icons/fa6';

const Contact = () => {
    const [submissionStatus, setSubmissionStatus] = useState('idle');

    useEffect(() => {
        if (!['success', 'error', 'configuration-error'].includes(submissionStatus)) {
            return undefined;
        }

        const timeoutId = window.setTimeout(() => setSubmissionStatus('idle'), 4000);
        return () => window.clearTimeout(timeoutId);
    }, [submissionStatus]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setSubmissionStatus('configuration-error');
            return;
        }

        setSubmissionStatus('sending');
        try {
            await emailjs.sendForm(serviceId, templateId, form, { publicKey });
            form.reset();
            setSubmissionStatus('success');
        } catch {
            setSubmissionStatus('error');
        }
    };

    return (
        <div className='mt-28'>
            {['success', 'error', 'configuration-error'].includes(submissionStatus) && (
                <div
                    role={submissionStatus === 'success' ? 'status' : 'alert'}
                    aria-live={submissionStatus === 'success' ? 'polite' : 'assertive'}
                    className={`fixed left-4 right-4 top-4 z-50 flex items-center gap-4 rounded-xl bg-[#252d33] px-5 py-4 text-white shadow-2xl sm:left-auto sm:right-8 sm:top-8 sm:w-[29rem] ${submissionStatus === 'success' ? 'border-l-4 border-emerald-400' : submissionStatus === 'error' ? 'border-l-4 border-red-400' : 'border-l-4 border-amber-300'}`}
                >
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-xl ${submissionStatus === 'success' ? 'text-emerald-400' : submissionStatus === 'error' ? 'text-red-400' : 'text-amber-300'}`}>
                        {submissionStatus === 'success' && <FaCircleCheck />}
                        {submissionStatus === 'error' && <FaCircleXmark />}
                        {submissionStatus === 'configuration-error' && <FaCircleExclamation />}
                    </span>
                    <div className="min-w-0">
                        <p className="text-base font-semibold leading-6">
                            {submissionStatus === 'success' && 'Message sent'}
                            {submissionStatus === 'error' && 'Message could not be sent'}
                            {submissionStatus === 'configuration-error' && 'Contact form not configured'}
                        </p>
                        <p className="text-sm leading-5 text-white/70">
                            {submissionStatus === 'success' && 'Your message was sent successfully.'}
                            {submissionStatus === 'error' && 'Please try again in a moment.'}
                            {submissionStatus === 'configuration-error' && 'Please check the EmailJS settings.'}
                        </p>
                    </div>
                </div>
            )}
            {
                <div style={{ backgroundImage: `url(${Texturebg})` }} className="h-auto w-full bg-cover bg-center p-4 pb-10 sm:p-6 sm:pb-12 md:p-8 lg:p-10 xl:p-20 xl:pb-[13rem]">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 xl:grid-cols-2 xl:gap-10">
                        <div className="min-w-0">

                            <div className="mt-4 border-b-1 border-neutral pb-2 text-center xl:mt-10 xl:text-left">
                                <h1 className="text-4xl sm:text-5xl" style={{ fontFamily: '"Anton", sans-serif' }}>LET'S START YOUR PROJECT</h1>
                                <p className="py-4" style={{ fontFamily: '"Rubik", sans-serif' }}>
                                    Whether you have a project in mind, need support with an existing website, or just want to discuss your ideas, I’m here to help. Reach out through any of the following methods, and I’ll get back to you as soon as possible.
                                </p>
                            </div>
                            <h2 className="pt-8 text-3xl sm:text-4xl" style={{ fontFamily: '"Anton", sans-serif' }}>
                                GET IN TOUCH
                            </h2>
                            {/* Get in touch section with contact info */}
                            <div className="mb-8 border-b-1 border-neutral py-7">

                                <ul className="space-y-6">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 text-red-600">
                                            <FaEnvelope size={22} />
                                        </span>
                                        <div className="min-w-0">
                                            <div className="font-bold uppercase text-sm tracking-wide">Email</div>
                                            <div className="break-all text-base">cuetopatrick91@gmail.com</div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 text-blue-600">
                                            <FaMessage size={22} />
                                        </span>
                                        <div className="min-w-0">
                                            <div className="font-bold uppercase text-sm tracking-wide">Messenger</div>
                                            <div className="break-words text-base">Patrick Cueto Regalado</div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 text-green-600">
                                            <FaWhatsapp size={22} />
                                        </span>
                                        <div className="min-w-0">
                                            <div className="font-bold uppercase text-sm tracking-wide">WhatsApp</div>
                                            <div className="text-base">+9364967582</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: '"Anton", sans-serif' }}>
                                FOLLOW ME ON SOCIAL MEDIA
                            </h2>
                            <div className='flex mt-5 gap-3 flex-wrap'>
                                {[
                                    { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/cuetopat' },
                                    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Phatnu' },
                                    { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/patrickcueto019/' },
                                    { icon: FaXTwitter, label: 'X (Twitter)', href: 'https://x.com/PatrickCueto6' },
                                    { icon: FaTiktok, label: 'TikTok', href: 'https://www.tiktok.com/@_patrickregalado?is_from_webapp=1&sender_device=pc' },
                                    { icon: FaYoutube, label: 'YouTube', href: 'https://www.youtube.com/@patrickcueto9207' },
                                ].map(({ icon: Icon, label, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-800 shadow-md transition hover:-translate-y-1 hover:bg-red-600 hover:text-white"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Icon size={20} />
                                    </a>
                                ))}
                            </div>
                            <p className="py-4" style={{ fontFamily: '"Rubik", sans-serif' }}>
                              Looking forward to connecting with you and discussing your ideas and projects.
                            </p>
                        </div>
                        <div className="min-w-0">

                            <div className="flex-col lg:flex-row-reverse">
                                <div className="card mx-auto w-full max-w-3xl shrink-0 bg-base-100 shadow-2xl xl:max-w-none">

                                    <div className="card-body p-5 sm:p-8">
                                        <div className="text-center xl:text-left">
                                            <h1 className="text-4xl text-red-600 sm:text-5xl" style={{ fontFamily: '"Anton", sans-serif' }}>SEND ME A MESSAGE</h1>
                                            <p className="py-4" style={{ fontFamily: '"Rubik", sans-serif' }}>
                                                Have a question, a project in mind, or just want to discuss your ideas? Fill out the form below, and I’ll get back to you as soon as possible.
                                            </p>
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            <fieldset className="fieldset">
                                            <label className="label" htmlFor="contact-name">Name</label>
                                            <input id="contact-name" name="name" type="text" className="input w-full" placeholder="Your name" autoComplete="name" required />
                                            <label className="label" htmlFor="contact-email">Email</label>
                                            <input id="contact-email" name="email" type="email" className="input w-full" placeholder="you@example.com" autoComplete="email" required />
                                            <label className="label" htmlFor="contact-subject">Subject</label>
                                            <input id="contact-subject" name="subject" type="text" className="input w-full" placeholder="What would you like to discuss?" required />
                                            <label className="label" htmlFor="contact-message">Message</label>
                                            <textarea id="contact-message" name="message" className="textarea w-full" placeholder="Tell me about your project or question" rows="5" required />
                                            <button type="submit" className="btn btn-neutral mt-4" disabled={submissionStatus === 'sending'}>
                                                {submissionStatus === 'sending' ? 'Sending...' : 'Send Message'}
                                            </button>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            }
        </div>
    )
}

export default Contact
