import {Injectable} from '@nestjs/common';
import {CreateStudentInput} from './dto/create-student.input';
import {UpdateStudentInput} from './dto/update-student.input';
import {Student} from "./entities/student.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {v4} from "uuid";

@Injectable()
export class StudentsService {

    constructor(@InjectRepository(Student) private sr: Repository<Student>) {
    }

    async create(createStudentInput: CreateStudentInput) {
        const create = this.sr.create({
            ...createStudentInput,
            id: v4()
        });

        return this.sr.save(create);
    }

    findAll() {
        return this.sr.find();
    }

    findOne(id: string) {
        return this.sr.findOne({
            where: {
                id
            }
        });
    }

    update(id: string, updateStudentInput: UpdateStudentInput) {
        return this.sr.update(id, updateStudentInput);
    }

    remove(id: string) {
        return this.sr.delete(id);
    }

    async getManyStudents(studentsIds: string[]): Promise<Student[]> {
        return await this.sr.find({
            where: {
                id: {
                    // @ts-expect-error TS2353
                    $in: studentsIds
                }
            }
        })
    }

}
