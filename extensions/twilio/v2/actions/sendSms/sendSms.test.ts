import { sendSms } from './sendSms'

describe('Send SMS action', () => {
  const onComplete = jest.fn()
  const onError = jest.fn()

  beforeEach(() => {
    onComplete.mockClear()
    onError.mockClear()
  })

  test('Should call the onComplete callback', async () => {
    await sendSms.onActivityCreated(
      {
        pathway: {
          id: 'pathway-id',
          definition_id: 'pathway-definition-id',
        },
        activity: {
          id: 'activity-id',
        },
        patient: { id: 'test-patient' },
        fields: {
          message: 'Message content',
          recipient: '+32494000000',
        },
        settings: {
          accountSid: 'AC-accountSid',
          authToken: 'authToken',
          fromNumber: '+19144542596',
        },
      },
      onComplete,
      onError
    )
    expect(onComplete).toHaveBeenCalled()
    expect(onError).not.toHaveBeenCalled()
  })

  test('Should call the onError callback when there is no recipient', async () => {
    await sendSms.onActivityCreated(
      {
        pathway: {
          id: 'pathway-id',
          definition_id: 'pathway-definition-id',
        },
        activity: {
          id: 'activity-id',
        },
        patient: { id: 'test-patient' },
        fields: {
          message: 'Message content',
          recipient: '',
        },
        settings: {
          accountSid: 'AC-accountSid',
          authToken: 'authToken',
          fromNumber: '+19144542596',
        },
      },
      onComplete,
      onError
    )
    expect(onComplete).not.toHaveBeenCalled()
    expect(onError).toHaveBeenCalled()
  })

  test('Should call the onError callback when there is no message', async () => {
    await sendSms.onActivityCreated(
      {
        pathway: {
          id: 'pathway-id',
          definition_id: 'pathway-definition-id',
        },
        activity: {
          id: 'activity-id',
        },
        patient: { id: 'test-patient' },
        fields: {
          message: '',
          recipient: '+19144542596',
        },
        settings: {
          accountSid: 'AC-accountSid',
          authToken: 'authToken',
          fromNumber: '+19144542596',
        },
      },
      onComplete,
      onError
    )
    expect(onComplete).not.toHaveBeenCalled()
    expect(onError).toHaveBeenCalled()
  })
})