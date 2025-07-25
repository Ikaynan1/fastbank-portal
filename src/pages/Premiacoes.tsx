import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Gift, Star, Award } from "lucide-react";

export default function Premiacoes() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Premiações</h1>
            <p className="text-muted-foreground">Sistema de recompensas e benefícios</p>
          </div>
        </div>

        {/* Pontuação Atual */}
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Sua Pontuação</CardTitle>
            <Trophy className="h-6 w-6 text-fastbank-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-fastbank-orange">1.250 pontos</div>
            <p className="text-sm text-muted-foreground mt-2">Continue usando o sistema para ganhar mais pontos!</p>
          </CardContent>
        </Card>

        {/* Níveis de Usuário */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Níveis de Usuário</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-fastbank-orange" />
                <div>
                  <div className="font-semibold">Bronze</div>
                  <div className="text-sm text-muted-foreground">0 - 500 pontos</div>
                </div>
              </div>
              <Badge className="bg-muted-foreground text-white">Concluído</Badge>
            </div>

            <div className="flex items-center justify-between p-4 bg-fastbank-orange/10 border-2 border-fastbank-orange rounded-lg">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-fastbank-orange" />
                <div>
                  <div className="font-semibold">Prata</div>
                  <div className="text-sm text-muted-foreground">501 - 2.000 pontos</div>
                </div>
              </div>
              <Badge className="bg-fastbank-orange text-white">Atual</Badge>
            </div>

            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-muted-foreground" />
                <div>
                  <div className="font-semibold">Ouro</div>
                  <div className="text-sm text-muted-foreground">2.001 - 5.000 pontos</div>
                </div>
              </div>
              <Badge variant="outline">Bloqueado</Badge>
            </div>

            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div className="flex items-center gap-3">
                <Star className="w-6 h-6 text-muted-foreground" />
                <div>
                  <div className="font-semibold">Diamante</div>
                  <div className="text-sm text-muted-foreground">5.001+ pontos</div>
                </div>
              </div>
              <Badge variant="outline">Bloqueado</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Prêmios Disponíveis */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Prêmios Disponíveis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="bg-muted">
                <CardContent className="p-4 text-center">
                  <Gift className="w-8 h-8 text-fastbank-green mx-auto mb-2" />
                  <div className="font-semibold">Bônus R$ 10</div>
                  <div className="text-sm text-muted-foreground mb-2">500 pontos</div>
                  <Button size="sm" className="bg-fastbank-green hover:bg-fastbank-green/90">
                    Resgatar
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-muted">
                <CardContent className="p-4 text-center">
                  <Gift className="w-8 h-8 text-fastbank-blue mx-auto mb-2" />
                  <div className="font-semibold">Bônus R$ 25</div>
                  <div className="text-sm text-muted-foreground mb-2">1.000 pontos</div>
                  <Button size="sm" className="bg-fastbank-blue hover:bg-fastbank-blue/90">
                    Resgatar
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-muted opacity-50">
                <CardContent className="p-4 text-center">
                  <Gift className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <div className="font-semibold">Bônus R$ 50</div>
                  <div className="text-sm text-muted-foreground mb-2">2.000 pontos</div>
                  <Button size="sm" variant="outline" disabled>
                    Bloqueado
                  </Button>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Como Ganhar Pontos */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle>Como Ganhar Pontos</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-fastbank-blue mt-0.5" />
              <div>
                <div className="font-semibold">Criar conta filha</div>
                <div className="text-sm text-muted-foreground">+50 pontos por conta criada</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-fastbank-blue mt-0.5" />
              <div>
                <div className="font-semibold">Transação PIX</div>
                <div className="text-sm text-muted-foreground">+10 pontos por transação</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-fastbank-blue mt-0.5" />
              <div>
                <div className="font-semibold">Login diário</div>
                <div className="text-sm text-muted-foreground">+5 pontos por dia</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-fastbank-blue mt-0.5" />
              <div>
                <div className="font-semibold">Referência de usuário</div>
                <div className="text-sm text-muted-foreground">+100 pontos por indicação</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}