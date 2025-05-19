import { AppSidebar } from '@/components/sidebar/app-sidebar';

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import Footer from '@/templates/footer';
import Header from '@/templates/header';

import { ChildrenProps } from '../../../@Types/global';
export default function GPTSLayout({ children }: ChildrenProps) {
  return (
    <main>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <Header />
          <div className="h-[92vh] overflow-y-auto p-3">
            <main className="">{children}</main>
            <Footer />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
