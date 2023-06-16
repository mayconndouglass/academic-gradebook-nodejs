import { Prisma, Subject } from "@prisma/client"

export interface SubjectRepository {
  create(data: Prisma.SubjectUncheckedCreateInput): Promise<Subject>
  findByName(name: string): Promise<Subject | null>
  findManyByStudentId(studentId: string): Promise<Subject[]>
  updateName(id: string, name: string): Promise<Subject>
}
