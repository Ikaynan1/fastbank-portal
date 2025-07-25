import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";

interface SolicitacaoSuporte {
  data: string;
  contaFilha: string;
  login: string;
  senha: string;
  motivo: string;
  descricao: string;
  status: "PENDENTE" | "RESOLVIDO";
}

const historico: SolicitacaoSuporte[] = [
  {
    data: "04/07/2025 23:34",
    contaFilha: "12345678901",
    login: "user123",
    senha: "****",
    motivo: "NOVA CHAVE SAQUE MÃE",
    descricao: "Solicitação de nova chave para saque",
    status: "RESOLVIDO"
  }
];

export default function Suporte() {
  const [motivo, setMotivo] = useState("");
  const [cpfContaFilha, setCpfContaFilha] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const handleEnviar = () => {
    if (!motivo || !cpfContaFilha) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    
    // Aqui seria implementada a lógica de envio
    alert("Solicitação enviada com sucesso!");
    
    // Limpar formulário
    setMotivo("");
    setCpfContaFilha("");
    setObservacoes("");
  };

  const abrirWhatsApp = () => {
    // Abrir WhatsApp (seria implementado com número real)
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Suporte</h1>
            <p className="text-muted-foreground">Área de atendimento e suporte técnico</p>
          </div>
          <Button 
            onClick={abrirWhatsApp}
            className="bg-fastbank-green hover:bg-fastbank-green/90"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            WHATSAPP SUPORTE
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Formulário de Suporte */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Nova Solicitação</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">MOTIVO</label>
                <Select value={motivo} onValueChange={setMotivo}>
                  <SelectTrigger>
                    <SelectValue placeholder="SELECIONE O MOTIVO DA SOLICITAÇÃO" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nova-chave-saque">Nova Chave Saque Mãe</SelectItem>
                    <SelectItem value="problema-pix">Problema com PIX</SelectItem>
                    <SelectItem value="conta-bloqueada">Conta Bloqueada</SelectItem>
                    <SelectItem value="duvida-geral">Dúvida Geral</SelectItem>
                    <SelectItem value="problema-tecnico">Problema Técnico</SelectItem>
                    <SelectItem value="alteracao-dados">Alteração de Dados</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">CPF CONTA FILHA</label>
                <Input
                  value={cpfContaFilha}
                  onChange={(e) => setCpfContaFilha(e.target.value)}
                  placeholder="Digite o CPF da conta filha"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">OBSERVAÇÕES</label>
                <Textarea
                  value={observacoes}
                  onChange={(e) => setObservacoes(e.target.value)}
                  placeholder="Descreva detalhadamente sua solicitação..."
                  rows={6}
                />
              </div>

              <Button 
                onClick={handleEnviar}
                className="w-full bg-black hover:bg-black/90 text-white"
              >
                ENVIAR
              </Button>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle>Canais de Atendimento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center p-6 border border-dashed border-border rounded-lg">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-fastbank-green" />
                <h3 className="font-semibold mb-2">WhatsApp Suporte</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Atendimento via WhatsApp para dúvidas urgentes
                </p>
                <Button 
                  onClick={abrirWhatsApp}
                  className="bg-fastbank-green hover:bg-fastbank-green/90"
                >
                  Abrir WhatsApp
                </Button>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <strong>Horário de Atendimento:</strong>
                  <p className="text-muted-foreground">Segunda a Sexta: 08h às 18h</p>
                  <p className="text-muted-foreground">Sábado: 08h às 14h</p>
                </div>
                
                <div>
                  <strong>Tempo de Resposta:</strong>
                  <p className="text-muted-foreground">WhatsApp: até 2 horas</p>
                  <p className="text-muted-foreground">Formulário: até 24 horas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Histórico de Solicitações */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>HISTÓRICO DE SOLICITAÇÕES</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-border">
                    <TableHead>DATA</TableHead>
                    <TableHead>CONTA FILHA</TableHead>
                    <TableHead>LOGIN</TableHead>
                    <TableHead>SENHA</TableHead>
                    <TableHead>MOTIVO</TableHead>
                    <TableHead>DESCRIÇÃO</TableHead>
                    <TableHead>STATUS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {historico.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                        Nenhuma solicitação encontrada
                      </TableCell>
                    </TableRow>
                  ) : (
                    historico.map((solicitacao, index) => (
                      <TableRow key={index} className="border-b border-border">
                        <TableCell>{solicitacao.data}</TableCell>
                        <TableCell>{solicitacao.contaFilha}</TableCell>
                        <TableCell>{solicitacao.login}</TableCell>
                        <TableCell>{solicitacao.senha}</TableCell>
                        <TableCell>{solicitacao.motivo}</TableCell>
                        <TableCell>{solicitacao.descricao}</TableCell>
                        <TableCell>
                          <Badge 
                            className={
                              solicitacao.status === "RESOLVIDO" 
                                ? "bg-fastbank-green text-white" 
                                : "bg-fastbank-orange text-white"
                            }
                          >
                            {solicitacao.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}