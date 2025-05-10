'use client';

import * as React from 'react';
import { FaRobot } from 'react-icons/fa';

import { NavMain } from '@/components/sidebar/nav-main';
import { NavProjects } from '@/components/sidebar/nav-projects';
import { NavUser } from '@/components/sidebar/nav-user';
import { TeamSwitcher } from '@/components/sidebar/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import {
  BookOpen,
  Bot,
  Frame,
  Map,
  PieChart,
  Share2,
  SquareTerminal,
} from 'lucide-react';

import { ThemeToggle } from '../ui/theme-button';

const data = {
  teams: [
    {
      name: 'PROTEUS.AI',
      logo: FaRobot,
      plan: 'Free',
    },
  ],
  navMain: [
    {
      title: 'Prompts',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Criar',
          url: '/prompts/criar',
        },
        {
          title: 'Todos',
          url: '/prompts/',
        },
        {
          title: 'Meus Prompts',
          url: '/prompts?me=true',
        },
      ],
    },
    {
      title: 'Modelos',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Criar',
          url: '/gpts/criar',
        },
        {
          title: 'Todos',
          url: '/gpts',
        },
        {
          title: 'Meus GPTs',
          url: '/gpts?me=true',
        },
      ],
    },
    {
      title: 'Chat',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Conversas',
          url: '/chat',
        },
      ],
    },
    {
      title: 'Comunidade',
      url: '#',
      icon: Share2,
      items: [
        {
          title: 'Geral',
          url: '#',
        },
        {
          title: 'GPTs',
          url: '#',
        },
        {
          title: 'Prompts',
          url: '#',
        },
        {
          title: 'Dicas',
          url: '#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <ThemeToggle />
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
