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

    for (let i = 0; i < failedStudents.length; i++) {
        for (let j = 0; j < failedStudents.length; j++) {
            if (allStudents[i] !== failedStudents[j]) {
                passedStudents.push(allStudents[i])
            }
        }

    }
            return passedStudents;
    

}

console.log(filter());
