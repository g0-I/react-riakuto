
type Unit = 'USD' | 'EUR' | 'JPY' | 'GBP';

type TCurrency = {
  unit: Unit;
  amount: number;
};

interface ICurrency{
  unit: Unit;
  amount: Unit;
}

const priceA: TCurrency = { unit: 'JPY', amount: 1000 };
const priceB: Icurrency = { unit: 'USD', ampunt: 10 };
