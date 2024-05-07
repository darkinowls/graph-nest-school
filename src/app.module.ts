import {Module} from "@nestjs/common";
import {GraphQLModule} from "@nestjs/graphql";
import {ApolloDriver, ApolloDriverConfig} from "@nestjs/apollo";
import {ConfigModule} from "@nestjs/config";
import {LessonModule} from './lesson/lesson.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import { StudentsModule } from './students/students.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                type: "mongodb",
                url: process.env.DATABASE_URL,
                synchronize: true,
                logging: true,
                entities: ["dist/**/*.entity.js"],
            }),
        }),

        GraphQLModule.forRoot<ApolloDriverConfig>(
            {
                driver: ApolloDriver,
                autoSchemaFile: true,
                introspection: true,
                playground: process.env.NODE_ENV !== "production",
            }
        ),
        LessonModule,
        StudentsModule
    ],
})
export class AppModule {
}
