const allStudents = [
  "Иванов",
  "Петров",
  "Сидоров",
  "Кузнецов",
  "Смирнов",
  "Попов",
  "Соколов",
];
const failedStudents = ["Сидоров", "Смирнов", "Попов"];

let passedStudents = [];

const filter = () => {
    return passedStudents = allStudents.filter(i => failedStudents.indexOf(i) < 0)
}

console.log(filter());
