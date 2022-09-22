vetor = []

vetor[0] = "Matheus"
vetor[1] = "Victor"
vetor[2] = "Pereuira"
vetor[4] = "nada"

// Tamanho de um array
console.log(vetor[3])

// Array de arrays
matriz = []

matriz[0] = ["matheus", "victor", "pereira"]
matriz[1] = [1,2,3,4,5,6,7,8,9]

console.log(matriz.length)

alunos = ["matheus", "victor", "pereira", "zu"]

notas = [[5.6,7.2], [9.1,8.4], [5.8,4.6], [4.5,8.5]]

alunoSelecionado = 1

nomeDoAluno = alunos[alunoSelecionado]
primeiraNota = notas[alunoSelecionado][0]
segundaNota = notas[alunoSelecionado][1]

console.log("Nome:", nomeDoAluno)
console.log("A primeira nota do aluno foi: ",primeiraNota)
console.log("A segunda nota do aluno foi: ", segundaNota)
