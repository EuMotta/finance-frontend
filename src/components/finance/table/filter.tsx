'use client';

import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const TransactionsFilter = () => {
  const searchParams = useSearchParams();

  const setSearchParams = (params: URLSearchParams) => {
    const currentParams = new URLSearchParams(window.location.search);
    params.forEach((value, key) => currentParams.set(key, value));
    window.history.replaceState(null, '', '?' + currentParams.toString());
  };

  const [search, setSearch] = useState(searchParams.get('user_name') || '');
  const [status, setStatus] = useState(searchParams.get('status') || '');
  const [type, setType] = useState(searchParams.get('type') || '');

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set('search', search);
    } else {
      params.delete('search');
    }

    if (status && status !== 'all') {
      params.set('status', status);
    } else {
      params.delete('status');
    }

    if (type && type !== 'all') {
      params.set('type', type);
    } else {
      params.delete('type');
    }

    window.history.replaceState(null, '', `?${params.toString()}`);

    setSearchParams(params);
  };

  const handleClear = () => {
    const params = new URLSearchParams(window.location.search);
    params.delete('search');
    params.delete('status');
    params.delete('type');

    setSearch('');
    setStatus('');
    setType('');

    window.history.replaceState(null, '', `?${params.toString()}`);
  };

  return (
    <div className="p-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex space-x-5">
          <div className="w-full">
            <Input
              placeholder="Buscar pelo Título..."
              className="max-w-xs"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="w-full">
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione um status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="Pending">Pendente</SelectItem>
                <SelectItem value="Completed">Completo</SelectItem>
                <SelectItem value="Cancelled">Cancelado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full">
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Selecione um status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="Income">Entrou</SelectItem>
                <SelectItem value="Expense">Saiu</SelectItem>
                <SelectItem value="Transfer">Transferiu</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" onClick={handleSearch}>
            <FaSearch className="mr-2" />
            Buscar
          </Button>

          <Button variant="outline" size="sm" onClick={handleClear}>
            <FaTimes className="mr-2" />
            Limpar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransactionsFilter;
