import Image from 'next/image';

import {
  Section,
  SectionHeader,
  SectionGoal,
  SectionTitle,
  SectionDescription,
  SectionContent,
} from '@/components/common/section';

import { steps } from '@/constants';

type Step = (typeof steps)[0];

interface StepCardProps {
  step: Step;
}

const StepCard = ({ step }: StepCardProps) => (
  <div className="flex-1 rounded-2xl border border-primary/50 bg-card p-8 text-center shadow-md">
    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
      {step.number}
    </div>
    <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
    <p className="mb-6 text-muted-foreground">{step.description}</p>
    <Image
      width={500}
      height={500}
      src={step.image}
      alt={step.altText}
      className="mx-auto h-48"
    />
  </div>
);

function HowItWorksSection() {
  return (
    <Section className="container mx-auto rounded-3xl py-20">
      <SectionHeader>
        <SectionGoal>How It Works</SectionGoal>
        <SectionTitle>
          Start managing your finances in 3 simple steps
        </SectionTitle>
        <SectionDescription>
          Getting started with FinFlow is quick and easy — youll be up and
          running in minutes.
        </SectionDescription>
      </SectionHeader>
      <SectionContent className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <StepCard key={index} step={step} />
        ))}
      </SectionContent>
    </Section>
  );
}

export default HowItWorksSection;
