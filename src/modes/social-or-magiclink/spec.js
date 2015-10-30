import { Mode } from '../index';
import AskSocialNetworkOrEmail from '../../cred/or/ask_social_network_or_email';

export default class SocialOrMagiclink extends Mode {

  constructor() {
    super("socialOrMagiclink");
  }

  processOpenOptions(options) {
    const { connections } = options;
    if (!Array.isArray(connections) || connections.length === 0) {
      throw new Error("The `connections` option array needs to be provided with at least one connection.");
    }

    return options;
  }

  render(lock) {
    return new AskSocialNetworkOrEmail(lock);
  }

}
