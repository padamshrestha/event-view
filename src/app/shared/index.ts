export * from './config';
export * from './entity.service';
export * from './exception.service';
export * from './init-caps.pipe';
export * from './message.service';
export * from './filter-text';
export * from './filter-text/filter-text.service';
export * from './guard.service';
export * from './modal';
export * from './modal/modal.service';
export * from './nav';
export * from './rxjs-operators';
export * from './spinner';
export * from './spinner/spinner.service';
export * from './speaker-data/speaker.service';
export * from './speaker-data/speaker.model';
export * from './toast';
export * from './toast/toast.service';

import { EntityService } from './entity.service';
import { ExceptionService } from './exception.service';
import { FilterTextService } from './filter-text';
import { GuardService } from './guard.service';
import { InitCapsPipe } from './init-caps.pipe';
import { MessageService } from './message.service';
import { ModalService } from './modal';
import { SpinnerService } from './spinner';
import { ToastService } from './toast';

export const APP_SHARED_PROVIDERS = [
  EntityService,
  ExceptionService,
  FilterTextService,
  GuardService,
  InitCapsPipe,
  MessageService,
  ModalService,
  SpinnerService,
  ToastService
];
