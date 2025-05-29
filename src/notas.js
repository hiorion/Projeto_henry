// Array de objetos com nome e nota dos alunos
const alunos = [
  { nome: "Ana", nota: 7.5 },
  { nome: "Bruno", nota: 5.0 },
  { nome: "Carla", nota: 8.0 },
  { nome: "Daniel", nota: 4.5 },
  { nome: "Eduarda", nota: 6.0 }
];

// Função para filtrar alunos com nota >= 6
const filtrarAprovados = (lista) => {
  return lista.filter(aluno => aluno.nota >= 6);
};

// Testando a função
const aprovados = filtrarAprovados(alunos);
console.log("Alunos aprovados:", aprovados);