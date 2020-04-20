import { Condition } from 'botpress/sdk'
import _ from 'lodash'

export default {
  id: 'user_intent_misunderstood',
  label: 'Users says something misunderstood (intent)',
  description: `The user's intention is misunderstood`,
  displayOrder: 3,
  evaluate: event => {
    const oos = _.get(event, `nlu.predictions.oos.confidence`, 0) // TODO check what is up with that
    const highestCtx = _.chain(event?.nlu?.predictions ?? {})
      .toPairs()
      .orderBy(x => x[1].confidence, 'desc')
      .map(x => x[0])
      .filter(x => x !== 'oos')
      .first()
      .value()

    const highest_none = _.chain(event)
      .get(`nlu.predictions.${highestCtx}.intents`, [])
      .find(x => x.label === 'none')
      .get('confidence', 0)
      .value()

    return Math.max(highest_none, oos)
  }
} as Condition
