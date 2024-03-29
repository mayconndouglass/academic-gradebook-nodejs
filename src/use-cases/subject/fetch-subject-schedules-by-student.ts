import { SubjectRepository } from "@/repositories/interfaces/subject-repository"

interface FetchSubjectScheduleByStudentUseCaseRequest {
  studentId: string
}

export class FetchSubjectScheduleByStudentUseCase {
  private subjectRepository: SubjectRepository

  constructor(subjectRepository: SubjectRepository) {
    this.subjectRepository = subjectRepository
  }

  async execute({
    studentId
  }: FetchSubjectScheduleByStudentUseCaseRequest) {
    const subjects = await this.subjectRepository.
      findManySubjectsWithSubjectScheduleByStudent(studentId)

    return {
      subjects
    }
  }
}
