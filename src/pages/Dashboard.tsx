import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, DollarSign, TrendingUp, TrendingDown, CreditCard, Users, RefreshCw } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Dashboard() {
  const copyPixKey = () => {
    navigator.clipboard.writeText("0fb024dc-84b5-4388-bda1-f6e8f30d5a99");
    toast({
      title: "Chave PIX copiada!",
      description: "A chave PIX foi copiada para a área de transferência.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Painel de controle Fastbank</p>
          </div>
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Atualizar
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">SALDO</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-fastbank-blue">R$ 32,40</div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">TOTAL DEPOSITADO</CardTitle>
              <TrendingUp className="h-4 w-4 text-fastbank-green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-fastbank-green">R$ 825,00</div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">TOTAL SACADO</CardTitle>
              <TrendingDown className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">R$ 696,16</div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">PIX ATIVOS</CardTitle>
              <CreditCard className="h-4 w-4 text-fastbank-blue" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-fastbank-blue">12</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* PIX Key Card */}
          <Card className="lg:col-span-2 bg-card border-border">
            <CardHeader>
              <CardTitle>CHAVE PIX PARA DEPÓSITO NA CONTA</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Button onClick={copyPixKey} className="bg-fastbank-blue hover:bg-fastbank-blue/90">
                  CHAVE ALEATÓRIA
                </Button>
                <div className="flex-1 flex items-center gap-2">
                  <code className="bg-muted px-3 py-2 rounded text-sm flex-1">
                    0fb024dc-84b5-4388-bda1-f6e8f30d5a99
                  </code>
                  <Button variant="outline" size="sm" onClick={copyPixKey}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contas Filhas */}
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CONTAS FILHAS</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-fastbank-blue">12</div>
            </CardContent>
          </Card>
        </div>

        {/* Informações do Painel */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>INFORMAÇÕES DO PAINEL</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <Badge className="bg-fastbank-orange text-white">ABERTURA DE CONTA</Badge>
              <span className="text-sm">Custo de R$ 1,50 debitado da conta mãe.</span>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="bg-fastbank-orange text-white">SALDO RECEBIDO DE CONTA FILHA</Badge>
              <span className="text-sm">Será aplicada sua taxa e o saldo restante será transferido para Conta Mãe automaticamente.</span>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="bg-fastbank-orange text-white">DEPÓSITO NA CONTA FILHA</Badge>
              <span className="text-sm">Transferir de sua conta mãe para a conta do cliente através do botão $ na tela "CONTAS FILHAS".</span>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="bg-fastbank-orange text-white">SAQUE DA CONTA MÃE</Badge>
              <span className="text-sm">Aceitamos apenas chave pix de sua titularidade para o saque.</span>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="bg-fastbank-orange text-white">CONTA FILHA FUNCIONAMENTO</Badge>
              <span className="text-sm">Após cadastrada, a conta filha já ficará com a Chave Pix ativa sem desativar.</span>
            </div>
          </CardContent>
        </Card>

        {/* Regras */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>REGRAS</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <Badge className="bg-fastbank-orange text-white">DEPÓSITO DE CONTA DE TERCEIROS</Badge>
              <span className="text-sm">Tanto na Conta Mãe quanto em alguma Conta filha, a conta será bloqueada e terá que pagar uma multa.</span>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="bg-fastbank-orange text-white">USO DE ROBÔS E/OU COMPARTILHAMENTO DE ACESSO</Badge>
              <span className="text-sm">Você será bloqueado.</span>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="bg-fastbank-orange text-white">PRINTS E/OU GRAVAÇÕES DO PAINEL</Badge>
              <span className="text-sm">Você será bloqueado.</span>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="bg-fastbank-orange text-white">ATIVIDADE SUSPEITA</Badge>
              <span className="text-sm">Você será bloqueado.</span>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="bg-fastbank-orange text-white">PAGAR QR CODE QUE NÃO SEJA DE CASA DE APOSTAS</Badge>
              <span className="text-sm">Você será bloqueado.</span>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="bg-fastbank-orange text-white">PAGAR QR CODE ACIMA DE R$1100,00</Badge>
              <span className="text-sm">Você será bloqueado.</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}