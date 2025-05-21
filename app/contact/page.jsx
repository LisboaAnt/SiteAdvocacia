'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon, CalendarIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import EditableText from '@/components/EditableText'

const contact = () => {
  return (
    <section className="min-h-screen pb-10  ">
      <div className="container mx-auto px-0 md:px-4">

        <div className="grid xl:grid-cols-4 gap-12 mb-12 pt-10">


          {/* Left Content - Ocupa 3 colunas */}
          <div className="flex flex-col pt-8 xl:col-span-2 p-2 md:p-0">
              <EditableText
                id="contact-title"
                defaultValue="Estamos à disposição para ajudá-lo"
                as="h1"
                className="h1 max-w-max mb-6 text-3xl md:text-4xl xl:text-5xl text-white"
              />
              <EditableText
                id="contact-intro"
                defaultValue="Agradecemos a preferência por nosso escritório de advocacia. 
                Estamos prontos para atender suas necessidades jurídicas com 
                dedicação e profissionalismo. Entre em contato conosco através 
                dos canais abaixo para agendar uma consulta."
                as="p"
                className="max-w-[500px] mb-8 text-base md:text-lg text-white/80"
                multiline={true}
                rows={5}
              />
              
  
              <div className="flex flex-col sm:flex-row gap-4 hidden sm:flex">
                <Link
                  href="https://maps.google.com/?q=R.+dos+Guainumbis,+698+-+Vila+Costa+e+Silva"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full sm:w-auto">
                    <MapPinIcon className="h-5 w-5 mr-2" />
                    <EditableText
                      id="contact-maps-button"
                      defaultValue="Ver no Google Maps"
                      as="span"
                    />
                  </Button>
                </Link>
              </div>

          </div>
          
          {/* Right Content - Ocupa 2 colunas */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 xl:col-span-2 m-auto sm:mr-0">
              <EditableText
                id="contact-info-title"
                defaultValue="Informações de Contato"
                as="h3"
                className="text-2xl font-bold mb-6 text-black"
              />
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <EnvelopeIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div className="max-w-full overflow-hidden">
                    <a 
                      href="mailto:elaine@meroladecarvalhoadvocacia@gmail.com" 
                      className="text-gray-600 hover:text-primary transition-colors break-all"
                    >
                      <EditableText
                        id="contact-email"
                        defaultValue="elaine@meroladecarvalhoadvocacia@gmail.com"
                        as="span"
                      />
                    </a>
                  </div>

                </div>
                
                <div className="flex items-start gap-4">
                  <PhoneIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <EditableText
                      id="contact-phone-label"
                      defaultValue="Telefone"
                      as="h3"
                      className="font-semibold text-lg text-black"
                    />
                    <a href="tel:+5519999971030" className="text-gray-600 hover:text-primary transition-colors">
                      <EditableText
                        id="contact-phone"
                        defaultValue="(19) 99997-1030"
                        as="span"
                      />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPinIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <EditableText
                      id="contact-address-label"
                      defaultValue="Endereço"
                      as="h3"
                      className="font-semibold text-lg text-black"
                    />
                    <EditableText
                      id="contact-address"
                      defaultValue="Rua Saldanha Marinho, nº 980, Centro, Campinas-SP. CEP: 13013-081"
                      as="p"
                      className="text-gray-600"
                    />
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <ClockIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <EditableText
                      id="contact-hours-label"
                      defaultValue="Horário de Atendimento"
                      as="h3"
                      className="font-semibold text-lg text-black"
                    />
                    <EditableText
                      id="contact-hours"
                      defaultValue="Segunda a Sexta: 9h às 17h"
                      as="p"
                      className="text-gray-600"
                    />
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CalendarIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <EditableText
                      id="contact-scheduling-label"
                      defaultValue="Agendamento"
                      as="h3"
                      className="font-semibold text-lg text-black"
                    />
                    <EditableText
                      id="contact-scheduling"
                      defaultValue="Agende sua consulta por telefone ou WhatsApp"
                      as="p"
                      className="text-gray-600"
                    />
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <UserGroupIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <EditableText
                      id="contact-service-label"
                      defaultValue="Atendimento"
                      as="h3"
                      className="font-semibold text-lg text-black"
                    />
                    <EditableText
                      id="contact-service"
                      defaultValue="Atendimento presencial e online disponível"
                      as="p"
                      className="text-gray-600"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="https://wa.me/5519999971030" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-600 hover:bg-green-700 w-full text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <EditableText
                      id="contact-whatsapp-button"
                      defaultValue="Agendar Consulta via WhatsApp"
                      as="span"
                    />
                  </Button>
                </Link>
              </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:hidden pb-8">
          <Link
            href="https://www.google.com/maps?q=Rua+Saldanha+Marinho,+980,+Centro,+Campinas,+SP,+13013-081"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="w-full sm:w-auto !bg-white text-black !border-gray-300 hover:!bg-gray-100"
            >
              <MapPinIcon className="h-5 w-5 mr-2 text-black" />
              <EditableText
                id="contact-maps-button-mobile"
                defaultValue="Ver no Google Maps"
                as="span"
              />
            </Button>
          </Link>
        </div>

        {/* Google Maps */}
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.857964964839!2d-47.06207368496844!3d-22.90264698501208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8b6e0e0e0e0%3A0x0!2sRua%20Saldanha%20Marinho%2C%20980%20-%20Centro%2C%20Campinas%20-%20SP%2C%2013013-081!5e0!3m2!1spt-BR!2sbr!4v1718123456789!5m2!1spt-BR!2sbr"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do escritório"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default contact
