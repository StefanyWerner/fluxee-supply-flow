
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Thermometer, AlertTriangle } from "lucide-react"

const EnvironmentalConditions = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Condições Ambientais</CardTitle>
        <CardDescription>Monitoramento de temperatura e umidade</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border border-green-200">
            <div className="flex items-center gap-3">
              <Thermometer className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium">Armazém Refrigerado</p>
                <p className="text-sm text-muted-foreground">Zona Crítica</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-green-600">4°C</p>
              <p className="text-sm text-muted-foreground">Ideal: 2-8°C</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg bg-yellow-50 border border-yellow-200">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="font-medium">Container C-401</p>
                <p className="text-sm text-muted-foreground">Medicamentos</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-yellow-600">28°C</p>
              <p className="text-sm text-muted-foreground">Alerta: &gt;25°C</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default EnvironmentalConditions
