
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Mail, Phone, MapPin, Building, FileText, Settings, Shield, Bell } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const Perfil = () => {
  const { toast } = useToast()

  const handleSaveProfile = () => {
    toast({
      title: "Perfil Atualizado",
      description: "Suas informações foram salvas com sucesso",
    })
  }

  const handleChangePassword = () => {
    toast({
      title: "Senha Alterada",
      description: "Sua senha foi alterada com sucesso",
    })
  }

  const handleUploadDocument = () => {
    toast({
      title: "Documento Enviado",
      description: "Documento foi enviado para verificação",
    })
  }

  const companyInfo = {
    name: "Carlos Silva",
    email: "carlos.silva@fornecedor.com",
    phone: "(11) 98765-4321",
    company: "Silva Componentes Ltda",
    cnpj: "12.345.678/0001-90",
    address: "Rua das Indústrias, 123",
    city: "São Paulo",
    state: "SP",
    cep: "01234-567",
    category: "Microfornecedor",
    since: "Janeiro 2020"
  }

  const documents = [
    { name: "Contrato Social", status: "Aprovado", date: "15/12/2023" },
    { name: "Certidão Negativa", status: "Aprovado", date: "10/01/2024" },
    { name: "Alvará de Funcionamento", status: "Pendente", date: "20/01/2024" },
    { name: "Certificado ISO 9001", status: "Aprovado", date: "05/11/2023" }
  ]

  const certifications = [
    { name: "ISO 9001:2015", issuer: "Bureau Veritas", valid: "2026" },
    { name: "OHSAS 18001", issuer: "SGS", valid: "2025" },
    { name: "ISO 14001", issuer: "TÜV", valid: "2025" }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aprovado": return "default"
      case "Pendente": return "secondary"
      case "Rejeitado": return "destructive"
      default: return "outline"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Perfil do Fornecedor</h1>
          <p className="text-muted-foreground">Gerencie suas informações e configurações</p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="flex items-center gap-1">
            <Building className="w-3 h-3" />
            {companyInfo.category}
          </Badge>
          <Badge variant="default">Verificado</Badge>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card>
          <CardHeader className="text-center pb-2">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
              <User className="w-10 h-10 text-primary-foreground" />
            </div>
            <CardTitle className="text-lg">{companyInfo.name}</CardTitle>
            <CardDescription>{companyInfo.company}</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">Fornecedor desde {companyInfo.since}</p>
            <Button className="w-full mt-4" size="sm">
              Alterar Foto
            </Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <Tabs defaultValue="informacoes" className="w-full">
            <CardHeader>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="informacoes">Informações</TabsTrigger>
                <TabsTrigger value="documentos">Documentos</TabsTrigger>
                <TabsTrigger value="certificacoes">Certificações</TabsTrigger>
                <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
              </TabsList>
            </CardHeader>

            <CardContent>
              <TabsContent value="informacoes" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" defaultValue={companyInfo.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" defaultValue={companyInfo.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" defaultValue={companyInfo.phone} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" defaultValue={companyInfo.company} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cnpj">CNPJ</Label>
                    <Input id="cnpj" defaultValue={companyInfo.cnpj} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cep">CEP</Label>
                    <Input id="cep" defaultValue={companyInfo.cep} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Endereço Completo</Label>
                  <Textarea 
                    id="address" 
                    defaultValue={`${companyInfo.address}, ${companyInfo.city} - ${companyInfo.state}`}
                    rows={3}
                  />
                </div>
                <Button onClick={handleSaveProfile} className="w-full">
                  Salvar Informações
                </Button>
              </TabsContent>

              <TabsContent value="documentos" className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Documentos da Empresa</h3>
                    <Button onClick={handleUploadDocument} size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      Enviar Documento
                    </Button>
                  </div>
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-sm text-muted-foreground">Enviado em {doc.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={getStatusColor(doc.status)}>
                          {doc.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Ver
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="certificacoes" className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Certificações Ativas</h3>
                    <Button size="sm">
                      Adicionar Certificação
                    </Button>
                  </div>
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="font-medium">{cert.name}</p>
                          <p className="text-sm text-muted-foreground">
                            Emitido por {cert.issuer} • Válido até {cert.valid}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="default">Ativo</Badge>
                        <Button variant="outline" size="sm">
                          Renovar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="configuracoes" className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Configurações da Conta
                  </h3>
                  
                  <div className="space-y-4 p-4 border rounded-lg">
                    <h4 className="font-medium">Alterar Senha</h4>
                    <div className="grid gap-3">
                      <Input type="password" placeholder="Senha atual" />
                      <Input type="password" placeholder="Nova senha" />
                      <Input type="password" placeholder="Confirmar nova senha" />
                      <Button onClick={handleChangePassword} size="sm" className="w-fit">
                        Alterar Senha
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4 p-4 border rounded-lg">
                    <h4 className="font-medium flex items-center gap-2">
                      <Bell className="w-4 h-4" />
                      Notificações
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">E-mail de novas mensagens</span>
                        <input type="checkbox" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Notificações de pagamento</span>
                        <input type="checkbox" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Alertas de vencimento</span>
                        <input type="checkbox" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Newsletter mensal</span>
                        <input type="checkbox" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 p-4 border rounded-lg border-red-200">
                    <h4 className="font-medium text-red-600">Zona de Perigo</h4>
                    <p className="text-sm text-muted-foreground">
                      Ações irreversíveis que afetam permanentemente sua conta.
                    </p>
                    <Button variant="destructive" size="sm">
                      Desativar Conta
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}

export default Perfil
