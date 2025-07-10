
import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    lgpdConsent: false
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.lgpdConsent) {
      alert('É necessário aceitar os termos da LGPD para continuar.')
      return
    }
    
    const message = `Olá! Tenho interesse no consórcio consultivo do Banco Jota.
    
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Mensagem: ${formData.message}`
    
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/attached_assets/logo-banco-jota_1752187109762.png" 
                alt="Banco Jota" 
                className="h-12 w-auto"
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-bj-blue-dark hover:text-bj-blue transition-colors">Início</button>
              <button onClick={() => scrollToSection('sobre')} className="text-bj-blue-dark hover:text-bj-blue transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('beneficios')} className="text-bj-blue-dark hover:text-bj-blue transition-colors">Benefícios</button>
              <button onClick={() => scrollToSection('como-funciona')} className="text-bj-blue-dark hover:text-bj-blue transition-colors">Como Funciona</button>
              <button onClick={() => scrollToSection('depoimentos')} className="text-bj-blue-dark hover:text-bj-blue transition-colors">Depoimentos</button>
              <button onClick={() => scrollToSection('contato')} className="btn-primary">Fale Conosco</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-bj-blue-dark"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-bj-blue-dark hover:text-bj-blue">Início</button>
                <button onClick={() => scrollToSection('sobre')} className="text-left text-bj-blue-dark hover:text-bj-blue">Sobre</button>
                <button onClick={() => scrollToSection('beneficios')} className="text-left text-bj-blue-dark hover:text-bj-blue">Benefícios</button>
                <button onClick={() => scrollToSection('como-funciona')} className="text-left text-bj-blue-dark hover:text-bj-blue">Como Funciona</button>
                <button onClick={() => scrollToSection('depoimentos')} className="text-left text-bj-blue-dark hover:text-bj-blue">Depoimentos</button>
                <button onClick={() => scrollToSection('contato')} className="btn-primary text-center mt-4">Fale Conosco</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 section-padding bg-gradient-to-br from-bj-blue-dark to-bj-blue text-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Realize o Sonho da <span className="text-bj-blue-light">Casa Própria</span> com Consórcio Consultivo
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Atendimento 100% humano e personalizado. Nossa consultoria especializada te acompanha desde a simulação até a contemplação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('contato')} className="bg-white text-bj-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all">
                  Fale com um Consultor
                </button>
                <button onClick={() => scrollToSection('como-funciona')} className="btn-secondary border-white text-white hover:bg-white hover:text-bj-blue">
                  Como Funciona
                </button>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Simule Agora</h3>
                <p className="text-lg mb-6">Descubra quanto você pode economizar</p>
                <button onClick={() => scrollToSection('contato')} className="bg-white text-bj-blue hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg w-full">
                  Simular Consórcio
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bj-blue-dark mb-6">Sobre o Banco Jota</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Especialistas em consórcio com mais de 15 anos de experiência no mercado. 
              Nossa missão é transformar sonhos em realidade através de soluções financeiras inteligentes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-bj-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Atendimento Humano</h3>
              <p className="text-gray-600">Consultores especializados para te orientar em cada etapa do processo.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-bj-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Aprovação Garantida</h3>
              <p className="text-gray-600">Alto índice de aprovação com as melhores condições do mercado.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-bj-blue-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Acompanhamento Total</h3>
              <p className="text-gray-600">Suporte completo até a contemplação e entrega das chaves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bj-blue-dark mb-6">Vantagens do Consórcio</h2>
            <p className="text-xl text-gray-600">Descubra por que o consórcio é a melhor opção para realizar seus sonhos</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "💰", title: "Sem Juros", desc: "Parcelas fixas sem correção de juros" },
              { icon: "📈", title: "Valorização", desc: "Seu bem se valoriza enquanto você paga" },
              { icon: "🏠", title: "Flexibilidade", desc: "Escolha o imóvel que desejar" },
              { icon: "⚡", title: "Contemplação", desc: "Chances mensais de ser contemplado" },
              { icon: "🔒", title: "Segurança", desc: "Regulamentado pelo Banco Central" },
              { icon: "📱", title: "Praticidade", desc: "Gestão online do seu consórcio" },
              { icon: "👥", title: "Suporte", desc: "Equipe especializada sempre disponível" },
              { icon: "🎯", title: "Foco", desc: "Especialistas apenas em consórcio" }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-bj-blue-dark">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bj-blue-dark mb-6">Como Funciona</h2>
            <p className="text-xl text-gray-600">Processo simples e transparente para realizar seu sonho</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "1", title: "Preencha o Formulário", desc: "Informe seus dados e preferências" },
              { step: "2", title: "Contato via WhatsApp", desc: "Nossa equipe entrará em contato imediatamente" },
              { step: "3", title: "Qualificação Consultiva", desc: "Análise personalizada do seu perfil" },
              { step: "4", title: "Proposta Personalizada", desc: "Apresentação das melhores opções" },
              { step: "5", title: "Acompanhamento Total", desc: "Suporte até contemplação e pós-venda" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-bj-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-bj-blue-dark">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                {index < 4 && (
                  <div className="hidden md:block w-full border-t-2 border-dashed border-bj-blue-light mt-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="section-padding bg-bj-blue-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">O Que Nossos Clientes Dizem</h2>
            <p className="text-xl text-gray-300">Histórias reais de quem realizou o sonho conosco</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "Professora",
                text: "Consegui minha casa própria em 2 anos! O atendimento foi excepcional do início ao fim.",
                rating: 5
              },
              {
                name: "João Santos",
                role: "Engenheiro",
                text: "Processo muito transparente. A equipe me acompanhou em todas as etapas com muita paciência.",
                rating: 5
              },
              {
                name: "Ana Costa",
                role: "Empresária",
                text: "Melhor decisão que tomei! Economizei muito comparado ao financiamento bancário.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-200 mb-4">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-300">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-bj-blue-dark mb-6">Fale com um Consultor</h2>
              <p className="text-xl text-gray-600">Preencha o formulário e receba uma proposta personalizada</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-bj-blue-dark mb-6">Entre em Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-bj-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <span>contato@bancojota.com.br</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-bj-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <span>(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-bj-blue mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                    </svg>
                    <span>São Paulo - SP</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bj-blue focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu melhor e-mail"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bj-blue focus:border-transparent"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Seu telefone com WhatsApp"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bj-blue focus:border-transparent mb-4"
                />
                <textarea
                  name="message"
                  placeholder="Conte-nos sobre seu objetivo (opcional)"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bj-blue focus:border-transparent mb-4"
                ></textarea>
                
                <label className="flex items-start mb-6">
                  <input
                    type="checkbox"
                    name="lgpdConsent"
                    required
                    checked={formData.lgpdConsent}
                    onChange={handleInputChange}
                    className="mt-1 mr-3"
                  />
                  <span className="text-sm text-gray-600">
                    Aceito receber contato via WhatsApp e estou ciente da{' '}
                    <a href="#politica" className="text-bj-blue hover:underline">Política de Privacidade</a> e{' '}
                    <a href="#termos" className="text-bj-blue hover:underline">Termos de Uso</a>.
                  </span>
                </label>

                <button type="submit" className="btn-primary w-full text-lg">
                  Falar com Consultor no WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-bj-blue-dark mb-6">Perguntas Frequentes</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Como funciona o consórcio imobiliário?",
                a: "O consórcio é um grupo de pessoas que se unem para adquirir bens. Mensalmente você paga uma parcela fixa e concorre para ser contemplado através de sorteio ou lance."
              },
              {
                q: "Qual a diferença entre consórcio e financiamento?",
                a: "No consórcio não há juros, apenas taxa de administração. Suas parcelas são fixas e você pode ser contemplado a qualquer momento, pagando menos que um financiamento tradicional."
              },
              {
                q: "Posso usar meu FGTS no consórcio?",
                a: "Sim! Após ser contemplado, você pode utilizar seu FGTS para abater parte do valor do imóvel, reduzindo ainda mais suas parcelas."
              },
              {
                q: "O que acontece se eu for contemplado?",
                a: "Quando contemplado, você recebe o crédito para comprar seu imóvel e continua pagando as parcelas normalmente até quitar o consórcio."
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <summary className="font-semibold text-bj-blue-dark cursor-pointer">{faq.q}</summary>
                <p className="mt-3 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bj-blue-dark text-white section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img 
                src="/attached_assets/logo-banco-jota_1752187109762.png" 
                alt="Banco Jota" 
                className="h-12 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-300">
                Especialistas em consórcio imobiliário com atendimento humanizado e consultivo.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('sobre')} className="text-gray-300 hover:text-white">Sobre</button></li>
                <li><button onClick={() => scrollToSection('beneficios')} className="text-gray-300 hover:text-white">Benefícios</button></li>
                <li><button onClick={() => scrollToSection('como-funciona')} className="text-gray-300 hover:text-white">Como Funciona</button></li>
                <li><button onClick={() => scrollToSection('contato')} className="text-gray-300 hover:text-white">Contato</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#politica" className="text-gray-300 hover:text-white">Política de Privacidade</a></li>
                <li><a href="#termos" className="text-gray-300 hover:text-white">Termos de Uso</a></li>
                <li><a href="#lgpd" className="text-gray-300 hover:text-white">LGPD</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-300">
                <p>(11) 99999-9999</p>
                <p>contato@bancojota.com.br</p>
                <p>São Paulo - SP</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Banco Jota. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
