import DropboxSignSdk from '../../../common/sdk/dropboxSignSdk'

import { getSignatureRequest } from '..'

jest.mock('../../../common/sdk/dropboxSignSdk')

const mockFn = jest
  .spyOn(DropboxSignSdk.SignatureRequestApi.prototype, 'signatureRequestGet')
  .mockImplementation(async (signatureRequestId, options) => {
    console.log(
      'mocked DropboxSignSdk.SignatureRequestApi.signatureRequestGet',
      { signatureRequestId, options }
    )

    return {
      body: {
        signatureRequest: {
          title: 'test-title',
        },
      },
      response: {
        data: {},
        status: 200,
        statusText: 'success',
        headers: {},
        config: {},
      },
    }
  })

describe('Get signature request action', () => {
  const onComplete = jest.fn()
  const onError = jest.fn()

  beforeEach(() => {
    onComplete.mockClear()
    onError.mockClear()
  })

  test('Should call the onComplete callback', async () => {
    await getSignatureRequest.onActivityCreated(
      {
        activity: {
          id: 'activity-id',
        },
        patient: { id: 'test-patient' },
        fields: {
          signatureRequestId: '123',
        },
        settings: {
          apiKey: 'apiKey',
          clientId: 'client-id',
        },
      },
      onComplete,
      jest.fn()
    )

    expect(mockFn).toHaveBeenCalled()
    expect(onComplete).toHaveBeenCalled()
    expect(onError).not.toHaveBeenCalled()
  })
})
