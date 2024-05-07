import {Module} from '@nestjs/common';
import {LessonService} from './lesson.service';
import {LessonResolver} from './lesson.resolver';
import {Lesson} from "./entities/lesson.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([Lesson])],
    providers: [
        LessonResolver, LessonService],
})
export class LessonModule {
}
