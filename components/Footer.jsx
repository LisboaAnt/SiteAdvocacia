'use client'

import Socials from "./Socials";
import Link from "next/link";
import { EnvelopeIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/outline";
import { RiWhatsappFill, RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <footer className="bg-black/30 backdrop-blur-md py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Informações de Contato */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">Contato</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <RiWhatsappFill className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                                <a href="https://wa.me/5519981056106" className="text-white hover:text-gray-200 transition-colors">
                                    019 981056106
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <RiInstagramFill className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                                <a href="https://www.instagram.com/m.c.advocacia?igsh=MXVhZWFvbDNyaDcwYQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors break-all">
                                    @m.c.advocacia
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <EnvelopeIcon className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                                <a href="mailto:elainemerolaadvogada@gmail.com" className="text-white hover:text-gray-200 transition-colors break-all">
                                    elainemerolaadvogada@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Endereço */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">Endereço</h3>
                        <div className="flex items-start gap-3">
                            <MapPinIcon className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                            <p className="text-white">
                                Avenida Dr. Campos Sales, 890, sala 104 - Centro <br /> 
                                Campinas - SP, 13010-903
                            </p>
                        </div>
                    </div>

                    {/* Horário de Funcionamento */}
                    <div>
                        <h3 className="text-white text-xl font-bold mb-4">Horário de Atendimento</h3>
                        <div className="flex items-start gap-3">
                            <ClockIcon className="h-5 w-5 text-white flex-shrink-0 mt-1" />
                            <div>
                                <p className="text-white">Segunda a Sexta: 9h às 17h</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright e Desenvolvedor */}
                <div className="border-t border-white/20 pt-6">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="text-white mb-4 md:mb-0">
                            Copyright &copy; {new Date().getFullYear()} Elaine Merola Advocacia, Todos os Direitos Reservados
                        </div>
                        <div className="text-white">
                            <a href="https://www.instagram.com/alemsysdigital/" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-200 transition-colors">@alemsysdigital</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer