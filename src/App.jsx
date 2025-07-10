import { useState } from 'react'
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

    const message = `Olá! Tenho interesse no consórcio imobiliário do Banco Jota.

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
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900 shadow-lg z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/attached_assets/logo-banco-jota_1752187109762.png" 
                alt="Banco Jota" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-bj-blue-light transition-colors">Início</button>
              <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-bj-blue-light transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('beneficios')} className="text-white hover:text-bj-blue-light transition-colors">Benefícios</button>
              <button onClick={() => scrollToSection('como-funciona')} className="text-white hover:text-bj-blue-light transition-colors">Como Funciona</button>
              <button onClick={() => scrollToSection('contato')} className="bg-bj-blue hover:bg-bj-blue-dark text-white px-6 py-2 rounded-lg transition-all">Simular</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-700">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-white hover:text-bj-blue-light">Início</button>
                <button onClick={() => scrollToSection('sobre')} className="text-left text-white hover:text-bj-blue-light">Sobre</button>
                <button onClick={() => scrollToSection('beneficios')} className="text-left text-white hover:text-bj-blue-light">Benefícios</button>
                <button onClick={() => scrollToSection('como-funciona')} className="text-left text-white hover:text-bj-blue-light">Como Funciona</button>
                <button onClick={() => scrollToSection('contato')} className="bg-bj-blue hover:bg-bj-blue-dark text-white px-6 py-2 rounded-lg transition-all text-center mt-4">Simular</button>
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
                Realize o Sonho da<br/>
                <span className="text-bj-blue-light">Casa Própria</span><br/>
                Sem Juros
              </h1>
              <p className="text-xl mb-8 text-gray-200 max-w-lg">
                Consórcio imobiliário com atendimento consultivo e humanizado. Parcelas fixas, sem juros e com condições especiais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('contato')} className="bg-white text-bj-blue hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all">
                  Simular Agora
                </button>
                <button onClick={() => scrollToSection('sobre')} className="border-2 border-white text-white hover:bg-white hover:text-bj-blue font-semibold py-4 px-8 rounded-lg transition-all">
                  Saiba Mais
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-2xl font-bold mb-4">Casa Própria</h3>
                <p className="text-gray-200 mb-6">Sem juros, sem entrada obrigatória</p>
                <div className="bg-white/20 rounded-lg p-4">
                  <p className="text-sm mb-2">Parcelas a partir de</p>
                  <p className="text-3xl font-bold">R$ 380</p>
                  <p className="text-sm">mensais</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Banco Jota: Especialistas em Consórcio Imobiliário
              </h2>
              <p className="text-gray-300 mb-6 text-lg">
                Com anos de experiência no mercado, oferecemos atendimento consultivo personalizado para cada perfil de cliente. Nossa missão é tornar acessível o sonho da casa própria.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-bj-blue rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                  <span className="text-gray-300">Atendimento humanizado e consultivo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-bj-blue rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                  <span className="text-gray-300">Especialistas em crédito imobiliário</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-bj-blue rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                  </div>
                  <span className="text-gray-300">Acompanhamento durante todo o processo</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-bj-blue rounded-2xl p-8 text-white">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">💼</div>
                  <h3 className="text-xl font-bold">Consultoria Especializada</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="font-semibold mb-1">Análise Personalizada</p>
                    <p className="text-sm text-gray-200">Avaliamos seu perfil e encontramos a melhor solução</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="font-semibold mb-1">Suporte Completo</p>
                    <p className="text-sm text-gray-200">Desde a adesão até a contemplação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="section-padding bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Vantagens do Consórcio Imobiliário
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Conheça todos os benefícios que fazem do consórcio a melhor opção para conquistar seu imóvel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-bj-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sem Juros</h3>
              <p className="text-gray-300">Parcelas fixas sem juros, apenas taxa de administração</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-bj-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sem Entrada</h3>
              <p className="text-gray-300">Não é obrigatório dar entrada para participar</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-bj-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Parcelas Fixas</h3>
              <p className="text-gray-300">Valor das parcelas não sofre alteração</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-bj-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Flexibilidade</h3>
              <p className="text-gray-300">Escolha o imóvel quando for contemplado</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-bj-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Objetivo Claro</h3>
              <p className="text-gray-300">Você sabe exatamente quando terá seu imóvel</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-bj-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Segurança</h3>
              <p className="text-gray-300">Regulamentado pelo Banco Central</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-bj-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Planejamento</h3>
              <p className="text-gray-300">Organize suas finanças com tranquilidade</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-bj-blue rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Suporte</h3>
              <p className="text-gray-300">Acompanhamento completo do nosso time</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Como Funciona o Consórcio
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Processo simples e transparente para você conquistar sua casa própria
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-bj-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold text-white mb-2">Simulação</h3>
              <p className="text-gray-300">Faça uma simulação gratuita e descubra o valor da parcela</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-bj-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold text-white mb-2">Adesão</h3>
              <p className="text-gray-300">Assine o contrato e entre no grupo do consórcio</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-bj-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold text-white mb-2">Pagamento</h3>
              <p className="text-gray-300">Pague as parcelas mensais fixas sem juros</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-bj-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold text-white mb-2">Contemplação</h3>
              <p className="text-gray-300">Seja contemplado por sorteio ou lance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-bj-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="text-lg font-semibold text-white mb-2">Casa Própria</h3>
              <p className="text-gray-300">Escolha e compre seu imóvel com o crédito liberado</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Depoimentos de Clientes
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-bj-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">MR</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Maria Rita</h4>
                  <p className="text-gray-300 text-sm">Contemplada em 2023</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"Consegui minha casa própria sem comprometer o orçamento familiar. O atendimento foi excepcional!"</p>
              <div className="flex text-yellow-400 mt-4">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gray-700 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-bj-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">JS</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">João Silva</h4>
                  <p className="text-gray-300 text-sm">Contemplado em 2023</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"Processo transparente e sem surpresas. Recomendo para quem quer sair do aluguel!"</p>
              <div className="flex text-yellow-400 mt-4">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            <div className="bg-gray-700 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-bj-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AF</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-white">Ana Fernandes</h4>
                  <p className="text-gray-300 text-sm">Contemplada em 2024</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"Equipe muito atenciosa e sempre disposta a esclarecer todas as dúvidas. Obrigada!"</p>
              <div className="flex text-yellow-400 mt-4">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contato" className="section-padding bg-bj-blue text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Simule Seu Consórcio</h2>
              <p className="text-xl text-gray-200">Preencha o formulário e receba uma proposta personalizada</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-bj-blue text-sm">📧</span>
                    </div>
                    <span>contato@bancojota.com.br</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-bj-blue text-sm">📱</span>
                    </div>
                    <span>(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-3">
                      <span className="text-bj-blue text-sm">📍</span>
                    </div>
                    <span>São Paulo - SP</span>
                  </div>
                </div>

                <div className="mt-8 bg-white/10 rounded-xl p-6">
                  <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
                  <div className="space-y-2 text-sm">
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábado: 8h às 12h</p>
                    <p>Domingo: Fechado</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent placeholder-gray-200"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu melhor e-mail"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent placeholder-gray-200"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Seu telefone com WhatsApp"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent placeholder-gray-200 mb-4"
                />
                <textarea
                  name="message"
                  placeholder="Conte-nos sobre seu objetivo (opcional)"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 text-white rounded-lg focus:ring-2 focus:ring-white focus:border-transparent placeholder-gray-200 mb-4"
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
                  <span className="text-sm text-gray-200">
                    Aceito receber contato via WhatsApp e estou ciente da{' '}
                    <a href="#politica" className="text-white hover:underline">Política de Privacidade</a> e{' '}
                    <a href="#termos" className="text-white hover:underline">Termos de Uso</a>.
                  </span>
                </label>

                <button type="submit" className="w-full bg-white text-bj-blue hover:bg-gray-100 font-semibold py-4 rounded-lg transition-all text-lg">
                  Falar com Consultor no WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">O que é consórcio imobiliário?</h3>
              <p className="text-gray-300">É um sistema de autofinanciamento para aquisição de imóveis, onde um grupo de pessoas se reúne para formar um fundo comum e adquirir bens de forma programada.</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">Preciso dar entrada?</h3>
              <p className="text-gray-300">Não é obrigatório dar entrada no consórcio. Você pode participar pagando apenas as parcelas mensais.</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">Como funciona a contemplação?</h3>
              <p className="text-gray-300">A contemplação acontece por sorteio mensal ou por lance. Cada grupo tem assembleia mensal para contemplar participantes.</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-3">Qual a diferença para o financiamento?</h3>
              <p className="text-gray-300">No consórcio não há juros, apenas taxa de administração. As parcelas são fixas e você tem mais flexibilidade na escolha do imóvel.</p>
            </div>
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

          <div className="border-t border-gray-700 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Banco Jota. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}