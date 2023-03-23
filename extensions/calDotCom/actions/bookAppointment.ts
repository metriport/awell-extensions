import { type DataPointDefinition, FieldType, type Action, type Field } from '../../../lib/types'
import { Category } from '../../../lib/types/marketplace'
import { type settings } from '../settings'

const fields = {
  calLink: {
    id: 'calLink',
    label: 'Cal Link',
    type: FieldType.STRING,
    required: true,
  },
} satisfies Record<string, Field>

const dataPoints = {
  bookingId: {
    key: 'bookingId',
    valueType: 'string',
  },
} satisfies Record<string, DataPointDefinition>

export const bookAppointment: Action<typeof fields, typeof settings> = {
  key: 'bookAppointment',
  title: 'Book appointment',
  description: 'Enable a stakeholder to book an appointment via Cal.com.',
  category: Category.SCHEDULING,
  fields,
  dataPoints,
  options: {
    stakeholders: {
      label: 'Stakeholder',
      mode: 'single'
    }
  },
  onActivityCreated: async (payload, onComplete, onError) => {
    const {
      fields: { calLink },
    } = payload
    if (calLink === undefined) {
      await onError({
        events: [
          {
            date: new Date().toISOString(),
            text: { en: 'Missing required fields (e.g. calLink)' },
          },
        ],
      })
    }
  },
}