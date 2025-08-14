import { Module } from '@nestjs/common';
import { LinkgeneratorModule } from './linkgenerator/linkgenerator.module';

@Module({
  imports: [LinkgeneratorModule],
})
export class AppModule {}
