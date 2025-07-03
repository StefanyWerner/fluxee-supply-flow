
import { DashboardCard } from "@/components/DashboardCard"
import { ModuleCard } from "@/components/ModuleCard"
import { 
  Package, 
  Truck, 
  MapPin, 
  Shield, 
  Star, 
  GraduationCap, 
  DollarSign, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle
} from "lucide-react"

const Index = () => {
  const kpiData = [
    {
      title: "Entregas no Prazo (OTD)",
      value: "94.5%",
      change: "+2.3% vs mês anterior",
      changeType: "positive" as const,
      icon: <CheckCircle className="w-4 h-4" />
    },
    {
      title: "Lead Time Médio",
      value: "2.4 dias",
      change: "-0.3 dias vs mês anterior",
      changeType: "positive" as const,
      icon: <Clock className="w-4 h-4" />
    },
    {
      title: "Redução de Custos",
      value: "18.7%",
      change: "+4.2% vs trimestre anterior",
      changeType: "positive" as const,
      icon: <TrendingUp className="w-4 h-4" />
    },
    {
      title: "Alertas Pendentes",
      value: "3",
      change: "2 críticos, 1 médio",
      changeType: "negative" as const,
      icon: <AlertTriangle className="w-4 h-4" />
    }
  ]

  const modules = [
    {
      title: "Inventário & ABC/JIT",
      description: "Controle inteligente de estoques com classificação ABC e alertas JIT para otimização de recursos.",
      icon: <Package className="w-6 h-6" />,
      href: "/inventario",
      featured: true
    },
    {
      title: "Transporte & TMS",
      description: "Roteirização dinâmica e multimodal com simulação de custos em tempo real.",
      icon: <Truck className="w-6 h-6" />,
      href: "/transporte",
    },
    {
      title: "Monitoramento",
      description: "Rastreamento ao vivo com IoT, RFID e alertas de condições ambientais.",
      icon: <MapPin className="w-6 h-6" />,
      href: "/monitoramento",
    },
    {
      title: "Governança",
      description: "Gestão completa de contratos, SLAs e auditorias digitalizadas.",
      icon: <Shield className="w-6 h-6" />,
      href: "/governanca",
    },
    {
      title: "Avaliação",
      description: "Scorecards de performance e dashboards de KPIs acionáveis.",
      icon: <Star className="w-6 h-6" />,
      href: "/avaliacao",
    },
    {
      title: "Capacitação",
      description: "Programas de treinamento e fórum de co-desenvolvimento para crescimento contínuo.",
      icon: <GraduationCap className="w-6 h-6" />,
      href: "/capacitacao",
    },
    {
      title: "Financeiro",
      description: "Antecipação de recebíveis e linha de crédito integrada para fluxo de caixa.",
      icon: <DollarSign className="w-6 h-6" />,
      href: "/financeiro",
      featured: true
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-primary-foreground">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Bem-vindo ao Fluxee!</h1>
            <p className="text-primary-foreground/80 text-lg">
              O fluxo que a sua empresa precisa para crescer e prosperar.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Truck className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>

      {/* KPIs Section */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Indicadores de Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiData.map((kpi, index) => (
            <DashboardCard key={index} {...kpi} />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-card rounded-xl border p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Ações Rápidas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 rounded-lg bg-accent/10 text-accent hover:bg-accent/20 transition-colors duration-200 text-left">
            <Package className="w-6 h-6 mb-2" />
            <div className="font-medium">Atualizar Estoque</div>
            <div className="text-sm opacity-80">Últimos 5 itens em baixa</div>
          </button>
          <button className="p-4 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200 text-left">
            <Truck className="w-6 h-6 mb-2" />
            <div className="font-medium">Nova Rota</div>
            <div className="text-sm opacity-80">Planejar entrega</div>
          </button>
          <button className="p-4 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors duration-200 text-left">
            <MapPin className="w-6 h-6 mb-2" />
            <div className="font-medium">Rastrear Envio</div>
            <div className="text-sm opacity-80">3 em andamento</div>
          </button>
        </div>
      </div>

      {/* Modules Grid */}
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Módulos do Sistema</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => (
            <ModuleCard key={index} {...module} />
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-card rounded-xl border p-6">
        <h3 className="text-xl font-semibold text-foreground mb-4">Atividade Recente</h3>
        <div className="space-y-4">
          {[
            { action: "Estoque atualizado", item: "Peça ABC-123", time: "há 2 horas", status: "success" },
            { action: "Rota planejada", item: "Entrega São Paulo", time: "há 4 horas", status: "info" },
            { action: "Alerta de temperatura", item: "Produto refrigerado", time: "há 6 horas", status: "warning" },
            { action: "Pagamento processado", item: "Fatura #1234", time: "há 1 dia", status: "success" }
          ].map((activity, index) => (
            <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
              <div className={`w-3 h-3 rounded-full ${
                activity.status === 'success' ? 'bg-green-500' :
                activity.status === 'warning' ? 'bg-yellow-500' :
                'bg-blue-500'
              }`} />
              <div className="flex-1">
                <div className="font-medium text-foreground">{activity.action}</div>
                <div className="text-sm text-muted-foreground">{activity.item}</div>
              </div>
              <div className="text-sm text-muted-foreground">{activity.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Index
