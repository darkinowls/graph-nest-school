import {Injectable} from '@nestjs/common';
import {CreateLessonInput} from './dto/create-lesson.input';
import {UpdateLessonInput} from './dto/update-lesson.input';
import {Lesson} from "./entities/lesson.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {BadRequestException} from "@nestjs/common";

@Injectable()
export class LessonService {

    constructor(
        @InjectRepository(Lesson) private lr: Repository<Lesson>) {
    }

    async create(createLessonInput: CreateLessonInput) {
        try {
            const res = this.lr.create(createLessonInput);
            return await this.lr.save(res);
        } catch (e) {
            throw new BadRequestException("slug error");
        }
    }

    findAll() {
        return this.lr.find()
    }

    async findOne(slug: string): Promise<Lesson> {
        return this.lr.findOne(
            {
                where: {
                    slug
                }
            }
        );
    }

    update(slug: string, updateLessonInput: UpdateLessonInput) {
        return this.lr.update(slug, updateLessonInput)
    }

    remove(slug: string) {
        return this.lr.delete(slug)
    }

    async assignStudentsToLesson(lessonSlug: string, studentIds: string[]): Promise<Lesson> {
        const lesson = await this.lr.findOne({
            where: {
                slug: lessonSlug
            }
        })
        lesson.students = [...lesson.students || [], ...studentIds]
        return this.lr.save(lesson)
    }

}

