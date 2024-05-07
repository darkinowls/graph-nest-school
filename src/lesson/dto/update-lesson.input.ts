import {CreateLessonInput} from './create-lesson.input';
import {InputType, PartialType} from '@nestjs/graphql';

@InputType()
export class UpdateLessonInput extends PartialType(CreateLessonInput) {

}
