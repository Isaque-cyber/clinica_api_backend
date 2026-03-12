class Funcionarios{
    nome: string;
    salario: number;
     constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

calcularSalario(){
    return this.salario
}

}

class Programador extends Funcionarios{
    salarioProgramador
}
