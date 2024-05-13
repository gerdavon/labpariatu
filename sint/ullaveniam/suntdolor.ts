type Student = {
  id: number;
  name: string;
  // ... other student properties
};

class School {
  private students: Student[];

  constructor() {
    this.students = [];
  }

  // Method to add a student to the array
  public addStudent(student: Student): void {
    this.students.push(student);
  }

  // Optimized method to return the students array
  public getStudents(): Student[] {
    return this.students;
  }
}

// Usage
const school = new School();
// Add students using school.addStudent(...)
console.log(school.getStudents());
