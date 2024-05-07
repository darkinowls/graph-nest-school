import {Module} from '@nestjs/common';
import {LessonService} from './lesson.service';
import {LessonResolver} from './lesson.resolver';
import {Lesson} from "./entities/lesson.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {StudentsModule} from "../students/students.module";

@Module({
    imports: [
        StudentsModule,
        TypeOrmModule.forFeature([Lesson]),
    ],
    providers: [
        LessonResolver,
        LessonService,],
})
export class LessonModule {
}
