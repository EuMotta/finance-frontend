import Image from 'next/image';
import React from 'react';

import { Navbar } from '@/components/navbar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { routes } from '@/settings/routes';
import CTASection from '@/templates/home/cta';
import FeaturesSection from '@/templates/home/features';
import HowItWorksSection from '@/templates/home/how-it-works';
import PricingSection from '@/templates/home/pricing';
import Testimonials from '@/templates/home/testimonials';
const Page = () => {
  return (
    <div className="bg-gradient">
      <div>
        <header className="sticky top-0 z-50 border-b bg-background shadow">
          <Navbar />
        </header>

        <main>
          <section className="container mx-auto flex flex-col-reverse items-center gap-8 py-12 lg:flex-row">
            <div className="w-full space-y-6 lg:w-1/2">
              <h1 className="text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl">
                Assuma o Controle do Seu Futuro Financeiro
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                O Fintrack torna a gestão das finanças pessoais simples,
                intuitiva e poderosa. Acompanhe seus gastos, defina metas e veja
                seu patrimônio crescer.
              </p>
              <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                <Button href={routes.login}>Comece Gratuitamente</Button>
              </div>
              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-3">
                  <Avatar className="h-10 w-10 border-2 border-white">
                    <AvatarImage
                      src="https://i.pravatar.cc/150?img=3"
                      alt="Usuário"
                    />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10 border-2 border-white">
                    <AvatarImage
                      src="https://i.pravatar.cc/150?img=4"
                      alt="Usuário"
                    />
                    <AvatarFallback>CD</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-10 w-10 border-2 border-white">
                    <AvatarImage
                      src="https://i.pravatar.cc/150?img=8"
                      alt="Usuário"
                    />
                    <AvatarFallback>EF</AvatarFallback>
                  </Avatar>
                  <div className="flex h-10 w-16 items-center justify-center text-xs font-medium">
                    +300
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Confiado por mais de <span className="font-bold">10.000</span>{' '}
                  usuários no mundo todo
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative transform overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <Image
                  src="/landing/finance.jpg"
                  width={500}
                  height={500}
                  alt="Interface do painel"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </section>
          <div className="bg-accent">
            <FeaturesSection />
          </div>

          <HowItWorksSection />

          <PricingSection />

          <Testimonials />

          <CTASection />

          <section className="py-20"></section>
        </main>
      </div>
    </div>
  );
};
export default Page;
