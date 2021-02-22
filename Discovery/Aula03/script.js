 const Modal = {
    open() {
        // Abreir modal 
        // Adicionar a class active ao modal
        document
        .querySelector('.modal-overlay')
        .classList
        .add('active') // classe o ativa modal
    },
    close(){
        // fechar o modal
        // remover a class active do modal
        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active')
    }
        // fazer esse desafio fazer uma função toogle para ativar e remover
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '11/02/21'
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '11/02/21'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20012,
        date: '11/02/21'
    },    
    {
        id: 4,
        description: 'App',
        amount: 200000,
        date: '11/02/21'
    },    
]

// eu preciso somar as entradas
// depois eu preciso somar as saídas
// assim, eu terei o total

    const Transaction = {
        all: transactions,
        add(transaction){
            Transaction.all.push(transaction)

            console.log(Transaction.all)
        },
        icomes() {
            let income = 0;
        // pegar todas as trasaçõe
            Transactions.all.forEach(transaction => {
                // se for maior que zero
                if(transaction.amount > 0 )
                {
                    // somar a uma variavel e retornar a variavel
                    income += transaction.amount;
                }

            })
            return income;
            // somar as entradas
        },
        expenses() {
            let expense = 0;
        // pegar todas as trasaçõe
            transactions.all.forEach(transaction => {
                // se for maior que zero
                if(transaction.amount < 0 )
                {
                    // somar a uma variavel e retornar a variavel
                    expense += transaction.amount;
                }

            })
            return expense;
            // somar as saídas
        },
        total() {

            return Transaction.incomes() + Transaction.expenses();
            }
            // entradas - saídas
}

    

// Substituir os dados do HTML com os dados do JS

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction, index)
        tr.dataset.index = index

        DOM.transactionsContainer.appendChild(tr)
    },

    innerHTMLTransaction(transaction, index) {
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img onclick="Transaction.remove(${index})" src="./assets/minus.svg" alt="Remover transação">
        </td>
        `

        return html
    },

    updateBalance() {
        document
               .getElementById('icomeDisplay')
               .innerHTML = Utils.formatCurrency(Transaction.incomes())
    
        document
               .getElementById('expenseDisplay')
               .innerHTML = Utils.formatCurrency(Transaction.expenses())
        document
               .getElementById('totalDisplay')
               .innerHTML = Utils.formatCurrency(Transaction.total())
    },


}


const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}


//const App:

