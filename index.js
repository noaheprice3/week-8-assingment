

// HERE IS A CLASS FOR A STUDENT

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `${this.name} is ${this.age}.`; 
    }
}

//  HERE IS A CLASS FOR A CLASSROOM, IF A STUDENT NAME IS GIVEN IT WILL PUSH THE GIVEN NAME TO AN ARRAY

class Classroom {
    constructor(name) {
        this.name = name;
        this.students = [];
    }

    addStudent(student) {
        if(student instanceof Student) {
            this.students.push(student); 
        } else {
            throw new Error( `Can only add student. Argument is not a student; ${student} `);
        }
    } 

    describe() {
        return `${this.name} has ${this.students.length} students`
    }
}

// HERE IS A CLASS DISPLAYING A MENU

class Menu {
    constructor() {
        this.classroom = [];
        this.selectedClassroom = null;
    }

//  HERE IS THE CODE FOR MY MENU OPTIONS 
 
    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createClassroom();
                    break;
                case '2':
                    this.viewClassroom(); 
                    break;
                case '3':
                    this.deleteClassroom();
                    break;
                case '4': 
                    this.displayClassrooms();
                    break;
                default:
                    selection = 0;
            };
            selection = this.showMainMenuOptions();
        }

        alert('See You Next Time!');
    }

// HERE IS THE MENU PROMPT THAT WILL RETURN WHEN YOU LAUNCH THE SERVER

    showMainMenuOptions() {
        return prompt(`
        0) exit
        1) create new classroom
        2) view classroom
        3) delete classroom
        4) display all classrooms
        `);
    }

// HERE IS THE MENU THAT WILL DISPLAY WHEN YOU SELECT CLASSROOM DISPLAY 

    showStudentMenuOptions(studentInfo) {
        return prompt(`
        0) back
        1) create student
        2) delete student
        -----------------
        ${studentInfo}
        `);
    }

// HERE IS CODE TO DISPLAY THE CLASSROOM/CLASSROOMS AND THE NAMES GIVEN TO THEM

    displayClassrooms() {
        let classroomString = '';
        for (let i = 0; i < this.classroom.length; i++) {
            classroomString += i + ') ' + this.classroom[i].name + '\n'
        }
        alert(classroomString);
    }

// HERE IS THE CODE TO CREATE A NEW CLASSROOM

    createClassroom() {
        let name = prompt('Enter name of new classroom:');
        this.classroom.push(new Classroom(name))
    }

// HERE IS THE CODE TO VIEW A CLASSROOM/CLASSROOMS

    viewClassroom() {
        let index = prompt('Enter the index of the classroom you want to view:');
        if (index > -1 && index < this.classroom.length) {
            this.selectedClassroom = this.classroom[index];
            let description = 'Classroom Name: ' + this.selectedClassroom.name + '\n';

            for( let i = 0; i < this.selectedClassroom.students.length; i++) {
                description += i = ') ' + this.selectedClassroom.students[i].name
                + ' - ' + this.selectedClassroom.students[i].grade + '\n';
            }

            let selection = this.showStudentMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createStudent();
                    break;
                case '2':
                    this.deleteStudent();
            }
        }
    }

// HERE IS THE CODE TO DELETE A CLASSROOM

    deleteClassroom(){
        let index = prompt('Enter the index of the classroom you wish to delete:');
        if (index > -1 && index < this.classroom.length) {
            this.classroom.splice(index, 1);
        }
    }

// THIS IS THE CODE NEEDED TO CREATE A STUDENT AND ASSIGN A GRADE IN THE STUDENT MENU OPTIONS

    createStudent() {
        let name = prompt('Enter name for new student:');
        let age = prompt('Enter age of new student:');
        this.selectedClassroom.student.push(new Student(name, age));
    }

// HERE IS THE CODE TO DELETE A STUDENT FROM THE STUDENT MENU 

    deleteStudent() {
        let index = prompt('Enter the index of the player you wish to delete:')
        if (index > -1 && index < this.selectedClassroom.students.length) {
            this.selectedClassroom.students.splice(index, 1);
        }
    }
}

let menu = new Menu();
menu.start();
