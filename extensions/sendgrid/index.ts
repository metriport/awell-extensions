import { type Extension } from '@awell-health/extensions-core'
import { AuthorType, Category } from '@awell-health/extensions-core'
import {
  sendEmail,
  sendEmailWithTemplate,
  addOrUpdateContact,
} from './v1/actions'
import { settings } from './settings'

export const Sendgrid: Extension = {
  key: 'sendgrid',
  title: 'Sendgrid',
  icon_url: 'https://www.vectorlogo.zone/logos/sendgrid/sendgrid-icon.svg',
  description:
    'SendGrid is a cloud-based email delivery platform that provides services for sending and managing email campaigns, transactional emails, and other types of messages.',
  category: Category.COMMUNICATION,
  author: {
    authorType: AuthorType.AWELL,
  },
  actions: {
    sendEmail,
    sendEmailWithTemplate,
    addOrUpdateContact,
  },
  settings,
}
