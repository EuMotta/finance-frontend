import { TransactionsTable } from '@/components/finance/table';
import TransactionsFilter from '@/components/finance/table/filter';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Transactions = () => {
  return (
    <Card>
      <CardHeader className="justify-between">
        <CardTitle>Transações recentes</CardTitle>
        <TransactionsFilter />
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <TransactionsTable />
        </div>
      </CardContent>
    </Card>
  );
};

export default Transactions;
