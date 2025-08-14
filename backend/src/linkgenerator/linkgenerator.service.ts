import { Injectable, NotFoundException } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class LinkgeneratorService {
  RANDOM_BYTES_SIZE = 6;

  private links = new Map<string, string>();

  generateLink(documentName: string) {
    if (!documentName) {
      return { error: 'Document is required.' };
    }

    const token = crypto.randomBytes(this.RANDOM_BYTES_SIZE).toString('hex');

    this.links.set(token, documentName);

    const link = `http://localhost:3000/docs/view/${token}`;

    return { link };
  }

  viewDocument(token: string) {
    if (!token) {
      return { error: 'Token is required.' };
    }

    const documentName = this.links.get(token);

    if (!documentName) {
      throw new NotFoundException({ error: 'Token not found' });
    }

    return documentName;
  }
}
