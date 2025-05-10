export const errorList = [
  { statusCode: 400, message: 'Bad Request' },
  { statusCode: 401, message: 'Unauthorized' },
  { statusCode: 403, message: 'Forbidden' },
  { statusCode: 404, message: 'Not Found' },
  { statusCode: 500, message: 'Internal Server Error' },
];

import {
  Wallet,
  BarChart2,
  Target,
  CreditCard,
  LineChart,
  ShieldCheck,
} from 'lucide-react';

export const features = [
  {
    title: 'Controle de Gastos',
    description:
      'Categorize e visualize seus gastos automaticamente para identificar onde economizar.',
    icon: Wallet,
  },
  {
    title: 'Análises Financeiras',
    description:
      'Relatórios e visualizações que ajudam você a entender sua saúde financeira em segundos.',
    icon: BarChart2,
  },
  {
    title: 'Definição de Metas',
    description:
      'Crie metas financeiras e acompanhe seu progresso com marcos e lembretes personalizados.',
    icon: Target,
  },
  {
    title: 'Gerenciamento de Contas',
    description:
      'Nunca perca um pagamento com rastreamento automático de contas e lembretes.',
    icon: CreditCard,
  },
  {
    title: 'Acompanhamento de Investimentos',
    description:
      'Monitore seus investimentos e desempenho da carteira com atualizações em tempo real.',
    icon: LineChart,
  },
  {
    title: 'Segurança Bancária',
    description:
      'Seus dados financeiros protegidos com criptografia e medidas de segurança líderes do setor.',
    icon: ShieldCheck,
  },
];
export const steps = [
  {
    number: 1,
    title: 'Crie Sua Conta',
    description:
      'Cadastre-se em menos de 2 minutos com apenas seu e-mail e uma senha.',
    image:
      'https://images.pexels.com/photos/6779716/pexels-photo-6779716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    altText: 'Criar conta',
  },
  {
    number: 2,
    title: 'Conecte Suas Contas',
    description:
      'Conecte com segurança suas contas bancárias, cartões de crédito e investimentos.',
    image:
      'https://images.pexels.com/photos/6779716/pexels-photo-6779716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    altText: 'Conectar contas',
  },
  {
    number: 3,
    title: 'Acompanhe e Otimize',
    description:
      'Veja a imagem completa das suas finanças e receba insights personalizados.',
    image:
      'https://images.pexels.com/photos/6779716/pexels-photo-6779716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    altText: 'Acompanhar finanças',
  },
];
