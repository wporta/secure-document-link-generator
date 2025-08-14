import { Module } from '@nestjs/common';
import { LinkgeneratorService } from './linkgenerator.service';
import { LinkgeneratorController } from './linkgenerator.controller';

@Module({
  providers: [LinkgeneratorService],
  controllers: [LinkgeneratorController],
})
export class LinkgeneratorModule {}
