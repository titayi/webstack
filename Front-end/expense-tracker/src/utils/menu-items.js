import { expenses, home, transactions, trend } from "./icons";

export const menuItems = [
    {
        id: 1,
        title: 'Home',
        icon: home,
        link: '/home'
    },
    {
        id: 2,
        title: "Transactions",
        icon: transactions,
        link: "/home",
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/home",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/home",
    },
]