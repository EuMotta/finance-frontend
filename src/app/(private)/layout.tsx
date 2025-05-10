import { AppSidebar } from '@/components/sidebar/app-sidebar';
import DynamicBreadcrumb from '@/components/sidebar/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { ThemeToggle } from '@/components/ui/theme-button';

import { ChildrenProps } from '../../../@Types/global';
export default function GPTSLayout({ children }: ChildrenProps) {
  return (
    <main>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex w-full items-center justify-between gap-2 px-4">
              <div className="flex items-center">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <DynamicBreadcrumb />
              </div>
              <ThemeToggle />
            </div>
          </header>
          <main className="h-[88vh] overflow-y-auto p-3">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
