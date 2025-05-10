import {
  Section,
  SectionHeader,
  SectionGoal,
  SectionTitle,
  SectionDescription,
  SectionContent,
} from '@/components/common/section';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

type PricingFeature = {
  label: string;
  available: boolean;
};

export type PricingCardProps = {
  title: string;
  description: string;
  price: string;
  isPopular?: boolean;
  features: PricingFeature[];
  buttonText: string;
  highlight?: boolean;
};

function PricingCard({
  title,
  description,
  price,
  isPopular,
  features,
  buttonText,
  highlight,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-2xl border bg-card p-8 shadow-lg transition-all duration-300 hover:shadow-xl',
        highlight ? '-translate-y-4 border-2 border-primary shadow-xl' : '',
      )}
    >
      {isPopular && (
        <div className="bg-primary-600 absolute right-8 top-0 rounded-b-lg px-4 py-1 text-sm font-medium text-white">
          Mais Popular
        </div>
      )}

      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="mb-6 text-gray-600">{description}</p>
      <div className="mb-6 text-4xl font-bold">
        {price}
        <span className="text-lg font-normal text-muted-foreground">/mês</span>
      </div>

      <ul className="mb-8 flex-grow space-y-4">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className={cn(
              'flex items-start',
              !feature.available && 'text-muted-foreground',
            )}
          >
            {feature.available ? (
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
            ) : (
              <XCircle className="mr-2 h-5 w-5 text-muted-foreground" />
            )}
            <span>{feature.label}</span>
          </li>
        ))}
      </ul>

      <Button variant={highlight ? 'default' : 'secondary'}>
        {buttonText}
      </Button>
    </div>
  );
}

const plans = [
  {
    title: 'Gratuito',
    description: 'Perfeito para começar',
    price: 'R$0',
    buttonText: 'Começar Agora',
    features: [
      { label: 'Até 2 contas bancárias', available: true },
      { label: 'Rastreamento básico de despesas', available: true },
      { label: 'Definição de orçamento mensal', available: true },
      { label: 'Rastreamento de investimentos', available: false },
      { label: 'Insights financeiros', available: false },
    ],
  },
  {
    title: 'Premium',
    description: 'Para finanças pessoais avançadas',
    price: 'R$9,99',
    buttonText: 'Iniciar Teste Grátis',
    isPopular: true,
    highlight: true,
    features: [
      { label: 'Contas bancárias ilimitadas', available: true },
      { label: 'Rastreamento avançado de despesas', available: true },
      { label: 'Categorias de orçamento personalizadas', available: true },
      { label: 'Rastreamento de investimentos', available: true },
      { label: 'Insights personalizados', available: true },
    ],
  },
  {
    title: 'Família',
    description: 'Para finanças compartilhadas',
    price: 'R$19,99',
    buttonText: 'Iniciar Teste Grátis',
    features: [
      { label: 'Tudo do plano Premium', available: true },
      { label: 'Até 5 contas de usuário', available: true },
      { label: 'Orçamentos e metas compartilhadas', available: true },
      { label: 'Divisão de contas', available: true },
      { label: 'Suporte prioritário', available: true },
    ],
  },
];

const PricingSection = () => {
  return (
    <Section id="pricing" className="container mx-auto py-20">
      <SectionHeader>
        <SectionGoal>Preços</SectionGoal>
        <SectionTitle>Escolha o plano ideal para você</SectionTitle>
        <SectionDescription>
          Todos os planos incluem 14 dias grátis. Sem necessidade de cartão de
          crédito.
        </SectionDescription>
      </SectionHeader>

      <SectionContent className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, idx) => (
          <PricingCard key={idx} {...plan} />
        ))}
      </SectionContent>
    </Section>
  );
};
export default PricingSection;
