import React from 'react'
import Texturebg from '../assets/texture_bg2.jpg';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube, FaEnvelope, FaMessage, FaWhatsapp } from 'react-icons/fa6';

const Contact = () => {
    return (
        <div className='mt-25'>
            {
                <div style={{ backgroundImage: `url(${Texturebg})` }} className="bg-cover bg-center h-auto w-full p-10 lg:pb-[13rem] lg:p-20">
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                        <div>

                            <div className="mt-10 text-center lg:text-left border-b-1 border-neutral pb-2">
                                <h1 className="text-5xl tracking-wide" style={{ fontFamily: '"Anton", sans-serif' }}>LET'S START YOUR PROJECT</h1>
                                <p className="py-4" style={{ fontFamily: '"Rubik", sans-serif' }}>
                                    Whether you have a project in mind, need support with an existing website, or just want to discuss your ideas, I’m here to help. Reach out through any of the following methods, and I’ll get back to you as soon as possible.
                                </p>
                            </div>
                            <h2 className="text-4xl pt-8" style={{ fontFamily: '"Anton", sans-serif' }}>
                                GET IN TOUCH
                            </h2>
                            {/* Get in touch section with contact info */}
                            <div className="mb-8 border-b-1 border-neutral py-7">

                                <ul className="space-y-6">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 text-red-600">
                                            <FaEnvelope size={22} />
                                        </span>
                                        <div>
                                            <div className="font-bold uppercase text-sm tracking-wide">Email</div>
                                            <div className="text-base">cuetopatrick91@gmail.com</div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 text-blue-600">
                                            <FaMessage size={22} />
                                        </span>
                                        <div>
                                            <div className="font-bold uppercase text-sm tracking-wide">Messenger</div>
                                            <div className="text-base">Patrick Cueto Regalado</div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1 text-green-600">
                                            <FaWhatsapp size={22} />
                                        </span>
                                        <div>
                                            <div className="font-bold uppercase text-sm tracking-wide">WhatsApp</div>
                                            <div className="text-base">+9364967582</div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <h2 className="text-4xl" style={{ fontFamily: '"Anton", sans-serif' }}>
                                FOLLOW ME ON SOCIAL MEDIA
                            </h2>
                            <div className='flex mt-5 gap-3 flex-wrap'>
                                {[
                                    { icon: FaFacebookF, label: 'Facebook', href: 'https://www.facebook.com/cuetopat' },
                                    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Phatnu' },
                                    { icon: FaInstagram, label: 'Instagram', href: 'https://www.instagram.com/patrickcueto019/' },
                                    { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://www.linkedin.com/in/patrick-cueto-regalado-8a2b4b1a9/' },
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
                        <div>

                            <div className="flex-col lg:flex-row-reverse">
                                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">

                                    <div className="card-body">
                                        <div className="text-center lg:text-left">
                                            <h1 className="text-5xl text-red-600 tracking-wide" style={{ fontFamily: '"Anton", sans-serif' }}>SEND ME A MESSAGE</h1>
                                            <p className="py-4" style={{ fontFamily: '"Rubik", sans-serif' }}>
                                                Have a question, a project in mind, or just want to discuss your ideas? Fill out the form below, and I’ll get back to you as soon as possible.
                                            </p>
                                        </div>
                                        <fieldset className="fieldset">
                                            <label className="label">Email</label>
                                            <input type="email" className="input w-full" placeholder="Email" />
                                            <label className="label">Email</label>
                                            <input type="email" className="input w-full" placeholder="Email" />
                                            <label className="label">Email</label>
                                            <input type="email" className="input w-full" placeholder="Email" />
                                            <label className="label">Email</label>
                                            <input type="email" className="input w-full" placeholder="Email" />
                                            <label className="label">Password</label>
                                            <input type="password" className="input w-full" placeholder="Password" />
                                            <div><a className="link link-hover">Forgot password?</a></div>
                                            <button className="btn btn-neutral mt-4">Login</button>
                                        </fieldset>
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
