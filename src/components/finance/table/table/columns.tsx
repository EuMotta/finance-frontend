import Link from 'next/link';
import React from 'react';
import { FaArrowDown, FaArrowUp, FaExchangeAlt } from 'react-icons/fa';

import OrderButton from '@/components/order-button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown, MoreHorizontal } from 'lucide-react';

import currencyConverter from '@/utils/currency-converter';
import formatDate from '@/utils/format-date';

import {
  TRANSACTION_CATEGORIES,
  TRANSACTION_STATUS,
  TRANSACTION_TYPE,
} from '@/constants/transaction_categories';

const usersColumns: ColumnDef<any>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: () => {
      return (
        <div className="flex items-center gap-1">
          <span>Nome</span> <OrderButton column="title" />
        </div>
      );
    },
    cell: ({ row }) => {
      const { category, title, subtitle } = row.original;

      const categoryData = TRANSACTION_CATEGORIES.find(
        (item) => item.value === category,
      );

      if (!categoryData) {
        return (
          <div className="flex items-center gap-2 text-gray-500">
            <span className="text-sm">Desconhecida</span>
          </div>
        );
      }

      return (
        <div className="flex items-center gap-2">
          <span
            className={`${categoryData.textColor} ${categoryData.bgColor} rounded-full p-2`}
          >
            <categoryData.icon className={``} />
          </span>
          <div className="">
            <span className="font-medium">{title}</span>
            <br />
            <span className="line-clamp-1 text-sm text-muted-foreground">
              {subtitle}
            </span>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: 'category',
    header: () => {
      return (
        <div className="flex items-center gap-1">
          <span>Categoria</span> <OrderButton column="category" />
        </div>
      );
    },
    cell: ({ row }) => {
      const { category } = row.original;

      const categoryData = TRANSACTION_CATEGORIES.find(
        (item) => item.value === category,
      );

      if (!categoryData) {
        return (
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">Desconhecida</span>
          </div>
        );
      }
      return (
        <div className="">
          <Badge
            className={`${categoryData.textColor} ${categoryData.bgColor}`}
          >
            {categoryData.label}
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: 'date',
    header: () => {
      return (
        <div className="flex items-center gap-1">
          <span>Data</span> <OrderButton column="date" />
        </div>
      );
    },
    cell: ({ row }) => {
      const { date } = row.original;
      return <>{formatDate(date)}</>;
    },
  },
  {
    accessorKey: 'amount',
    header: () => {
      return (
        <div className="flex items-center gap-1">
          <span>Valor</span> <OrderButton column="date" />
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = row.original.amount;
      const type = row.original.type;
      const typeData = TRANSACTION_TYPE.find((item) => item.value === type);
      return (
        <div className={`${typeData && typeData.textColor} font-medium`}>
          {typeData && typeData.value === 'Expense' && '-'}
          {currencyConverter(amount)}
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: () => <div className="">Status</div>,
    cell: ({ row }) => {
      const status = row.original.status;
      const statusData = TRANSACTION_STATUS.find(
        (item) => item.value === status,
      );

      if (!statusData) {
        return (
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">Desconhecida</span>
          </div>
        );
      }
      return (
        <div className="">
          <Badge className={`${statusData.textColor} ${statusData.bgColor}`}>
            {statusData.label}
          </Badge>
        </div>
      );
    },
  },
  {
    accessorKey: 'type',
    header: () => <div className="">Tipo</div>,
    cell: ({ row }) => {
      const type = row.original.type;
      const typeData = TRANSACTION_TYPE.find((item) => item.value === type);

      if (!typeData) {
        return (
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-sm">Desconhecida</span>
          </div>
        );
      }
      return (
        <div className="">
          <Badge className={`${typeData.textColor} ${typeData.bgColor}`}>
            {typeData.label}
          </Badge>
        </div>
      );
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <Link href={`/users/${row.original.email}`}>
              <DropdownMenuItem>Perfil</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default usersColumns;
