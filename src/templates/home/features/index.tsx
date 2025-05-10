import {
  Section,
  SectionHeader,
  SectionGoal,
  SectionTitle,
  SectionDescription,
  SectionContent,
} from '@/components/common/section';
import { LucideIcon } from 'lucide-react';

import { features } from '@/constants';

type Feature = (typeof features)[number] & {
  icon: LucideIcon;
};

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <div className="group rounded-2xl border border-primary/50 bg-card p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
        <Icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-foreground">
        {feature.title}
      </h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <Section id="features" className="container mx-auto">
      <SectionHeader>
        <SectionGoal>Funcionalidades</SectionGoal>
        <SectionTitle>
          Tudo que você precisa para controlar suas finanças
        </SectionTitle>
        <SectionDescription>
          Nossa suíte completa de ferramentas ajuda você a acompanhar, planejar
          e fazer seu patrimônio crescer com facilidade.
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} feature={feature} />
        ))}
      </SectionContent>
    </Section>
  );
}

export default FeaturesSection;
