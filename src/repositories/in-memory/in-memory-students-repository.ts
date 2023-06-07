import { Student, Prisma } from "@prisma/client"
import { StudentsRepository } from "../student-respository"

export class InMemoryStudentsRepository implements StudentsRepository {
  public items: Student[] = []

  async findById(id: string): Promise<Student | null> {
    const user = this.items.find(item => item.id === id)

    if (!user) {
      return null
    }

    return user
  }

  async findByEmail(email: string): Promise<Student | null> {
    const student = this.items.find(item => item.email === email)

    if (!student) {
      return null
    }

    return student
  }

  async create(data: Prisma.StudentCreateInput): Promise<Student> {
    const Student = {
      id: "student-1",
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date()
    }

    this.items.push(Student)

    return Student
  }
}
