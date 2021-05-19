const Modal = {
    open() {
        //  Abrir modal
        // Adicionar a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close() {
        //  fechar o modal 
        // remover a class active do modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')

    }

} 

const transactions = [
    {
        id:1,
        description: 'Luz',
        amount:-500,
        date:'28/04/2021'
    },

    {
        id:2,
        description: 'Criação de website',
        amount: 500000,
        date:'28/04/2021'
    },

    {
        id:3,
        description: 'Internet ',
        amount:-20000,
        date:'28/04/2021'
    }
]

const Transaction = {
    incomes (){
        // somar as entradas
    },
    expenses () {
        // somar as saídas
    },
    total () {
        // entradas - saídas
    }
}

// Substituir os dados do HTML com os dados do JS

const DOM = {
    addTransaction (transaction, index){
        const tr = document.createElement('tr')
        tr.innerHTML=DOM.innerHTMLTransaction(transaction)

        console.log(tr.innerHTML)

    },
    innerHTMLTransaction(transaction){

        const html = `
        
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
            <img src="./assets/minus.svg" alt="Remover transação">
            </td>
        `
        return html

    }
}

DOM.addTransaction(transactions[0])

