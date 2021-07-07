import './Expenses.css';
import { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesChart from './ExpensesChart';
// import { ProxyTypeProxyArray } from 'immer/dist/internal';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    let expenseList = [];

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    filteredExpenses.forEach(expenseItem => {
        expenseList.push(
            <ExpenseItem
                key={expenseItem.id}
                date={expenseItem.date}
                title={expenseItem.title}
                amount={expenseItem.amount}/>
        );
    });

    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
            <ExpensesChart expenses={filteredExpenses}/>
            {filteredExpenses.length == 0 && <p>No Expenses Found</p>}
            {filteredExpenses.length > 0 && expenseList}
        </Card>
    );
}

export default Expenses;