
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, CreditCard, TrendingUp, FileText, Calendar, CheckCircle, Clock, AlertTriangle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const Financeiro = () => {
  const { toast } = useToast()

  const handleGenerateInvoice = () => {
    toast({
      title: "Nota Fiscal Gerada",
      description: "Nova nota fiscal foi gerada com sucesso",
    })
  }

  const handleRequestPayment = () => {
    toast({
      title: "Pagamento Solicitado",
      description: "Solicitação de pagamento enviada para aprovação",
    })
  }

  const handleExportReport = () => {
    toast({
      title: "Relatório Exportado",
      description: "Relatório financeiro exportado em PDF",
    })
  }

  const recentTransactions = [
    { id: "NF001", date: "2024-01-15", description: "Fornecimento de peças", amount: 15420.50, status: "Pago" },
    { id: "NF002", date: "2024-01-10", description: "Serviços de manutenção", amount: 8750.00, status: "Pendente" },
    { id: "NF003", date: "2024-01-05", description: "Material de escritório", amount: 1250.75, status: "Pago" },
    { id: "NF004", date: "2023-12-28", description: "Consultoria técnica", amount: 12300.00, status: "Atrasado" }
  ]

  const monthlyData = [
    { month: "Jan", received: 45000, pending: 12000 },
    { month: "Dez", received: 38000, pending: 8000 },
    { month: "Nov", received: 42000, pending: 15000 },
    { month: "Out", received: 39000, pending: 9000 }
  ]

  const contracts = [
    { id: "CT001", client: "Empresa Alpha", value: 250000, startDate: "2024-01-01", endDate: "2024-12-31", status: "Ativo" },
    { id: "CT002", client: "Beta Corp", value: 180000, startDate: "2023-06-01", endDate: "2024-05-31", status: "Ativo" },
    { id: "CT003", client: "Gamma Ltd", value: 95000, startDate: "2024-02-01", endDate: "2024-08-31", status: "Pendente" }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pago": return "default"
      case "Ativo": return "default"
      case "Pendente": return "secondary"
      case "Atrasado": return "destructive"
      default: return "outline"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Pago": return <CheckCircle className="w-4 h-4" />
      case "Ativo": return <CheckCircle className="w-4 h-4" />
      case "Pendente": return <Clock className="w-4 h-4" />
      case "Atrasado": return <AlertTriangle className="w-4 h-4" />
      default: return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Gestão Financeira</h1>
          <p className="text-muted-foreground">Controle de receitas, pagamentos e contratos</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleExportReport}>
            <FileText className="w-4 h-4 mr-2" />
            Relatório
          </Button>
          <Button onClick={handleGenerateInvoice}>
            <DollarSign className="w-4 h-4 mr-2" />
            Nova NF
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Receita Mensal</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 45.000</div>
            <p className="text-xs text-muted-foreground">+18% em relação ao mês anterior</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pagamentos Pendentes</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 12.000</div>
            <p className="text-xs text-muted-foreground">3 faturas em aberto</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contratos Ativos</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">R$ 430.000 em valor total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Crescimento</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12%</div>
            <p className="text-xs text-muted-foreground">Últimos 6 meses</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="transacoes" className="space-y-4">
        <TabsList>
          <TabsTrigger value="transacoes">Transações</TabsTrigger>
          <TabsTrigger value="contratos">Contratos</TabsTrigger>
          <TabsTrigger value="relatorios">Relatórios</TabsTrigger>
        </TabsList>

        <TabsContent value="transacoes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Transações Recentes</CardTitle>
              <CardDescription>Últimas movimentações financeiras</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell className="text-right">
                        R$ {transaction.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(transaction.status)} className="flex items-center gap-1 w-fit">
                          {getStatusIcon(transaction.status)}
                          {transaction.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Ver Detalhes
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contratos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contratos</CardTitle>
              <CardDescription>Gestão de contratos e acordos comerciais</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Início</TableHead>
                    <TableHead>Fim</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contracts.map((contract) => (
                    <TableRow key={contract.id}>
                      <TableCell className="font-medium">{contract.id}</TableCell>
                      <TableCell>{contract.client}</TableCell>
                      <TableCell>
                        R$ {contract.value.toLocaleString('pt-BR')}
                      </TableCell>
                      <TableCell>{contract.startDate}</TableCell>
                      <TableCell>{contract.endDate}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(contract.status)}>
                          {contract.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          Gerenciar
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="relatorios" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Histórico Mensal</CardTitle>
              <CardDescription>Receitas dos últimos meses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{data.month}/2024</p>
                        <p className="text-sm text-muted-foreground">
                          Recebido: R$ {data.received.toLocaleString('pt-BR')}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">
                        Pendente: R$ {data.pending.toLocaleString('pt-BR')}
                      </p>
                      <Badge variant="outline">
                        {((data.received / (data.received + data.pending)) * 100).toFixed(1)}% recebido
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2 mt-4">
                <Button onClick={handleRequestPayment} className="flex-1">
                  Solicitar Pagamento
                </Button>
                <Button variant="outline" onClick={handleExportReport} className="flex-1">
                  Exportar Relatório
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Financeiro
