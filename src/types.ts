/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Goal {
  id: string;
  text: string;
  completed: boolean;
  category: 'DSA' | 'AI' | 'Aptitude' | 'Theory' | 'General';
}

export interface Resource {
  title: string;
  url: string;
  type: 'video' | 'book' | 'article';
  platform?: string;
}

export interface TheorySubject {
  title: string;
  recommendation?: string;
  resources: Resource[];
}

export interface DSAQuestion {
  title: string;
  links: string[];
}

export interface DSATopic {
  pattern: string;
  description: string;
  videos: Resource[];
  questions: DSAQuestion[];
}

export interface Trend {
  title: string;
  description: string;
  resources: Resource[];
}
