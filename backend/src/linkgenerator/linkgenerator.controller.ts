import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { LinkgeneratorService } from './linkgenerator.service';

@Controller('api')
export class LinkgeneratorController {
  constructor(private linkGeneratorService: LinkgeneratorService) {}

  @Post('generate-link')
  generateLink(@Body() documentName: string) {
    return this.linkGeneratorService.generateLink(documentName);
  }

  @Get('docs/view/:token')
  viewDocument(@Param('token') token: string) {
    return this.linkGeneratorService.viewDocument(token);
  }
}
