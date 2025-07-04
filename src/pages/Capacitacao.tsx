
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { GraduationCap, BookOpen, Video, Users, Clock, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const Capacitacao = () => {
  const { toast } = useToast()

  const handleStartCourse = (courseName: string) => {
    toast({
      title: "Curso Iniciado",
      description: `Iniciando o curso: ${courseName}`,
    })
  }

  const handleViewCertificate = () => {
    toast({
      title: "Certificado",
      description: "Visualizando certificado de conclusão...",
    })
  }

  const handleScheduleTraining = () => {
    toast({
      title: "Treinamento Agendado",
      description: "Agendando sessão de treinamento personalizado...",
    })
  }

  const courses = [
    {
      title: "Gestão de Qualidade Total",
      description: "Fundamentos da qualidade e melhoria contínua",
      duration: "8 horas",
      status: "Disponível",
      progress: 0,
      type: "Obrigatório"
    },
    {
      title: "Segurança no Trabalho",
      description: "Normas de segurança e prevenção de acidentes",
      duration: "4 horas",
      status: "Em Progresso",
      progress: 75,
      type: "Obrigatório"
    },
    {
      title: "Sustentabilidade Empresarial",
      description: "Práticas sustentáveis na cadeia de suprimentos",
      duration: "6 horas",
      status: "Concluído",
      progress: 100,
      type: "Opcional"
    }
  ]

  const upcomingTrainings = [
    { title: "Workshop de Inovação", date: "15/01/2024", time: "14:00", type: "Presencial" },
    { title: "Webinar Compliance", date: "22/01/2024", time: "10:00", type: "Online" },
    { title: "Mesa Redonda Logística", date: "30/01/2024", time: "16:00", type: "Híbrido" }
  ]

  const achievements = [
    { name: "Certificação ISO 9001", date: "12/2023", valid: "12/2026" },
    { name: "Curso de Liderança", date: "10/2023", valid: "10/2025" },
    { name: "Workshop de Tecnologia", date: "08/2023", valid: "08/2025" }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Capacitação e Treinamento</h1>
          <p className="text-muted-foreground">Desenvolva suas competências e mantenha-se atualizado</p>
        </div>
        <Button onClick={handleScheduleTraining} className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          Agendar Treinamento
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cursos Concluídos</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 este mês</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Horas de Treinamento</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">84h</div>
            <p className="text-xs text-muted-foreground">Este ano</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certificações</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Ativas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Conclusão</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95%</div>
            <p className="text-xs text-muted-foreground">Acima da média</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Cursos Disponíveis</CardTitle>
            <CardDescription>Continue seu desenvolvimento profissional</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold">{course.title}</h3>
                      <p className="text-sm text-muted-foreground">{course.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {course.duration}
                        </span>
                        <Badge variant={course.type === "Obrigatório" ? "default" : "secondary"}>
                          {course.type}
                        </Badge>
                      </div>
                    </div>
                    <Badge variant={course.status === "Concluído" ? "default" : "outline"}>
                      {course.status}
                    </Badge>
                  </div>
                  {course.progress > 0 && (
                    <div className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progresso</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  )}
                  <Button 
                    onClick={() => handleStartCourse(course.title)}
                    variant={course.status === "Concluído" ? "outline" : "default"}
                    size="sm"
                  >
                    {course.status === "Concluído" ? "Revisar" : course.status === "Em Progresso" ? "Continuar" : "Iniciar"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Próximos Treinamentos</CardTitle>
              <CardDescription>Eventos e workshops agendados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingTrainings.map((training, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Video className="w-4 h-4 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{training.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {training.date} às {training.time} • {training.type}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Certificações</CardTitle>
              <CardDescription>Suas conquistas e certificados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <p className="font-medium text-sm">{achievement.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Concluído: {achievement.date}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Válido até: {achievement.valid}
                    </p>
                  </div>
                ))}
              </div>
              <Button variant="outline" onClick={handleViewCertificate} className="w-full mt-3" size="sm">
                Ver Certificados
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Capacitacao
