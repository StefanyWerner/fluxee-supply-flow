
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { 
  Shield, 
  FileText, 
  Calendar, 
  CheckCircle, 
  AlertTriangle,
  Clock,
  Users,
  Plus
} from "lucide-react"

const Governanca = () => {
  const contracts = [
    { id: "CONT-001", fornecedor: "LogTrans Ltda", tipo: "Transporte", inicio: "01/01/2024", fim: "31/12/2024", valor: "R$ 120.000", status: "Ativo", sla: 95 },
    { id: "CONT-002", fornecedor: "Armazém Global", tipo: "Armazenagem", inicio: "15/03/2024", fim: "14/03/2025", valor: "R$ 85.000", status: "Ativo", sla: 98 },
    { id: "CONT-003", fornecedor: "Tech Solutions", tipo: "TI/Software", inicio: "01/06/2024", fim: "31/05/2025", valor: "R$ 45.000", status: "Renovação", sla: 92 },
  ]

  const auditorias = [
    { id: "AUD-001", tipo: "Conformidade", data: "15/12/2024", status: "Concluída", resultado: "Aprovado", score: 94 },
    { id: "AUD-002", tipo: "Qualidade", data: "20/12/2024", status: "Em andamento", resultado: "-", score: 0 },
    { id: "AUD-003", tipo: "Segurança", data: "10/01/2025", status: "Agendada", resultado: "-", score: 0 },
  ]

  const getContractStatusColor = (status: string) => {
    switch (status) {
      case "Ativo": return "bg-green-100 text-green-800 border-green-200"
      case "Renovação": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "Vencido": return "bg-red-100 text-red-800 border-red-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getAuditStatusColor = (status: string) => {
    switch (status) {
      case "Concluída": return "bg-green-100 text-green-800 border-green-200"
      case "Em andamento": return "bg-blue-100 text-blue-800 border-blue-200"
      case "Agendada": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-8 h-8" />
          <div>
            <h1 className="text-3xl font-bold">Governança</h1>
            <p className="text-indigo-100">Gestão completa de contratos, SLAs e auditorias digitalizadas</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Contratos Ativos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">12</div>
            <p className="text-sm text-muted-foreground">R$ 2.8M total</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">SLA Médio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">96.3%</div>
            <p className="text-sm text-muted-foreground">Acima da meta</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Auditorias Pendentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">2</div>
            <p className="text-sm text-muted-foreground">Este trimestre</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Conformidade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">98%</div>
            <p className="text-sm text-muted-foreground">Score geral</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Gestão de SLAs</CardTitle>
            <CardDescription>Monitoramento de níveis de serviço</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>LogTrans Ltda - Entregas no Prazo</span>
                  <span className="font-semibold">95%</span>
                </div>
                <Progress value={95} className="h-2" />
                <p className="text-xs text-muted-foreground">Meta: 90% | Status: ✅ Atendido</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Armazém Global - Precisão Inventário</span>
                  <span className="font-semibold">98%</span>
                </div>
                <Progress value={98} className="h-2" />
                <p className="text-xs text-muted-foreground">Meta: 95% | Status: ✅ Superado</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Tech Solutions - Disponibilidade</span>
                  <span className="font-semibold">92%</span>
                </div>
                <Progress value={92} className="h-2" />
                <p className="text-xs text-muted-foreground">Meta: 95% | Status: ⚠️ Abaixo</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Próximas Auditorias</CardTitle>
            <CardDescription>Cronograma de auditorias planejadas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 rounded-lg border">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div className="flex-1">
                  <p className="font-medium">Auditoria de Qualidade</p>
                  <p className="text-sm text-muted-foreground">20/12/2024 - Processo em andamento</p>
                </div>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">Em andamento</Badge>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg border">
                <Calendar className="w-5 h-5 text-yellow-600" />
                <div className="flex-1">
                  <p className="font-medium">Auditoria de Segurança</p>
                  <p className="text-sm text-muted-foreground">10/01/2025 - ISO 27001</p>
                </div>
                <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Agendada</Badge>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg border">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div className="flex-1">
                  <p className="font-medium">Auditoria de Conformidade</p>
                  <p className="text-sm text-muted-foreground">15/12/2024 - Score: 94%</p>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200">Concluída</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Contratos e Fornecedores</CardTitle>
              <CardDescription>Gestão completa de contratos e relacionamento com fornecedores</CardDescription>
            </div>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Novo Contrato
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-3">Contrato</th>
                  <th className="text-left p-3">Fornecedor</th>
                  <th className="text-left p-3">Tipo</th>
                  <th className="text-left p-3">Vigência</th>
                  <th className="text-left p-3">Valor</th>
                  <th className="text-left p-3">SLA</th>
                  <th className="text-left p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {contracts.map((contract) => (
                  <tr key={contract.id} className="border-b hover:bg-muted/50">
                    <td className="p-3 font-mono text-sm">{contract.id}</td>
                    <td className="p-3">{contract.fornecedor}</td>
                    <td className="p-3">{contract.tipo}</td>
                    <td className="p-3 text-sm">{contract.inicio} - {contract.fim}</td>
                    <td className="p-3 font-semibold">{contract.valor}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-sm ${contract.sla >= 95 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {contract.sla}%
                      </span>
                    </td>
                    <td className="p-3">
                      <Badge className={getContractStatusColor(contract.status)}>
                        {contract.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Governanca
