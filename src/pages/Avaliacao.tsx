
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Star, TrendingUp, Award, Target } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const Avaliacao = () => {
  const { toast } = useToast()

  const handleStartEvaluation = () => {
    toast({
      title: "Avaliação Iniciada",
      description: "Iniciando processo de avaliação de desempenho...",
    })
  }

  const handleViewHistory = () => {
    toast({
      title: "Histórico de Avaliações",
      description: "Visualizando histórico completo de avaliações...",
    })
  }

  const handleGenerateReport = () => {
    toast({
      title: "Relatório Gerado",
      description: "Gerando relatório de avaliação em PDF...",
    })
  }

  const evaluationMetrics = [
    { name: "Qualidade dos Produtos", score: 4.8, max: 5.0, percentage: 96 },
    { name: "Pontualidade de Entrega", score: 4.5, max: 5.0, percentage: 90 },
    { name: "Comunicação", score: 4.7, max: 5.0, percentage: 94 },
    { name: "Conformidade", score: 4.6, max: 5.0, percentage: 92 }
  ]

  const recentEvaluations = [
    { date: "2024-01-15", type: "Mensal", score: 4.7, status: "Aprovado" },
    { date: "2023-12-15", type: "Mensal", score: 4.5, status: "Aprovado" },
    { date: "2023-11-15", type: "Mensal", score: 4.8, status: "Aprovado" }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Avaliação de Desempenho</h1>
          <p className="text-muted-foreground">Sistema de avaliação e feedback para fornecedores</p>
        </div>
        <Button onClick={handleStartEvaluation} className="flex items-center gap-2">
          <Star className="w-4 h-4" />
          Nova Avaliação
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Score Geral</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7/5.0</div>
            <p className="text-xs text-muted-foreground">+0.2 desde última avaliação</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Posição no Ranking</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#12</div>
            <p className="text-xs text-muted-foreground">De 150 fornecedores</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Meta Mensal</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">Meta: ≥4.5 pontos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certificações</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Certificados ativos</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Métricas de Avaliação</CardTitle>
            <CardDescription>Performance por categoria</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {evaluationMetrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{metric.name}</span>
                  <span className="font-medium">{metric.score}/{metric.max}</span>
                </div>
                <Progress value={metric.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Histórico de Avaliações</CardTitle>
            <CardDescription>Últimas avaliações realizadas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentEvaluations.map((evaluation, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{evaluation.type}</p>
                    <p className="text-sm text-muted-foreground">{evaluation.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{evaluation.score}/5.0</p>
                    <Badge variant={evaluation.status === "Aprovado" ? "default" : "secondary"}>
                      {evaluation.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" onClick={handleViewHistory} className="flex-1">
                Ver Histórico Completo
              </Button>
              <Button onClick={handleGenerateReport} className="flex-1">
                Gerar Relatório
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Avaliacao
