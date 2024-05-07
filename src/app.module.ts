import { Module } from '@nestjs/common';
import {GraphQLModule} from "@nestjs/graphql";

@Module({
  imports: [
      GraphQLModule.forRootAsync(
            {
                useFactory: () => ({
                    autoSchemaFile: true
                })
            }
      )
  ],
})
export class AppModule {}
