import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Search, Menu, X, Home, Building, MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, MessageSquare, Bed, Bath } from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('todos')
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    telefone: '',
    mensagem: ''
  })

  const properties = [
    {
      id: 1,
      type: 'Apartamento',
      price: 'R$ 1.300,00',
      title: 'AP175 Altos do Avecuia',
      bedrooms: 2,
      bathrooms: 1,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      category: 'aluguel'
    },
    {
      id: 2,
      type: 'Casa',
      price: 'R$ 1.350,00',
      title: 'CA477 Jardim Santa Elisa',
      bedrooms: 2,
      bathrooms: 1,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      category: 'aluguel'
    },
    {
      id: 3,
      type: 'Casa',
      price: 'R$ 1.400,00',
      title: 'CA449 Condomínio Eldorado',
      bedrooms: 2,
      bathrooms: 3,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
      category: 'aluguel'
    },
    {
      id: 4,
      type: 'Apartamento',
      price: 'R$ 350.000,00',
      title: 'Apartamento Centro',
      bedrooms: 3,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      category: 'compra'
    },
    {
      id: 5,
      type: 'Terreno',
      price: 'R$ 180.000,00',
      title: 'Terreno Residencial',
      bedrooms: 0,
      bathrooms: 0,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop',
      category: 'terreno'
    }
  ]

  const filteredProperties = activeFilter === 'todos' 
    ? properties 
    : properties.filter(prop => prop.category === activeFilter)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Mensagem enviada com sucesso!')
    setFormData({
      nome: '',
      email: '',
      assunto: '',
      telefone: '',
      mensagem: ''
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 header-logo">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center">
                <Building className="w-4 h-4 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <div className="didi-logo">
                <div className="text-lg md:text-xl font-bold text-foreground">DIDI</div>
                <div className="text-xs hidden md:block text-muted-foreground">CONSULTORIA E NEGÓCIOS IMOBILIÁRIOS</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#inicio" className="text-primary font-medium hover:text-primary/80 transition-colors">INÍCIO</a>
              <a href="#aluguel" className="text-foreground hover:text-primary transition-colors">ALUGUEL</a>
              <a href="#compra" className="text-foreground hover:text-primary transition-colors">COMPRA</a>
              <a href="#terreno" className="text-foreground hover:text-primary transition-colors">TERRENO</a>
              <a href="#contato" className="text-foreground hover:text-primary transition-colors">CONTATO</a>
            </nav>

            {/* Desktop Search and Social Icons */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <Input 
                  placeholder="PESQUISAR" 
                  className="w-48 xl:w-64 bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
              <div className="flex space-x-2">
                <Instagram className="w-5 h-5 text-primary cursor-pointer hover:text-primary/80 transition-colors" />
                <Facebook className="w-5 h-5 text-primary cursor-pointer hover:text-primary/80 transition-colors" />
                <MessageSquare className="w-5 h-5 text-primary cursor-pointer hover:text-primary/80 transition-colors" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4 mb-4">
                <a href="#inicio" className="text-primary font-medium py-2" onClick={() => setIsMenuOpen(false)}>INÍCIO</a>
                <a href="#aluguel" className="text-foreground py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>ALUGUEL</a>
                <a href="#compra" className="text-foreground py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>COMPRA</a>
                <a href="#terreno" className="text-foreground py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>TERRENO</a>
                <a href="#contato" className="text-foreground py-2 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>CONTATO</a>
              </nav>
              <div className="space-y-4">
                <div className="relative">
                  <Input placeholder="PESQUISAR" className="w-full bg-input border-border text-foreground" />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
                <div className="flex space-x-4 justify-center">
                  <Instagram className="w-6 h-6 text-primary cursor-pointer hover:text-primary/80 transition-colors" />
                  <Facebook className="w-6 h-6 text-primary cursor-pointer hover:text-primary/80 transition-colors" />
                  <MessageSquare className="w-6 h-6 text-primary cursor-pointer hover:text-primary/80 transition-colors" />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero-section py-20 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-12 h-12 text-primary-foreground" />
              </div>
              <h1 className="didi-logo text-6xl font-bold text-foreground mb-2">DIDI</h1>
              <p className="text-lg text-muted-foreground mb-4">CONSULTORIA E NEGÓCIOS IMOBILIÁRIOS</p>
              <p className="text-2xl text-foreground font-medium">Credibilidade tem nome</p>
            </div>
            
            <div className="section-divider"></div>
            
            <div className="mt-16">
              <h2 className="text-4xl font-bold text-primary mb-8">Especialistas no ramo imobiliário</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Home className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Locação</h3>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Building className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Compra e Venda</h3>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Terrenos</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="propriedades" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Locação</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nem sempre é fácil encontrar um bom imóvel para alugar por conta própria. É por isso que estamos aqui. Procure 
              imóveis por bairro, preço, comodidades e muito mais.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant={activeFilter === 'todos' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('todos')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Todos
            </Button>
            <Button 
              variant={activeFilter === 'aluguel' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('aluguel')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Aluguel
            </Button>
            <Button 
              variant={activeFilter === 'compra' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('compra')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Compra
            </Button>
            <Button 
              variant={activeFilter === 'terreno' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('terreno')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Terreno
            </Button>
          </div>

          {/* Properties Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <Card key={property.id} className="property-card bg-card border-border overflow-hidden">
                <div className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {property.type}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">{property.price}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    {property.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4 text-muted-foreground">
                    {property.bedrooms > 0 && (
                      <div className="flex items-center space-x-1">
                        <Bed className="w-4 h-4" />
                        <span>{property.bedrooms} Dormitório(s)</span>
                      </div>
                    )}
                    {property.bathrooms > 0 && (
                      <div className="flex items-center space-x-1">
                        <Bath className="w-4 h-4" />
                        <span>{property.bathrooms} Banheiro(s)</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-primary text-center mb-12">Entre em contato</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground mb-2">Nome *</label>
                  <Input 
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Insira seu nome"
                    required
                    className="bg-input border-border text-foreground"
                  />
                </div>
                <div>
                  <label className="block text-foreground mb-2">Email *</label>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Insira seu email"
                    required
                    className="bg-input border-border text-foreground"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-foreground mb-2">Assunto</label>
                <Input 
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleInputChange}
                  placeholder="Insira o assunto"
                  className="bg-input border-border text-foreground"
                />
              </div>
              
              <div>
                <label className="block text-foreground mb-2">Telefone *</label>
                <Input 
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  placeholder="Insira seu telefone"
                  required
                  className="bg-input border-border text-foreground"
                />
              </div>
              
              <div>
                <label className="block text-foreground mb-2">Mensagem</label>
                <Textarea 
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleInputChange}
                  placeholder="Digite sua mensagem aqui"
                  rows={5}
                  className="bg-input border-border text-foreground"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg py-3"
              >
                Enviar
              </Button>
            </form>

            {/* Map Placeholder */}
            <div className="mt-12 h-64 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                <p className="text-muted-foreground">Mapa da localização</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Widget */}
      <div className="chat-widget">
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 py-3 shadow-lg">
          <MessageCircle className="w-5 h-5 mr-2" />
          Vamos conversar por chat
        </Button>
      </div>
    </div>
  )
}

export default App

