import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './button';

interface PaginationProps {
  totalCount: number;
  perPage: number;
  currentPage: number;
  multiple?: number;
}

export function Pagination({
  totalCount,
  perPage,
  currentPage,
  multiple = 10,
}: PaginationProps) {
  const totalPages = Math.ceil(totalCount / perPage);
  const hasPrevious = currentPage > 1;
  const hasNext = currentPage < totalPages;

  const getPageLink = (page: number) => `?page=${page}&per_page=${perPage}`;

  const renderNavButton = (
    condition: boolean,
    page: number,
    icon: JSX.Element,
    label: string,
  ) =>
    condition ? (
      <Link href={getPageLink(page)}>
        <Button variant="outline" aria-label={label}>
          {icon}
        </Button>
      </Link>
    ) : (
      <Button variant="outline" disabled aria-label={label}>
        {icon}
      </Button>
    );

  return (
    <div className="flex w-full items-center justify-between gap-4 py-6">
      <span className="text-sm text-muted-foreground">
        Página {currentPage} de {totalPages}
      </span>

      <div className="flex items-center gap-2">
        {renderNavButton(
          hasPrevious,
          currentPage - 1,
          <ArrowLeft size={16} />,
          'Página anterior',
        )}

        {Array.from({ length: totalPages }).map((_, i) => {
          const page = i + 1;
          return (
            <Link key={page} href={getPageLink(page)}>
              <Button
                variant={page === currentPage ? 'default' : 'outline'}
                aria-current={page === currentPage ? 'page' : undefined}
              >
                {page}
              </Button>
            </Link>
          );
        })}

        {renderNavButton(
          hasNext,
          currentPage + 1,
          <ArrowRight size={16} />,
          'Próxima página',
        )}
      </div>
    </div>
  );
}
