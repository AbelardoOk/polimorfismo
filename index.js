class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    imprimir() {
        return `Pessoa normal \nNome: ${this.nome}`;
    }
}

class PessoaFisica extends Pessoa {
    constructor(nome, cpf) {
        super(nome);
        this.cpf = cpf;
    }

    imprimirInfos() {
        return `Pessoa Física \nNome: ${this.nome} \nCpf: ${this.cpf} \n `;
    }
}

class PessoaJuridica extends Pessoa {
    constructor(nome, cnpj) {
        super(nome);
        this.cnpj = cnpj;
    }

    imprimirInfos() {
        return `Pessoa Juridica \nNome: ${this.nome} \nCnpj: ${this.cnpj} \n `;
    }
}

const erivelton = new PessoaFisica("Erivelton", "123.456.789-01");
console.log(erivelton.imprimirInfos());

const ifms = new PessoaFisica("Instituto Federal", "10.673.078/0 002-01");
console.log(ifms.imprimirInfos());
