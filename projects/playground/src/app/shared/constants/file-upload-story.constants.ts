import type { IFileUploadStoryArgs } from '@playground/interfaces/ifile-upload-story-args.interface';

export const FILE_UPLOAD_STORY_DEFAULTS: IFileUploadStoryArgs = {
  multiple: true,
  automatic: false,
  maxFiles: 5,
  maxFileSize: 10485760,
  unknownProgress: true
};

export const FILE_UPLOAD_REVIEW_SAMPLE_NAME =
  'quarterly-project-review-with-revised-budgets-timelines-and-stakeholder-feedback-for-the-final-approval-meeting.txt';
