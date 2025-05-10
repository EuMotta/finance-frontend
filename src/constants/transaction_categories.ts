/* eslint-disable prettier/prettier */
import {
  FiShoppingCart,
  FiHome,
  FiWifi,
  FiBriefcase,
  FiCreditCard,
  FiHeart,
  FiBook,
  FiDollarSign,
  FiGift,
  FiCoffee,
  FiGlobe,
  FiBox,
  FiTool,
  FiSmartphone,
  FiFilm,
  FiDroplet,
  FiTrendingUp,
} from 'react-icons/fi';
import {
  MdFastfood,
  MdSchool,
  MdDirectionsCar,
  MdLocalHospital,
  MdHourglassEmpty,
  MdCheckCircle,
  MdCancel,
  MdArrowDownward,
  MdSwapHoriz,
  MdArrowUpward,
} from 'react-icons/md';

export const TRANSACTION_CATEGORIES = [
  { label: 'Alimentação',    value: 'FOOD',          icon: MdFastfood,       textColor: 'text-green-700',    bgColor: 'bg-green-100'     },
  { label: 'Moradia',        value: 'HOUSING',       icon: FiHome,           textColor: 'text-blue-700',     bgColor: 'bg-blue-100'      },
  { label: 'Transporte',     value: 'TRANSPORT',     icon: MdDirectionsCar,  textColor: 'text-yellow-700',   bgColor: 'bg-yellow-100'    },
  { label: 'Lazer',          value: 'ENTERTAINMENT', icon: FiFilm,           textColor: 'text-pink-700',     bgColor: 'bg-pink-100'      },
  { label: 'Saúde',          value: 'HEALTH',        icon: MdLocalHospital,  textColor: 'text-red-700',      bgColor: 'bg-red-100'       },
  { label: 'Educação',       value: 'EDUCATION',     icon: MdSchool,         textColor: 'text-indigo-700',   bgColor: 'bg-indigo-100'    },
  { label: 'Compras',        value: 'SHOPPING',      icon: FiShoppingCart,   textColor: 'text-purple-700',   bgColor: 'bg-purple-100'    },
  { label: 'Assinaturas',    value: 'SUBSCRIPTIONS', icon: FiWifi,           textColor: 'text-teal-700',     bgColor: 'bg-teal-100'      },
  { label: 'Trabalho',       value: 'WORK',          icon: FiBriefcase,      textColor: 'text-gray-800',     bgColor: 'bg-gray-200'      },
  { label: 'Crédito',        value: 'CREDIT',        icon: FiCreditCard,     textColor: 'text-blue-800',     bgColor: 'bg-blue-200'      },
  { label: 'Doações',        value: 'DONATIONS',     icon: FiHeart,          textColor: 'text-rose-700',     bgColor: 'bg-rose-100'      },
  { label: 'Livros',         value: 'BOOKS',         icon: FiBook,           textColor: 'text-orange-700',   bgColor: 'bg-orange-100'    },
  { label: 'Salário',        value: 'SALARY',        icon: FiDollarSign,     textColor: 'text-green-800',    bgColor: 'bg-green-200'     },
  { label: 'Presentes',      value: 'GIFTS',         icon: FiGift,           textColor: 'text-violet-700',   bgColor: 'bg-violet-100'    },
  { label: 'Café',           value: 'COFFEE',        icon: FiCoffee,         textColor: 'text-amber-700',    bgColor: 'bg-amber-100'     },
  { label: 'Viagens',        value: 'TRAVEL',        icon: FiGlobe,          textColor: 'text-cyan-700',     bgColor: 'bg-cyan-100'      },
  { label: 'Entregas',       value: 'DELIVERY',      icon: FiBox,            textColor: 'text-gray-700',     bgColor: 'bg-gray-100'      },
  { label: 'Manutenção',     value: 'MAINTENANCE',   icon: FiTool,           textColor: 'text-emerald-700',  bgColor: 'bg-emerald-100'   },
  { label: 'Celular',        value: 'MOBILE',        icon: FiSmartphone,     textColor: 'text-sky-700',      bgColor: 'bg-sky-100'       },
  { label: 'Água',           value: 'WATER',         icon: FiDroplet,        textColor: 'text-indigo-600',   bgColor: 'bg-indigo-100'    },
  { label: 'Investimento',   value: 'INVESTMENT',   icon: FiTrendingUp,      textColor: 'text-purple-700',   bgColor: 'bg-purple-100'    },
  { label: 'Freelance',      value: 'FREELANCE',    icon: FiBriefcase,       textColor: 'text-orange-700',   bgColor: 'bg-orange-100'    },
];

export const TRANSACTION_STATUS = [
  {
    label: 'Pendente',      value: 'Pending',       icon: MdHourglassEmpty,    textColor: 'text-yellow-700',      bgColor: 'bg-yellow-100',
  },
  {
    label: 'Completa',      value: 'Completed',     icon: MdCheckCircle,       textColor: 'text-green-700',       bgColor: 'bg-green-100',
  },
  {
    label: 'Revertida',     value: 'Failed',        icon: MdCancel,            textColor: 'text-red-700',         bgColor: 'bg-red-100',
  },
];

export const TRANSACTION_TYPE = [
  {
    label: 'Entrada',
    value: 'Income',
    icon: MdArrowDownward,
    textColor: 'text-green-700',
    bgColor: 'bg-green-100',
  },
  {
    label: 'Transferência',
    value: 'Transfer',
    icon: MdSwapHoriz,
    textColor: 'text-blue-700',
    bgColor: 'bg-blue-100',
  },
  {
    label: 'Saída',
    value: 'Expense',
    icon: MdArrowUpward,
    textColor: 'text-red-700',
    bgColor: 'bg-red-100',
  },
];
