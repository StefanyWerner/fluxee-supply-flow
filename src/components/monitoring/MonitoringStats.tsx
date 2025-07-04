
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const MonitoringStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Sensores Ativos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-primary">47</div>
          <p className="text-sm text-muted-foreground">3 com alertas</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Envios Monitorados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-600">12</div>
          <p className="text-sm text-muted-foreground">Em tempo real</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Alertas Hoje</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-yellow-600">5</div>
          <p className="text-sm text-muted-foreground">2 críticos</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Conformidade</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-600">98.5%</div>
          <p className="text-sm text-muted-foreground">Este mês</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default MonitoringStats
