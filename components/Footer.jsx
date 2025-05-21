'use client'

import Socials from "./Socials";
import Link from "next/link";
import { EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import { RiWhatsappFill, RiInstagramFill } from 'react-icons/ri';
import EditableText from '@/components/EditableText';

const Footer = () => {
    return (
        <footer className="bg-black/30 backdrop-blur-md py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Informações de Contato */}
                    <div>
                        <EditableText
                            id="footer-contact-title"
                            defaultValue="Contato"
                            as="h3"
                            className="text-white text-xl font-bold mb-4"
                        />
                        <div className="space-y-3">
                            <div className="flex flex-col-2 gap-5">
                                <div className="flex items-start gap-3">
                                    <RiWhatsappFill className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                                    <a href="https://wa.me/5519999971030" className="text-white hover:text-gray-200 transition-colors">
                                        <EditableText
                                            id="footer-whatsapp"
                                            defaultValue="(19) 99997-1030"
                                            as="span"
                                        />
                                    </a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <RiInstagramFill className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                                    <a href="https://www.instagram.com/elainemerola/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors break-all">
                                        <EditableText
                                            id="footer-instagram"
                                            defaultValue="@elainemerola"
                                            as="span"
                                        />
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <EnvelopeIcon className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                                <a href="mailto:elaine@meroladecarvalhoadvocacia@gmail.com" className="text-white hover:text-gray-200 transition-colors break-all">
                                    <EditableText
                                        id="footer-email"
                                        defaultValue="elaine@meroladecarvalhoadvocacia@gmail.com"
                                        as="span"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Endereço */}
                    <div>
                        <EditableText
                            id="footer-address-title"
                            defaultValue="Endereço"
                            as="h3"
                            className="text-white text-xl font-bold mb-4"
                        />
                        <div className="flex items-start gap-3">
                            <MapPinIcon className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                            <EditableText
                                id="footer-address"
                                defaultValue="Rua Saldanha Marinho, nº 980 Centro <br /> Campinas-SP. CEP: 13013-081"
                                as="p"
                                className="text-white"
                            />
                        </div>
                    </div>

                    {/* Horário de Funcionamento */}
                    <div>
                        <EditableText
                            id="footer-hours-title"
                            defaultValue="Horário de Atendimento"
                            as="h3"
                            className="text-white text-xl font-bold mb-4"
                        />
                        <div className="flex items-start gap-3">
                            <ClockIcon className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                            <div>
                                <EditableText
                                    id="footer-hours"
                                    defaultValue="Segunda a Sexta: 9h às 17h"
                                    as="p"
                                    className="text-white"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright e Desenvolvedor */}
                <div className="border-t border-white/20 pt-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="text-white mb-4 md:mb-0">
                            <EditableText
                                id="footer-copyright"
                                defaultValue={`Copyright © ${new Date().getFullYear()} Elaine Merola Advocacia, Todos os Direitos Reservados`}
                                as="span"
                            />
                        </div>
                        <div className="text-white">
                            <EditableText
                                id="footer-developer"
                                defaultValue='Desenvolvido por <a href="https://www.instagram.com/antoniolis_boa/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-200 transition-colors">@antoniolis_boa</a>'
                                as="span"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer