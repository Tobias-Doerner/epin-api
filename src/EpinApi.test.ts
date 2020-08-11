import { EpinApi } from './EpinApi'

test('test', async () => {
  const result = await new EpinApi().getLocations()
  expect(result.length).toBeGreaterThan(0)
})
