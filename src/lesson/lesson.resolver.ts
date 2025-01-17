import {Args, Mutation, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {LessonService} from './lesson.service';
import {Lesson} from './entities/lesson.entity';
import {CreateLessonInput} from './dto/create-lesson.input';
import {UpdateLessonInput} from './dto/update-lesson.input';
import {AssignLessonInput} from "./dto/assign-lesson.input";
import {StudentsService} from "../students/students.service";
import {Student} from "../students/entities/student.entity";

@Resolver(() => Lesson)
export class LessonResolver {


    constructor(
        private readonly st: StudentsService,
        private readonly lessonService: LessonService
    ) {
    }

    @Mutation(() => Lesson)
    createLesson(@Args('createLessonInput') createLessonInput: CreateLessonInput) {
        return this.lessonService.create(createLessonInput)
    }

    @Query(() => [Lesson], {name: 'lessons'})
    findAll() {
        return this.lessonService.findAll();
    }

    @Query(() => Lesson, {name: 'lesson'})
    findOne(@Args('slug', {type: () => String}) slug: string) {
        return this.lessonService.findOne(slug);
    }

    @Mutation(() => Lesson)
    updateLesson(@Args('updateLessonInput') updateLessonInput: UpdateLessonInput) {
        return this.lessonService.update(updateLessonInput.slug, updateLessonInput);
    }

    @Mutation(() => Lesson)
    removeLesson(@Args('slug', {type: () => String}) slug: string) {
        return this.lessonService.remove(slug);
    }

    @Mutation(() => Lesson)
    assignStudentsToLesson(
        @Args('assignLesson', {type: () => AssignLessonInput}) assign: AssignLessonInput,
    ) {
        return this.lessonService.assignStudentsToLesson(assign.lessonSlug, assign.studentIds);
    }

    @ResolveField()
    async students(@Parent() lesson: Lesson): Promise<Student[]> {
        if (!lesson.students) {
            return [];
        }
        return await this.st.getManyStudents(lesson.students)
    }
}
