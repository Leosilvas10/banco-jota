
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

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 23,
    minutes: 45,
    seconds: 30
  })

  // Update countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

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
    <div className="min-h-screen bg-bj-blue-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-bj-blue-dark/95 backdrop-blur-sm shadow-lg z-50 border-b border-bj-blue/20">
        <div className="container-custom">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src="/attached_assets/logo-banco-jota_1752187109762.png" 
                alt="Banco Jota" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-white hover:text-bj-blue-light transition-colors">Início</button>
              <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-bj-blue-light transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('beneficios')} className="text-white hover:text-bj-blue-light transition-colors">Benefícios</button>
              <button onClick={() => scrollToSection('como-funciona')} className="text-white hover:text-bj-blue-light transition-colors">Como Funciona</button>
              <button onClick={() => scrollToSection('contato')} className="bg-bj-blue hover:bg-bj-blue-light text-white px-6 py-2 rounded-lg transition-all">Simular</button>
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
            <div className="md:hidden py-4 border-t border-bj-blue/20">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('inicio')} className="text-left text-white hover:text-bj-blue-light">Início</button>
                <button onClick={() => scrollToSection('sobre')} className="text-left text-white hover:text-bj-blue-light">Sobre</button>
                <button onClick={() => scrollToSection('beneficios')} className="text-left text-white hover:text-bj-blue-light">Benefícios</button>
                <button onClick={() => scrollToSection('como-funciona')} className="text-left text-white hover:text-bj-blue-light">Como Funciona</button>
                <button onClick={() => scrollToSection('contato')} className="bg-bj-blue hover:bg-bj-blue-light text-white px-6 py-2 rounded-lg transition-all text-center mt-4">Simular</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 section-padding bg-bj-blue-dark text-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="z-10 relative">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                O Maior <span className="text-bj-blue-light">Consórcio</span><br/>
                Que Oferece <span className="text-bj-blue-light">Recompensas</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300 max-w-lg">
                Nossa plataforma ajuda investidores a realizar sonhos ao comprar e usar seus imóveis de forma inteligente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('contato')} className="bg-bj-blue hover:bg-bj-blue-light text-white font-semibold py-4 px-8 rounded-lg transition-all">
                  Simular Agora
                </button>
                <button onClick={() => scrollToSection('como-funciona')} className="border-2 border-white text-white hover:bg-white hover:text-bj-blue-dark font-semibold py-4 px-8 rounded-lg transition-all">
                  Como Funciona
                </button>
              </div>
            </div>
            
            {/* Countdown Card */}
            <div className="relative">
              <div className="bg-bj-blue/20 backdrop-blur-sm border border-bj-blue/30 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <p className="text-bj-blue-light font-semibold mb-2">Pré-venda Já Iniciou</p>
                  <h3 className="text-2xl font-bold">Condições Especiais</h3>
                </div>
                
                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="bg-bj-blue-dark border border-bj-blue rounded-lg p-3">
                      <div className="text-2xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
                    </div>
                    <div className="text-sm text-gray-300 mt-1">DIAS</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-bj-blue-dark border border-bj-blue rounded-lg p-3">
                      <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                    </div>
                    <div className="text-sm text-gray-300 mt-1">HORAS</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-bj-blue-dark border border-bj-blue rounded-lg p-3">
                      <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                    </div>
                    <div className="text-sm text-gray-300 mt-1">MINUTOS</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-bj-blue-dark border border-bj-blue rounded-lg p-3">
                      <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                    </div>
                    <div className="text-sm text-gray-300 mt-1">SEGUNDOS</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 px-3 bg-bj-blue-dark/50 rounded">
                    <span className="text-sm">Pré-lançamento</span>
                    <span className="text-bj-blue-light font-semibold">Ativo</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 bg-bj-blue-dark/50 rounded">
                    <span className="text-sm">Sell Cap</span>
                    <span className="text-white">Bônus</span>
                  </div>
                </div>

                <button onClick={() => scrollToSection('contato')} className="w-full bg-bj-blue hover:bg-bj-blue-light text-white font-semibold py-3 rounded-lg transition-all">
                  Garantir Condições
                </button>
              </div>
              
              {/* 3D Isometric Illustration */}
              <div className="absolute -top-20 -right-20 opacity-20">
                <div className="w-80 h-80 relative">
                  {/* Base platform */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-60 h-4 bg-bj-blue rounded-full"></div>
                  
                  {/* Buildings */}
                  <div className="absolute bottom-4 left-8 w-12 h-32 bg-bj-blue-light transform skew-y-12"></div>
                  <div className="absolute bottom-4 left-20 w-16 h-40 bg-bj-blue transform skew-y-12"></div>
                  <div className="absolute bottom-4 left-36 w-14 h-36 bg-bj-blue-light transform skew-y-12"></div>
                  <div className="absolute bottom-4 right-8 w-10 h-28 bg-bj-blue transform skew-y-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="section-padding bg-bj-blue-dark relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <span className="text-bj-blue-light font-semibold text-sm tracking-wider uppercase">O QUE É O CONSÓRCIO</span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
                  Construímos uma plataforma<br/>
                  para comprar e vender <span className="text-bj-blue-light">cotas</span>.
                </h2>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-bj-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2L3 7v11a1 1 0 001 1h3v-7h6v7h3a1 1 0 001-1V7l-7-5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Plataforma Descentralizada</h3>
                    <p className="text-gray-300">A plataforma ajuda investidores a realizar sonhos ao comprar e usar seus imóveis com transparência total.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-bj-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Sabedoria Coletiva</h3>
                    <p className="text-gray-300">O processo de união dos grupos consolida a opinião coletiva de todos do grupo.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-bj-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Mecanismo de Recompensas</h3>
                    <p className="text-gray-300">O sistema compensa indivíduos excelentes que contribuem para o sucesso do grupo.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Globe Illustration */}
            <div className="relative flex items-center justify-center">
              <div className="w-96 h-96 relative">
                {/* Globe wireframe */}
                <div className="absolute inset-0 border-2 border-bj-blue-light rounded-full opacity-30"></div>
                <div className="absolute inset-4 border border-bj-blue rounded-full opacity-20"></div>
                <div className="absolute inset-8 border border-bj-blue-light rounded-full opacity-15"></div>
                
                {/* Orbital rings */}
                <div className="absolute inset-0 border border-bj-blue-light rounded-full transform rotate-45 opacity-25"></div>
                <div className="absolute inset-0 border border-bj-blue rounded-full transform -rotate-45 opacity-25"></div>
                
                {/* Dots representing connections */}
                <div className="absolute top-8 left-16 w-2 h-2 bg-bj-blue-light rounded-full animate-pulse"></div>
                <div className="absolute bottom-12 right-8 w-2 h-2 bg-bj-blue rounded-full animate-pulse"></div>
                <div className="absolute top-20 right-20 w-2 h-2 bg-bj-blue-light rounded-full animate-pulse"></div>
                <div className="absolute bottom-20 left-12 w-2 h-2 bg-bj-blue rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="section-padding bg-bj-blue-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="text-bj-blue-light font-semibold text-sm tracking-wider uppercase">POR QUE ESCOLHER NOSSO SISTEMA</span>
            <h2 className="text-4xl font-bold text-white mt-4 mb-6">Vantagens Exclusivas</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Pagamento móvel<br/>facilitado</h3>
              <p className="text-gray-300 text-sm">O pagamento pode ser feito através de qualquer dispositivo usando seu telefone móvel.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Transação gratuita<br/>para a vida</h3>
              <p className="text-gray-300 text-sm">Garantindo que você tenha acesso gratuito para enviar uma transação livre.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Proteja a<br/>identidade</h3>
              <p className="text-gray-300 text-sm">Usar criptografia de ponta a ponta para proteger suas informações pessoais.</p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Segurança & controle<br/>sobre o dinheiro</h3>
              <p className="text-gray-300 text-sm">Implementamos os mais altos padrões de segurança para proteger seus ativos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Token Info Section */}
      <section className="section-padding bg-bj-blue-dark border-t border-bj-blue/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-bj-blue/10 backdrop-blur-sm border border-bj-blue/20 rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    1 COTA = 0.0013 BTC
                  </h2>
                  <button onClick={() => scrollToSection('contato')} className="bg-bj-blue hover:bg-bj-blue-light text-white font-semibold py-4 px-8 rounded-lg transition-all">
                    Simular Agora
                  </button>
                </div>
                
                <div>
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <p className="text-gray-300 text-sm mb-2">Alocação de Recursos</p>
                      <p className="text-white font-semibold">Alocação de Sistema</p>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm mb-2">Estrutura de Parcerias</p>
                      <p className="text-white font-semibold">5%</p>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm mb-2">Legal & Regulamentação</p>
                      <p className="text-white font-semibold">10%</p>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm mb-2">Contingência</p>
                      <p className="text-white font-semibold">5%</p>
                    </div>
                  </div>
                  
                  {/* Chart representation */}
                  <div className="mt-8 bg-bj-blue-dark/50 rounded-xl p-6">
                    <div className="w-32 h-32 mx-auto relative">
                      <div className="w-full h-full rounded-full border-8 border-bj-blue"></div>
                      <div className="absolute inset-2 rounded-full border-4 border-bj-blue-light"></div>
                      <div className="absolute inset-4 rounded-full border-2 border-green-400"></div>
                      <div className="absolute inset-6 rounded-full bg-yellow-400"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contato" className="section-padding bg-bj-blue-dark border-t border-bj-blue/20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">Simule Seu Consórcio</h2>
              <p className="text-xl text-gray-300">Preencha o formulário e receba uma proposta personalizada</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Entre em Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-bj-blue-light mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <span className="text-gray-300">contato@bancojota.com.br</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-bj-blue-light mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <span className="text-gray-300">(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-bj-blue-light mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"/>
                    </svg>
                    <span className="text-gray-300">São Paulo - SP</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="bg-bj-blue/10 backdrop-blur-sm border border-bj-blue/20 p-8 rounded-xl">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-bj-blue-dark/50 border border-bj-blue/30 text-white rounded-lg focus:ring-2 focus:ring-bj-blue-light focus:border-transparent placeholder-gray-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Seu melhor e-mail"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-bj-blue-dark/50 border border-bj-blue/30 text-white rounded-lg focus:ring-2 focus:ring-bj-blue-light focus:border-transparent placeholder-gray-400"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Seu telefone com WhatsApp"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-bj-blue-dark/50 border border-bj-blue/30 text-white rounded-lg focus:ring-2 focus:ring-bj-blue-light focus:border-transparent placeholder-gray-400 mb-4"
                />
                <textarea
                  name="message"
                  placeholder="Conte-nos sobre seu objetivo (opcional)"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-bj-blue-dark/50 border border-bj-blue/30 text-white rounded-lg focus:ring-2 focus:ring-bj-blue-light focus:border-transparent placeholder-gray-400 mb-4"
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
                  <span className="text-sm text-gray-300">
                    Aceito receber contato via WhatsApp e estou ciente da{' '}
                    <a href="#politica" className="text-bj-blue-light hover:underline">Política de Privacidade</a> e{' '}
                    <a href="#termos" className="text-bj-blue-light hover:underline">Termos de Uso</a>.
                  </span>
                </label>

                <button type="submit" className="w-full bg-bj-blue hover:bg-bj-blue-light text-white font-semibold py-4 rounded-lg transition-all text-lg">
                  Falar com Consultor no WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bj-blue-dark text-white section-padding border-t border-bj-blue/20">
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
          
          <div className="border-t border-bj-blue/20 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Banco Jota. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
