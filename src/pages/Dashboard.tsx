
import { DashboardCard } from "@/components/DashboardCard"
import { 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertTriangle,
  Package,
  Truck,
  MapPin,
  Users
} from "lucide-react"

const Dashboard = () => {
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

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-primary-foreground">
        <h1 className="text-3xl font-bold mb-2">Dashboard Executivo</h1>
        <p className="text-primary-foreground/80 text-lg">
          Visão geral dos indicadores de performance da sua operação logística.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Indicadores de Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiData.map((kpi, index) => (
            <DashboardCard key={index} {...kpi} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border p-6">
          <h3 className="text-xl font-semibold text-foreground mb-4">Resumo de Operações</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <Package className="w-5 h-5 text-primary" />
                <span>Itens em Estoque</span>
              </div>
              <span className="font-semibold">1,247</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-secondary" />
                <span>Entregas Hoje</span>
              </div>
              <span className="font-semibold">23</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Rotas Ativas</span>
              </div>
              <span className="font-semibold">8</span>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl border p-6">
          <h3 className="text-xl font-semibold text-foreground mb-4">Alertas Recentes</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
              <AlertTriangle className="w-4 h-4 text-yellow-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">Estoque baixo - Peça ABC-123</p>
                <p className="text-xs text-muted-foreground">há 2 horas</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-red-50 border border-red-200">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">Atraso na entrega - Rota SP-001</p>
                <p className="text-xs text-muted-foreground">há 4 horas</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
              <AlertTriangle className="w-4 h-4 text-blue-600" />
              <div className="flex-1">
                <p className="text-sm font-medium">Manutenção programada - Veículo V-023</p>
                <p className="text-xs text-muted-foreground">há 6 horas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
